import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function AdminRegister() {

    const navigate = useNavigate()

    const [data,setData] = useState({
        adminName:"",
        address:"",
        phoneNo:"",
        username:"",
        password:"",
        confirmPassword:"",
      });

      const[adminNameErr, setadminNameErr] = useState({});
      const[phoneNoErr, setphoneNoErr] = useState({});
      const[addressErr, setaddressErr] = useState({});
      const[usernameErr, setusernameErr] = useState({}); 
      const[passwordErr, setpasswordErr] = useState({});
      const[confirmPasswordErr, setconfirmPasswordErr] = useState({});
      
    const formValidation = ()=>{
        const adminNameErr={}
        const phoneNoErr={} 
        const addressErr={}
        const usernameErr={}
        const passwordErr={}
        const confirmPasswordErr={}

        let isValid = true

        
        if (!data.adminName){
            adminNameErr.short_fname = '*   adminname is a required field'
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

        if (!data.address){
            addressErr.short_fname = '*   address is a required field'
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
            passwordErr.short_fname = '*   password is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        
        if (!data.confirmPassword){
            confirmPasswordErr.short_fname = '*  confirm password is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        setadminNameErr(adminNameErr)
        setphoneNoErr(phoneNoErr)
        setaddressErr(addressErr)
        setusernameErr(usernameErr)
        setpasswordErr(passwordErr)
        setconfirmPasswordErr(confirmPasswordErr)

        return isValid
    }

      function submit(e) {
        if(data.password===data.confirmPassword){
 
        e.preventDefault();
        const isValid = formValidation() 
        if(isValid) {
        console.log("data", data)
        try {
            const url = "http://localhost:8080/hotelbooking/insertAdmin";
            const config = { 'content-type': 'application/json' };
            // const response = axios.post(url, data, config);
            // console.log("respose data", response.data);
            axios.post(url, data, config).then((res) => {
                console.log(res.data, "data");
                if(res.status===200){
                    navigate("/admin/signin")
                }
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


    return(<div>
        <Form className='form' onSubmit={(e)=>submit(e)} >
        <h5 className='text-center mb-5'>Admin Sign up</h5>
        <Row>
        <Col>

        <Form.Group value={data.adminName} onChange={(e) => handle(e) } className="mb-3" controlId="adminName">
            <Form.Label>Admin Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
            {Object.keys(adminNameErr).map((key)=>{
            return <div style={{color:'red'}} >{adminNameErr[key]}</div> })}
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

        <Form.Group value={data.address} onChange={(e) => handle(e) } className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3}  />
                {Object.keys(addressErr).map((key)=>{
            return <div style={{color:'red'}} >{addressErr[key]}</div> })}
            </Form.Group>

        <Form.Group value={data.phoneNo} onChange={(e) => handle(e) } className="mb-3" controlId="phoneNo">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Phone number" />
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

        {/* <div className='mb-3'>
            <Form.Check
                type="radio"
                label="Male"
                name="gender"
                id="disabled-custom-switch"
            /> 
            <Form.Check
                type="radio"
                label="Female"
                name="gender"
                id="disabled-custom-switch"
            /> 
        </div> */}

        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows={3}  />
        </Form.Group> */}

        <p className='my-3'>Already have an Account? <Link to="/admin/signin"> Sign in</Link></p>

        </Col>
        </Row>
        <Button size="sm" variant="light" type="submit">
            Sign up
        </Button>
        
        </Form>
    </div>)
}
export default AdminRegister;