import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

html {
  min-height: 100vh;
  background-color: #282A36;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
h1 {
  color: #3BCC5A;
}
button {
  cursor: pointer;
}

`;
