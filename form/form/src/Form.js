import { Component } from "react";
import styled from 'styled-components';

const Title = styled.h1 `
font-size : 40px;
color: red;
`
const Button = styled.button `
background: black;
padding: 7px 10px;
color: greenyellow;
`

class Form extends Component {
  render() {
    return (
      <div>
        <Title>titre</Title>
        <Button>Valider</Button>
      </div>
    );
  }
}

export default Form;
