import React, { Component } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import taskService from "../../services/taskService";
import { Link } from "react-router-dom";

// Components
// import ElementContainer from "../common/ElementContainer";
import EmptyBoard from "../EmptyBoard";
import TextField from "../TextField";

class Describe extends Component {
  state = {};

  componentDidMount() {
    const task = taskService.getEmpty();
    this.setState({ task }); //inputs
  }
  handleTaskDescription = () => {
    // get values from 'inputs'
    // put the values in state, inside the empty 'inputs' array
    taskService.save({ ...this.state });
  };
  handleSend = () => {
    // Store user text and other required info
    this.handleTaskDescription();
    // Move to the "Align" task page
    // document.location.href = "https://strayblues.github.io/hexagon-app/align"; // Causes bug on deployment
  };
  render() {
    return (
      <>
        <BoardContainer>
          <h2>Write instructions for painting the tiles</h2>
          <EmptyBoard currentColor="white" />
        </BoardContainer>
        <TextFieldContainer>
          <InputContainer>
            <TextField />
          </InputContainer>
          <StyledButton onClick={this.handleSend}>
            <RedirectLink to="/align">Send</RedirectLink>
          </StyledButton>
        </TextFieldContainer>
      </>
    );
  }
}

export default Describe;

const ElementContainer = styled.div`
  margin: 1em 2em;
  background-color: white;
  width: 45vw;
  max-height: 75vh;
  overflow: scroll;
`;
const InputContainer = styled(ElementContainer)`
  max-height: 75vh;
  border-radius: 4px;
  transition: all 300ms;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
const BoardContainer = styled(ElementContainer)``;
const StyledButton = styled(Button)`
  width: 25%;
  align-self: left;
`;
const RedirectLink = styled(Link)`
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0);
  padding: 20px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  transition: all 300ms;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
