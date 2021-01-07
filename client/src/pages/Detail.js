import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Lights } from "../../../models";

function Detail(props) {
  const [lights, setLights] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams()
  useEffect(() => {
    API.getLights(id)
      .then(res => setLights(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              {lights.place_id} by {lights.street_address}
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/">← </Link>
        </Col>
      </Row>
    </Container>
  );
}


export default Detail;
