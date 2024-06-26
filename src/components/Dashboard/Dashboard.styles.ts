import styled from "styled-components";
import bg from "../../assets/background.jpg"; // Assuming the background image is located here
import arrow from "../../assets/arrow.svg"; // Assuming the background image is located here

export const Container = styled.div`
  margin: 1em .5em;
  height: calc(100% - 2em);
  @media only screen and (min-width: 1000px) {
    display: flex;
    padding: 2em;
  }
`;

export const LeftCol = styled.div`
  @media only screen and (min-width: 700px) {
    display: flex;
  }
`;

export const Nav = styled.nav`
  position: fixed;
  z-index: 1;
  background: #2C2931;
  left: 0;
  top: 0;
  height: 100vh;
  max-width: 300px;
  transform: translateX(-100%);
  transition: transform .3s;
  @media only screen and (min-width: 1000px) {
    position: unset;
    transform: translateX(0) !important;
    border-radius: unset;
    border-top-left-radius: 13px;
    border-bottom-left-radius: 13px;
    height: 100%;
  }
`;

export const BackBtn = styled.img`
  transform: scaleX(-1);
  padding: 3em 4em 2em;
  cursor: pointer;
  transition: transform .3s;
  &:hover {
    transform: scaleX(-1) translateX(6px);
  }
	@media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  @media only screen and (min-width: 1000px) {
    margin-top: 4em;
  }
`;

export const NavItem = styled.li`
  width: 100%;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  display: block;
  padding: .875em 5em .875em 4em;
  &:hover {
    background: #413E47;
  }
  &.active {
    background: var(--primary-color);
    &:hover {
      background: #4497FF;
    }
  }
`;

export const Section = styled.section`
  background: #221F26 url('${bg}');
  background-size: cover;
  background-blend-mode: screen;
  background-position: -100px;
  height: 100%;
  padding: 2em;
  border-radius: 13px;
  @media only screen and (min-width: 1000px) {
    border-radius: unset;
    border-top-right-radius: 13px;
    border-bottom-right-radius: 13px;
    width: 100%;
    background-size: cover;
    background-position: 0;
    background-attachment: unset;
  }
`;

export const Header = styled.header`
  display: flex;
`;

export const MenuBtn = styled.img`
  cursor: pointer;
	@media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const Logo = styled.p`
  color: var(--primary-color);
  font-weight: 800;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: -.1em;
  text-align: center;
  width: 100%;
  margin: 0;
  @media only screen and (min-width: 1000px) {
    text-align: left;
  }
`;

export const Cv = styled.div`
  display: grid;
  place-items: center;
  height: 80%;
`;

export const Content = styled.div`
	@media only screen and (min-width: 1000px) {
		justify-self: left;
		margin-left: 4em;
	}
`;

export const H1 = styled.h1`
  font-size: clamp(2.5rem, -0.875rem + 8.333vw, 4rem);
  font-weight: 800;
  text-transform: uppercase;
  color: white;
  line-height: 89%;
`;

export const P = styled.p`
  font-size: clamp(2rem, -0.875rem + 8.333vw, 3rem);
  font-weight: 300;
  line-height: 111%;
  color: #847D93;
  margin-top: 1.1em;
	@media only screen and (min-width: 700px) {
		width: 70%;
	}
`;

export const Cta = styled.a`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 2.875em;
  display: inline-block;
  border: 1px solid #4D4D4D;
  padding: 1.25em 1.25em 1.25em calc(2.5em + 1.5em);
  position: relative;
  &:before {
    content: '';
    position: absolute;
    background: url('${arrow}') no-repeat;
    width: 1.5em;
    height: 1.5em;
    left: 1.25em;
  }
  &:hover {
    background: var(--primary-color);
  }
	@media only screen and (min-width: 1000px) {
    margin-top: 0;
	}
`;
