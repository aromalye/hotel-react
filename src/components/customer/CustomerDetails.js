import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function CustomerDetails() {

    const [tableDatas, setTableDatas] = useState([]);
    const [newTable, setNewTable] = useState([]);
    // const [inputDatas, setInputDatas] = useState({});
    const [show, setShow] = useState(false);
    const [id, setId] = useState("")
    
    const handleClose = () => {
        setShow(false);
    }

    const handlefetch = () => {
        // editData(id)
        setShow(false);
    }

    // const handleShow = (id) => {
    //     setShow(true);
    //     setId(id)
        
    // }

    const [data,setData] = useState({
        customerName:"",
        phoneNo:"",
        address:"",
        email:"",
        idProofType:"",
        idProofNo:"",
        gender:"",
    })

    const [editDatas,setEditDatas] = useState({
        managerName:"",
        username:"",
        address:"",
        phoneNo:"",
        gender:"",
        email:"",
        password:""
    })


    useEffect(() => {
        fetchQuotes()
        fetchFilterData()
        tableDetails()
    }, [])


    const fetchQuotes = async() => {
        await axios.get('http://localhost:8080/hotelbooking/customers')
            .then((res) => {
                console.log(res.data)
                setTableDatas(res.data)
            })
    
    };


    const fetchFilterData = async() => {
        try {
            const url = 'http://localhost:8080/hotelbooking/filterCustomer';
            const config = { 'content-type': 'application/json' };
            const response = await axios.post(url, data, config);
            console.log("respose data", response.data);
            if (response.data){
                setTableDatas(response.data)
            }else{
                console.log("errr")
            }
           
        } catch (error) {
            console.error(error);
        }

    }

    

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

    function editHandle(e) {
        const newdata = {...editDatas}
        newdata[e.target.id] = e.target.value
        setEditDatas(newdata)
        console.log(editDatas)
    }

    async function tableDetails() {
        await axios.get(`http://localhost:8080/hotelbooking/tableDetails`)
            .then((res) => {
                console.log(res.data, "tableee")
                setNewTable(res.data)
            })  
    }

    function handleShow(id) {
        axios.get(`http://localhost:8080/hotelbooking/activeTable/${id}`)
            .then((res) => {
                console.log(res.data, id, "status changed")
                
            })
            tableDetails()  
    }



    const table = {
        width:"85%",
        margin: "30px",
    }
    return(
             <div style={table}>
            <h3 className='text-center mb-5'>Customer Details</h3>
            <form onSubmit={(e) => submit(e)}>
                <Table className='my-5' responsive="sm">
                    <thead >
                        <tr >
                            <td style={{"width":"12%"}} >
                                <Form.Group value={data.customerName} onChange={(e) => handle(e) } className="mb-3" controlId="customerName">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <Form.Control type="text" placeholder="Customer Name" />
                                </Form.Group>
                            </td>

                            <td style={{"width":"12%"}} >
                                <Form.Group  value={data.phoneNo} onChange={(e) => handle(e) } className="mb-3" controlId="phoneNo">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <Form.Control type="number" placeholder="Phone Number" />
                                </Form.Group>
                            </td>

                            <td style={{"width":"12%"}} >
                                <Form.Group value={data.idProofType} onChange={(e) => handle(e) } className="mb-3" controlId="idProofType">
                                    <Form.Select className='my-3' aria-label="Default select example">
                                    <option value="">ID ProofType</option>
                                    <option value="adhar">Adhaar </option>
                                    <option value="pan">PAN </option>
                                    <option value="drivinglicense">Driving License</option>
                                    </Form.Select>
                                </Form.Group>
                            </td>

                            <td style={{"width":"12%"}} >
                                <Form.Group  value={data.idProofNo} onChange={(e) => handle(e) } className="mb-3" controlId="idProofNo">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <Form.Control type="number" placeholder="Idproof Number" />
                                </Form.Group>
                            </td>

                            <td style={{"width":"12%"}} >
                                <Form.Group  value={data.email} onChange={(e) => handle(e) } className="mb-3" controlId="email">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <Form.Control type="email" placeholder="email" />
                                </Form.Group>
                            </td>

                            <td style={{"width":"12%"}} >
                                <Form.Group value={data.gender} onChange={(e) => handle(e) } className="mb-3" controlId="gender">
                                    <Form.Select className='my-3' aria-label="Default select example">
                                    <option value="">Gender</option>
                                    <option value="male">Male </option>
                                    <option value="female">Female </option>
                                    <option value="others">Others</option>
                                    </Form.Select>
                                </Form.Group>
                            </td>  
                        </tr>
                        <button type='submit' onClick={fetchFilterData} className='btn-sm btn btn-success m-3'>Filter</button>
                        <button type='submit' onClick={fetchQuotes} className='btn-sm btn btn-primary m-3'>Reset</button>
                    </thead>
                </Table>
            </form>

            <Modal show={show} onHide={handleClose} animation={false}>
                <form onSubmit={(e) => submit(e)}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Manager</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group value={editDatas.managerName} onChange={(e) => editHandle(e) } className="mb-3" controlId="managerName">
                        <Form.Control type="text" placeholder="Manager Name" />
                    </Form.Group>
                    <Form.Group value={editDatas.username} onChange={(e) => editHandle(e) } className="mb-3" controlId="username">
                        <Form.Control type="text" placeholder="username" />
                    </Form.Group>
                    <Form.Group value={editDatas.email} onChange={(e) => editHandle(e) } className="mb-3" controlId="email">
                        <Form.Control type="email" placeholder="E mail" />
                    </Form.Group>
                    <Form.Group value={editDatas.address} onChange={(e) => editHandle(e) } className="mb-3" controlId="address">
                        {/* <Form.Label>Address</Form.Label> */}
                        <Form.Control as="textarea" rows={3} placeholder="Address" />
                    </Form.Group>
                    <Form.Group value={editDatas.phoneNo} onChange={(e) => editHandle(e) } className="mb-3" controlId="phoneNo">
                        <Form.Control type="number" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group value={editDatas.gender} onChange={(e) => editHandle(e) } className="mb-3" controlId="gender">
                                    <Form.Select className='my-3' aria-label="Default select example">
                                    <option value="">Gender</option>
                                    <option value="male">Male </option>
                                    <option value="female">Female </option>
                                    <option value="others">Others</option>
                                    </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handlefetch}>
                    Save Changes
                </Button>
                </Modal.Footer>
                </form>
            </Modal>


            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>customer Name</th>
                <th>Phone No</th>
                <th>Email</th>
                <th>Address</th>
                <th>ID ProofType</th>
                <th>ID proofNo</th>
                <th>Gender</th>
                {/* <th>action</th> */}
                </tr>
            </thead>
            <tbody>
                    {tableDatas.map((tdata, index) => 
                        <tr>
                        <td>{index+1}</td>
                        <td>{tdata.customerName}</td>
                        <td>{tdata.phoneNo}</td>
                        <td>{tdata.email}</td>
                        <td>{tdata.address}</td>
                        <td>{tdata.idProofType}</td>
                        <td>{tdata.idProofNo}</td>
                        <td>{tdata.gender}</td>
                        {/* <td> */}
                         {/* <button type='submit' onClick={()=>deleteData(tdata.customerId)} className='btn-sm btn btn-outline-danger'>delete</button></td>  */}
                         {/* <button type='submit'  className='btn-sm btn btn-outline-success mx-3'>edit</button> */}
                        </tr>
                    )}
               
            </tbody>
            </Table>

            <hr></hr>

            <h3 className='text-center m-5'>Room Status</h3>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Room No</th>
                <th>Room Status</th>
                <th>action</th>
                </tr>
            </thead>
            <tbody>
                { newTable.map((obj, key) => 
                <tr>
                <td>{key}</td>
                <td>{obj.tableId}</td>
                <td>{obj.tableStatus?<span>Room Available</span> :<span>Not Available</span>}</td>
                {
                obj.tableStatus?<td><Button size='sm' disabled variant="outline-danger">Room Available</Button></td>
                :<td> <Button size='sm' onClick={() => handleShow(obj.tableId)} variant="success">Make Available</Button></td>
                }
                </tr>
                )}  
            </tbody>
            </Table>
        </div>
      
        
    )
}
export default CustomerDetails;