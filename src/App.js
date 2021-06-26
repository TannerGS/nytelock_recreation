import React, {useState} from 'react';
import {
  Card, CardText, CardBody, Button, Container, Row, Col
} from 'reactstrap';
import Square from './Components/Square';

import './App.css';

const App = () => {
  let [message, setMessage] = useState('')

  return (
    <div className="Card">
      <Card body inverse style={{ backgroundColor: '#5a5a5a', borderColor: '#5a5a5a', borderRadius: 10 }}>
        <CardBody className="cardBody">
          <CardText>
            <p>
              HOW DO I KNOW WHICH LOGO STYLE IS RIGHT FOR ME?
            </p>
            <span>
              Different Types of Logo Styles
            </span>
            <Button className="contactButton">Contact Us</Button>
          </CardText>
          <Container>
            <Row>
              <Col><Square logo={<i class="fas fa-italic fa-lg"></i>} title="Lettermark Logos"/></Col>
              <Col><Square logo={<i class="fab fa-weebly fa-lg"></i>} title="Wordmark Logos"/></Col>
              <Col><Square logo={<i class="fas fa-lemon fa-lg"></i>} title="Pictorial Mark Logos"/></Col>
              <Col><Square logo={<i class="fab fa-artstation fa-lg"></i>} title="Abstract Mark Logos"/></Col>
              <Col><Square logo={<i class="fas fa-theater-masks fa-lg"></i>} title="Mascot Logos"/></Col>
              <Col><Square logo={<i class="fas fa-puzzle-piece fa-lg"></i>} title="Combination Logos"/></Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
      <Button onClick={() => {
        setMessage(message='New Message')
      }}>Change Message</Button>
      <p>
        {message}
      </p>
    </div>
  );
}

export default App;
