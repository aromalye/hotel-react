import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';






function FoodDetails() {

    const [data, setDatas] = useState([]);



    useEffect(() => {
        foodDetails()
    }, [])

    async function foodDetails() {
        await axios.get(`http://localhost:8080/hotelbooking/Foods`)
            .then((res) => {
                console.log(res.data, "dddd")
                console.log(res.data[0])
                setDatas(res.data)
            })  
    }

    return(
        <div className='m-3' >
            <hr></hr>
            <h3 className='text-center m-5'>Food Items</h3>
           <Row xs={1} md={4} className="g-4"  >
           {data.map((obj, index) => 
                <Col>
                <Card border="danger" style={{ width: '18rem' }}>
                    <Card.Body className='roomcard'>
                        <Card.Title className='roomdetails'>Food Name : {obj.foodType}</Card.Title>
                        {/* <Card.Text>food description</Card.Text> */}
                        <Card.Text className='roomdetails'>food price : {obj.price}</Card.Text>
                        {/* <Button onClick="" variant="primary"  > Food</Button> */}
                    </Card.Body>
                </Card>
            </Col>
        )}
            </Row>
        </div>
    )
}
export default FoodDetails;