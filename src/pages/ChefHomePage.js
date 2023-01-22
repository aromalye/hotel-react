import Footer from "../components/Footer";
import Navbarx from "../components/Navbarx";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ChefHomePage () {

    const id = localStorage.getItem('chef_id')
    const [inputDatas, setInputDatas] = useState({});


    
    const [editDatas,setEditDatas] = useState({
        chefName:"",
        username:"",
        address:"",
        phoneNo:"",
        gender:"",
        email:"",
        workExperience:"",
        password:""
    })


    useEffect(() => {
        fetchEdit()
    }, [])


    const editData = () => {
        const res = axios.put(`http://localhost:8080/hotelbooking/updateChef/${id}`, {
            chefName: editDatas.chefName,
            address: editDatas.address,
            phoneNo: editDatas.phoneNo,
            email: editDatas.email,
            username: editDatas.username,
            gender: editDatas.gender,
            workExperience:"",
            password:""
        });
        console.log(res, "mewres")
    }

    async function fetchEdit() {
        console.log("errrr", id)
        await axios.get(`http://localhost:8080/hotelbooking/getChefByid/${id}`)
            .then((res) => {
                // console.log(res.data, "dddd")
                setInputDatas(res.data)
            })  
            console.log(inputDatas.username, "dffffffd")     
    }




    function editHandle(e) {
        const newdata = {...editDatas}
        newdata[e.target.id] = e.target.value
        setEditDatas(newdata)
        console.log(editDatas)
    }

    function submit(e) {
        e.preventDefault();
        console.log()
    }

    return(
        <div>
            <Navbarx/>
            <div style={{"width":"50%", "marginLeft":"20%"}}>
                <form onSubmit={(e) => submit(e)}>
                <h3>Edit Chef</h3>
                <Modal.Body >
                    <Form.Group value={editDatas.chefName} onChange={(e) => editHandle(e) } className="mb-3" controlId="chefName">
                        <Form.Control defaultValue={inputDatas.chefName} type="text" placeholder="Chef Name" />
                    </Form.Group>
                    <Form.Group value={editDatas.username} onChange={(e) => editHandle(e) } className="mb-3" controlId="username">
                        <Form.Control defaultValue={inputDatas.username} type="text" placeholder="username" />
                    </Form.Group>
                    {/* <Form.Group value={editDatas.email}  onChange={(e) => editHandle(e) } className="mb-3" controlId="email">
                        <Form.Control defaultValue={inputDatas.email}  type="email" placeholder="E mail" />
                    </Form.Group> */}
                    <Form.Group value={editDatas.address} defaultValue={inputDatas.address} onChange={(e) => editHandle(e) } className="mb-3" controlId="address">
                        <Form.Control as="textarea" rows={3} placeholder="Address" />
                    </Form.Group>
                    <Form.Group value={editDatas.phoneNo} defaultValue={inputDatas.phoneNo} onChange={(e) => editHandle(e) } className="mb-3" controlId="phoneNo">
                        <Form.Control defaultValue={inputDatas.phoneNo} type="number" placeholder="Phone Number" />
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
                <Button variant="primary" onClick={editData}>
                    Save Changes
                </Button>
                </Modal.Footer>
                </form>
                </div>
            <Footer />
        </div>
    )
}
export default ChefHomePage;