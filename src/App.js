import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./component/RegisterForm";
import ContactList from "./component/ContactList";
import phonebook from "./phonebook.png";

//1. There are register form on the left side and contact list and search bar on the right side.
//2. A user can resister to phone book with name and phone number.
//3. Showing the number of contacts above the contacts
//4. A user can search contact with name

function App() {
  return (
    <div className="App">
      <h1 className="title mt-5">
        <span>
          {" "}
          <img
            src={phonebook}
            alt="Phonebook"
            className="phonebook-icon"
          />{" "}
        </span>
        Phone book
      </h1>
      <Container>
        <Row className="gap-4 mt-5">
          <Col>
            <RegisterForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
