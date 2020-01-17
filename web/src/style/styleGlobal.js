import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body{
    background: #e5e6f0;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
  }

  #root{
    max-width:1200px;
    margin: 0 auto;
    padding: 60px 30px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
  }

  @media (max-width: 1000px){
    #root{
      flex-direction: column;
    }
  }


`;