import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import axios from 'axios';
import "../register.css"
import { useNavigate } from 'react-router-dom';
// import bgimg from "../../assets/images/photo-1558976825-6b1b03a03719.webp"





function Register() {

    const [data,setData] = useState({
        customerName:"",
        phoneNo:"",
        email:"",
        idProofType:"",
        idProofNo:"",
        gender:"",
        address:"",
      });
      
    const navigate = useNavigate()


    // for Validation
    const[customerNameErr, setcustomerNameErr] = useState({});
    const[phoneNoErr, setphoneNoErr] = useState({});
    const[emailErr, setemailErr] = useState({});
    const[idProofTypeErr, setidProofTypeErr] = useState({});
    const[idProofNoErr, setidProofNoErr] = useState({});
    const[genderErr, setgenderErr] = useState({});
    const[addressErr, setaddressErr] = useState({});


    const formValidation = ()=>{
        const customerNameErr={}
        const phoneNoErr={} 
        const emailErr={}
        const idProofTypeErr={}
        const idProofNoErr={}
        const genderErr={}
        const addressErr={}

        let isValid = true

        if (!data.customerName){
            customerNameErr.short_fname = '* customername is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.phoneNo){
            phoneNoErr.short_fname = '* phoneNo is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.email){
            emailErr.short_fname = '* email is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.idProofType){
            idProofTypeErr.short_fname = '* idprooftype is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.idProofNo){
            idProofNoErr.short_fname = '* idproofNo is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.gender){
            genderErr.short_fname = '* email is a required field'
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

        setcustomerNameErr(customerNameErr)
        setphoneNoErr(phoneNoErr)
        setemailErr(emailErr)
        setidProofTypeErr(idProofTypeErr)
        setidProofNoErr(idProofNoErr)
        setgenderErr(genderErr)
        setaddressErr(addressErr)


        return isValid
    }


    function submit(e) {
        e.preventDefault();
        const isValid = formValidation() 
        if(isValid) {
            console.log("data", data)
            try {
                const url = "http://localhost:8080/hotelbooking/insertCustomer";
                const config = { 'content-type': 'application/json' };
                // const response = axios.post(url, data, config);
                // console.log("respose data", response.data);
                axios.post(url, data, config).then((res) => {
                    console.log(res.data, "data");
                    if(res.status === 200){
                        localStorage.setItem('customer', res.data.customerName)
                        localStorage.setItem('customer_id', res.data.customerId)
                        navigate("/customer")
                        console.log("ddooone")
                    }
                    })
            } catch (error) {
                console.error(error);
            }
        }
  
    
}

    function  handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
        
    }



    return(
        <div>
            <Form className='form' onSubmit={(e)=>submit(e)} >
            <h5 className='text-center mb-5'>Customer Sign up</h5>
            <Row>
            <Col>
            <Form.Group value={data.email} onChange={(e) => handle(e) } className="mb-3" controlId="email">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {Object.keys(emailErr).map((key)=>{
            return <div style={{color:'red'}} >{emailErr[key]}</div> })}
            </Form.Group>

            <Form.Group value={data.customerName} onChange={(e) => handle(e) } className="mb-3" controlId="customerName">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control type="text" placeholder="Enter customername" />
                {Object.keys(customerNameErr).map((key)=>{
            return <div style={{color:'red'}} >{customerNameErr[key]}</div> })}
            </Form.Group>

            </Col>

            <Col>

            <Form.Group value={data.phoneNo} onChange={(e) => handle(e) } className="mb-3" controlId="phoneNo">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phoneNo" placeholder="Enter Phone number" />
                {Object.keys(phoneNoErr).map((key)=>{
            return <div style={{color:'red'}} >{phoneNoErr[key]}</div> })}
            </Form.Group>

            <Form.Group className="mb-3" controlId="idProofType">
                <Form.Select  value={data.idProofType} onChange={(e) => handle(e) } className='my-3' aria-label="Default select example">
                <option>ID Proof Type</option>
                <option value="adhaar" >Adhaar </option>
                <option value="pan" >PAN </option>
                <option value="driving licence">Driving Licence</option>
                </Form.Select>
                {Object.keys(idProofTypeErr).map((key)=>{
            return <div style={{color:'red'}} >{idProofTypeErr[key]}</div> })}
            </Form.Group>

            <Form.Group value={data.idProofNo} onChange={(e) => handle(e) } className="mb-3" controlId="idProofNo">
                <Form.Label>ID Proof Number</Form.Label>
                <Form.Control type="text" placeholder=" Enter ID number" />
                {Object.keys(idProofNoErr).map((key)=>{
            return <div style={{color:'red'}} >{idProofNoErr[key]}</div> })}
            </Form.Group>

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

            </Col>
            </Row>
            <Button size="sm" variant="light" type="submit">
                Sign up
            </Button>
            
            </Form>
        </div>
    )
}
export default Register;