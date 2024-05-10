import {
  Button,
  Card,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./Auth.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
export default function Login() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  function handleFormChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <div className="login">
      <Container>
        <Row className="align-items-center">
          <div className="col-12 col-md-6 col-xl-7">
            <div className="d-flex justify-content-start details">
              <div className="col-12 col-xl-9 mx-2 mt-5  m-md-2 m-lg-0">
                <h1>Welcome !</h1>
                <hr className="border-primary-subtle mb-4" />
                <h2 className="h1 mb-4">
                  We make digital products that drive you to stand out.
                </h2>
                <p className="lead mb-5">
                  We write words, take photos, make videos, and interact with
                  artificial intelligence.
                </p>
                <div className="text-endx">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    fill="currentColor"
                    className="bi bi-grip-horizontal"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <Card className="d-block my-5 shadow  login-card px-3 py-4">
              <h3 className="mt-3 text-center">Login</h3>
              <Card.Body>
                <Form>

                  <Form.Group className="mb-3" controlId="validationCustom02">
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>

                      <Form.Control
                        required
                        type="email"
                        aria-describedby="inputGroupPrepend"
                        placeholder="Email"
                        onChange={handleFormChange}
                        value={form.email}
                        name="email"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="validationCustom03">
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faLock} />
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        onChange={handleFormChange}
                        value={form.password}
                        name="password"
                        minLength="8"
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Row className="d-flex mb-3  justify-content-between">
                    <Form.Group className="col-6 col-lg-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          name="remember_me"
                          id="remember_me"
                        />
                        <label
                          className="form-check-label text-secondary"
                          htmlFor="remember_me"
                        >
                          Remember me
                        </label>
                      </div>
                    </Form.Group>
                    <Form.Group className="col-6 col-lg-6">
                      <div className="text-end">
                        <a
                          href="#!"
                          className="link-secondary text-decoration-none"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </Form.Group>
                  </Row>

                  <Button
                    className="submit btn btn-lg d-block w-100"
                    type="submit"
                  >
                    Sign in
                  </Button>
                </Form>
                <div className="text-center my-2">or sign in with </div>
                <div className="social-icons col-12 col-lg-12 gap-3 mb-3 d-flex justify-content-center align-items-center">
                
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faGoogle} />
                </div>
                <div>
                  <p className="text-muted m-0 text-center">
                  Don't have an account? <Link to="/register"> Sign up</Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
      <div /* className="d-flex justify-content-center align-items-center" */>
        {/* <img
          src={require("../../Assets/auth/kisspng-dashboard-computer-icons-portable-network-graphics-5c5ceb52c95c80.3217693415495934268248.png")}
          width="400px"
          alt="auth"
        /> */}

        {/*  <img
          src={require("../../Assets/auth/kisspng-dashboard-computer-icons-portable-network-graphics-5c5ceb52c95c80.3217693415495934268248.png")}
          width="200px"
          alt="auth"
        /> */}
      </div>
    </div>
  );
}
