import styles from './Info.module.css'

const Info = ({pokedexNum, name, type, generation}) => {
    return (
        <div className={styles.container}>
            <img src = {`../Images/${pokedexNum}.png`} alt={`${pokedexNum}`}></img>
            <div className={styles.text}>
                <p>{name}</p>
                <p>{type}</p>
                <p>{`generation ${generation}`}</p>
            </div>
        </div>
    )
}

export default Info