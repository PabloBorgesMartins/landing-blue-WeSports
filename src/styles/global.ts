import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

body{
  margin: 0px;
  padding: 0px;
  width: 100vw;
  background-color: #212C3D;
  color: #fff;
}

h2 {
  color: #ffffff;
  text-align: center;
  white-space: pre-wrap;
  font-family: 'Poppins';
  font-weight: 400;
  opacity: 1;
  font-size: 25px;
  margin: 40px 0 0 0;
}

p {
    color: #C6C6CF;
    text-align: center;
    font-family: 'Poppins';
    font-weight: 200;
    opacity: 1;
    font-size: 16px;
    margin: 40px 0 40px 0;
  }

body,input,button{
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
}

button {
  cursor: pointer;
}


@media (max-width: 900px) {
    h2{
      display:none;
    }
  }

`;
