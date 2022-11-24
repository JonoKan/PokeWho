import styles from "./Home.module.css";
import Title from "../components/Title";
import pokeball from "../assets/pokeball.svg";
import pikachu from "../assets/pikachu.svg";
import bird from "../assets/bird.svg";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lightRed}>
        <Title />
        <div className={styles.interact}>
          <div className={styles.newGame}>
            <h1>new game</h1>
            <div className={styles.lightBlue}></div>
            <div className={styles.skewLightBlue}></div>
          </div>
          <input
            className={styles.joinCode}
            type="text"
            placeholder="enter 4 digit code"
          ></input>
          <button className={styles.joinGame}>join</button>
        </div>
      </div>
      <div className={styles.skewLightRed}></div>
      <div className={styles.darkRed}></div>
      <div className={styles.imageContainer}>
        <img src={pokeball} className={styles.pokeball}></img>
        <img src={pikachu} className={styles.pikachu}></img>
        <img src={bird} className={styles.bird}></img>
      </div>
    </div>
  );
};

export default Home;
