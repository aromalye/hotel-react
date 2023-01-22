import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ManagerSignin () {

    const navigate = useNavigate()
    const [data,setData] = useState({
        username:"",
        password:"",
      })

    const[usernameErr, setusernameErr] = useState({});
    const[passwordErr, setpasswordErr] = useState({});

    const formValidation = ()=>{

        const usernameErr={}
        const passwordErr={}
        
        let isValid = true

        if (!data.username){
            usernameErr.short_fname = '* username is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        if (!data.password){
            passwordErr.short_fname = '* password is a required field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        setusernameErr(usernameErr)
        setpasswordErr(passwordErr)

        return isValid

    }

   async function submit(e) {
        e.preventDefault();
        console.log(data)
        
        const isValid = formValidation() 
        if(isValid) {
       
        try {
            const url = `http://localhost:8080/hotelbooking/loginManager?username=${data.username}&password=${data.password}`;
            const config = { 'content-type': 'application/json' };
            // const response = axios.post(url, data, config);
            // console.log("respose data", response.data);
            axios.post(url, data, config).then((res) => {
                console.log(res.data, "data");
                if(!res.data){
                    alert("Wrong credentials");
        
                }else{
                    navigate("/manager")

                }
              })

        } catch (error) {
            console.error(error);
        }
    }
}

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }

    const mystyle = {
        width: "35%",
        marginLeft : '25rem',
        
      };

    return(
        <div>
            <Form className='form' style={mystyle} onSubmit={(e) => submit(e)}>
            <h5 className='text-center mb-5'>Manager Sign in</h5>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group> */}

            <Form.Group value={data.username} onChange={(e) => handle(e)} className="mb-3" controlId="username">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
                {Object.keys(usernameErr).map((key)=>{
            return <div style={{color:'red'}} >{usernameErr[key]}</div> })}
            </Form.Group>

            <Form.Group value={data.password} onChange={(e) => handle(e) }  className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                {Object.keys(passwordErr).map((key)=>{
            return <div style={{color:'red'}} >{passwordErr[key]}</div> })}
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder=" Confirm Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group> */}

            <Button className='my-3' size="sm" variant="light" type="submit">
                Sign in
            </Button>
            </Form>
        </div>
    )
}
export default ManagerSignin;