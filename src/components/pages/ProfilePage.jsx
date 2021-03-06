
import { Row, Col, Container } from "react-bootstrap";
import About from "../about/About";
import Accomplishments from "../accomplishments/Accomplishments";
import Activity from "../Activity/Activity";
import Causes from "../causes/Causes";
import Dashboard from "../dashboard/Dashboard";
import Experiences from "../experiences/Experiences";
import Interests from "../interests/Interests";
import Profile from "../profile/Profile";
import Skills from "../skills/Skills";
import MyNavbar from '../Navbar/MyNavbar'
import MyFooter from '../Footer/MyFooter'
import { Link } from "react-router-dom";



const ProfilePage = () => {
    return ( 
        <Container>
          <Row>
          <MyNavbar />
          </Row>
        <Row>
          <Col xs={8}>
                <Link to="/newsfeed">Newsfeed</Link>
              <Profile />
              <Dashboard />
              <About />
              <Activity />
              <Experiences />
              <Skills />
              <Accomplishments />
              <Interests />
              <Causes name={"Stefan"} surname={"Tanasa"}/>

          </Col>
          <Col sx={4}>
            <h1>Sidebar</h1>
          </Col>
        </Row>
        <Row>
          <MyFooter />
        </Row>
      </Container>
     );
}
 
export default ProfilePage;