import { useState, useContext } from 'react'
import { DataContext } from './Contexts'
import { Container, Box, Header, Title, Form, Main, Aside,  Selects, Search } from './Style'
import Select from './components/Selects'
import { AsidePokemon } from './components/AsidePokemon'
import {List} from './components/ListPoke'


function App() {
  const {poke, Load} = useContext(DataContext)
  const [Asid, setAsid] = useState<String>('50rem')
  const [_id, set_id] = useState<number>(0)

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
          <List users={poke} Aside={setAsid} _id={set_id} />
          <Aside title={`${Asid}`}><AsidePokemon Poke={poke[_id - 1]} id={_id} Aside={setAsid}/></Aside>
        </Main>
      </Box>
    </Container>
  )
}

export default App

