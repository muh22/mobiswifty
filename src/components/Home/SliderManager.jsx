import Carousel from "react-bootstrap/Carousel";
import slider_img1 from "../../images/sliders/slider-bg-n1.jpg";
// import slider_img2 from "../../images/sliders/slider-bg-n2.jpg";
// import slider_img3 from "../../images/sliders/slider-bg-n3.jpg";
// import slider_img4 from "../../images/sliders/slider-bg-n4.jpg";
// import slider_img5 from "../../images/sliders/slider-bg-n5.jpg";
// import slider_img6 from "../../images/sliders/slider-bg-n6.jpg";
// import slider_img7 from "../../images/sliders/slider-bg-n7.jpg";
// import slider_img8 from "../../images/sliders/slider-bg-n8.jpg";

function SliderManager() {
  return (
    <Carousel variant="orange" fade style={{ borderRadius: 5 }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider_img1}
          alt="Loading Mobiswift..."
        />
        <Carousel.Caption class="aligner">
          <p>
            <a href="/home" class="aligners">
              <b>README</b>
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  );
}

export default SliderManager;
