import { styled, keyframes } from "styled-components";

const resolveColor = (type: any) => {
  if (type == 'grass') {
    return '0.7rem solid #36C490'
  }
  if (type == 'fire') {
    return '0.7rem solid #D93F31'
  }
  if (type == 'water') {
    return '0.7rem solid #1790FF'
  }
   if (type == 'electric') {
    return '0.7rem solid #ECD145'
  }
  if (type == 'flying') {
    return '0.7rem solid #A890F0'
  }
  if (type == 'normal') {
    return '0.7rem solid #A7A678'
  }
  if (type == 'rock') {
    return '0.7rem solid #B8A038'
  }
  if (type == 'ground') {
    return '0.7rem solid #E0C068'
  }
  if (type == 'bug') {
    return '0.7rem solid #A8B820'
  }
   if (type == 'ice') {
    return '0.7rem solid #98D8D8'
  }
  if (type == 'psychic') {
    return '0.7rem solid #F85888'
  }
  if (type == 'dark') {
    return '0.7rem solid #705848'
  }
  if (type == 'ghost') {
    return '0.7rem solid #705898'
  }
   if (type == 'dragon') {
    return '0.7rem solid #7038F8'
  }
  if (type == 'fairy') {
    return '0.7rem solid #F0B6BC'
  }
  if (type == 'poison') {
    return '0.7rem solid #9D63B5'
  }
}

const BackgroundColor = (type: any) => {
  if (type == 'grass') {
    return '#36C490'
  }
  if (type == 'fire') {
    return '#D93F31'
  }
  if (type == 'water') {
    return '#1790FF'
  }
   if (type == 'electric') {
    return '#ECD145'
  }
  if (type == 'flying') {
    return '#A890F0'
  }
  if (type == 'normal') {
    return '#A7A678'
  }
  if (type == 'rock') {
    return '#B8A038'
  }
  if (type == 'ground') {
    return '#E0C068'
  }
  if (type == 'bug') {
    return '#A8B820'
  }
   if (type == 'ice') {
    return '#98D8D8'
  }
  if (type == 'psychic') {
    return '#F85888'
  }
  if (type == 'dark') {
    return '#705848'
  }
  if (type == 'ghost') {
    return '#705898'
  }
   if (type == 'dragon') {
    return '#7038F8'
  }
  if (type == 'fairy') {
    return '#F0B6BC'
  }
  if (type == 'poison') {
    return '#9D63B5'
  }
}
const rodando = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 position: relative;
 bottom: 1rem;

`

export const Pokes = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Box = styled.div`
  width: 100%;
  height: 3rem;
  margin: 0rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3{
    position: relative;
    bottom: 0.7rem;
    display: flex;
    justify-content: center;
    border-radius: 0.7rem;
    background-color: ${(prop) => BackgroundColor(prop.color) || '#5B5B5B'};
    padding: 0.5rem;
    color: white;
    font-weight: 700;
  }
`
export const Lvl = styled.div`
  position: relative;
  top: 3.5rem;
  width: 64%;
  display: flex;
  justify-content: center;

  div{
    width: 100%;
    display: flex;
    justify-content: center;
  }

  p{
    display: flex;
    justify-content: center;
  }
`

export const Loading = styled.div`
 width: 2rem;
 height: 2rem;
 border: 0.7rem solid #d3d3d3;
 border-radius: 10rem;
 border-left:  ${(prop) => resolveColor(prop.color) || '#5B5B5B'} ;

 animation-name: ${rodando};
 animation-duration: 1s;
 animation-iteration-count:infinite;

 position: relative;
 top: 3rem;
`


