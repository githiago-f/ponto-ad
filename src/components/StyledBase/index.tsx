import { createGlobalStyle } from 'styled-components';

export const StyledBase = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,700;1,400&display=swap');

  :root {
    --dark-bg-color: #383737;
    --light-bg-color: #f2f2f2;

    --light-font-color: #000;
    --dark-font-color: #fff;

    --font-color: var(--light-font-color);
    --bg-color: var(----light-bg-color);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  body {
    font-family: 'Roboto', Arial, 'Helvetica Neue', sans-serif;
    background-color: var(--bg-color);
    color: var(--font-color);
  }

  .container {
    padding-top: 64px;
  }
  
  .full-width {
    width: 100%;
  }
`;
