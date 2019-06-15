import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-size: calc(0.6em + 1vw);
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 130%;
  box-sizing: border-box;
  user-select: none;
  background-color: #ffffff;
  @media only screen and (max-width: 1024px) {
   font-size: calc(0.6em + 1.5vw);
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.6em + 2vw);
  }

  @media only screen and (max-width: 570px){
    font-size: calc(0.6em + 3vw);
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*:before {
  box-sizing: border-box;
}
*:after {
  box-sizing: border-box;
}

body {
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
  background-color: #ffffff;
  position: relative;
}

a {
text-decoration: none;
}

a:active,
a:hover {
  outline-width: 0;
}

img {
  width: calc(12em + 3vw);
  @media only screen and (max-width: 570px){
    width: calc(10em + 1vw);
  }
}

hr {
  width: 50vw;
  height: 0.2em;
  border: none;
  margin-top: 1.5em;
  margin-bottom: 1em;
  background-color: #EBE3DF;
}

p {
  font-family: 'Roboto Slab';
  font-size: calc(1em + 0.4vw);
  font-weight: 400;
  color: #57585A;
  width: 95%;
  line-height: 135%;
  text-align: center;
  padding-left: 3em;
  padding-right: 3em;
}

h1 {
  font-family: 'Roboto';
  font-size: calc(0.55em + 0.4vw);
  font-weight: 400;
  width: 70%;
  color: #57585A;
  line-height: 130%;
  text-align: center;
  margin-top: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  @media only screen and (max-width: 824px){
    margin-top: 1em;
    font-size: calc(0.6em + 0.5vw);
  }
}

`
