import React, { Component } from "react";
import styled from "styled-components";
import prismjs from "react-prism";

class DesctiptionsForm extends Component {
  state = {
    text: "", // input from user
    label: ""
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.props.onSubmit({
        text: this.state.text,
        complete: false
      });
    }
  };

  render() {
    return (
      <>
        <Container>
          <Instructions />
          <InputContainer>
            <code>
              <pre className="line-numbers" data-start="1">
                <PrismCode
                  contentEditable
                  placeholder="Start here"
                  className="language-markup"
                  data-linenumber="0"
                  onKeyPress={this.handleKeyPress}
                  name="text"
                  value={this.state.text}
                  onChange={this.handleChange}
                  // {``}
                />
              </pre>
            </code>
          </InputContainer>
        </Container>
      </>
    );
  }
}

export default DesctiptionsForm;

const Container = styled.div``;
const Instructions = styled.div``;

// const StyledInput = styled.textarea`
//   width: 90%;
//   height: 88%;
//   margin: 4px;
//   background-color: #f5f5f5;
//   background-image: -webkit-linear-gradient(left, white 10px, transparent 10px),
//     -webkit-linear-gradient(right, white 10px, transparent 10px),
//     -webkit-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
//   background-image: -moz-linear-gradient(left, white 10px, transparent 10px),
//     -moz-linear-gradient(right, white 10px, transparent 10px),
//     -moz-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
//   background-image: -ms-linear-gradient(left, white 10px, transparent 10px),
//     -ms-linear-gradient(right, white 10px, transparent 10px),
//     -ms-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
//   background-image: -o-linear-gradient(left, white 10px, transparent 10px),
//     -o-linear-gradient(right, white 10px, transparent 10px),
//     -o-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
//   background-image: linear-gradient(left, white 10px, transparent 10px),
//     linear-gradient(right, white 10px, transparent 10px),
//     linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
//   background-size: 100% 100%, 100% 100%, 100% 31px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
//   line-height: 31px;
//   font-size: 18px;
//   color: #666;
//   padding: 8px;
//   &:focus {
//     outline: none;
//   }
// `;
const InputContainer = styled.div`
  height: 80vh;
`;

const PrismCode = styled.pre`
  width: 90%;
  height: 88%;
  margin: 4px;
  background-color: #f5f5f5;
  background-image: -webkit-linear-gradient(left, white 10px, transparent 10px),
    -webkit-linear-gradient(right, white 10px, transparent 10px),
    -webkit-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-image: -moz-linear-gradient(left, white 10px, transparent 10px),
    -moz-linear-gradient(right, white 10px, transparent 10px),
    -moz-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-image: -ms-linear-gradient(left, white 10px, transparent 10px),
    -ms-linear-gradient(right, white 10px, transparent 10px),
    -ms-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-image: -o-linear-gradient(left, white 10px, transparent 10px),
    -o-linear-gradient(right, white 10px, transparent 10px),
    -o-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-image: linear-gradient(left, white 10px, transparent 10px),
    linear-gradient(right, white 10px, transparent 10px),
    linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-size: 100% 100%, 100% 100%, 100% 31px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  line-height: 31px;
  font-size: 18px;
  color: #666;
  padding: 8px;
  &:focus {
    outline: none;
  }
  /* for line numbers */
  .language-markup {
    counter-reset: linenumber;
  }
  span.line {
    display: inline-block;
    /* width: 100%; */
    counter-increment: linenumber;
  }
  span.line:nth-child(odd) {
    background: #feffcf;
  }
  span.line:before {
    content: counter(linenumber);
    /* font-size: 100%; */
    width: 2em;
    display: inline-block;
    font-weight: normal;
    color: black;
    border-right: 1px solid black;
    margin-right: 5px;
    padding-right: 5px;
    text-align: right;
  }
  /* /for line numbers */
`;
