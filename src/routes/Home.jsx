import Pokecards from "../components/Pokecards";

import axios from "axios";
import "./Home.css";
import { useEffect, useState } from "react";
import { SimpleGrid, Button, Center, Input } from "@chakra-ui/react";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsFilter, setPokemonsFilter] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getPokemons();
  }, []);
  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 30; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((response) => {
        setPokemons(response);
        setPokemonsFilter(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const chosePokemon = () => {
    setPokemonsFilter(
      pokemons.filter((pokemons) => pokemons.data.name.includes(inputValue))
    );
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setPokemonsFilter(
        pokemons.filter((pokemons) => pokemons.data.name.includes(inputValue))
      );
      //  console.log('tecla precionada')

    }
  };

  return (
    <div className="container">
      <h1>Pokedex</h1>

      <Center h='100px'flexDir='column' color='white'>
      <Input
        type="text"
        maxW={'650px'}
        style={{ color: "white" }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        />
      <Button
      marginTop={'20px'}
        colorScheme="green"
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="green.500"
        onClick={chosePokemon}
      >
        Escolher pokemon
      </Button>
    </Center>
  
      <SimpleGrid columns={[2, null, 3]} spacing="20px">
        {pokemonsFilter.map((pokemon) => (
          <Pokecards
            key={pokemon.id}
            name={pokemon.data.name}
            image={pokemon.data.sprites.front_default}
            experience={pokemon.data.base_experience}
         
          />
        ))}
      </SimpleGrid> 
    </div>
  );
};
