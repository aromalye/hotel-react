import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';


function CustomerNav() {
    return(
        <div className='container' style={{position:'relative',left:'20%'}}>
             <Nav className='mx-3'
            // activeKey="/home"
            // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Nav.Link href="/customer"><Button variant="outline-primary"> Rooms </Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/customer/restaurants"><Button variant="outline-primary"> Restaurants </Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/customer/food"><Button variant="outline-primary"> Food </Button></Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
    )
}
export default CustomerNav;