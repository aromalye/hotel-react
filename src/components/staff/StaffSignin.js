import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link ,useNavigate } from 'react-router-dom';
import axios from 'axios';




function StaffSignin() {

    const navigate = useNavigate()

    const [data,setData] = useState({
        username:"",
        password:"",
      })

    const[usernameErr, setNameErr] = useState({})
    const[passwordErr, setpasswordErr] = useState({})

    const formValidation = () => {
        const usernameErr={}
        const passwordErr ={}

        let isValid = true

        if (!data.password){
            passwordErr.short_fname = '* password mis match'

            isValid = false
            console.log("doneeee")
        }

        if (!data.username){
            usernameErr.short_fname = '* username is a requires field'
            isValid = false
            console.log("doneeee")
        }else {
            console.log("haaa")
        }

        setNameErr(usernameErr)
        setpasswordErr(passwordErr)

        return isValid

    }

    function submit(e) {
        e.preventDefault();
        const isValid = formValidation()
        if(isValid){
            try {
                const url = `http://localhost:8080/hotelbooking/loginStaff?username=${data.username}&password=${data.password}`;
                const config = { 'content-type': 'application/json' };
                // const response = axios.post(url, data, config);
                // console.log("respose data", response.data);
                axios.post(url, data, config).then((res) => {
                    console.log(res.data, "data");
                     if(!res.data){
                            alert("Wrong credentials");
                
                        }else{
                            localStorage.setItem('staff_id', res.data.staffId)
                            navigate("/staff")
    
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
            <h5 className='text-center mb-5'>Staff Sign in</h5>

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

            <p>New here ? <Link to="/staff/register"> Register</Link></p>


            <Button size="sm" variant="light" type="submit">
                Sign in
            </Button>
            
            </Form>
        </div>
    )
}
export default StaffSignin;