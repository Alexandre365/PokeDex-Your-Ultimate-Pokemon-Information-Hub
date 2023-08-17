import { useState, useContext } from 'react'
import { DataContext } from './Contexts'
import { Container, Box, Header, Title, Form, Main, Aside,  Selects, Search } from './Style'
import Select from './components/Selects'
import {List} from './components/ListPoke'

function App() {
  const {poke, Load} = useContext(DataContext)
  const [Asid] = useState<String>('50rem')

  Load()


  return (
    <Container>
      <Box>
        <Header  >
          <Title>
            <h2>Pokédex</h2>
            <p>Use the advanced search to find pokémon by type , weaknes, ability and movre</p>
          </Title>
          <Form>
            <Search>
              <input type="text" name="Search" id="" placeholder='Search pokémon' />
            </Search>
            <Selects>
              <Select i={['Type','Normal','Fighting','Flying','Poison','Ground','Rock','Bug','Ghost','Steel','Fire','Water','Grass','Electric','Psychic','Ice','Dragon','Dark','Fairy']}/>
              <Select i={['Generation']}/>
              <Select i={['Game']}/>
              <button>Load</button>
            </Selects>
          </Form>
        </Header>
        <Main >
          <List users={poke} />
          <Aside title={`${Asid}`}></Aside>
        </Main>
      </Box>
    </Container>
  )
}

export default App

