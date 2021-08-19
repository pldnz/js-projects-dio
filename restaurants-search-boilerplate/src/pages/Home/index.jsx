import React, { useState } from 'react';
import TextField, {Input} from '@material/react-text-field/';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg'

import { Wrapper, Container, Search, Logo, Map } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  return(
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo do buscador de restaurantes" />
          <TextField
            label='Pesquisar'
            // outlined
            // onTrailingIconSelect={()=> this.setState({value: ''})}
            trailingIcon={<MaterialIcon role ="button" icon="search"/>}
          ><Input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          </TextField>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  ); 
};

export default Home;