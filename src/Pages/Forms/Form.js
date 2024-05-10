import {
  Button,
  Card,
  Col,
  InputGroup,
  Row,
  Form,
  DropdownButton,
  Dropdown,
  FloatingLabel,
} from "react-bootstrap";
import "./Form.scss";
import { useState } from "react";
export default function BasicForm() {
  const [validated, setValidated] = useState(false);
  const [err, setErr] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  function handleFormChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event) => {
    const forms = event.currentTarget;
    if (forms.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (form.confirm_password !== form.password) {
      setErr("error");
    } else {
      setErr("");
    }

    setValidated(true);
  };
  return (
    <div className="w-100">
      <Card className="d-block m-5 shadow">
        <Card.Header className="p-3">Basic Form With Validation</Card.Header>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                onChange={handleFormChange}
                value={form.name}
                name="name"
              />
              {form.name === "" && (
                <Form.Control.Feedback type="invalid">
                  Please enter your name
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                onChange={handleFormChange}
                value={form.email}
                name="email"
              />
              {err !== "" && <span className="error">{err}</span>}
              {form.email === "" && (
                <Form.Control.Feedback type="invalid">
                  Please enter your email
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                onChange={handleFormChange}
                value={form.password}
                name="password"
                minLength="8"
                required
              />
              {form.password === "" ? (
                <Form.Control.Feedback type="invalid">
                  Please enter password
                </Form.Control.Feedback>
              ) : (
                form.password.length < 8 && (
                  <Form.Control.Feedback type="invalid">
                    Password must be more than 8 char
                  </Form.Control.Feedback>
                )
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom04">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={handleFormChange}
                value={form.confirm_password}
                name="confirm_password"
                required
                className={`${err}` !== "" && "form-control is-invalid"}
              />
              {form.confirm_password === "" && (
                <Form.Control.Feedback type="invalid">
                  This field can't be empty
                </Form.Control.Feedback>
              )}
              {form.confirm_password !== form.password &&
                form.confirm_password !== "" && (
                  <p style={{ color: "red" }}>
                    Confirm password does not match password
                  </p>
                )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button className="submit" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Card className="d-block m-5 shadow">
        <Card.Header className="p-3">Additional Inputs</Card.Header>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Label>Floating Input</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control className="floating" type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <Form.Group className="mb-3" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.SelextBox1">
              <Form.Label>Select Box</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>

            <Row className="mb-3">
              <Form.Label>Check Box</Form.Label>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                {["checkbox", "radio"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check // prettier-ignore
                      type={type}
                      id={`default-${type}`}
                      label={`default ${type}`}
                    />

                    <Form.Check
                      disabled
                      type={type}
                      label={`disabled ${type}`}
                      id={`disabled-default-${type}`}
                    />
                  </div>
                ))}
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  label="Check this switch"
                />
                <Form.Check // prettier-ignore
                  disabled
                  type="switch"
                  label="disabled switch"
                  id="disabled-custom-switch"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Range</Form.Label>
              <Form.Range />
            </Form.Group>

            <Form.Label>Input Group</Form.Label>
            <InputGroup className="mb-3">
              <Button variant="outline-secondary" id="button-addon1">
                Button
              </Button>
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <Form.Label>Button Dropdowns</Form.Label>
            <InputGroup className="mb-3">
              <DropdownButton
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <Form.Control aria-label="Text input with dropdown button" />
            </InputGroup>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
