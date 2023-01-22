import Alert from 'react-bootstrap/Alert';
import '../register.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';




function BookingCompleted() {

    const navigate = useNavigate()

    const clearData = () => {
        localStorage.removeItem('customer')
        localStorage.removeItem('customer_id')
        navigate("/")
    }

    return(
      <div className='alert'>
          <Alert variant="success">
          Booking Finished Sucssesfully !!
          </Alert>
          <div className='m-5'>
            <Button href="/customer" className='m-3' variant="success">Check More</Button>{' '}
            <Button onClick={clearData} className='m-3' variant="danger">Logout</Button>{' '}
          </div>
       
      </div>

    )
}
export default BookingCompleted;