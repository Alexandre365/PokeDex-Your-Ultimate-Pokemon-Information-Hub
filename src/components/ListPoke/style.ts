import { styled } from "styled-components";
const resolveColor = (type: any) => {
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
  if (type == 'flaying') {
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

export const Container = styled.div`
  width: 100%;
  height: 20rem;
  margin: 1rem;
`
export const Cards= styled.div`
  max-width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-bottom: 2rem;
`

export const Card = styled.div`
  background-color: ${(prop) => resolveColor(prop.color) || '#5B5B5B'};
  padding: 0.5rem;
  border-radius: 1rem;

  h2{
    color: white;
  }
`

export const IdPoke = styled.div`
  position: relative;
  bottom: 1rem;
  right: 1.2rem;
  width: 3rem;
  height: 1.875rem;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F0EFEF;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25);
`

export const TypePoke = styled.div`
  width: 10rem;
  display: flex;
  padding: 0.5rem 0rem;
  div{
    padding: 0.3rem 1rem;
    color:white;
    background-color:rgba(0, 0, 0, 0.12);
    border-radius: 0.2rem;
    margin-right: 0.5rem;
  }
`
