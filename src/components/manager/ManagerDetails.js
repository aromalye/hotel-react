import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ManagerDetails() {

    const table = {
        width:"85%",
        margin: "30px",
    }

    const [tableDatas, setTableDatas] = useState([]);
    const [inputDatas, setInputDatas] = useState([]);
    const [show, setShow] = useState(false);
    const refresh = () =>  window.location.reload(true)

    // const [id, setId] = useState([])


    const handleClose = () => {
        setShow(false);
    }

    // const handlefetch = (id) => {
    //     editData(id)
    //     setShow(false);
        // console.log(id, "idd")
        // console.log(id, "new")
        // fetchQuotes()
    // }

    // const handleShow = (id) => {
    //     setShow(true);
    //     setId(id);
    //     fetchEdit(id);
        
    // }
    

    const [data,setData] = useState({
        managerName:"",
        username:"",
        phoneNo:"",
        gender:"",
        email:""
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
        // fetchQuotes()
        fetchFilterData()
    }, [])


    const fetchQuotes = async() => {
        await axios.get('http://localhost:8080/hotelbooking/managers')
            .then((res) => {
                console.log(res.data, "ggggg")
                setTableDatas(res.data)
            })

    
    };

    async function fetchEdit(id) {
        setShow(true);
        // setId(id);
        console.log("errrr", id)
        await axios.get(`http://localhost:8080/hotelbooking/getManagerIyid/${id}`)
            .then((res) => {
                console.log(res.data, "dddd")
                setInputDatas(res.data)
            })  
            console.log(inputDatas.email, "dffffffd")     
    }

    const fetchFilterData = async() => {
        try {
            const url = 'http://localhost:8080/hotelbooking/managerFilter';
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

    function editData(id) {
        setShow(false);
        console.log(editDatas, id)
        const res = axios.put(`http://localhost:8080/hotelbooking/updateManager/${id}`, {
            managerName: editDatas.managerName,
            address: editDatas.address,
            phoneNo: editDatas.phoneNo,
            email: editDatas.email,
            username: editDatas.username,
            gender: editDatas.gender,
            password: ""
        });
        console.log(res.data, "newres")
    }
    

    const deleteData = (id) => {
        alert("delete this",id)
        axios.delete(`http://localhost:8080/hotelbooking/deleteManager/${id}`)
        .then((res) => {
            alert("deleted successfully!")
        })
    }

    
   

    function submit(e) {
        e.preventDefault();
        console.log(editDatas, "hhhhh")
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
        // console.log(editDatas)
    }

    

    return(
        <div style={table}>
            
            
            <h3 className='text-center mb-5'>Manager Details</h3>
            <form onSubmit={(e) => submit(e)}>
                <Table className='my-5' responsive="sm">
                    <thead >
                        <tr >
                            <td style={{"width":"12%"}} >
                                <Form.Group value={data.managerName} onChange={(e) => handle(e) } className="mb-3" controlId="managerName">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <Form.Control type="text" placeholder="Manager name" onInput={fetchFilterData} />
                                </Form.Group>
                            </td>

                            <td style={{"width":"12%"}} >
                                <Form.Group  value={data.phoneNo} onChange={(e) => handle(e) } className="mb-3" controlId="phoneNo">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <Form.Control type="number" placeholder="Phone number" />
                                </Form.Group>
                            </td>

                            <td style={{"width":"12%"}} >
                                <Form.Group  value={data.username} onChange={(e) => handle(e) } className="mb-3" controlId="username">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <Form.Control type="text" placeholder="username" />
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
                    </thead>
                </Table>
                <button type='submit' onClick={fetchFilterData} className='btn-sm btn btn-success m-3'>Filter</button>
                <button type='submit' onClick={fetchQuotes} className='btn-sm btn btn-outline-primary m-3'>Reset</button>
                <button type='submit' onClick={refresh} className='btn-sm btn btn-outline-primary m-3'>Refresh</button>

            </form>
            
            

            <Modal show={show} onHide={handleClose} animation={false}>
                <form onSubmit={(e) => submit(e)}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Manager</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group value={editDatas.managerName} onChange={(e) => editHandle(e) } className="mb-3" controlId="managerName">
                        <Form.Control defaultValue={inputDatas.managerName} type="text" placeholder="Manager Name" />
                    </Form.Group>
                    <Form.Group value={editDatas.username} onChange={(e) => editHandle(e) } className="mb-3" controlId="username">
                        <Form.Control defaultValue={inputDatas.username} type="text" placeholder="username" />
                    </Form.Group>
                    <Form.Group value={editDatas.email}  onChange={(e) => editHandle(e) } className="mb-3" controlId="email">
                        <Form.Control defaultValue={inputDatas.email}  type="email" placeholder="E mail" />
                    </Form.Group>
                    <Form.Group value={editDatas.address} defaultValue={inputDatas.address} onChange={(e) => editHandle(e) } className="mb-3" controlId="address">
                        <Form.Control as="textarea" rows={3} placeholder="Address" />
                    </Form.Group>
                    <Form.Group value={editDatas.phoneNo} defaultValue={inputDatas.phoneNo} onChange={(e) => editHandle(e) } className="mb-3" controlId="phoneNo">
                        <Form.Control type="number" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group value={editDatas.gender} defaultValue={inputDatas.gender} onChange={(e) => editHandle(e) } className="mb-3" controlId="gender">
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
                <Button variant="primary" onClick={() => editData(inputDatas.managerId)}>
                    Save Changes
                </Button>
                </Modal.Footer>
                </form>
                </Modal>
                 

            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>Manager Name</th>
                <th>username</th>
                <th>email</th>
                <th>address</th>
                <th>phone no</th>
                <th>gender</th>
                <th>action</th>
                </tr>
            </thead>
            <tbody>
             { tableDatas.map((tdata, index) => 
                    <tr>
                    <td>{index+1}</td>
                    <td>{tdata.managerName}</td>
                    <td>{tdata.username}</td>
                    <td>{tdata.email}</td>
                    <td>{tdata.address}</td>
                    <td>{tdata.phoneNo}</td>
                    <td>{tdata.gender}</td>
                    <td><button type='submit' onClick={() => fetchEdit(tdata.managerId) } className='btn-sm btn btn-outline-success mx-3'>edit</button>
                    <button type='submit' onClick={() => deleteData(tdata.managerId)} className='btn-sm btn btn-outline-danger'>delete</button></td>
                    </tr>
                )}
            </tbody>
            </Table>

        </div>
    )
}
export default ManagerDetails;