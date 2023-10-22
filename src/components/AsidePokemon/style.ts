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
  width: 95%;
  height: 20rem;
  background-color: '#ffffff0' ;
  box-shadow: 0px 2.767256498336792px 2.2138051986694336px 0px rgba(22, 22, 22, 0.02), 0px 6.650102138519287px 5.32008171081543px 0px rgba(22, 22, 22, 0.03), 0px 12.521552085876465px 10.017241477966309px 0px rgba(22, 22, 22, 0.04), 0px 22.3363094329834px 17.869047164916992px 0px rgba(22, 22, 22, 0.04), 0px 41.777610778808594px 33.422088623046875px 0px rgba(22, 22, 22, 0.05), 0px 100px 80px 0px rgba(22, 22, 22, 0.07);
`

export const BoxImg = styled.div`
background-color: ${(prop) => resolveColor(prop.color) || '#5B5B5B'}
`
