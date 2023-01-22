import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';



function AdminNav(props) {

    return(
        <Nav style={{"backgroundColor":"#d8f3dc"}} className='m-3'
            // activeKey="/home"
            // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Nav.Link href="/admin"><Button variant="outline-primary"> Manager </Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/customerdetails"><Button variant="outline-primary"> Customer </Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/staffdetails"><Button variant="outline-primary"> Staff </Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/chefdetails"><Button  variant="outline-primary"> Chef </Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='mx-5 my-1' href="/manager/register"><Button size='sm' variant="info"> Add Manager </Button></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
// AdminNav.defaultProps = {
//     adminUrl: "/admin"
//   }
export default AdminNav;