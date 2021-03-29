import React from "react";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-elastic-carousel";

import "./Infobox.css";

const Infobox = () => {
  return (
    <div className="infobox py-5">
      <Container>
        <Row>
          <Carousel
            // itemsToShow={3}
            pagination={false}
            showArrows={false}
            breakPoints={[
              { width: 550, itemsToShow: 1, itemsToScroll: 2 },
              { width: 850, itemsToShow: 3 },
            ]}
          >
            <div className="py-3">
              <div className="card p-4 bg-light">
                <div className="icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="card-details">
                  <h3>Graduation</h3>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <button className="btn btn-md btn-primary px-4">
                    Join now
                  </button>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div className="card p-4 bg-light">
                <div className="icon">
                  <i className="fas fa-book"></i>
                </div>
                <div className="card-details">
                  <h3>Library</h3>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <button className="btn btn-md btn-primary px-4">
                    Join now
                  </button>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div className="card p-4 bg-light">
                <div className="icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="card-details">
                  <h3>Graduation</h3>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <button className="btn btn-md btn-primary px-4">
                    Join now
                  </button>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div className="card p-4 bg-light">
                <div className="icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="card-details">
                  <h3>Graduation</h3>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <button className="btn btn-md btn-primary px-4">
                    Join now
                  </button>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div className="card p-4 bg-light">
                <div className="icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="card-details">
                  <h3>Graduation</h3>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <button className="btn btn-md btn-primary px-4">
                    Join now
                  </button>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div className="card p-4 bg-light">
                <div className="icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="card-details">
                  <h3>Graduation</h3>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <button className="btn btn-md btn-primary px-4">
                    Join now
                  </button>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div className="card p-4 bg-light">
                <div className="icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="card-details">
                  <h3>Graduation</h3>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <button className="btn btn-md btn-primary px-4">
                    Join now
                  </button>
                </div>
              </div>
            </div>
          </Carousel>
        </Row>
      </Container>
    </div>
  );
};

export default Infobox;
