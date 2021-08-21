import React, { useState } from 'react';
import TextField, {Input} from '@material/react-text-field/';
import MaterialIcon from '@material/react-material-icon';
import Slider from "react-slick";
import logo from '../../assets/logo.svg'
import restaurante from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal } from '../../components';

import { Wrapper, Container, Search, Logo, Map, CarouselTitle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

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
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Slider { ... settings }>
            <Card photo={restaurante} title="Restaurante"/>
            <Card photo={restaurante} />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
          </Slider>
          <button onClick={() => setModalOpened(true)}>Abrir modal</button>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  ); 
};

export default Home;