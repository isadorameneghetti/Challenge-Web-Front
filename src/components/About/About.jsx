import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function About() {
  return  (
    <div>
      {/* Banner Section */}
      <div className="banner_section layout_padding">
        <div className="container">
          <div id="main_slider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="banner_taital">
                      <h1 className="outstanding_text">Outstanding</h1>
                      <h1 className="sub_text">Formula E</h1>
                      <p className="there_text">
                        Formula E is the future of racing, combining speed, cutting-edge technology, and sustainability! Watch the world's fastest electric cars race through iconic city circuits, and experience the adrenaline of a sport that's redefining motorsport while inspiring a greener future.
                      </p>
                      <div className="learnmore_bt">
                        <a href="#">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="banner_taital">
                      <h1 className="outstanding_text">Sustainable Mobility and Emission Reduction</h1>
                      <h1 className="sub_text">"Electric Racing: Driving Towards a Greener Future"</h1>
                      <p className="there_text">
                        Formula E is a motorsport category focused on promoting sustainable mobility through 100% electric vehicles that produce no emissions during races. The category encourages innovations in battery technology and energy efficiency, with solutions that can be applied to passenger vehicles. Additionally, Formula E aims to achieve carbon neutrality in its operations, contributing to a cleaner and more sustainable future.
                      </p>
                      <div className="learnmore_bt">
                        <a href="#">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="banner_taital">
                      <h1 className="outstanding_text">Social Initiatives and Environmental Education</h1>
                      <h1 className="sub_text">"Empowering Communities: Racing for a Sustainable Tomorrow"</h1>
                      <p className="there_text">
                        In addition to the races, Formula E implements social initiatives and educational programs to promote electric mobility and environmental awareness. It conducts community activities in each city where a race takes place, aiming to inspire young people to adopt sustainable practices. The category uses its visibility to address issues such as air pollution and climate change, positioning itself as a transformative force for a greener and more inclusive future.
                      </p>
                      <div className="learnmore_bt">
                        <a href="#">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <a className="carousel-control-prev" href="#main_slider" role="button" data-bs-slide="prev">
              <i className="fa fa-angle-left"></i>
            </a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-bs-slide="next">
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_taital_main">
                <div className="about_taital">About Us</div>
                <p className="about_text">
                    Racing Towards a Sustainable Future
                </p>
                <p className="about_text">
                    Formula E is at the forefront of sustainable motorsport, showcasing fully electric race cars in urban environments since 2014. Our mission is to promote clean energy solutions and inspire the transition to electric mobility. Through thrilling races in iconic cities, we demonstrate the potential of electric vehicles while engaging communities and driving positive change. Join us in our journey towards a greener future!
                </p>
                <div className="read_bt">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_img">
                <img src="images/about-img.png" alt="About Us" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors */}
      <div className="bg-dark">
            <main className="vw-100 vh-100 d-flex flex-row justify-content-center align-items-center">
                <div
                className="logos overflow-hidden py-5 px-0 position-relative"
                style={{ backgroundColor: '#fff', whiteSpace: 'nowrap' }}
                >
                    <div className="logos-slide d-inline-block">
                        {/* Imagens */}
                        <img
                        src="https://user-images.githubusercontent.com/78242022/284359520-3a125798-774e-423b-b738-5f5e495d276d.png"
                        alt="Etsy"
                        />
                        <img
                        src="https://user-images.githubusercontent.com/78242022/284359525-2779538f-35e0-4727-89fa-04e523624630.png"
                        alt="Airbnb"
                        />
                        <img
                        src="https://user-images.githubusercontent.com/78242022/284359530-00ed0fa5-9752-46df-bc07-4ab5dfe3dded.png"
                        alt="Amazon"
                        />
                        <img
                        src="https://user-images.githubusercontent.com/78242022/284359550-db8cbcba-e2ed-48e1-81dc-c396c35893eb.png"
                        alt="Target"
                        />
                        <img
                        src="https://user-images.githubusercontent.com/78242022/284359532-4f2a2b1b-8eb7-4aaa-bda9-7d31df0d5cff.png"
                        alt="Netflix"
                        />
                        <img
                        src="https://user-images.githubusercontent.com/78242022/284359536-909db7c6-660e-495d-9568-c63bdf1fab5d.png"
                        alt="Nasa"
                        />
                        <img
                        src="https://user-images.githubusercontent.com/78242022/284359540-ba6f0359-617b-4e69-9b02-5137a6063738.png"
                        alt="Shopify"
                        />
                        <img
                        src="https://user-images.githubusercontent.com/78242022/284359552-631b683f-859c-44e5-991f-23ff98110083.png"
                        alt="Uber"
                        />
                        <img
                        src="https://user-images.githubusercontent.com/78242022/284359544-ccf33abb-f245-4c29-8f79-997e3eb206ee.png"
                        alt="Slack"
                        />
                        <img
                        src="https://user-images.githubusercontent.com/78242022/284363043-89f1bbc4-b919-4231-8b62-679785a2f20c.png"
                        alt="Google"
                        />
                        <img
                        src="https://user-images.githubusercontent.com/78242022/284359560-9b7336a9-0dff-41c0-8f94-0a3ef06b679d.png"
                        alt="Walmart"
                        />
                    </div>
                </div>
            </main>
        </div>
    </div>
  );
}

export default About;