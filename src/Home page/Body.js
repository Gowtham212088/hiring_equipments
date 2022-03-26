import Vision from "./Vmc";
import Footer from "./Footer";

export default function Body() {
  return (
    <div>
      <section className="section">
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
      {/* Our visin, mission and values */}

      <Vision />

      {/* Our Services  */}
      <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src="https://www.hrmagazine.co.uk/media/gm1jfaql/it_worker-small.jpg?anchor=center&mode=crop&width=1002&height=564&bgcolor=White&rnd=132588072428600000"
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h3> Rentel Workstation </h3>
                  <div className="underline"> </div>
                  <h6>
                    Providing a portable and stationary higher end workstations
                    for Professionals.
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src="https://images.edexlive.com/uploads/user/imagelibrary/2019/11/6/original/45D7-4A02-A8AC-6B54637C8d286.JPG?w=400&dpr=2.6"
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h3> Rental DSLR Cameras </h3>
                  <div className="underline"> </div>
                  <h6>
                    High clarity DSLR cameras for Renting and Stationary
                    photoshoot.
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src="https://cdn1.expresscomputer.in/wp-content/uploads/2020/05/05121112/Drones-fighting-Covid-19.jpg"
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h3> Drone Services </h3>
                  <div className="underline"> </div>
                  <h6>
                    Commercial and personal purpose drone rental services.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
