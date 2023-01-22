import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import '../register.css'
import axios from 'axios';






function RoomDetails() {

    const [data, setDatas] = useState([]);
    const [show, setShow] = useState(false);
    const customer_id = localStorage.getItem('customer_id')
    const customer = localStorage.getItem('customer')
    const handleClose = () => setShow(false);

    // const handleShow = () => setShow(true)
  
    const navigate = useNavigate()

    const [roomData, setRoomData] = useState([]);
    const [checkInDate, setCheckInDate] = useState([]);
    const [checkOutDate, setCheckOutDate] = useState([]);

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(checkInDate)
    const secondDate = new Date(checkOutDate)

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    const totalRent = roomData.rent * diffDays;


    useEffect(() => {
        roomDetails()
    }, [])

    

    async function bookRoom() {
        try {
            const url = 'http://localhost:8080/hotelbooking/roomBooking';
            const config = { 'content-type': 'application/json' };
            const details = {
                roomId: roomData.roomId,
                customerId: customer_id,
                checkInDate: checkInDate,
                checkOutDate: checkOutDate,
                totalRent: totalRent }
            console.log(details, "feee")
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

  
    function handleShow(id) {
        setShow(true)
        axios.get(`http://localhost:8080/hotelbooking/getRoomById/${id}`)
            .then((res) => {
                console.log(res.data, "dddd")
                setRoomData(res.data)
                console.log(diffDays)
            })  
        console.log(id)
    }

    

    async function roomDetails() {
        await axios.get(`http://localhost:8080/hotelbooking/rooms`)
            .then((res) => {
                console.log(res.data, "dddd")
                console.log(res.data[0])
                setDatas(res.data)
            })  
    }

    return(
        <div className='m-3'>
            <hr></hr>
            <h3 className='text-center m-5'>Room Details</h3>
           <Row xs={1} md={4} className="g-4"  >
            
                    {data.map((obj, index) => 
                    <Col>
                     <Card border="primary" style={{ width: '18rem' }}>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body className='roomcard'>
                            <Card.Title className='roomdetails'>Check Room Details </Card.Title> <hr />
                            <Card.Text className='roomdetails'>Room type : {obj.roomType}</Card.Text>
                            <Card.Text className='roomdetails'>Room type : {obj.roomCategory}</Card.Text>
                            <Card.Text className='roomdetails'>Room Price : {obj.rent} </Card.Text>
                            <Card.Text className='roomdetails'>Room Price : {obj.roomId} </Card.Text>

                            { obj.status ? 
                                <div>
                                <Card.Text className='roomdetails'>Room status : <span style={{"color":"green"}}>Available</span></Card.Text>
                                <Button onClick={() => handleShow(obj.roomId)} variant="outline-primary">Book Room</Button>
                                </div>
                             : 
                             <div>
                             <Card.Text className='roomdetails'>Room status : <span style={{"color":"red"}}>not available</span></Card.Text>
                             <Button onClick="" variant="outline-danger"  >Check later</Button>
                             </div>}
                        </Card.Body>
                       
                    </Card>
                    </Col>
                    )}
                {/* ))} */}
            </Row>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Room Booking</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form >
                    <Table>
                        <thead>
                            <tr>
                            <th>Customer Name</th>
                            <th>{customer}</th>
                            </tr>
                            <tr>
                            <th>Room Number</th>
                            <th>{roomData.roomId}</th>
                            </tr>
                            <tr>
                            <th>Room Type</th>
                            <th>{roomData.roomType}</th>
                            </tr>
                            <tr>
                            <th>Room Category</th>
                            <th>{roomData.roomCategory}</th>
                            </tr>
                            <tr>
                            <th>Rent/room</th>
                            <th>{roomData.rent}</th>
                            </tr>
                            <tr>
                            <th>Total Rent</th>
                            <th style={{"fontSize":"large"}}>{totalRent}</th>
                            </tr>
                        </thead>
                    </Table>
                  
                <Form.Group className="mb-3" controlId="checkIndate">
                    <Form.Label className='roomdetails'>check in</Form.Label>
                    <Form.Control value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} type="date" placeholder="Enter email" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="checkOutdate">
                    <Form.Label className='roomdetails' >check out</Form.Label>
                    <Form.Control value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} type="date" placeholder="Enter email" />
                    
                </Form.Group>

               
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="success" onClick={bookRoom}>
                    Book Room
                </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
export default RoomDetails;