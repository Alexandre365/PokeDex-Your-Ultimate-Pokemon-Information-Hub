import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Box = styled.div`
  width: 100vw ;
  max-width: 1440px;
`
// Header
export const Header = styled.header`
  width: 100%;
`
export const Title = styled.div`
  padding: 10px;
  p{
    width: 20rem;
  }
`
export const Form = styled.div`
  padding: 10px;

`
export const Search = styled.div`
  input{
    width: 99%;
    height: 2rem;
    padding-left: 5px;
    background-color: #F9F9F9;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.10);
    border: none;
    color: black;
  }
`
export const Selects = styled.div`
  overflow: auto;
  white-space: nowrap;


  select{
    background-color: #F9F9F9;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.10);
    color: black;
    border: none;
    border-radius: 0.5rem;
    padding: 0.3rem;
    width: 10rem;
    margin: 1rem 1rem 1rem 0rem;
  }
  button{
    background-color: #F9F9F9;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.10);
    color: black;
    border: none;
    border-radius: 0.5rem;
    padding: 0.3rem;
    width: 5rem;
  }
  @media (max-width: 768px) {
    overflow-x: scroll;
    overflow-y: hidden;
  }

`

export const Main = styled.main`
  display: flex;
`
export const Aside = styled.aside`
  width: 70%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${(props) => props.title};
    width: 100vw;
    height: 100vh;
    transition: left 1s;
  }
`
export const List = styled.div`
  width: 100%;
  height: 20rem;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between ;
`
