import './landingpage.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import img from "../assets/images/hotellandingpg.webp"
function LandingPage() {
    return(
        // <div>
        <div className='landing' style={{"backgroundImage":`url(${ img })`}}>
            <h1 className="mainhead">Hotel x</h1>
            <p className="desc"><strong>Perched on a clifftop, nestled within the serene environs of 67 acres of lush greenery, lies this balmy paradise, The Leela Kovalam, A Raviz Hotel. Ensconced in a grove of coconut palms, lapped by emerald seas and cradled by spectacular crescent beaches, soak in panoramic vistas and witness the most stunning sea views and breath-taking sunsets.
            Designed by the famous architect Charles Correa, this is where timeless charm meets modern elegance with a distinctive sense of place. Enriching cultural discovery with original local art, immersive rituals, healing ayurvedic treatments and culinary journeys that celebrate the true essence of the land come together to create an incredible sensory haven of stunning sights, transformative sounds and flavourful tastes for the discerning experience seeker.</strong></p>
            <ListGroup className='landinglist'>
                <Link to="/customer/register">
                <ListGroup.Item className='m-1' action variant="light">
                    Customer
                </ListGroup.Item>
                </Link>

                <Link to="/admin/register">
                <ListGroup.Item className='m-1' action variant="light">
                    Admin
                </ListGroup.Item>
                </Link>

                <Link to="/manager/signin">
                <ListGroup.Item className='m-1' action variant="light">
                    Manager
                </ListGroup.Item>
                </Link>
                
                <Link to="/staff/signin">
                <ListGroup.Item className='m-1' action variant="light">
                    Staff
                </ListGroup.Item>
                </Link>

                <Link to="/chef/signin">
                <ListGroup.Item className='m-1' action variant="light">
                    Chef
                </ListGroup.Item>
                </Link>
                
            </ListGroup>
        </div>
    )
}
export default LandingPage;