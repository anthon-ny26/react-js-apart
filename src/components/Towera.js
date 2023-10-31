import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import room1 from "../assets/images/towera/room1.jpg";
import room2 from "../assets/images/towera/room2.jpg";
import room3 from "../assets/images/towera/room3.jpg";
import room4 from "../assets/images/towera/room4.jpg";
import room5 from "../assets/images/towera/room5.jpg";
import room6 from "../assets/images/towera/room6.jpg";

const Towerb = () => {
  return (
    <div>
      <Container>
        <h1>Tower A</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="towera">
            <Card className="towerImage bg-dark text-white">
              <Image variant="top" src={room1} alt="room1" className="images" />
              <Card.Body>
                <Card.Title>A 101</Card.Title>
                <Card.Text>1 BR | Tower A | Floor 1</Card.Text>
                <Row>
                  <Col md={4}>RP.1.500.000</Col>
                  <Col md={3}></Col>
                  <Col md={5}>
                    <div className="text-end ">
                      <Button
                        variant="primary"
                        onClick={() =>
                          window.open(
                            "https://wa.me/6281293769364?text=Bintang%20tower%20A%20Unit%20A101%20nya%20ready%20gak%20ya?%20Saya%20mau%20chek-in%20nih"
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
                <Card.Title>A 102</Card.Title>
                <Card.Text>1 BR | Tower A | Floor 1</Card.Text>
                <Row>
                  <Col md={4}>RP.1.500.000</Col>
                  <Col md={3}></Col>
                  <Col md={5}>
                    <div className="text-end ">
                      <Button
                        variant="primary"
                        onClick={() =>
                          window.open(
                            "https://wa.me/6281293769364?text=Bintang%20tower%20A%20Unit%20A102%20nya%20ready%20gak%20ya?%20Saya%20mau%20chek-in%20nih"
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
                <Card.Title>A 103</Card.Title>
                <Card.Text>1 BR | Tower A | Floor 1</Card.Text>
                <Row>
                  <Col md={4}>RP.1.500.000</Col>
                  <Col md={3}></Col>
                  <Col md={5}>
                    <div className="text-end ">
                      <Button
                        variant="primary"
                        onClick={() =>
                          window.open(
                            "https://wa.me/6281293769364?text=Bintang%20tower%20A%20Unit%20A103%20nya%20ready%20gak%20ya?%20Saya%20mau%20chek-in%20nih"
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
                <Card.Title>A 104</Card.Title>
                <Card.Text>1 BR | Tower A | Floor 1</Card.Text>
                <Row>
                  <Col md={4}>RP.1.500.000</Col>
                  <Col md={3}></Col>
                  <Col md={5}>
                    <div className="text-end ">
                      <Button
                        variant="primary"
                        onClick={() =>
                          window.open(
                            "https://wa.me/6281293769364?text=Bintang%20tower%20A%20Unit%20A104%20nya%20ready%20gak%20ya?%20Saya%20mau%20chek-in%20nih"
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
                <Card.Title>A 105</Card.Title>
                <Card.Text>1 BR | Tower A | Floor 1</Card.Text>
                <Row>
                  <Col md={4}>RP.1.500.000</Col>
                  <Col md={3}></Col>
                  <Col md={5}>
                    <div className="text-end ">
                      <Button
                        variant="primary"
                        onClick={() =>
                          window.open(
                            "https://wa.me/6281293769364?text=Bintang%20tower%20A%20Unit%20A105%20nya%20ready%20gak%20ya?%20Saya%20mau%20chek-in%20nih"
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
                <Card.Title>A 106</Card.Title>
                <Card.Text>1 BR | Tower A | Floor 1</Card.Text>
                <Row>
                  <Col md={4}>RP.1.500.000</Col>
                  <Col md={3}></Col>
                  <Col md={5}>
                    <div className="text-end ">
                      <Button
                        variant="primary"
                        onClick={() =>
                          window.open(
                            "https://wa.me/6281293769364?text=Bintang%20tower%20A%20Unit%20A106%20nya%20ready%20gak%20ya?%20Saya%20mau%20chek-in%20nih"
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

export default Towerb;
