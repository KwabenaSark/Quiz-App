import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/bgi.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin:0;
    padding:0 20px;
    display: flex;
    justify-content: center;

  }

  *{
    box-sizing:border-box;
    font-family:"Comfortaa";
   
    font-size:120%;
  }
`;

export const Wrapper = styled.div`
  display: grid;
border-radius:10px;
  align-items: center;
  background-color: white;
  color:black;
  border:double 5px black;

 
 

 

  .score {
    color: red;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: fascinate Inline, Haett;
  
   
   
    
   
   
    
    font-size: 60px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
   background-color: #cb30ae;
   border-radius:10px;
    height: 45px;
    margin: 20px;
    padding: 0 40px;
  }
`;
