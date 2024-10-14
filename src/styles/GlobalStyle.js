
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
font-family: 'Arial', sans-serif;
background-color: #f4f4f9;
color: #333;
}

button {
background-color: #3498db;
color: #fff;
border: none;
padding: 10px 20px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
background-color: #2980b9;
}
}

a {
text-decoration: none;
color: inherit;
}
`;
export default GlobalStyle;