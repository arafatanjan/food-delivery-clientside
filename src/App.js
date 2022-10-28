import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Loggedin from './components/Loggedin/Loggedin';
import Booking from './components/Booking/Booking';
import Dashboard from './components/Dashboard/Dashboard';
import Authprovider from './Context/Authprovider';
// import Privateroute from './Components/PrivateRoute/Privateroute';
import RequiredAuth from './components/PrivateRoute/RequiredAuth';
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home/Home";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import Users from "./components/Users/Users";
import Header from './components/Header/Header';
import initializeAuthentication from "./Firebase/firebase.initialize";

import app from './Firebase/firebase.config'
import auth from './Firebase/firebase.config';
import AddService from "./components/AddService/AddService";
import ManageServices from "./components/ManageServices/ManageServices";
import AllOrder from "./components/AllOrders/AllOrder";


function App() {
  return (
    <div className="App">
      <Authprovider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}>

            </Route>
            <Route path='home' element={<Home></Home>}>

            </Route>

            <Route exact path='about' element={<About></About>}>

            </Route>
            <Route path='services' element={<Services></Services>}>
            </Route>
            <Route path="users/add" element={<AddUser></AddUser>}>
            </Route>
            <Route path="addservice" element={<AddService></AddService>}>
            </Route>
            <Route exact path="orders/update/:id" element={<Users></Users>}>
            </Route>
            <Route path="users" element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>}>
            </Route>
            {/* <Route path="/users/add" element={<AddUser></AddUser>}></Route> */}
            <Route path='loggedin' element={<Loggedin></Loggedin>}></Route>
            <Route path='manageServices' element={<ManageServices></ManageServices>}></Route>
            <Route path='allorder' element={<AllOrder></AllOrder>}></Route>

            {/* <Route path='/booking/:serviceId' element={<RequiredAuth><AddUser></AddUser></RequiredAuth>}></Route> */}
            <Route path='booking/:serviceId' element={<RequiredAuth><Booking></Booking></RequiredAuth>}></Route>

            <Route path='*' element={<Notfound></Notfound>}>

            </Route>

          </Routes>

        </Router>
      </Authprovider>

    </div >
  );
  // 
  // <div className="App">
  //   <Router>
  //     <div>
  //       <Header></Header>
  //       <Switch>
  //         <Route exact path="/">
  //           <Home></Home>
  //         </Route>
  //         <Route exact path="/users">
  //           <Users></Users>
  //         </Route>
  //         <Route path="/users/add">
  //           <AddUser></AddUser>
  //         </Route>

  //         <Route path="/users/update/:id">
  //           <UpdateUser></UpdateUser>
  //         </Route>

  //       </Switch>
  //     </div>
  //   </Router>
  // </div>

}

export default App;
