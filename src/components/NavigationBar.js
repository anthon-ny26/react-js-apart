import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
// import Image from "react-bootstrap"
//
const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        {/* <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png"
          height={20}
        /> */}
        <Navbar.Brand href="#top-page">Bintang Residence</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#top-page">Home</Nav.Link>
            <NavDropdown title="Rooms" id="basic-nav-dropdown">
              <NavDropdown.Item href="#towera">Tower A</NavDropdown.Item>
              <NavDropdown.Item href="#towerb">Tower B</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Tower C</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Tower D</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
