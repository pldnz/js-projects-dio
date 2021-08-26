import React, { useState } from 'react';
import TextField, {Input} from '@material/react-text-field/';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg'
import restaurante from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';

import { Wrapper, Container, Carousel, Search, Logo, CarouselTitle, ModalTitle, ModalContent } from './styles';
import { useSelector } from 'react-redux';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector((state)=> state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if(e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  }

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
            onKeyPress={handleKeyPress}
            onChange={(e) => setInputValue(e.target.value)}
          />
          </TextField>
          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Na sua Área</CarouselTitle>
              <Carousel { ... settings }>
              {restaurants.map((restaurant)=><Card key={restaurant.place_id} photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} title={restaurant.name}/>)}
              </Carousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>
        {restaurants.map((restaurant)=> (
          <RestaurantCard onClick={() => handleOpenModal(restaurant.place_id)} restaurant={restaurant} />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>
            <p>{restaurantSelected?.name}</p>
          </ModalTitle>
          <ModalContent>
            <p>{restaurantSelected?.formatted_phone_number}</p>
            <p>{restaurantSelected?.formatted_address}</p>
            <p>{restaurantSelected?.opening_hours?.open_now ? 'Aberto agora' : 'Fechado neste momento'}</p>
          </ModalContent>
          </>
        ):(
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  ); 
};

export default Home;