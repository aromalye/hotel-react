import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Footer() {
    return(
        <div>
        <Row className='mt-5' style={{backgroundColor:'#fefae0',color:'black'}}>
        
        <Col align='center' style={{float:'left'}} className='my-5' lg={6} >
           <p style={{color:'black',fontWeight:'bold'}}>CONTACT</p>
           <p style={{color:'green'}}>hotelx@gmail.com</p>
        </Col>

        <Col align='center' style={{float:'left'}} className='my-5' lg={6} >
           <p style={{color:'black',fontWeight:'bold'}}>SOCIALIZE</p>
           <p style={{color:'green'}}>https://facebook.com/hotelx</p>
           <p style={{color:'green'}}>https://linkedin.com/hotelx</p>
        </Col>
     </Row>

     <Row  style={{backgroundColor: 'black' ,color:'beige'}}>
       
        <Col align='center' style={{float:'left'}} className='my-5' lg={12} >
        <p style={{color:'grey',fontWeight:'bold'}}>Copyright hotelx © 2022 - 2023 All rights reserved</p>
        </Col>
     </Row>
     </div>
    )
}
export default Footer;