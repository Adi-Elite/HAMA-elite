import React, { Component } from "react";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { FirestoreCollection} from "@react-firebase/firestore";
import "./Aboutus.css";

export class Aboutus extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
  }

  handleAboutChange = (e, index) => {
    this.setState({
      id: index,
    });
    e.preventDefault();
  };

  
  render() {
  
    
    return (
        <Container className="left" style={{ padding: "50px" }}>
        <div
          className="card-left"
          style={{ padding: "0px 30px", marginLeft: "-100px" }}
        >
          <ListGroup defaultActiveKey="#link1">
            <FirestoreCollection path="/documents">
              {(d) => {
               
                return d.value.map((Data, index) =>  {
                  console.log(d);
                  return (
                    <ListGroup.Item
                      key={index}
                      className="list-group"
                      onClick={(e) => this.handleAboutChange(e, index)}
                      action
                      href={"link" + index}
                    >
                      {Data.title}
                    </ListGroup.Item>
                  );
                 
                })
              }}
            </FirestoreCollection>
          </ListGroup>
        </div>
        {/* Right side */}
        <div className="right">
          {/* {AboutData.map((Data, index) => {
            console.log(index, this.state.id);
            if (this.state.id === 1) {
            } else
              
          })} */}
         
        </div>
      </Container>


    
    )
  }
}
