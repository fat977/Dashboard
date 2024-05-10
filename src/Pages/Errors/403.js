import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../../Assets/errors/header-img.svg";
/* import { ArrowRightCircle } from 'react-bootstrap-icons';
 */ import "./error.scss";
import { Link } from "react-router-dom";
export const Error403 = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Error 403 Unauthorized process !"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section
      className="banner d-flex align-items-center justify-content-between"
      id="home"
    >
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <Link to="/" className="tagline">
              Return to dashboard !
            </Link>
            <h1>
              <span
                className="txt-rotate"
                period={period}
                data-rotate='[ "Error", "403" , "Unauthorized" ," process"]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} width="200px" alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
