import RoomDetails from "../components/customer/HoteBooking";
import CustomerNav from "../components/CustomerNav";
import Footer from "../components/Footer";
import Navbarx from "../components/Navbarx";



function CustomerHomePage () {
    return(
        <div>
            <Navbarx />
           < CustomerNav />
           < RoomDetails />
            <Footer />
        </div>
    )
}
export default CustomerHomePage;