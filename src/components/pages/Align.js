import React, { Component } from "react";
import styled from "styled-components";
import taskService from "../../services/taskService";
import { Link } from "react-router-dom";

// Components
import NumberedBoard from "../NumberedBoard";
import ColorPicker from "../common/ColorPicker";
import Button from "../common/Button";

class Align extends Component {
  state = {
    currentColor: "white",
    currentStep:
      "Starting with the leftmost column paint every other column blue.",
    taskIdx: 0,
    taskDisplayCompleted: false,
    tasks: [
      {
        image: {
          _id: "1",
          src: "board1.png"
        },
        description: [
          // "Line 1 of task 1",
          "Paint the remaining columns green.",
          "Actually that's it...",
          "Nothing else to do."
        ],
        verifications: []
      },
      {
        image: {
          _id: "2",
          src: "board2.png"
        },
        description: [
          "Line 1 of task 2",
          "Line 2 of task 2",
          "Line 3 of task 2",
          "Line 4 of task 2"
        ],
        verifications: []
      }
    ]
  };

  setColor = newColor => {
    this.setState({ currentColor: newColor });
  };
  componentDidMount() {
    const taskToVerify = taskService.getCompletedTask();
    this.setState({ taskToVerify }); // "verify" page
  }
  handleSubmitVerificaion = () => {
    // completedTaskWithVerification.verification.push(new verification)
    // taskService.save({ completedTaskWithVerification });
  };
  showNextLine = props => {
    if (this.state.taskIdx < this.state.tasks[0].description.length) {
      this.setState({
        currentStep: this.state.tasks[0].description[this.state.taskIdx],
        taskIdx: this.state.taskIdx + 1
      });
      // alert("current step is: " + this.state.currentStep);
    } else {
      this.setState({ taskDisplayCompleted: true });
      return;
    }
  };
  render() {
    return (
      <>
        <StepsContainer>
          <h1>Align The Tiles</h1>
          <Step>
            <StepElement>{this.state.currentStep}</StepElement>
            <ButtonContainer>
              <NextButton
                onClick={this.showNextLine}
                className={
                  this.state.taskDisplayCompleted
                    ? "inactive-btn"
                    : "active-btn"
                }
              >
                Next
              </NextButton>
              <DoneButton
                onClick={this.handleDone}
                className={
                  this.state.taskDisplayCompleted
                    ? "active-btn"
                    : "inactive-btn"
                }
              >
                <RedirectLink to="/align-done">Done</RedirectLink>
              </DoneButton>
            </ButtonContainer>
          </Step>
        </StepsContainer>
        <BoardContainer>
          <ColorPicker
            passColorToParent={this.setColor}
            currentColor={this.state.currentColor}
          />
          <NumberedBoard
            currentColor={this.state.currentColor} // Pass color to Board
          />
        </BoardContainer>
      </>
    );
  }
}

export default Align;

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
const ElementContainer = styled.div`
  margin: 2em;
  background-color: white;
`;
const StepElement = styled(ElementContainer)`
  background-color: lightblue;
  padding: 0.5em;
  border-radius: 4px;
`;
const Step = styled.div``;

const BoardContainer = styled(ElementContainer)`
  width: 50vw;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
const StepsContainer = styled(ElementContainer)`
  width: 32vw;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NextButton = styled(Button)`
  width: 20%;
`;
const DoneButton = styled(Button)`
  width: 20%;
`;
const Separator = styled.hr`
  margin: 0 1em;
`;
