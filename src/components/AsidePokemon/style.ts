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

export const Container = styled.div`
  width: 100%;
  height: 105%;
  background-color: white;

  @media (min-width: 768px) {
    width: 95%;
    height: 20rem;
  }

  span{
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    font-size: 2rem;

    @media (min-width: 768px) {
      display: none;
  }
  }

`

export const BoxImg = styled.div`
  position: relative;
  top: 1.3rem;
  background-color: ${(prop) => resolveColor(prop.color) || '#5B5B5B'};
  height: 7rem;
  border-radius: 1rem ;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0rem 1.5rem;

  img{
    position: relative;
    bottom: 7rem;
    width: 10rem;
  }

  @media (min-width: 768px) {
    position: relative;
    top: 0;
    bottom: 0;
    margin: 0rem 0rem;
  }


`
export const BoxImgTxt = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h3{
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    right: 1.5rem;
    top: 4rem;
    font-size: 2rem;
    color: white;
  }
`

export const IdPoke = styled.div`
  position: relative;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 1.875rem;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F0EFEF;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    right: 1rem;
  }
`

export const Box = styled.div`
  position: relative;
  top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    top: 1rem;
  }

  p{
    width: 90%;
    position: relative;
    top: 0.5rem;
    text-align: justify;
  }
`

export const CardTyps = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
`

export const Type = styled.div`
  width: 5rem;
  height: 2rem;
  background-color: ${(prop) => resolveColor(prop.color) || '#5B5B5B'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  margin: 0rem 0.5rem;
  border-radius: 0.5rem;
`

export const Status = styled.div`
  position: relative;
  top: 1.8rem;
  width: 90%;
  display: flex;
  justify-content: space-between;
`
export const Stat = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4{
    width: 3em;
    height: 2.4rem;
    border-radius: 3rem;
    background-color: ${(prop) => resolveColor(prop.color) || '#5B5B5B'};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.8rem;

  }
  p{
    display: flex;
    justify-content: center;
  }
`

export const Evolutions = styled.div`
  width: 90%;
  height: 5rem;
  position: relative;
  top: 3.8rem;

  h3{
    width: 100%;
    display: flex;
    justify-content: center;
    font-weight: 800;
  }
`
