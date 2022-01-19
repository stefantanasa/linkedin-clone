import { Container, Row, Col } from "react-bootstrap";
import Post from "./Post";
import TopMiddle from "./TopMiddle";

const MiddlePart = (props) => {
  return (
    <Container className="rounded-lg ">
      <TopMiddle profilePicture={props.profilePicture} />
      <h1>Space</h1>
      <Post
        profilePicture={props.profilePicture}
        name={props.name}
        surname={props.surname}
      />
    </Container>
  );
};

export default MiddlePart;