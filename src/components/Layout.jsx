import { NavLink, Outlet } from 'react-router-dom';
import styled from "styled-components";



export const Layout = () => {

  const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
  

  return (
    <div>
      <nav>
        <StyledLink to="/">Home </StyledLink>
        <StyledLink to="Movies">Movies </StyledLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
