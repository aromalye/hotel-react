import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import './register.css'
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function BookRestaurant() {

    const [data, setDatas] = useState([]);
    const [show, setShow] = useState(false);
    const [tableData, setTableData] = useState([]);

    const [bookingDate, setbookingDate] = useState([]);
    const [checkInTime, setCheckInTime] = useState([]);
    const [checkOutTime, setCheckOutTime] = useState([]);
    const [newRent, setNewRent] =useState()

    const customer_id = localStorage.getItem('customer_id')
    const customer = localStorage.getItem('customer')
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true)



    const navigate = useNavigate()



    useEffect(() => {
        tableDetails()
    }, [])


    async function bookTable() {
        setShow(false)
        console.log("heee");
        try {
            const url = 'http://localhost:8080/hotelbooking/createRestaurantBooking';
            const config = { 'content-type': 'application/json' };
            const details = {
                tableDetailsId: tableData.tableId,
                customerId: customer_id,
                bookingDate: bookingDate,
                checkInTime: checkInTime,
                checkOut: checkOutTime,
                totalAmount: newRent }
            console.log(details, "deee")
            const response = await axios.post(url, details, config);
            console.log("respose data", response.data);
            if (response.status === 200){
                navigate("/roombooked")
                
            }else{
                console.log("errr")
            }
           
        } catch (error) {
            console.error(error);
        }
      
    }

    function finalRent() {
        const details = {
            checkInTime: checkInTime,
            checkOutTime: checkOutTime,
            rent: tableData.tableRent }
        axios.post('http://localhost:8080/hotelbooking/totalamount', details)
            .then((response) => {
                console.log(response.data, "fff" )
                setNewRent(response.data.tableRent)
                console.log(newRent, "deee")
            })
       
    }

 

    async function tableDetails() {
        await axios.get(`http://localhost:8080/hotelbooking/tableDetails`)
            .then((res) => {
                console.log(res.data, "dddd")
                console.log(res.data[0])
                setDatas(res.data)
            })  
    }

    function handleShow(id) {
        setShow(true)
        axios.get(`http://localhost:8080/hotelbooking/tableDetailsGetById/${id}`)
            .then((res) => {
                console.log(res.data, "dddd")
                setTableData(res.data)
            })  
        console.log(id)
    }


    return(
        <div>
            <hr></hr>
            <h3 className='text-center m-5'>Table Details</h3>
           <Row xs={1} md={4} className="g-4 m-3"  >
            {data.map((obj, index) => 
                    <Col>
                        <Card border="danger" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className='roomdetails'>Table seats : {obj.numberOfSeat}</Card.Title>
                                {/* <Card.Text>food description</Card.Text> */}
                                <Card.Text className='roomdetails'>Table Rent : {obj.tableRent}</Card.Text>
                                {/* <Button onClick="" variant="primary"  > Food</Button> */}
                            </Card.Body>
                            { obj.tableStatus ? 
                                <div className='mx-3'>
                                <Card.Text className='roomdetails'>Table status : <span style={{"color":"green"}}>Available</span></Card.Text>
                                <Button className='m-3' onClick={() => handleShow(obj.tableId)} variant="outline-primary">Book Room</Button>
                                </div>
                             : 
                             <div className='mx-3'>
                             <Card.Text className='roomdetails'>Table status : <span style={{"color":"red"}}>not available</span></Card.Text>
                             <Button className='m-3' onClick="" variant="outline-danger" >check later</Button>
                             </div>}
                        </Card>
                    </Col>
                )}
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Book Table</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div >
                    <Form>
                    <Table>
                        <thead>
                            <tr>
                            <th>Customer Name</th>
                            <th>{customer}</th>
                            </tr>
                            <tr>
                            <th>Rate/table</th>
                            <th>{tableData.tableRent}</th>
                            </tr>
                            <tr>
                            <th>No Of Seat</th>
                            <th>{tableData.numberOfSeat}</th>
                            </tr>
                            <tr>
                            <th>Total Rent</th>
                            <th style={{"fontSize":"large"}}>{newRent}</th>
                            </tr>
                        </thead>
                    </Table>
                   
                    <Form.Group  className="mb-3" controlId="bookingDate">
                        <Form.Label className='roomdetails' >Booking Date</Form.Label>
                        <Form.Control value={bookingDate} onChange={(e) => setbookingDate(e.target.value)} type="date" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="checkInTime">
                        <Form.Label className='roomdetails' >checkin time</Form.Label>
                        <Form.Control value={checkInTime} onChange={(e) => setCheckInTime(e.target.value)} type="time" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="checkOutTime">
                        <Form.Label className='roomdetails' >checkout time</Form.Label>
                        <Form.Control value={checkOutTime} onChange={(e) => setCheckOutTime(e.target.value)}  type="time" />
                    </Form.Group>
                    

                </Form>
                <button className='btn btn-sm btn-outline-success' onClick={() => finalRent()}>totalRent</button>
                </div>


                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={bookTable}>
                    Book Restaurant
                </Button>
                </Modal.Footer>
            </Modal>
        
 
        </div>

    )
}
export default BookRestaurant;