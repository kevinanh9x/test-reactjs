import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Col,
  Container,
  Row,
} from "reactstrap";

export default class Css extends Component {
  constructor(props) {
    super(props);

    this.state = {
      css: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/css`).then((res) => {
      console.log(res);
      this.setState({ css: res.data });
    });
  }

  render() {
    return (
      <Container>
        <h2>CSS Books</h2>
        <Row>
          {this.state.css.map((css) => (
            <Col sm="4">
              <Card>
                <CardImg top width="50%" src={css.image} />
                <CardBody>
                  <CardTitle tag="h5">{css.name}</CardTitle>
                  <CardText>{css.author}</CardText>
                  <Button>Details</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
