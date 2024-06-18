import styled from "styled-components";

export const CardImage = styled.img`
  width: 100%;
  border-radius: .2rem;
  @media only screen and (min-width: 550px) {
    width: 9rem;
    margin-right: 1rem;
  }
`;

export const CardContainer = styled.div`
  background: #383A45;
  margin: 1rem;
  padding: 1rem;
  border-radius: .4rem;
  max-width: 270px;
  @media only screen and (min-width: 550px) {
    max-width: 500px;
  }
`;

export const CardContent = styled.a`
  text-decoration: none;
  @media only screen and (min-width: 550px) {
  	display: flex;
  }
`;

export const CardTextContent = styled.div``;

export const CardLink = styled.img`
  width: .8rem;
  @media only screen and (min-width: 550px) {
    display: flex;
  }
`;

export const CardTitle = styled.h1`
  color: white; 
  font-size: 1.2rem;
  line-height: 119.7%;
`;

export const CardDescription = styled.h2`
  color: #8D91A6;
  font-size: .8rem;
`;
