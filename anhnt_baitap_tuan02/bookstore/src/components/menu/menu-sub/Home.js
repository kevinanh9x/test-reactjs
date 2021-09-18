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

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      html: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/html`).then((res) => {
      console.log(res);
      this.setState({ html: res.data });
    });

    // axios.get(`http://localhost:3000/html?id=2`).then((res1) => {
    //   console.log(res1);
    //   this.setState({ html1: res1.data[2] });
    // });
  }

  render() {
    return (
      <Container>
        <h2>HTML Books</h2>
        <Row>
          {this.state.html.map((html) => (
            <Col sm="4">
              <Card>
                <CardImg top width="50%" src={html.image} />
                <CardBody>
                  <CardTitle tag="h5">{html.name}</CardTitle>
                  <CardText>{html.author}</CardText>
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
