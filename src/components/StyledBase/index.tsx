import { createGlobalStyle } from 'styled-components';

export const StyledBase = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,700;1,400&display=swap');
  @import 'office-ui-fabric-core/dist/sass/References';

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
    height: 100vh;
  }

  .container {
    padding: 79px 0px 0px;
    height: 100%;
  }

  #root {
    height: 100%;
  }
  
  .full-width {
    width: 100%;
  }
`;
