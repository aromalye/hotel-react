import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';



function StaffHome() {

    const [inputDatas, setInputDatas] = useState({});
    const id = localStorage.getItem('staff_id')

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
        fetchEdit()
    }, [])

    async function fetchEdit() {
        await axios.get(`http://localhost:8080/hotelbooking/getStaffByid/${id}`)
            .then((res) => {
                console.log(res.data, "dddd")
                setInputDatas(res.data)
            })  
            console.log(inputDatas.staffName, "dffffffd")   
    }


    const editData = () => {
        console.log(editDatas, "dd")
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


    function editHandle(e) {
        const newdata = {...editDatas}
        newdata[e.target.id] = e.target.value
        setEditDatas(newdata)
        console.log(editDatas)
    }



    return(
        <div style={{"width":"60%", "marginLeft":"10%" , "marginRight":"5%", "color":"green"}}>
            <h3>Welcome !!</h3>
            <h5>Edit your Details Here!</h5>
            <Form style={{"width":"80%"}} className="card p-3 my-3">
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

                <Button onClick={editData} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default StaffHome;