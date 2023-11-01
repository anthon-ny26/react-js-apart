import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import room1 from "../assets/images/towera/room1.jpg";
import room2 from "../assets/images/towera/room2.jpg";
import room3 from "../assets/images/towera/room3.jpg";
import room4 from "../assets/images/towera/room4.jpg";
import room5 from "../assets/images/towera/room5.jpg";
import room6 from "../assets/images/towera/room6.jpg";

const Towera = () => {
  return (
    <div>
      <Container>
        <h1>Tower B</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="towerb">
            <Card className="towerImage bg-dark text-white">
              <Image variant="top" src={room1} alt="room1" className="images" />
              <Card.Body>
                <Card.Title>B 101</Card.Title>
                <Card.Text>1 BR | Tower B | Floor 1</Card.Text>
                <Row>
                  <Col md={5}>RP. 300.000 / Day</Col>
                  <Col md={2}></Col>
                  <Col md={5}>
                    <div className="text-end ">
                      <Button
                        variant="primary"
                        onClick={() =>
                          window.open(
                            "https://wa.me/6281293769364?text=Bintang%20tower%20B%20Unit%20B101%20nya%20ready%20gak%20ya?%20Saya%20mau%20chek-in%20nih"
                          )
                        }
                      >
                        Pesan Sekarang
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="towerImage bg-dark text-white">
              <Image variant="top" src={room2} alt="room1" className="images" />
              <Card.Body>
                <Card.Title>B 102</Card.Title>
                <Card.Text>1 BR | Tower B | Floor 1</Card.Text>
                <Row>
                  <Col md={5}>RP. 300.000 / Day</Col>
                  <Col md={2}></Col>
                  <Col md={5}>
                    <div className="text-end ">
                      <Button
                        variant="primary"
                        onClick={() =>
                          window.open(
                            "https://wa.me/6281293769364?text=Bintang%20tower%20B%20Unit%20B102%20nya%20ready%20gak%20ya?%20Saya%20mau%20chek-in%20nih"
                          )
                        }
                      >
                        Pesan Sekarang
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="towerImage bg-dark text-white">
              <Image variant="top" src={room3} alt="room1" className="images" />
              <Card.Body>
                <Card.Title>B 103</Card.Title>
                <Card.Text>1 BR | Tower B | Floor 1</Card.Text>
                <Row>
                  <Col md={5}>RP. 300.000 / Day</Col>
                  <Col md={2}></Col>
                  <Col md={5}>
                    <div className="text-end ">
                      <Button
                        variant="primary"
                        onClick={() =>
                          window.open(
                            "https://wa.me/6281293769364?text=Bintang%20tower%20B%20Unit%20B103%20nya%20ready%20gak%20ya?%20Saya%20mau%20chek-in%20nih"
                          )
                        }
                      >
                        Pesan Sekarang
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="towerImage bg-dark text-white">
              <Image variant="top" src={room4} alt="room1" className="images" />
              <Card.Body>
                <Card.Title>B 104</Card.Title>
                <Card.Text>1 BR | Tower B | Floor 1</Card.Text>
                <Row>
                  <Col md={5}>RP. 300.000 / Day</Col>
                  <Col md={2}></Col>
                  <Col md={5}>
                    <div className="text-end ">
                      <Button
                        variant="primary"
                        onClick={() =>
                          window.open(
                            "https://wa.me/6281293769364?text=Bintang%20tower%20B%20Unit%20B104%20nya%20ready%20gak%20ya?%20Saya%20mau%20chek-in%20nih"
                          )
                        }
                      >
                        Pesan Sekarang
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="towerImage bg-dark text-white">
              <Image variant="top" src={room5} alt="room1" className="images" />
              <Card.Body>
                <Card.Title>B 105</Card.Title>
                <Card.Text>1 BR | Tower B | Floor 1</Card.Text>
                <Row>
                  <Col md={5}>RP. 300.000 / Day</Col>
                  <Col md={2}></Col>
                  <Col md={5}>
                    <div className="text-end ">
                      <Button
                        variant="primary"
                        onClick={() =>
                          window.open(
                            "https://wa.me/6281293769364?text=Bintang%20tower%20B%20Unit%20B105%20nya%20ready%20gak%20ya?%20Saya%20mau%20chek-in%20nih"
                          )
                        }
                      >
                        Pesan Sekarang
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="towerImage bg-dark text-white">
              <Image variant="top" src={room6} alt="room1" className="images" />
              <Card.Body>
                <Card.Title>B 106</Card.Title>
                <Card.Text>1 BR | Tower B | Floor 1</Card.Text>
                <Row>
                  <Col md={5}>RP. 300.000 / Day</Col>
                  <Col md={2}></Col>
                  <Col md={5}>
                    <div className="text-end ">
                      <Button
                        variant="primary"
                        onClick={() =>
                          window.open(
                            "https://wa.me/6281293769364?text=Bintang%20tower%20B%20Unit%20B106%20nya%20ready%20gak%20ya?%20Saya%20mau%20chek-in%20nih"
                          )
                        }
                      >
                        Pesan Sekarang
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Towera;
