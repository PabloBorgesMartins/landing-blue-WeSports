import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100vw;

  @media (max-width: 900px) {
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-right: 10%;

  button {
    margin-left: 10px;
  }

  @media (max-width: 900px) {
    button {
      margin-left: 0px;
    }

    padding-right: 0;
    justify-content: space-evenly;
  }
`;

export const Logo = styled.img`
  margin-left: 10vw;
  width: 40vw;

  @media (max-width: 900px) {
    width: 50vw;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;

  section {
    width: 400px;
    padding: 10px;
    margin-left: 9vw;
  }

  h1 {
    color: #ffffff;
    text-align: left;
    letter-spacing: 0px;
    font-family: 'Poppins';
    font-weight: 300;
    opacity: 1;
    font-size: 30px;
    margin-top: 0px;
    margin-bottom: 25px;
  }

  p {
    font-family: 'Poppins';
    font-weight: 200;
    opacity: 1;
    font-size: 13px;
    text-align: left;
    margin-bottom: 20px;
  }

  img {
    width: 54vw;
  }

  @media (max-width: 900px) {
    section {
      width: 300px;
      margin-left: 0px;
      text-align: center;
    }
    h1 {
      font-size: 35px;
    }
    img {
      width: 100%;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContainerMid = styled.div`
  display: flex;
  width: 100%;
  padding: 0;

  img {
    width: 100%;
  }

  div {
    position: relative;
    top: 10px;
    right: 36vw;
  }

  h1 {
    color: #ffffff;
    text-align: left;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-weight: 400;
    opacity: 1;
    font-size: 1.5vw;
  }

  p {
    color: #ffffff;
    text-align: left;
    font-family: 'Poppins';
    white-space: nowrap;
    font-weight: 200;
    opacity: 1;
    font-size: 1vw;
    margin: 10px 0 0 0;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: unset;
    align-items: unset;

    width: 100%;
    div {
      display: none;
    }
  }
`;

export const ContainerCard = styled.div`
  width: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }

  > :nth-child(2) {
    margin-bottom: 200px;
  }

  @media (max-width: 900px) {
    > :nth-child(2) {
      margin-bottom: 0px;
    }

    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CardIntro = styled.div`
  width: 30vw;
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  align-items: flex-start;

  div {
    width: fit-content;
    background: #273a49 0% 0% no-repeat padding-box;
    padding: 10px;
    border-radius: 5px;
    opacity: 1;
  }

  .title-font p {
    margin: 0px;
    color: #78faf3;
    font-family: 'Poppins';
    opacity: 1;
    font-size: 16px;
  }

  h1 {
    text-align: left;
    font: normal normal bold 20px/40px 'Poppins';
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }

  p {
    text-align: left;
    font: normal normal 300 14px/20px 'Poppins';
    letter-spacing: 0px;
    color: #c6c6cf;
    opacity: 1;
    margin: 0 0 20px 0;
  }

  button {
    border-radius: 5px;
  }

  @media (max-width: 900px) {
    width: 80vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    p {
      text-align: center;
    }

    h1 {
      text-align: center;
    }
  }
`;

export const ContainerCaution = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;

  img {
    width: 60vw;
  }

  div {
    padding: 10px;
    margin-left: 5vw;
  }

  h1 {
    color: #ffffff;
    text-align: center;
    white-space: nowrap;
    font-family: 'Poppins';
    font-weight: 400;
    opacity: 1;
    font-size: 25px;
  }

  p {
    color: #ffffff;
    text-align: center;
    font-family: 'Poppins';
    font-weight: 200;
    opacity: 1;
    font-size: 15px;
    margin: 0px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: unset;
    align-items: unset;
    flex-basis: content;

    div {
      width: 60vw;
      padding: 20px;
      margin-left: 0px;
      position: relative;
      bottom: 10vh;
      left: 0px;
    }

    img {
      width: 100vw;
    }
  }
`;

export const ContainerShop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > :nth-child(2) {
    width: 33vw;
    height: 600px;
    border: 0.5px solid #000;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > :nth-child(2) {
      width: 80vw;
      height: unset;
      border: none;
    }
  }
`;

export const ContainerSubscribe = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: auto;
  background-color: #1c2533;
  padding: 25px 0 25px 0;

  section {
    max-width: 40%;
  }

  form {
    margin: 0;
    padding: 0;
  }

  h1 {
    color: #ffffff;
    text-align: left;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-weight: 400;
    opacity: 1;
    font-size: 25px;
    margin: 0;
  }

  p {
    color: #ffffff;
    text-align: left;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-weight: 200;
    opacity: 1;
    font-size: 15px;
    margin: 0;
  }

  button {
    width: 10%;
    padding: 20px;
  }

  @media (max-width: 900px) {
    input {
      width: 60vw;
    }

    section {
      max-width: 80%;
    }

    p {
      text-align: center;
      margin-bottom: 20px;
    }

    h1 {
      text-align: center;
    }

    button {
      margin-top: 20px;
      width: auto;
    }

    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
`;

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: auto;
  padding: 50px 0 50px 0;

  section {
    flex-direction: column;
    width: 30vw;
  }

  h1 {
    color: #ffffff;
    text-align: left;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-weight: 400;
    opacity: 1;
    font-size: 25px;
    margin: 0;
  }

  form {
    margin: 0;
    padding: 0;
    width: 55vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    gap: 20px;
    grid-template-areas:
      'input1 input2'
      'input3 input3'
      'button button';
  }

  form > :nth-child(1) {
    grid-area: input1;
    margin: 0;
    text-align: left;
  }

  form > :nth-child(2) {
    grid-area: input2;
    margin: 0;
    text-align: left;
  }

  form > :nth-child(3) {
    grid-area: input3;
  }

  form > :nth-child(4) {
    grid-area: button;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section {
      width: 80%;
    }

    h1 {
      text-align: center;
    }

    form > :nth-child(1) {
      margin-top: 20px;
    }

    form {
      width: 70vw;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 2fr 1fr;
      gap: 20px;
      grid-template-areas:
        'input1'
        'input2'
        'input3'
        'button';
    }
  }
`;
