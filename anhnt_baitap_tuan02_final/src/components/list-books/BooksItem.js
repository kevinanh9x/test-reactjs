import React, { Component, useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Details from "../main-menu/Details";

export default class BooksItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      html: [],
      showData: [],
      quantityData: 5,
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/html`).then((res) => {
      console.log(res);
      this.setState({
        html: res.data,
        showData: res.data.slice(0, this.state.quantityData),
      });
    });

    // axios.get(`http://localhost:3000/detail-html/`).then((resDetails) => {
    //   console.log(resDetails);
    //   this.setState({
    //     details: resDetails.data,
    //   });
    // });
  }

  createNumber = (number) => {
    var num = [];
    for (let i = 1; i <= number; i++) {
      num.push(i);
    }
    // console.log(num);

    return num.map((element) => {
      return (
        <div key={element}>
          <button
            onClick={() => {
              this.nextPage(element);
            }}
          >
            {element}
          </button>
        </div>
      );
    });
  };

  nextPage = (number) => {
    console.log(number);

    var end = this.state.quantityData * number;
    this.setState({ showData: this.state.html.slice(end - 5, end) });
  };

  render() {
    return (
      <Container>
        <h2>HTML Books</h2>
        <Row>
          {this.state.showData.map((html) => (
            <Col sm="4">
              <Card>
                <CardImg top width="50%" src={html.image} />
                <CardBody>
                  <CardTitle tag="h5">{html.name}</CardTitle>
                  <CardText>{html.author}</CardText>
                  <Button className="btnDetails">
                    {/* <Link to={`/html/detail-html/${details.id}`}>
                            Details
                          </Link> */}
                    {/* <a href="/catalog/html">Details</a> */}
                    {/* <a href="/detail-html/">Details</a> */}
                    <Link to="/detail-html/">Details</Link>
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="arrNumber">{this.createNumber(5)}</div>
      </Container>
    );
  }
}
