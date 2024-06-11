import React, {useState} from "react";


function Appointment(){

  const [appointmentForm, setAppointmentForm] = useState({
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    message:''
  })
  const [buttonStyle, setButtonStyle] = useState({
    width: '130px',
    backgroundColor: '#928F8A',
    color: 'white',
    marginBottom: '5px'
  });

  const [isCorrect, setIsCorrect] = useState(false);

  function handleClick(event){
    console.log("WORKED")
    setIsCorrect(true)
    setAppointmentForm({
      firstname:'',
    lastname:'',
    email:'',
    phone:'',
    message:''
    })
    event.preventDefault();
  }

function handleChange(event){
  const {name, value} = event.target;

  setAppointmentForm((prevForm)=>{
    return {
      ...prevForm,
      [name] : value
    }
  })
}

  function mouseOver(){
    setButtonStyle((prevColor)=>{
     return{...prevColor,
    backgroundColor:'#64625F'} 

    })
  }

  function mouseOut(){
    setButtonStyle((prevColor)=>{
      return{...prevColor,
     backgroundColor:'#928F8A'} 
 
     })
  }
    return <div className="Appointment">
    <div style={{textAlign:'center', marginBottom:'30px'}}>
        <h2 style={{marginBottom:'30px'}}>Book an Appointment</h2>
        </div>
        <form className="AppointmentContainer">
        <div className="container containerS col-md-7 col-lg-8">
        <div class="col-sm-6 w-75">
              <label for="firstName" class="form-label">First name</label>
              <input name="firstname" type="text" class="form-control w-100" id="firstName" placeholder="First Name" onChange={handleChange} value={appointmentForm.firstname}required/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div class="col-sm-6 w-75">
              <label for="lastName" class="form-label">Last name</label>
              <input name="lastname" type="text" class="form-control w-100" id="lastName" placeholder="Last Name" onChange={handleChange} value={appointmentForm.lastname} required/>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            
            </div>

            <div className="container containerS col-md-7 col-lg-8 my-5">
        <div class="col-sm-6 w-75">
              <label for="email" class="form-label">Email Address</label>
              <input name="email" type="text" class="form-control w-100" id="email" placeholder="Email" onChange={handleChange} value={appointmentForm.email} required/>
              <div class="invalid-feedback">
                Valid Email is required.
              </div>
            </div>
            <div class="col-sm-6 w-75">
              <label for="phone" class="form-label">Phone Number</label>
              <input name="phone" type="number" class="form-control w-100" id="phone" placeholder="Mobile" onChange={handleChange} value={appointmentForm.phone} required/>
              <div class="invalid-feedback">
                Valid Number is required.
              </div>
            </div>
            </div>
            <div className="container containerS col-md-7 col-lg-8 my-5">
            <div class="col-sm-6 w-75">
              <label for="message" class="form-label">Message</label>
              <textarea name="message" type="text" class="form-control w-100" id="message" placeholder="Message" onChange={handleChange} value={appointmentForm.message} cols={50} rows={8} required/>
              <div class="invalid-feedback">
                Please type a Message
              </div>
            </div>
            </div>
            {isCorrect?<div class="alert alert-success w-75 mx-auto" role="alert">
  Success, an email has been sent, We will contact you soon!
</div>:''}
<div style={{textAlign:'center'}}>
            <input class="btn submitBtn" style={buttonStyle}type="submit" onClick={handleClick} onMouseOver={mouseOver} onMouseOut={mouseOut} value="Submit" disabled={appointmentForm.firstname.length===0||appointmentForm.lastname.length===0||appointmentForm.email.length===0||appointmentForm.phone.length===0||appointmentForm.message.length===0}></input>
            </div> </form>
    </div>
}


export default Appointment;
