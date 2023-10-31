import { Container, Image } from "react-bootstrap";
import "../styles/landingPage.css";
import logo1 from "../assets/images/logo/logo1.png";

const footer = () => {
  return (
    <Container>
      <div className="main-footer" id="contact-us">
        <div>
          <div className="row">
            <div className="col">
              <Image src={logo1} className="logo-footer" />
            </div>
            <div className="col">
              <h4>Address</h4>
              <ul className="list-unstyled">
                <li>Jl. Ahmad Yani</li>
                <li>No. kav 20, 17141</li>
                <li>Bekasi Selatan,Indonesia</li>
              </ul>
            </div>
            <div className="col">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>0822-xxxx-xxxx (Name)</li>
                <li>0878-xxxx-xxxx (Name)</li>
                <li>
                  <Image
                    src={logo1}
                    onClick={() => window.open("https://www.instagram.com/")}
                    className="social-media"
                  />
                  <Image
                    src={logo1}
                    onClick={() => window.open("https://youtube.com/")}
                    className="social-media"
                  />
                  <Image
                    src={logo1}
                    onClick={() => window.open("https://tiktok.com/")}
                    className="social-media"
                  />
                  {/* <Image
                    src={logo1}
                    onClick={() => window.open("https://facebook.com/")}
                    className="social-media"
                  /> */}
                </li>
              </ul>
            </div>
            <div className="col"></div>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Bintang Residence
          </p>
        </div>
      </div>
    </Container>
  );
};

export default footer;
