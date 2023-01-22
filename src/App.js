
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import AdminHomePage from "./pages/AdminHomePage";
import ChefDetailsPage from "./pages/ChefDetailsPage";
import CustomerDetailsPage from "./pages/CustomerDetailsPage";
import CustomerHomePage from "./pages/CustomerHomePage";
import CustomerRegister from "./components/customer/CustomerRegister"
import ManagerChefPage from "./pages/ManagerChefPage";
import ManagerRegister from "./components/manager/ManagerRegister"
import ManagerSignin from "./components/manager/ManagerSignin"
import AdminSignin from "./components/admin/AdminSignin"
import AdminRegister from "./components/admin/AdminRegister"
import StaffRegister from "./components/staff/StaffRegister"
import StaffSignin from "./components/staff/StaffSignin"
import ChefRegister from "./components/chef/ChefRegister"
import ChefSignin from "./components/chef/ChefSignin"
import ManagerStaffPage from "./pages/ManagerStaffPage";
import ManagerHomePage from "./pages/ManagerHomePage"
import StaffDetailsPage from "./pages/StaffDetailsPage";
import StaffHomePage from "./pages/StaffHomePage";
import ChefHomePage from "./pages/ChefHomePage";
import BookingCompleted from "./components/customer/BookingCompleted";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element= {< LandingPage />} />
        <Route exact path="/customer" element= {< CustomerHomePage />} />
        <Route exact path="/customer/register" element= {< CustomerRegister />} />
        <Route exact path="/customer/food" element= {< FoodDetailsPage />} />
        <Route exact path="/customer/restaurants" element= {< RestaurantDetailsPage />} />



         {/* manager */}
        <Route exact path='/manager' element={<ManagerHomePage/>} />
        <Route exact path='/manager/register' element={<ManagerRegister/>} />
        <Route exact path='/manager/signin' element={<ManagerSignin/>} />
        <Route exact path='/manager/staff' element={< ManagerStaffPage />} />
        <Route exact path='/manager/chef' element={< ManagerChefPage />} />


          {/* Admin */}
        <Route exact path='/admin' element={<AdminHomePage/>} />
        <Route exact path='/admin/register' element={<AdminRegister/>} />
        <Route exact path='/admin/signin' element={<AdminSignin/>} />

        {/* staff */}
        <Route exact path='/staff' element={<StaffHomePage/>} />
        <Route exact path='/staff/register' element={<StaffRegister/>} />
        <Route exact path='/staff/signin' element={<StaffSignin/>} />

        
      {/* chef */}
      <Route exact path='/chef' element={< ChefHomePage />} />
      <Route exact path='/chef/register' element={<ChefRegister/>} />
      <Route exact path='/chef/signin' element={<ChefSignin/>} />

      <Route exact path='/customerdetails' element={<CustomerDetailsPage/>} />
      <Route exact path='/staffdetails' element={<StaffDetailsPage/>} />
      <Route exact path='/chefdetails' element={<ChefDetailsPage/>} />
      <Route exact path='/roombooked' element={<BookingCompleted/>} />



=

      </Routes>
    </Router>
  );
}

export default App;
