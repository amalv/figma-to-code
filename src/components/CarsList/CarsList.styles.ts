import searchIcon from "../../assets/search.svg";
import styled from "styled-components";

export const Container = styled.div`
  margin: 2.8em;
`;

export const Header = styled.header`
  @media only screen and (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Headings = styled.div`
    h1 {
        margin-bottom: 0;
    }
    p {
        font-size: 1.125rem;
        color: var(--text-color);
        @media only screen and (min-width: 900px) {
            margin: .5em 0 3em;
        }
    }
`;

export const Options = styled.div`
    position: relative;
`;

export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3em;
    input[type="text"] {
        border: none;
        padding: .8em;
        border-radius: 2em;
        background: white url(${searchIcon}) no-repeat right .8em center;
        width: 100%;
        &:focus {
            outline: thin dotted;
        }
    }
    img {
        margin: 0 .5em;
        cursor: pointer;
    }
`;

export const Filter = styled.div<{ isVisible: boolean }>`
    position: absolute;
    top: 3em;
    right: 1em;
    background: white;
    padding: 2em 1.5em;
    border-radius: 6px;
    box-shadow: 11px 18px 54px rgba(0,0,0, .11);
    clip-path: ${({ isVisible }) => (isVisible ? "circle(100% at 50% 50%)" : "circle(0% at 100% 0%)")};
    transition: clip-path .3s ease-in-out;
    .chk-container {
        margin-bottom: 1.125em;
        &:last-of-type {
            margin-bottom: 0;
        }
    }
`;

export const Main = styled.main``;

export const Labels = styled.div`
    display: none;
    margin: -1em -1em 2em;
    padding: 1em;
    border-radius: 6px;
    @media only screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: 40% 30% 20% auto;
        background-color: var(--primary-color);
        color: white;
        text-transform: uppercase;
        font-size: .875rem;
        padding: .2em 1em;
    }
`;

export const Cars = styled.div`
    margin: -1em -1em 2em;
    padding: 1em;
    border-radius: 6px;
    &:hover {
        background: white;
    }
    a {
        text-decoration: none;
        color: var(--primary-color);
        font-size: 1.22rem;
    }
    p {
        color: var(--text-color);
        font-size: 1.125rem;
        margin: 0;
    }
    .cols-2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
            font-size: 1.5rem;
            margin: 0;
        }
        i {
            cursor: pointer;
        }
    }
    @media only screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: 40% 30% auto;
        i {
            margin-right: 1.6em;
        }
    }
`;
