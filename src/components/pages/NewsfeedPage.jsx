import { Container, Row, Col } from "react-bootstrap";
import LeftSide from "../newsfeed/LeftSide";
import MiddlePart from "../newsfeed/MiddlePart";
import RightSide from "../newsfeed/RightSide";
import MyNavbar from "../Navbar/MyNavbar";
import MyFooter from "../Footer/MyFooter";

const NewsfeedPage = (props) => {
  return (
    <Container>
      <MyNavbar />
      <Row>
        <Col md={3}>
          <LeftSide />
        </Col>
        <Col md={6}>
          <MiddlePart
            profilePicture={props.profilePicture}
            name={props.name}
            surname={props.surname}
            posts = {props.posts}
            submitNewPost={props.submitNewPost}
            
          />
        </Col>
      

        <Col md={3}>
          <RightSide />
        </Col>
      </Row>

      <Row>
        <MyFooter />
      </Row>
    </Container>
  );
};

export default NewsfeedPage;
