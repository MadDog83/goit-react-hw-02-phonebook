import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';


const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 30px;
  background-image: url('/images/phonebook.png');
  background-size: cover;
  background-repeat: no-repeat;
`;
const StyledName = styled.span`

`;

const StyledNumber = styled.span`

`;

const LabelName = styled.label`
  display: flex;
  flex-direction: column;
  
`;

const InputName = styled.input`
    margin-top: 5px;
`;

const AddButton = styled.button`
    margin-top: 8px;
    width: 90px;
    height: 30px;
    background-color: #e8d85dc5;
    border-radius: 5px;
    border-style: none;
    transition: background-color 0.3s ease;

    &:hover, &:focus {
    background-color: #6fd68c;
    color: white;
}
`;

class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onAdd({ id: nanoid(), name: this.state.name, number: this.state.number });
      this.setState({ name: '', number: '' });
    };
  
    handleNameChange = (event) => {
      this.setState({ name: event.target.value });
    };
  
    handleNumberChange = (event) => {
      this.setState({ number: event.target.value });
    };
  
    render() {
      return (
        <FormContainer onSubmit={this.handleSubmit}>
          <LabelName>
            <StyledName>Name:</StyledName>
            <InputName
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              required
              placeholder="Name"
            />
          </LabelName>
          <LabelName>
            <StyledNumber>Number:</StyledNumber>
            <InputName
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              placeholder="222-22-22"
              value={this.state.number}
              onChange={this.handleNumberChange}
              required
            />
          </LabelName>
          <AddButton type="submit">Add contact</AddButton>
        </FormContainer>
      );
    }
  };
  
  export default ContactForm;