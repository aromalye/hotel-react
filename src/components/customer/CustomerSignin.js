import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Signin() {

    const [data,setData] = useState({
        username:"",
        password:"",
      })

    function submit(e) {
        e.preventDefault();
        console.log(data)
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
            <h5 className='text-center mb-5'>Customer Sign in</h5>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group> */}

            <Form.Group value={data.username} onChange={(e) => handle(e) } className="mb-3" controlId="username">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group value={data.password} onChange={(e) => handle(e) } className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>


            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder=" Confirm Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group> */}

            <Button size="sm" variant="primary" type="submit">
                Sign in
            </Button>
            </Form>
        </div>
    )
}
export default Signin;