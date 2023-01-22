import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


// import { useNavigate } from "react-router-dom";

function Navbarx() {

    const customer = localStorage.getItem('customer')
    const navigate = useNavigate()

    function refresh() {
        localStorage.removeItem('customer')
        localStorage.removeItem('customer_id')
        localStorage.removeItem('chef_id')
        localStorage.removeItem('staff_id')
        navigate("/")
    }


    return(
        <div>
            <Navbar style={{"background" : "#fefae0"}}>
            <Container>
            <Navbar.Brand style={{"fontSize":"xx-large", "color":"green"}} ><strong>Hotel x</strong></Navbar.Brand>
            <Nav className="me-auto">
                {/* <Nav.Link onClick={routChange} >Home</Nav.Link> */}
                {/* <Nav.Link href="#home">register</Nav.Link>
                <Nav.Link href="#features">logout</Nav.Link> */}
                <Nav className='mx-5'>Welcome <span className='mx-3'><strong>{ customer}!!</strong></span></Nav>
                <Button size='sm' onClick={refresh} variant="outline-danger" type="submit">log out</Button>
            </Nav>
            </Container>
            </Navbar>
        </div>
    )
}
export default Navbarx;