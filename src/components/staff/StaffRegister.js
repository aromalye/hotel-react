import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../register.css"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



function StaffRegister() {

    const navigate = useNavigate()

    const [data,setData] = useState({
        staffName:"",
        phoneNo:"",
        idProofType:"",
        gender:"",
        idProofNo:"",
        address: "",
        password:"",
        username:"",
        status:"active",
      })

    // for validation
    const[usernameErr, setNameErr] = useState({})
    const[staffnameErr, setStaffNameErr] = useState({})
    const[idtypeErr, setIDTypeErr] = useState({})
    const[genderErr, setGenderErr] = useState({})
    const[idNoErr, setIDNoErr] = useState({})
    const[emailErr, setEmailErr] = useState({})
    const[phoneNoErr, setPhoneNoErr] = useState({})
    const[addressErr, setAddressErr] = useState({})
    const[passwordErr, setPasswordErr] = useState({})
    const[confirmPasswordErr, setConfirmPasswordErr] = useState({})






    const formValidation = () => {

        const usernameErr={}
        const idtypeErr={}
        const genderErr ={}
        const idNoErr ={}
        const emailErr ={}
        const phoneNoErr ={}
        const addressErr ={}
        const passwordErr ={}
        const confirmPasswordErr ={}
        const staffnameErr = {}




        let isValid = true

        if (data.password !== data.confirmPassword){
            passwordErr.short_fname = '* password mis match'
            confirmPasswordErr.short_fname = '* password mis match'

            isValid = false
            console.log("doneeee")
        }

        if (!data.staffName){
            staffnameErr.short_fname = '* StaffName is a requires field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.username){
            usernameErr.short_fname = '* StaffName is a requires field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.phoneNo){
            phoneNoErr.short_fname = '* Phone no is a requires field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.password){
            passwordErr.short_fname = '* password is a requires field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.confirmPassword){
            confirmPasswordErr.short_fname = '* confirm password is a requires field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.idProofNo){
            idNoErr.short_fname = '* Id nymber is a requires field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.address){
            addressErr.short_fname = '* Address is a requires field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        
        if (!data.email){
            emailErr.short_fname = '* email is a requires field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.idProofType){
            idtypeErr.short_fname = '* ID Type is a requires field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.gender){
            genderErr.short_fname = '* Gender is a requires field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        setNameErr(usernameErr)
        setIDTypeErr(idtypeErr)
        setGenderErr(genderErr)
        setIDNoErr(idNoErr)
        setEmailErr(emailErr)
        setPhoneNoErr(phoneNoErr)
        setAddressErr(addressErr)
        setPasswordErr(passwordErr)
        setConfirmPasswordErr(confirmPasswordErr)
        setStaffNameErr(staffnameErr)


        return isValid
        

    }


    function submit(e) {
        e.preventDefault();
        const isValid = formValidation()
        if (isValid) {
            console.log(data)
            axios.post('http://localhost:8080/hotelbooking/insertStaff', data)
            .then((response) => {
                console.log(response.data, "fff" )
                if (response.status === 200) {
                    navigate("/staff/signin")
                }
            })
            
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
            <Form className='form' onSubmit={(e)=>submit(e)} >
            <h5 className='text-center mb-5'>Staff Sign up</h5>
            <Row>
            <Col>
            <Form.Group value={data.email} onChange={(e) => handle(e) } className="mb-3" controlId="email">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            {Object.keys(emailErr).map((key)=>{
            return <div style={{color:'red'}} >{emailErr[key]}</div> })}
            </Form.Group>

            <Form.Group value={data.staffName} onChange={(e) => handle(e) } className="mb-3" controlId="staffName">
                <Form.Label>Staff Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Staff name" />
            {Object.keys(staffnameErr).map((key)=>{
            return <div style={{color:'red'}} >{staffnameErr[key]}</div> })}
            </Form.Group>

            <Form.Group value={data.username} onChange={(e) => handle(e) } className="mb-3" controlId="username">
                <Form.Label>user Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Staff name" />
            {Object.keys(usernameErr).map((key)=>{
            return <div style={{color:'red'}} >{usernameErr[key]}</div> })}
            </Form.Group>


            <Form.Group value={data.phoneNo} onChange={(e) => handle(e) } className="mb-3" controlId="phoneNo">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone number" />
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
                {Object.keys(idtypeErr).map((key)=>{
            return <div style={{color:'red'}} >{idtypeErr[key]}</div> })}
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

            {/* <Form.Group className="mb-3" controlId="iDType">
                <Form.Select  value={data.iDType} onChange={(e) => handle(e) } className='my-3' aria-label="Default select example">
                <option>ID type</option>
                <option value="adhaar" >Adhaar </option>
                <option value="pan" >PAN </option>
                <option value="driving licence">Driving Licence</option>
                </Form.Select>
                {Object.keys(idtypeErr).map((key)=>{
            return <div style={{color:'red'}} >{idtypeErr[key]}</div> })}
            </Form.Group> */}

            <Form.Group value={data.idProofNo} onChange={(e) => handle(e) } className="mb-3" controlId="idProofNo">
                <Form.Label>ID Number</Form.Label>
                <Form.Control type="text" placeholder=" Enter ID number" />
                {Object.keys(idNoErr).map((key)=>{
            return <div style={{color:'red'}} >{idNoErr[key]}</div> })}
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

            <p>Already have an Account? <Link to="/staff/signin"> Sign in</Link></p>


            </Col>
            </Row>


            <Button size="sm" variant="light" type="submit">
                Sign up
            </Button>
            
            </Form>
        </div>
    )
}
export default StaffRegister;