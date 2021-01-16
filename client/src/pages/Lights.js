import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";


function Lights() {
  const [lights, setLights, ] = useState([])
  const [formObject, setFormObject] = useState({})

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
    setFormObject({...formObject, [name]: value})
  };


        function handleFormSubmit(event) {
    // event.preventDefault();
    if (formObject.place_id && formObject.street_address) {
      API.saveLights({
        place_id: formObject.place_id,
        street_address: formObject.street_address,
        _date: new Date(Date.now())
      })
        .then(res => setLights(res.data))
        .catch(err => console.log(err));
    }
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
                onChange={handleInputChange}
                name="Email"
                placeholder="Email (required)"
              />
              <Input
                onChange={handleInputChange}
                name="Street Address"
                placeholder="Street Address (required)"
              />
              
              <FormBtn
                // disabled={!(Email)}
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
                        {lights.place_id} - {lights.street_address}
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
      </Container>
    );
  }


export default Lights;
