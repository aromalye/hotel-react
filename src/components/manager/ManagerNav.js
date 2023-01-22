import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';



function ManagerNav() {

    return(
        <Nav style={{"backgroundColor":"#d8f3dc"}} className='m-3'
            // activeKey="/home"
            // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Nav.Link href="/manager"><Button variant="outline-primary"> Customer </Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/manager/staff"><Button variant="outline-primary"> Staff Details</Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/manager/chef"><Button  variant="outline-primary"> Chef Details</Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='mx-1 my-1' href="/staff/register"><Button size='sm' variant="info"> Add Staff </Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='mx-1 my-1' href="/chef/register"><Button size='sm' variant="info"> Add Chef </Button></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export default ManagerNav;