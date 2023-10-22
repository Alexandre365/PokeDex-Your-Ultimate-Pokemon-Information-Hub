import React from 'react';
import { Container, Cards, Card, IdPoke, TypePoke, Cont, ImgBox} from './style';
interface User {
  id: number;
  name: string;
  types: Array<any>;
  sprites:{front_default:string}
}

type UserArray = User[];

const idPoke = (id:number) =>{
  if (id < 10) {
    return `#00${id}`
  }
  if (id < 100) {
    return `#0${id}`
  }
  if (id > 100) {
    return `#${id}`
  }
}

const  Uppercase = (str: string) =>{
  return str[0].toUpperCase() + str.slice(1)
}

export  const List: React.FC<{ users: UserArray, Aside: Function, _id: Function }> = ({ users, Aside, _id }) =>  {

  return (
    <Container >
      <Cards>
        {
          users.map((i, index) => (
            <Card color={i.types[0].type.name} key={index} onClick={() => {
              Aside('0rem')
              _id(i.id)

            }}>
              <Cont>
                <IdPoke>{idPoke(i.id)}</IdPoke>
                <h2>
                  {Uppercase(i.name)}
                </h2>
                  {i.types.length == 1 ? (
                    <TypePoke>
                      <div>{i.types[0].type.name}</div>
                    </TypePoke>
                  ):(
                    <TypePoke>
                      <div>{i.types[0].type.name}</div>
                      <div>{i.types[1].type.name}</div>
                    </TypePoke>
                  )}
              </Cont>
              <ImgBox>
              <img src={i.sprites.front_default} alt="Lamp" width="32" height="32"></img>
              </ImgBox>
            </Card>
          ))
        }
      </Cards>
    </Container>
  );
}

