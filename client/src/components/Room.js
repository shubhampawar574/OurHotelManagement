import React, { useState } from "react";
import { Button, Modal, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import img from "../resources/room.jfif";

AOS.init({
  duration: 1000,
});

const Room = ({ room, fromdate, todate }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="row justify-content-center mt-4 bs" data-aos="fade-up">
        <div className="col-md-5 m-2 my-auto">
          {/* <img src={room.imageurls[0]} alt="Room Pic" className="smallimg" />
           */}
          {room.roomImage ? (
            <img
              src={`/uploads1/${room.roomImage}`}
              alt="roomImage"
              style={{ width: " 60%" }}
            />
          ) : (
            <img src={img} alt="roomImage" style={{ width: " 60%" }} />
          )}
        </div>
        <div className="col-md-6 m-2">
          <h3>{room.name}</h3>
          <h5>{room.description}</h5>
          <h6>Type: {room.type}</h6>
          <h6>Maxcount: {room.maxcount}</h6>
          <h6>Phone no: {room.phonenumber}</h6>
          <div style={{ float: "right" }} className="mb-2">
            {fromdate && todate && (
              <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
                <button className="btn btn-primary m-3">Book Now</button>
              </Link>
            )}

            <button className="btn-dark" onClick={handleShow}>
              View Details
            </button>
          </div>
        </div>

        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

        <Modal show={show} onHide={handleClose} size="lg">
          {/* size="lg" was added manually */}
          {/* <Modal.Header closeButton> */}
          <Modal.Header>
            <Modal.Title>{room.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel prevLabel="" nextLabel="">
              {/* prevLabel="" nextLabel="" - added manually */}
              {room.roomImage ? (
                <Carousel.Item>
                  <img
                    className="d-block w-100 bigimg"
                    src={`/uploads1/${room.roomImage}`}
                    alt="First slide"
                  />
                </Carousel.Item>
              ) : (
                <Carousel.Item>
                  <img
                    className="d-block w-100 bigimg"
                    src={img}
                    alt="First slide"
                  />
                </Carousel.Item>
              )}
            </Carousel>
            <p>{room.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Room;
