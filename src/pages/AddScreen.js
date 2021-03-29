import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { AddModileApp } from "../store/action"

export default function AddScreen() {
    

let [MobileInfo, setMobileInfo]=useState({

model:'',
year:'',
brand:'',
memory:'16GB',
color:'',
dualSIM:false,
fourg:false,
screen:'',
NFC:false,
})


function handleInput(v){
if(v.target.name==='year'&& !isFinite(v.target.value)){
    alert('please Enter number !!')
}else{
  setMobileInfo({
        ...MobileInfo,
        [v.target.name]:v.target.value  
    })
}
}


function HandleCheckbox(v) {
setMobileInfo({
...MobileInfo,
[v.target.name]:v.target.checked
})

}


function HandleReset() {

history.push('/')

}

let dispatch=useDispatch();
let history=useHistory();
function handleSubmit(v) {
    v.preventDefault();
    console.log(MobileInfo)
dispatch(AddModileApp(MobileInfo))
history.push('/')
}

return(<>
<div className='row'>
<div className='col-lg-12'>
<form onSubmit={handleSubmit} onReset={HandleReset} >

<input onChange={handleInput}   value={MobileInfo.model} required type='text' name='model' placeholder='Sumsang S6' className='form-control'></input>
<input  onChange={handleInput}  value={MobileInfo.year} required type='text' name='year' placeholder='2020' className='form-control'></input>
<select onChange={handleInput} name='brand'  className="form-control form-control-lg">
  <option value='Nokia'>Nokia</option>
  <option value='Lg'>Lg</option>
  <option value='Apple'>Apple</option>
  <option value='Samsung'>Samsung</option>
  <option value='Sony'>Sony</option>
</select>


<select onChange={handleInput} name='memory'  className="form-control form-control-lg">
  <option defaultValue='16GB'>16GB</option>
  <option value='32GB'>32GB</option>
  <option value='64GB'>64GB</option>
  <option value='128GB'>128GB</option>
</select>

<div className='row m'>

<div className='col-lg-4'>

<div className="form-check">
  <input className="form-check-input" name='dualSIM' onChange={HandleCheckbox}  type="checkbox"  id="defaultCheck1"></input>
  <label className="form-check-label"        htmlFor="defaultCh">
    Daul SIM
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" name='NFC'  onChange={HandleCheckbox}      type="checkbox"  id="Check3"></input>
  <label className="form-check-label"        htmlFor="Check3">
    NFC
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" name='fourg' onChange={HandleCheckbox}      type="checkbox"  id="Check2"></input>
  <label className="form-check-label"        htmlFor="Check2">
    4G
  </label>
</div>

</div>
<div className='col-lg-4'>
<h5>Screen</h5>
<div className="form-check">
  <input className="form-check-input" onChange={handleInput}  type="radio" name="screen" id="Radios2" value="4"></input>
  <label className="form-check-label"   htmlFor="Radios2">
     4
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" onChange={handleInput} type="radio" name="screen" id="Radios3" value="5"></input>
  <label className="form-check-label" htmlFor="Radios3">
     5
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" onChange={handleInput} type="radio" name="screen" id="Radios4" value="6"></input>
  <label className="form-check-label" htmlFor="Radios4">
     6
  </label>
</div>
</div>

<div className='col-lg-4'>
<h5>Color</h5>
<div className="form-check">
  <input className="form-check-input" onChange={handleInput} type="radio" name="color" id="Radios5" value="black"></input>
  <label className="form-check-label" htmlFor="Radios5">
     black
     </label>
</div>
<div className="form-check">
  <input className="form-check-input" onChange={handleInput} type="radio" name="color" id="Radios6" value="white"></input>
  <label className="form-check-label" htmlFor="Radios6">
    white
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" onChange={handleInput} type="radio" name="color" id="Radios7" value="gold"></input>
  <label className="form-check-label" htmlFor="Radios7">
     Gold
  </label>
</div>
</div>

</div>



<div>
    <button type='submit' className='btn btn-primary'> Save</button>
    <button type='reset'  className='btn btn-secondary'> Back</button>
</div>

</form>


</div>
</div>
</>)
}