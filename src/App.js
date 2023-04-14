import './App.css';
import Contact from './Components/Landing/Contact';
import Footer from './Components/Landing/Footer';
import Header from './Components/Landing/Header';
import Middle from './Components/Landing/Middle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Authorize/Login';
import Register from './Components/Authorize/Register';
import Dashboard from "./Components/Dashboard/DashboardInn/Dashboard"
import FriendZone from './Components/Dashboard/FriendZone/FriendZone';
import ChatDashboard from './Components/Dashboard/ChatDashboard/ChatDashboard';
import axios from 'axios';


function App() {

  axios.get("http://localhost:8080/chatsapp").then(response=>{
    console.log(response);
  }).catch(err=>{
    console.log(err);
  })

  return (
    <div className="App">

      <div className="hiro-loader"></div>

      <Router>
        <Routes>
          <Route exact path="/" element={<>
            <Header />
            <Middle />
            <Contact />
            <Footer />
          </>} />
          <Route exact path='/login' element={
            <Login />
          } />
          <Route exact path='/register' element={
            <Register />
          } />
          <Route exact path='userid/' element={<Dashboard />} />
          <Route exact path='userid/friends' element={<FriendZone />} />
          <Route exact path='userid/chat' element={<ChatDashboard />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
