import { useEffect, useState } from "react";
import axios from "axios";

const PokemonNew = () => {
  const [list, setList] = useState([]);
  const [listFilter, setListFilter] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      const sortedArray = [...response.data.results];
      sortedArray.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setListFilter(sortedArray);
      setList(sortedArray);
    });
  }, []);
  //  const ids = list.map(pokemon => (pokemon.name))
  //  console.log(ids)
  const chosePokemon = () => {
    setListFilter(list.filter((list) => list.name === "beedrill"));
  };
  // const chosepokemon = list.filter((list) => list.name === "beedrill");
  // console.log(chosepokemon);
  return (
    <div>
      {listFilter.map((item) => (
        <Pokemon key={item.name} data={item} />
      ))}
      <button onClick={chosePokemon}>buscar </button>
    </div>
  );
};

const Pokemon = ({ data }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(data.url).then((response) => setDetails(response.data));
  }, []);

  if (!details) {
    return <div>-</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={details.sprites.front_default}
        style={{ width: 100, marginRight: 20 }}
      />
      <span>
        <b style={{ fontSize: 25 }}>
          {details.name} - EXP {details.base_experience}
        </b>
      </span>
    </div>
  );
};

export default PokemonNew;
