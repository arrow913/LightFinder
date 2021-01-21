import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import MapSection from '../components/map/Map'

function Lights() {
  const [lights, setLights,] = useState([])
  const [formObject, setFormObject] = useState({})
  const [credentials, setCredentials] = useState({email: ""});
  useEffect(() => {
    loadLights()
  }, [])

  function loadLights() {
    API.getLights()
      .then(res =>
        setLights(res.data)
      )
      .catch(err => console.log(err));
  };
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };


  function handleFormSubmit(event) {
    // event.preventDefault();
    console.log(formObject)
    API.saveLights({
      street_address: formObject.street_address,
      lat:formObject.lat,
      long:formObject.long
    })
      .then(res =>console.log(res))
      .catch(err => console.log(err));

  };
  // console.log (Lights)
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Dancing Lights</h1>
          </Jumbotron>
          <form>
            <Input
              name="Email"
              placeholder="Email (required)"
              onChange={event => setCredentials({email: event.target.value})}
            />
            <Input
              onChange={handleInputChange}
              name="street_address"
              placeholder="Street Address (required)"
            />
            <Input
              onChange={handleInputChange}
              name="lat"
              placeholder="lat (required)"
            />
            <Input
              onChange={handleInputChange}
              name="long"
              placeholder="long (required)"
            />


            <FormBtn
              disabled={ !(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(credentials.email)) }  
              onClick={handleFormSubmit}
            >
              Lights
              </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Where are the Lights?</h1>
          </Jumbotron>
          {lights.length ? (
            <List>
              {lights.map(lights => (
                <ListItem key={lights._id}>
                  <Link to={"/lights/" + lights._id}>
                    <strong>
                       {lights.street_address}
                    </strong>
                  </Link>

                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
      <MapSection lights={lights} zoomLevel={10} />
    </Container>
  );
}


export default Lights;
