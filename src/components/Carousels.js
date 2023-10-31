import { Carousel, Image } from "react-bootstrap";
import carousel1 from "../images/carousel1.jpg";
import carousel2 from "../images/carousel2.jpg";

function Carousels() {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <Image src={carousel1} height={365} width={1350} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={carousel2} height={365} width={1350} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
