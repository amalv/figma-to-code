import styled from "styled-components";

export const CardImage = styled.img`
  width: 304px;
  height: 290px;
  flex-shrink: 0;
  object-fit: cover;
    border-radius: 8px;

  @media (min-width: 1024px) {
		width: 262px;
    height: 250px;
    flex-shrink: 0;
  }
`;

export const CardContainer = styled.div`
  margin: 0 auto;
  width: 80vw;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 729px;
  }
`;

export const CardContent = styled.a`
  background-color: #383A45;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 28px 25px;

  @media (min-width: 1024px) {
    flex-direction: row;
  	align-items: flex-end;
  }
`;

export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 1024px) {
    margin-left: 20px;
  }
`;

export const CardLink = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-start;
`;

export const CardTitle = styled.h1`
  color: #FFF;
  font-family: Poppins;
  font-size: 1.875rem;
  font-weight: 400;
`;

export const CardDescription = styled.h2`
  color: #8D91A6;
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 400;
  line-height: 152.7%; /* 24.432px */
`;
