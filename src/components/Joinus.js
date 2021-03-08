
import React, { Component } from 'react';
import './Joinus.css';
import { Container, InputGroup, FormControl, Button, Card, FormGroup } from 'react-bootstrap';
import {FirestoreMutation}  from "@react-firebase/firestore";




export class Joinus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelName: "",
            address: "",
            contact: "",
            ownerName: "",
            email: "",
            landmark: "",
            authsign: [
                {
                    Name: "",
                    ContactNo: "",
                    Address: ""
                }
            ]
        }
    }

    handleAddFieldCount = () => {
        const authsign = this.state.authsign;
        authsign.push({
            Name: "",
            ContactNo: "",
            Address: ""
        });
        this.setState({
            authsign: authsign
        });
    }

    handleRemoveFieldCount = (index) => (event) => {
        var authsign = this.state.authsign;
        authsign.splice(index, 1);
        console.log(authsign);
        this.setState({
            authsign: authsign
        })
    }

    handleAddHotelForm = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    assignAuthSignDetails = (index) => (event) => {
        const newAuthSign = this.state.authsign.map((auth, idx) => {
            if (idx !== index) {
                return auth;
            } else {
                return { ...auth, [event.target.name]: event.target.value };
            }
        })
        this.setState({
            authsign: newAuthSign
        });
        console.log(this.state);
    };




    render() {
        var childs = [];
        for (var i = 0; i < this.state.authsign.length; i++) {
            childs.push(
                <div style={{ paddingTop: "3rem" }}>
                    <i class="far fa-times-circle" style={{ fontSize: "2rem", float: 'right' }} onClick={this.handleRemoveFieldCount(i)}></i>
                    <div>
                        <div style={{ display: "flex" }}>
                            <InputGroup className="mb-3"  >
                                <InputGroup.Prepend >
                                    <InputGroup.Text >
                                        Name
                                </InputGroup.Text>
                                </InputGroup.Prepend >
                                <FormControl value={this.state.authsign[i].name} index={i} name="Name" onChange={this.assignAuthSignDetails(i)} />
                            </InputGroup>
                            {console.log(this.state)}
                            <InputGroup
                                className="mb-3"
                                style={{ padding: "0px 10px" }}
                            >
                                <InputGroup.Prepend >
                                    <InputGroup.Text >
                                        Contact No.
                                            </InputGroup.Text>
                                </InputGroup.Prepend >
                                <FormControl value={this.state.authsign[i].ContactNo} name="ContactNo" onChange={this.assignAuthSignDetails(i)} />
                            </InputGroup>
                        </div>
                        <InputGroup>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="5"
                                value={this.state.authsign[i].Address}
                                name="Address"
                                placeholder="Address"
                                onChange={this.assignAuthSignDetails(i)}
                            >
                            </textarea>
                        </InputGroup>
                        <div style={{ padding: "1.2rem" }}>
                            <div>
                                Upload Signature:
                            </div>
                            <div>
                                <input
                                    style={{
                                        backgroundColor: "orange",
                                        width: "80%"
                                    }}
                                    type="file"
                                />
                            </div>
                            <div>
                                Upload File:
                            </div>
                            <div>
                                <input
                                    style={{
                                        backgroundColor: "orange",
                                        width: "80%"
                                    }}
                                    type='file'
                                />
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            textAlign: "right",
                            padding: "1.2rem"
                        }}
                    >
                    </div>
                </div>
            );
        }
        return (
            <Container style={{ borderRadius: "5px" }}>
                <card >
                    <div style={{ padding: "2rem" }}>
                        <div style={{ padding: "2rem" }}>
                            <h1 style={{ textAlign: "center" }}>
                                HOTEL REGISTRATION
                        </h1>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend >
                                    <InputGroup.Text >
                                        Hotel Name:
                                </InputGroup.Text>
                                </InputGroup.Prepend >
                                <FormControl value={this.state.hotelName} name="hotelName" onChange={this.handleAddHotelForm} />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend >
                                    <InputGroup.Text>
                                        Full Name:
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl value={this.state.ownerName} name="ownerName" onChange={this.handleAddHotelForm} />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend >
                                    <InputGroup.Text>
                                        Contact No:
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl value={this.state.contact} name="contact" onChange={this.handleAddHotelForm} />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend >
                                    <InputGroup.Text>
                                        Email-Id:
                                </InputGroup.Text>
                                </InputGroup.Prepend >
                                <FormControl value={this.state.email} name="email" onChange={this.handleAddHotelForm} />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="5"
                                    value={this.state.address}
                                    name="address"
                                    placeholder="Address"
                                    onChange={this.handleAddHotelForm}
                                >

                                </textarea>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend >
                                    <InputGroup.Text>
                                        LAND MARK:
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl type='tel' value={this.state.landmark} name="LANDMARK" onChange={this.handleAddHotelForm} />
                            </InputGroup>
                    {/* Authorized Designatory: */}
                    <h1 style={{ textAlign: "center" }}>
                        Authorized Designatory:
                            </h1>
                    {childs}
                    <Button variant="secondary" onClick={this.handleAddFieldCount}>+Add</Button>
                        </div>
                        <div style={{ paddingtop: "5rem", textAlign:"center"}}>
                                <FirestoreMutation type='add' path='/JoinFormData'>
                                    {({ runMutation }) => {
                                        return (
                                            <Button 
                                                onClick={() => {
                                                    console.log('running mmutation');
                                                    runMutation(this.state).then(res => {
                                                        console.log("Ran mutation ", res);
                                                    })
                                                    .catch(console.error);
                                                }}
                                            >
                                                Submit
                                            </Button> );}}
                                        </FirestoreMutation>
                        </div>
                    </div>
                </card >
            </Container >
        )
    }
}
