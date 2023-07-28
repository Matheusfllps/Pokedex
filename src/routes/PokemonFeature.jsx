import Pokecards from "../components/Pokecards"

import { useEffect } from "react";
import axios from "axios";
function PokemonFeature() {


    useEffect(() => {
        // axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
        //  console.log(response.data.results);
         axios.get("https://pokeapi.co/api/v2/pokemon/4").then((response) => {
       console.log(response);
         
      }, [])});
  return (
    <div>
        <Pokecards
         />
    </div>
  )
}

export default PokemonFeature