import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: whitesmoke;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: .8rem 1.5rem;
  font-size: 1rem;
  & .logo {
    font-size: 1.3rem;
    font-weight: 700;
    text-decoration: none;
    color: #000;
    &:active {
      text-decoration: none;
    }
  }
  & * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
