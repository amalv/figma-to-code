import styled from "styled-components";
import bg from "../../assets/bg.jpg";

export const Container = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  color: white;
  box-sizing: border-box; 
`;

export const LeftCol = styled.div`
  position: relative;
  text-align: center;
  color: white;
  background: #5200FF;
	padding: 6.75rem 8vw;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.22;
    background: url(${bg});
    background-size: cover;
    background-position: center; 
  }
`;

export const RightCol = styled.div`
  flex: 1;
  background-color: white;
	padding: 6.75rem 8vw;
  color: black; 
`;

export const Content = styled.div`
  position: relative;
`;

export const FormContent = styled.div`
  position: relative;
	padding: 6.75rem 8vw;
`;

export const InputWrapper = styled.div`
  margin-bottom: 2.5em;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.125rem;
  margin-bottom: .77rem;
`;

export const Input = styled.input`
  width: 100%;
  background: #EDEDED;
  border: 1px solid #C7C7C7;
  font-size: 1rem;
  padding: .75rem;
  outline: none;
	box-sizing: border-box;
`;

export const Button = styled.button`
  width: 100%;
  background: #5200FF;
  padding: 1em;
  color: white;
  border: none;
  font-size: 1.125rem;
  cursor: pointer;
	  box-sizing: border-box; 
`;

export const Title = styled.h1`
  margin: 0;
  font-family: 'Bebas Neue';
  font-weight: normal;
  font-size: 4rem;
  line-height: 1.2em;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0;
`;
