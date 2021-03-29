import { useState } from "react"
import { useSelector } from "react-redux"
import './screen.css'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"

import {Bar, Doughnut} from 'react-chartjs-2'
export default function MainScreen() {
    



  // getting data from redux store
let mobiles=useSelector((data)=>{
GettingCount(getYears([...data.mobile]),[...data.mobile])

return data.mobile
})





function GettingCount(years,value) {
let arr=[0,0,0,0];
let u = 0;
for(let x = 0 ; x <years.length;x++){
for(let y=0; y<value.length;y++){
if(years[x]===value[y].year){
arr[u]=arr[u]+1;
}
}
u++;
}
return arr;
}


function gettingCountOnbrand(brand,value) {
  let arr=[0,0,0,0,0];
let u = 0;
for(let x = 0 ; x <brand.length;x++){
for(let y=0; y<value.length;y++){
if(brand[x]===value[y].brand){
arr[u]=arr[u]+1;
}
}
u++;
}
return arr;
}



// getting manufacture year
function getYears(arr) {
  let years=[];
  arr.forEach((info,index)=>{
    years[index]=info.year
  })
  return  Array.from(new Set(years))  
}


// getting kind of brands
function gettingBrand(arr) {
  let brand=[];
  
  arr.forEach((info,index)=>{
    brand[index]=info.brand
  })
  return  Array.from(new Set(brand)) 
}



let [valuesSearch , setValuesSearch]=useState('')
let [items,setItems]=useState([...mobiles])
let [info , setInfo]=useState('')



// function to search by brand or model
function HandleSearch() {
  let SearchedItems = mobiles.filter((value) => {
    return value.brand === valuesSearch || value.model === valuesSearch;
  });
  setItems(SearchedItems);
  setInfo('')
}



// function to filter data depending on value of select input
function HandleSelect(v) {
  let selectedItems = mobiles.filter((data) => {
    return data.brand === v.target.value;
  });
  setInfo('')
  setItems(selectedItems);
}



// this function to display the information of mobile
// it takes object as a paramter 
// the pass it into state hooks which will display the info
function DisplayInfo(infoMobile) {
 setInfo(infoMobile)  
}


const dataBarChart ={
labels:getYears(mobiles),
datasets:[
  {
    label:'manufacture',
    data:GettingCount(getYears(mobiles),mobiles)
  }
]
}


const dataDontChart={
  labels:gettingBrand(mobiles),
datasets:[
  {
    label:'Brand',
    data:gettingCountOnbrand(gettingBrand(mobiles),mobiles)
  }
]
}


const options={
  title:{
    display:true,
    text:'manufacture year and mobile'
  },
  scales:{
    yAxes:[{ticks:{min:0,max:8}}]
  }
}


const options2={
  title:{
    display:true,
    text:'brand and mobile'
  },
  scales:{
    yAxes:[{ticks:{min:0,max:8}}]
  }
}

return(<>

<div className='row'>
    <div className='col-lg-12'>
        <h1>Mobile Shop Application</h1>
    </div>
</div>

<div className='row'>
<div className='col-lg-8'>
<div className='row'>

<div className="input-group mb-3 col-lg-5">
  <input type="search" className="form-control" onChange={(v)=>setValuesSearch(v.target.value)}  value={valuesSearch}  name='search' placeholder="Search by brand or model"></input>
  <button className="btn btn-outline-light" onClick={HandleSearch} type="button">Search</button>
</div>

<div className='input-group mb-3 col-lg-3'>
<label>Brand :</label>
<select  onChange={HandleSelect} className="control-form form-select">
  <option defaultValue='sony'>Sony</option>
  <option value="Apple">Apple</option>
  <option value="Nokia">Nokia</option>
  <option value="Samsung">Samsung</option>
  <option value="Lg">Lg</option>
</select>
</div>
<div className='col-lg-4'>
<Link to='/add' className='btn btn-light' >Add New Mobile</Link>
</div>
</div>
<div className='row m'>
<div className='col-lg-12 mobiles'>
    <table>
        <thead>
            <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
            </tr>
        </thead>
<tbody>
    
{items&&items.map((phone,index)=>{
return(<>
<tr key={index} onClick={()=>DisplayInfo(phone)} >
<td>{phone.brand}</td>
<td>{phone.model}</td>
<td>{phone.year}</td>
</tr>
</>)
})}
</tbody>
    </table>
</div>
</div>
<div className='row m'>
<div className='col-lg-12'>
{info&&<Card style={{ width: '70%' }}>
  <Card.Body>
    <Card.Title>{info.model}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">brand:{info.brand}</Card.Subtitle>
    <Card.Text>
    <ListGroup>
  <ListGroup.Item>manufacture year :{info.year}</ListGroup.Item>
  <ListGroup.Item>memory: {info.memory}</ListGroup.Item>
  <ListGroup.Item>color: {info.color}</ListGroup.Item>
  <ListGroup.Item>screen: {info.screen}</ListGroup.Item>
</ListGroup>
<ListGroup>
{info.dualSIM&&<ListGroup.Item>Daul SIM</ListGroup.Item>}
{info.fourg&&<ListGroup.Item>4G</ListGroup.Item>}
  {info.NFC&&<ListGroup.Item>NFC</ListGroup.Item>}
</ListGroup>



    </Card.Text>
  </Card.Body>
</Card>}

</div>
</div>



</div>
<div className='col-lg-4 charts'>

<h1>Charts</h1>
 <Bar data={dataBarChart} options={options} ></Bar>
<Doughnut data={dataDontChart} options={options2}  ></Doughnut>
</div>
</div>

</>)
}