import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Col,
  Container,
  Row,

} from "reactstrap";

import Rateindex from '../Rate/Rateindex';

export default class HtmlDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      detail: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/detail-html?id=1`).then((res) => {
      console.log(res);
      this.setState({ detail: res.data });
    });

  }

  

  render() {
    return (
      <Container>
        <h2>Detail HTML Books</h2>
        <Row>
          {this.state.detail.map((detail) => (
              <Card>
                <Col sm={3}>
                    <CardImg top width="50%" src={detail.image} />
                </Col>
                <Row sm={2}>
                  <CardBody>
                  <CardTitle tag="h2">{detail.title}</CardTitle>
                  <h5>{detail.titleshort}</h5>
                  <p>{detail.description}</p>
                  <CardText>{detail.author}</CardText>
                   <Rateindex rating={this.rating} onRating={rate => this.setRating(rate)}/>
                </CardBody>
                </Row>
                 
              </Card>
          ))}
        </Row>
      </Container>
    );
  }
}
