import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import VoterView from "./VoterView";

function Candidates(props) {
    console.log("propes", props.data)
  let [presidents, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates(props.data);
  }, []);

  function incrementVoteCount(presidentId) {
    presidents = presidents.map((president) => {
      if (president._id === presidentId) {
        president.votes = president.votes + 1;
      }
      return president;
    });
    setCandidates(presidents);
  }

  return (
      <div>
        <h1>CANDIDATES</h1>
        <Container className="app">
        <Row>
          {presidents.map((president) => {
            return (
                <Col md={4}>
                  <VoterView
                      candidate={president}
                      incrementVoteCount={(presidentId) => incrementVoteCount(presidentId)}
                  />
                </Col>
            );
          })}
        </Row>
      </Container>
      </div>
      
  );
}
export default Candidates;