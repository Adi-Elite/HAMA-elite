import React, { Component } from 'react';
import {  InputGroup, FormControl, Button } from 'react-bootstrap';

export default class AddForm extends Component {
    constructor(){
        super();
        this.state={
            
        }
    }
    handleAddDetails=(event)=>{
        const value = event.target.value;
        this.setState({
            ...this.props,
            [event.target.name] : value
        });       
    };
    render() {
        return (
            <div>
                <div >
                    <h1 style={{ textAlign: "center" }}>
                                    Authorized Designatory:
                                </h1>
                                <div style={{ display: "flex" }}>
                                    <InputGroup className="mb-3"  >
                                        <InputGroup.Prepend >
                                            <InputGroup.Text >
                                                Name
                                                </InputGroup.Text>
                                        </InputGroup.Prepend >
                                        <FormControl    name="Name" onChange={this.handleAddDetails} />
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
                                        <FormControl value={this.state.ContactNo} name="ContactNo" onChange={this.handleAddDetails} />
                                    </InputGroup>
                                </div>
                                <InputGroup>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="5"
                                        value={this.state.Address}
                                        name="Address"
                                        placeholder="Address"
                                        onChange={this.handleAddDetails}
                                    >
                                    </textarea>
                                </InputGroup>
                                <div style={{ display: "flex" }}>
                                    <div style={{ padding: "1.2rem" }}>
                                        <Button
                                            style={{
                                                backgroundColor: "orange",
                                                width: "150%"
                                            }}
                                        >
                                            Upload Image
                                        </Button>
                                    </div>
                                    <div
                                        style={{
                                            marginLeft: "58%",
                                            padding: "1.2rem"
                                        }}
                                    >
                                        <Button
                                            style={{
                                                backgroundColor: "orange",
                                                width: "150%"
                                            }}
                                        >
                                            Upload Signature
                                        </Button>
                                    </div>
                                </div>
                                <div style={{
                                    textAlign: "right",
                                    padding: "1.2rem"
                                }}
                                >
                                </div>
                            </div>
            </div>
        )
    }
}
