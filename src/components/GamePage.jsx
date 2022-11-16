import styles from './GamePage.module.css'
import Title from './Title'
import Info from './Info'
import { useState, useEffect } from 'react'

const GamePage = () => {

    const [pokemon, setPokemon] = useState(null)
    const [info, setInfo] = useState({
        pokedexNum: '001',
        name: 'bulbasaur',
        type: 'grass',
        generation: '4'
    })
    useEffect(() => {

    },[pokemon, info])
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Title />
            </div>
            <div className={styles.aside}>
                <Info {...info}  />
            </div>
            <div className={styles.game}></div>

        </div>
    )
}

export default GamePage