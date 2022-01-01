import React from 'react'
import src7 from "../resources/gallery_2_hd.jpg";
import src8 from "../resources/gallery_hd_3.jpg";
import src9 from "../resources/gallery_hd_1.jpg";
import src3 from "../resources/gallery_2.jpg";
import src4 from "../resources/gallery_3.jpg";
import './carousel.css'
import { Carousel} from 'react-bootstrap';
function CarouselSlider() {

    return (

        <div className='container-fluid p-0' >
            <div className="row">
                <div className="col-12">
                    <Carousel>

                        <Carousel.Item className="carousel">
                            <img
                                className="d-block w-100"
                                src={src7}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className="carousel">
                            <img
                                className="d-block w-100"
                                src={src8}
                                alt="Second slide"
                            />

                            <Carousel.Caption style={{top:"0"}}>
                                {/* <h1 style={{color:"royalblue",fontFamily:'Bonheur Royale'}}><b>World's finest gym</b></h1> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className="carousel">
                            <img
                                className="d-block w-100"
                                src={src9}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel">
                            <img
                                className="d-block w-100"
                                src={src4}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel">
                            <img
                                className="d-block w-100"
                                src={src3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                   

                    </Carousel>
                </div>
            </div>
        </div>

    );

}

export default CarouselSlider;
