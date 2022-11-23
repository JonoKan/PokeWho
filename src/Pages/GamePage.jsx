import { useState, useEffect } from "react";
import styles from "./GamePage.module.css";
import Title from "../components/Title";
import Info from "./Info";

const GamePage = () => {
  const limit = 100;
  const offset = 0;
  const otherPlayerPokemon = 98;

  const [allData, setAllData] = useState([]);
  const [info, setInfo] = useState({
    name: "",
    type: "",
    image: "",
  });

  const getpokemonData = async (dexNumber) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${dexNumber}`);
    const json = await resp.json();
    const { forms, types, sprites } = json;
    setAllData((prev) => [
      ...prev,
      { name: forms[0].name, types, image: sprites.front_default },
    ]);
  };

  useEffect(() => {
    const randomNumbers = new Set();
    const genRandomNumber = (max, min) =>
      Math.floor(Math.random() * (max - min) + min);
    while (randomNumbers.size < 25)
      randomNumbers.add(genRandomNumber(limit, offset));
    randomNumbers.forEach((num) => getpokemonData(num + 1));
  }, []);

  const hidePokemon = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title />
      </div>
      <div className={styles.aside}>
        <Info {...info} />
      </div>
      <div className={styles.game}>
        {allData.map((pokemon) => (
          <div key={pokemon.name} onClick={() => setInfo(pokemon)}>
            <img src={pokemon.image} alt={pokemon.name}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
