import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function StaffDetails() {

    const table = {
        width:"85%",
        margin: "30px",
    }

    const [tableDatas, setTableDatas] = useState([]);
    const [inputDatas, setInputDatas] = useState({});
    const [show, setShow] = useState(false);
    const [id, setId] = useState("")
    const refresh = () =>  window.location.reload(true)


    const handleClose = () => {
        setShow(false);
    }

    const handlefetch = () => {
        editData(id)
        setShow(false);
        // refresh()
    }

    // const handleShow = (id) => {
    //     setShow(true);
        
    // }

    const [data,setData] = useState({
        staffName:"",
        username:"",
        phoneNo:"",
        address:"",
        gender:"",
        status:"",
        idProofNo:"",
        idProofType:""
    })

    const [editDatas,setEditDatas] = useState({
        staffName:"",
        username:"",
        address:"",
        phoneNo:"",
        gender:"",
        status:"",
        idProofNo:"",
        idProofType:"",
        password:""
    })

    
    useEffect(() => {
        fetchQuotes()
        fetchFilterData()
    }, [])

    async function fetchEdit(id) {
        setShow(true);
        setId(id);
        console.log("errrr", id)
        await axios.get(`http://localhost:8080/hotelbooking/getStaffByid/${id}`)
            .then((res) => {
                console.log(res.data, "dddd")
                setInputDatas(res.data)
            })  
            console.log(inputDatas.staffName, "dffffffd")   
    }


    const editData = (id) => {
        console.log(editDatas, id)
        const res = axios.put(`http://localhost:8080/hotelbooking/updateStaff/${id}`, {
            staffName: editDatas.staffName,
            address: editDatas.address,
            phoneNo: editDatas.phoneNo,
            username: editDatas.username,
            gender: editDatas.gender,
            status:editDatas.status,
            idProofNo:editDatas.idProofNo,
            idProofType:editDatas.idProofType,
            password:""
        });
        console.log(res, "mewres")
    }
    


    const deleteData = (id) => {
        alert("delete this",id)
        axios.delete(`http://localhost:8080/hotelbooking/deleteStaff/${id}`)
        .then((res) => {
            alert("deleted successfully!")
        })
    }



    const fetchQuotes = async() => {
        await axios.get('http://localhost:8080/hotelbooking/Staffs')
            .then((res) => {
                console.log(res.data)
                setTableDatas(res.data)
            })
    
    };


    const fetchFilterData = async() => {
        try {
            const url = 'http://localhost:8080/hotelbooking/filterStaff';
            const config = { 'content-type': 'application/json' };
            const response = await axios.post(url, data, config);
            console.log("respose data", response.data);
            if (response.data){
                setTableDatas(response.data)
                console.log(response.data, "filtered")
            }else{
                console.log("errr")
            }
           
        } catch (error) {
            console.error(error);
        }

    }

    function submit(e) {
        e.preventDefault();
        console.log(editDatas)
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



    return(
        <div style={table}>
            <h3 className='text-center mb-5'>Staff Details</h3>
            <form onSubmit={(e) => submit(e)}>
                <Table className='my-5' responsive="sm">
                    <thead >
                        <tr >
                            <td style={{"width":"12%"}} >
                                <Form.Group value={data.staffName} onChange={(e) => handle(e) } className="mb-3" controlId="staffName">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <Form.Control type="text" placeholder="Staff name" />
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
                                <Form.Group  value={data.status} onChange={(e) => handle(e) } className="mb-3" controlId="status">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <Form.Control type="text" placeholder="Status" />
                                </Form.Group>
                            </td>

                            <td style={{"width":"12%"}} >
                                <Form.Group value={data.idProofType} onChange={(e) => handle(e) } className="mb-3" controlId="idProofType">
                                    <Form.Select className='my-3' aria-label="Default select example">
                                    <option value="">ID ProofType</option>
                                    <option value="adhaar">Adhaar </option>
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
                        <button type='submit' onClick={fetchQuotes} className='btn-sm btn btn-primary mx-1'>Reset</button>
                        <button type='submit' onClick={refresh} className='btn-sm btn btn-outline-primary m-3'>Refresh</button>
                
            </form>

            <Modal show={show} onHide={handleClose} animation={false}>
                <form onSubmit={(e) => submit(e)}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Staff</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group value={editDatas.staffName} onChange={(e) => editHandle(e) } className="mb-3" controlId="staffName">
                        <Form.Control defaultValue={inputDatas.staffName} type="text" placeholder="staff Name" />
                    </Form.Group>
                    <Form.Group  value={editDatas.username} onChange={(e) => editHandle(e) } className="mb-3" controlId="username">
                        <Form.Control defaultValue={inputDatas.username} type="text" placeholder="username" />
                    </Form.Group>
                    {/* <Form.Group value={editDatas.email}  onChange={(e) => editHandle(e) } className="mb-3" controlId="email">
                        <Form.Control defaultValue={inputDatas.email}  type="email" placeholder="E mail" />
                    </Form.Group> */}
                    <Form.Group value={editDatas.status}  onChange={(e) => editHandle(e) } className="mb-3" controlId="status">
                        <Form.Control defaultValue={inputDatas.status} type="text" placeholder="Status" />
                    </Form.Group>
                    <Form.Group value={editDatas.address} onChange={(e) => editHandle(e) } className="mb-3" controlId="address">
                        <Form.Control defaultValue={inputDatas.address}  as="textarea" rows={3} placeholder="Address" />
                    </Form.Group>
                    <Form.Group value={editDatas.phoneNo}  onChange={(e) => editHandle(e) } className="mb-3" controlId="phoneNo">
                        <Form.Control defaultValue={inputDatas.phoneNo} type="number" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group value={editDatas.idProofType}  onChange={(e) => editHandle(e) } className="mb-3" controlId="idProofType">
                                    <Form.Select className='my-3' aria-label="Default select example">
                                    <option value="">ID ProofType</option>
                                    <option value="adhaar">Adhaar </option>
                                    <option value="pan">PAN </option>
                                    <option value="drivinglicense">Driving license</option>
                                    </Form.Select>
                    </Form.Group>
                    <Form.Group value={editDatas.idProofNo}  onChange={(e) => editHandle(e) } className="mb-3" controlId="idProofNo">
                        <Form.Control defaultValue={inputDatas.idProofNo} type="number" placeholder="id proof Number" />
                    </Form.Group>
                    <Form.Group value={editDatas.gender}  onChange={(e) => editHandle(e) } className="mb-3" controlId="gender">
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
                <th>Staff Name</th>
                <th>username</th>
                <th>status</th>
                <th>Id Prooftype</th>
                <th>phone no</th>
                <th>Id proofno</th>
                <th>gender</th>
                <th>address</th>
                <th>action</th>
                </tr>
            </thead>
            <tbody>
             { tableDatas.map((tdata, index) => 
                    <tr>
                    <td>{index+1}</td>
                    <td>{tdata.staffName}</td>
                    <td>{tdata.username}</td>
                    <td>{tdata.status}</td>
                    <td>{tdata.idProofType}</td>
                    <td>{tdata.phoneNo}</td>
                    <td>{tdata.idProofNo}</td>
                    <td>{tdata.gender}</td>
                    <td>{tdata.address}</td>
                    <td><button type='submit' onClick={() => fetchEdit(tdata.staffId) } className='btn-sm btn btn-outline-success mx-3'>edit</button>
                    <button type='submit' onClick={() => deleteData(tdata.staffId)} className='btn-sm btn btn-outline-danger'>delete</button></td>
                    </tr>
                )}
            </tbody>
            </Table>
        </div>
    )
}
export default StaffDetails;