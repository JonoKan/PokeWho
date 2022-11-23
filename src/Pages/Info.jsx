import styles from "./Info.module.css";

const Info = ({ name, type, image }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={name}></img>
      <div className={styles.text}>
        <p>{name}</p>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default Info;
