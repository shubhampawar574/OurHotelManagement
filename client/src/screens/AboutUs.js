import React from "react";
import "./about.css";

function AboutUs() {
  return (
    <div className="about">
      <div
        className="container-fluid mask"
        id="aboutus"
        style={{
          padding: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <div className=" text-center bg-image rounded-3 col-md-10 ">
          <div className="row aboutusback">
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-white">
                <h1 className="mb-5" style={{ color: "yellowgreen" }}>
                  Connaught Royal Hotel
                </h1>
                <div variant="h5" style={{ marginLeft: "2rem" }}>
                  <p class="text-start lh-sm">
                    Connaught Royal Hotel Limited is India’s largest hotel chain
                    in the mid-priced hotel sector, and the third largest
                    overall, on the basis of controlling interest in owned and
                    leased rooms, as of June 30, 2017, according to the Horwath
                    Report. We operate in the upscale segment and in the
                    mid-market sector, consisting of the upper-midscale,
                    midscale and economy segments. We deliver differentiated yet
                    superior service offerings, with a value-for-money
                    proposition.
                  </p>
                  <p className="text-start lh-sm">
                    LTHL opened its first hotel with 49 rooms in May 2004 and
                    currently operates ~8,500 rooms in 87 hotels across 54
                    destinations, in India and abroad, under its various brands
                    viz. Aurika Hotels & Resorts, Red Fox Hotels, Keys Prima,
                    Keys Select and Keys Lite. As the current pipeline becomes
                    operational, LTHL will be operating ~10,450 rooms in 106
                    hotels across 64 destinations, in India and abroad.
                  </p>
                  <p className="text-start lh-sm">
                    Coonaught Royal Hotel, including Keys Hotels, are located
                    across India, in metro regions including the NCR, Mumbai,
                    Kolkata, Bengaluru, Hyderabad and Chennai, as well as
                    numerous other tier I and II cities such as Pune, Ahmedabad,
                    Chandigarh, Jaipur, Indore, Aurangabad, Udaipur,
                    Vishakhapatnam, Kochi, Ludhiana, Thiruvananthapuram and
                    Vijayawada. The company expanded internationally with hotels
                    opening in Dubai in December 2019 and in Bhutan in February
                    2020. New hotels are also set to open internationally in
                    Bhutan and Nepal.
                  </p>
                </div>
                <a
                  className="btn btn-outline-light btn-lg"
                  href="/booknow"
                  role="button"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
