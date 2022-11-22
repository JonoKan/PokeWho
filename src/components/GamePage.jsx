import styles from './GamePage.module.css'
import Title from './Title'
import Info from './Info'
import { useState, useEffect } from 'react'

const GamePage = ({limit, offset}) => {

    const randNum = (limit, offset) => {
        return Math.floor(Math.random() * (limit - offset + 1)) + offset
    }
    
    const [pokemon, setPokemon] = useState(null)
    const [info, setInfo] = useState({
        pokedexNum: '001',
        name: 'bulbasaur',
        type: 'grass',
        generation: '4'
    })
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