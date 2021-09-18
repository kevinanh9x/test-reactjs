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

import ReactStars from "react-rating-stars-component";

export default class Details extends Component {
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

                  <p>
                    <ReactStars count={5} size={24} activeColor="#ffd700" />
                    {detail.evaluate}
                  </p>
                </CardBody>
              </Row>
            </Card>
          ))}
        </Row>
      </Container>
    );
  }
}

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import { Card, CardImg } from "reactstrap";
// import axios from "axios";
// import ReactStars from "react-rating-stars-component";

// function Details() {
//   const [details, setDetails] = useState(null);
//   const { id } = useParams();
//   console.log(details);
//   useEffect(() => {
//     axios.get(`http://localhost:3000/detail-html/${id}`).then((res) => {
//       console.log(res);
//       setDetails(res.data);
//     });
//   }, [id]);
//   console.log("data", details);
//   return details?.id ? (
//     <div style={{ display: "flex", textAlign: "center" }}>
//       <div className="site-card-border-less-wrapper">
//         <Card
//           Card
//           title={details.title}
//           bordered={false}
//           style={{ width: 300, fontWeight: 800 }}
//         >
//           <CardImg top width="50%" src={details.image} />
//           <h3>{details.author}</h3>
//         </Card>
//         {/* <Card
//           Card title={details.title}
//           bordered={false}
//           style={{ width: 300, fontWeight: 800 }}
//         >
//           <CardImg top width="50%" src={details.image} />
//           <h3>{details.author}</h3>
//         </Card> */}
//       </div>
//       ,
//       <div>
//         <p>{details.titleshort}</p>
//         <p>{details.description}</p>
//       </div>
//       <p>
//         <ReactStars count={5} size={24} activeColor="#ffd700" />
//         {details.evaluate}
//       </p>
//     </div>
//   ) : (
//     <></>
//   );
// }

// export default Details;
