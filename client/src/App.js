import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Navbar from "./components/Navbar";
import Bookingscreen from "./screens/Bookingscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Adminscreen from "./screens/Adminscreen";
import Profilescreen from "./screens/Profilescreen";
import Landingscreen from "./screens/Landingscreen";
import EditEmployeescreen from "./screens/EditEmployeescreen";
import EditRoomscreen from "./screens/EditRoomscreen";
import EditMealscreen from "./screens/EditMealscreen";
import Home from "./screens/Home";
import Form from "./screens/signupandlogin";
import ContactUs from "./screens/ContactUs";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/booknow" exact component={Homescreen} />
        <Route
          path="/book/:roomid/:fromdate/:todate"
          exact
          component={Bookingscreen}
        />
        <Route path="/login" exact component={Form} />
        <Route path="/register" exact component={Form} />
        <Route path="/admin" exact component={Adminscreen} />
        <Route path="/profile" exact component={Profilescreen} />
        <Route path="/editEmployee/:id" exact component={EditEmployeescreen} />
        <Route path="/editRoom/:id" exact component={EditRoomscreen} />
        <Route path="/editMeal/:id" exact component={EditMealscreen} />
        <Route path="/contactus" exact component={ContactUs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
