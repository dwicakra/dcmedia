import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TogelPage from "../tools/TogelPage";

const Main = () => {
  return (
    <main style={{ paddingTop: "25px" }}>
      <div style={{ width: "95%", margin: "0 auto" }}>
        <Container fluid>
          <Row>
            <Col md={6}>
              <div className="iklan d-flex flex-column align-items-center">
                <a href="https://slotdt.com/register?referral_code=dwicakra">
                  <img
                    src="https://object-d001-cloud.akucloud.com/banner/image/promotion/DEWATOGEL%20-Tebak%20Gratis%20-%20Menu%20PRomosi.webp"
                    alt="dwt"
                    style={{ maxWidth: "100%" }}
                  />
                </a>
              </div>
            </Col>
            <Col md={6}>
              <div className="iklan d-flex flex-column align-items-center">
                <a href="https://slotdt.com/register?referral_code=dwicakra">
                  <img
                    src="https://object-d001-cloud.akucloud.com/banner/image/promotion/DewaTOgel%20-%20Bonus%20Extra%20-%20Menu%20Promosi.webp"
                    alt="dwt"
                    style={{ maxWidth: "100%" }}
                  />
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={10}>
              <div className="tools" style={{ marginTop: "20px" }}>
                <TogelPage />
              </div>
            </Col>
            <Col sm={2}>
              <div className="iklan d-flex flex-column align-items-center">
                <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                  <a
                    href="https://slotdt.com/register?referral_code=dwicakra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/iklan/olympus.jpg"
                      alt="iklan"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Main;
