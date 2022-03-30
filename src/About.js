import Footer from "./Home page/Footer";
import Vision from "./Home page/Vmc";
export default function About() {
  return (
    <div>
      <section className="section1">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">
                Our company
                <div className="underline mx-auto"></div>
                <h5 className="main-heading">
                  Rental Management, Inc.’s vision is to continue to be the
                  property management company of choice, providing full service
                  and care to our clients, properties, and to our team members
                  by setting the standard in the multi-family housing, property
                  management, and development industries
                </h5>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section id="vmc" className="section bg-c-light border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4 text-center">
                <h3 className="main-heading">
                  Vision, Mission and Values
                  <div className="underline mx-auto"></div>{" "}
                </h3>
              </div>

              <div className="col-md-4 text-center">
                <h4> Our Vision </h4>
                <h6>
                  vision is to continue to be the property management company of
                  choice, providing full service and care to our clients,
                  properties, and to our team members by setting the standard in
                  the multi-family housing, property management, and development
                  industries.
                </h6>
              </div>

              <div className="col-md-4 text-center">
                <h4> Our Mission </h4>
                <h6>
                  The key to our growth and prosperity is a direct result of our
                  exceptional management team and together we strive for
                  excellence and to ensure the success of our client, the
                  well-being of our properties and the future of Rentify Rental
                  Management, Inc.
                </h6>
              </div>

              <div className="col-md-4 text-center">
                <h4> Our Core Value</h4>
                <h6>
                  A solid value foundation. Strong supporting pillars. A promise
                  we fight to keep. A lofty goal we are prepared to reach. These
                  are the makings.Our values drive our every action and decision
                  from planning to management, from investments to
                  administration.
                </h6>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
