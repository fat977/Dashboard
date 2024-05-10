import {
  faArrowRight,
  faBagShopping,
  faChartColumn,
  faChartPie,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./index.scss";

import BarChart from "./Charts/BarChart";
import DoughnutChart from "./Charts/DoughnutChart";
import LineChart from './Charts/LineChart'
export default function Index() {


  return (
    <Container>
      <Row className="px-3 py-3">
        <div className="col-lg-3 col-6">
          <div className="box box-primary shadow">
            <div className="d-flex justify-content-between align-items-center px-2 py-3">
              <div>
                <h3>150</h3>
                <p>New Orders</p>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faBagShopping} fontSize={"70px"} />
              </div>
            </div>

            <Link to="#" className="small-box-footer text-center">
              More info <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div className="box box-success shadow">
            <div className="d-flex justify-content-between align-items-center px-2 py-3">
              <div>
                <h3>56%</h3>
                <p>Bounce Rate</p>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faChartColumn} fontSize={"70px"} />
              </div>
            </div>

            <Link to="#" className="small-box-footer text-center">
              More info <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-6 mt-3 mt-lg-0">
          <div className="box box-warning shadow">
            <div className="d-flex justify-content-between align-items-center px-2 py-3">
              <div>
                <h3>44%</h3>
                <p>Users</p>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faUserPlus} fontSize={"70px"} />
              </div>
            </div>

            <Link to="#" className="small-box-footer text-center">
              More info <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-6 mt-3 mt-lg-0">
          <div className="box box-danger shadow">
            <div className="d-flex justify-content-between align-items-center px-2 py-3">
              <div>
                <h3>65%</h3>
                <p> Visitors</p>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faChartPie} fontSize={"70px"} />
              </div>
            </div>

            <Link to="#" className="small-box-footer text-center">
              More info <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </Row>
      <Row className="mx-3 py-3">
        <Card>
          <Card.Body>
            <LineChart />
          </Card.Body>
        </Card>
      </Row>
      <Row className="px-3 py-3">
        <div className="col-lg-6 col-12 mb-3 my-lg-0">
          <Card>
            <Card.Body>
              <BarChart />
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-6 col-12 my-3 my-lg-0">
          <Card>
            <Card.Body>
              <DoughnutChart />
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  );
}
