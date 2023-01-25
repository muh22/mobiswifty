import Carousel from 'react-bootstrap/Carousel';
import sliderNo1 from "../../images/background/signin-bg-n1.jpeg";



function SigninSliderManager() {
  return (
    <Carousel controls={false} variant="orange" fade style={{ borderRadius: 10}}>
       <Carousel.Item >
        <img
          className="d-block w-100"
          src={sliderNo1}
          alt="sign-in slide"/>
        <Carousel.Caption class="aligner">
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default SigninSliderManager;