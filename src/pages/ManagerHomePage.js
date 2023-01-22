import CustomerDetails from "../components/customer/CustomerDetails";
import Footer from "../components/Footer";
import Navbarx from "../components/Navbarx";
import ManagerNav from "../components/manager/ManagerNav"





function Managerpage() {
    return(
        <div>
            < Navbarx />
            < ManagerNav /> 
            < CustomerDetails />
            < Footer />

        </div>
    )
}
export default Managerpage;