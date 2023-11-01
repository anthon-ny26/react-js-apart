import { Row, Col, Container, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro" id="home">
      <Container className="text-white d-flex justify-content-center">
        <Row>
          <Col>
            <div className="title">GAK PAKE DRAMA?</div>
            <div className="title">APARTEMEN AJA!</div>
            {/* <div className="introButton mt-4 text-center">
              <Button variant="dark">Lihat Detail</Button>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Intro;
