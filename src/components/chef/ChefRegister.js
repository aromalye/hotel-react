import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function ChefRegister() {

    const navigate = useNavigate()

    const [data,setData] = useState({
        chefName:"",
        phoneNo:"",
        email:"",
        gender:"",
        workExperience:"",
        username:"",
        password:"",
        confirmPassword:"",
        address:"",
      });

      const[chefNameErr, setchefNameErr] = useState({});
      const[phoneNoErr, setphoneNoErr] = useState({});
      const[emailErr, setemailErr] = useState({});
      const[genderErr, setgenderErr] = useState({});
      const[workExperienceErr, setworkExperienceErr] = useState({});
      const[usernameErr, setusernameErr] = useState({});
      const[passwordErr, setpasswordErr] = useState({});
      const[confirmPasswordErr, setconfirmPasswordErr] = useState({});
      const[addressErr, setaddressErr] = useState({});

      const formValidation = ()=>{
        const chefNameErr={}
        const phoneNoErr={}
        const emailErr={} 
        const genderErr={} 
        const workExperienceErr={} 
        const usernameErr={}
        const passwordErr={}
        const confirmPasswordErr={}
        const addressErr={}

        let isValid = true

        if (!data.chefName){
            chefNameErr.short_fname = '*   chefname is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.phoneNo){
            phoneNoErr.short_fname = '*   phoneNo is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.email){
            emailErr.short_fname = '*   email is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.gender){
            genderErr.short_fname = '*   gender is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.workExperience){
            workExperienceErr.short_fname = '*  workexperienece is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.username){
            usernameErr.short_fname = '*   username is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.password){
            passwordErr.short_fname = '*  password is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }


        if (!data.confirmPassword){
            confirmPasswordErr.short_fname = '*  confirmPassword is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        
        if (!data.address){
            addressErr.short_fname = '* address is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

 

    setchefNameErr(chefNameErr)
    setphoneNoErr(phoneNoErr)
    setemailErr(emailErr)
    setgenderErr(genderErr)
    setworkExperienceErr(workExperienceErr)
    setusernameErr(usernameErr)
    setpasswordErr(passwordErr)
    setconfirmPasswordErr(confirmPasswordErr)
    setaddressErr(addressErr)

    return isValid
}

function submit(e) {
    if(data.password===data.confirmPassword){

    e.preventDefault();
    const isValid = formValidation() 
    if(isValid) {
    console.log("data", data)
    try {
        const url = "http://localhost:8080/hotelbooking/insertChef";
        const config = { 'content-type': 'application/json' };
        // const response = axios.post(url, data, config);
        // console.log("respose data", response.data);
        axios.post(url, data, config).then((res) => {
            console.log(res.data, "data");
            navigate("/chef/signin")
          })
    } catch (error) {
        console.error(error);
    }
    }
}
    else{
        alert("Please check the password");
    }
  
    }


    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }

    return(
        <div>
            <Form className='form' onSubmit={(e)=>submit(e)}>
            <h5 className='text-center mb-5'>Chef Sign up</h5>
            <Row>
            <Col>
            <Form.Group value={data.email} onChange={(e) => handle(e) } className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {Object.keys(emailErr).map((key)=>{
            return <div style={{color:'red'}} >{emailErr[key]}</div> })}
            </Form.Group>

            <Form.Group value={data.chefName} onChange={(e) => handle(e) } className="mb-3" controlId="chefName">
                <Form.Label>Chef Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Staff name" />
            {Object.keys(chefNameErr).map((key)=>{
            return <div style={{color:'red'}} >{chefNameErr[key]}</div> })}
            </Form.Group>

            <Form.Group value={data.username} onChange={(e) => handle(e) } className="mb-3" controlId="username">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
                {Object.keys(usernameErr).map((key)=>{
            return <div style={{color:'red'}} >{usernameErr[key]}</div> })}
            </Form.Group>

            <Form.Group value={data.password} onChange={(e) => handle(e) } className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                {Object.keys(passwordErr).map((key)=>{
            return <div style={{color:'red'}} >{passwordErr[key]}</div> })}

            </Form.Group>

            <Form.Group value={data.confirmPassword} onChange={(e) => handle(e) } className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder=" Confirm Password" />
                {Object.keys(confirmPasswordErr).map((key)=>{
            return <div style={{color:'red'}} >{confirmPasswordErr[key]}</div> })}
            </Form.Group>

            </Col>

            <Col>

            <Form.Group value={data.phoneNo} onChange={(e) => handle(e) } className="mb-3" controlId="phoneNo">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phoneNo" placeholder="Enter Phone number" />
                {Object.keys(phoneNoErr).map((key)=>{
            return <div style={{color:'red'}} >{phoneNoErr[key]}</div> })}
            </Form.Group>
            {/* 
            <Form.Select className='my-3' aria-label="Default select example">
            <option>ID type</option>
            <option value="1">Adhaar </option>
            <option value="2">PAN </option>
            <option value="3">Driving Licence</option>
            </Form.Select> */}

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ID Number</Form.Label>
                <Form.Control type="text" placeholder=" Enter ID number" />
            </Form.Group> */}

            <div value={data.gender} onChange={(e) => handle(e) } className='mb-3'>
                <Form.Check
                    type="radio"
                    label="Male"
                    value="male"
                    name="gender"
                    id="gender"
                /> 
                <Form.Check
                    type="radio"
                    label="Female"
                    value="female"
                    name="gender"
                    id="gender"
                /> 
                 {Object.keys(genderErr).map((key)=>{
            return <div style={{color:'red'}} >{genderErr[key]}</div> })}
            </div>

            <Form.Group value={data.address} onChange={(e) => handle(e) } className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3}  />
                {Object.keys(addressErr).map((key)=>{
            return <div style={{color:'red'}} >{addressErr[key]}</div> })}
            </Form.Group>

            <Form.Group value={data.workExperience} onChange={(e) => handle(e) } className="mb-3" controlId="workExperience">
                <Form.Label>Work Experience</Form.Label>
                <Form.Control as="textarea" rows={3}  />
                {Object.keys(workExperienceErr).map((key)=>{
            return <div style={{color:'red'}} >{workExperienceErr[key]}</div> })}
            </Form.Group>

            </Col>
            </Row>
            <Button size="sm" variant="light" type="submit">
                Sign up
            </Button>
            
            </Form>
        </div>
    )
}
export default ChefRegister;