import React, { Component } from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from '../../pages/Home';
import Educators from './Educators';
import Students from './Students';
import Schools from './Schools';
// import Logout  from './Logout';
import CreateStudent from './Createstudents';
import CreateEducator from './CreateEducators';
import CreateSchool from './Createschools';
import UpdateStudent from './Updatestudents';
import Deletestudents from './Deletestudents'
import UpdateEducator from './UpdateEducators';
import UpdateSchool from './Updateschools';
import DeleteEductors from './Deleteeductors';
import DeleteSchools from './Deleteschools';
import Logout from './Logout';


export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Navbar.Brand href="/">E-Masomo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/logout">
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
            <Routes>
            <Route path="/" element={<Home/>} />
              <Route path="/educators" element={<Educators/>} />
              <Route path="/create/educator" element={<CreateEducator />} />
              <Route path="/update/educator" element={<UpdateEducator/>} />
              <Route path="/delete/educator" element={<DeleteEductors />} />
              <Route path="/students" element={<Students />} />
              <Route path="/create/student" element={<CreateStudent />} />
              <Route path="/update/student" element={<UpdateStudent />} />
              <Route path="/delete/student" element={<Deletestudents/>} />
              <Route path="/schools" element={<Schools />} />
              <Route path="/create/school" element={<CreateSchool />} />
              <Route path="/update/school" element={<UpdateSchool />} />
              <Route path="/delete/school" element={<DeleteSchools/>} />
              <Route path="/logout" element={<Logout/>} />

            </Routes>
         
        </div>
      </Router>
    );
  }
}
