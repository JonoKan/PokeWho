import styles from './Home.module.css'
import Title from './Title'

const Home = () => {
    return (
        <div className='main-body' >
            <Title/>
            <input id={styles.code} placeholder='enter 4 digit code'></input>
            <div className={styles.buttons}>
                <button className={styles.button}>new game</button>
                <button className={styles.button}>start game</button>
            </div>
            <div className={styles.info}>
                <p>how to play</p>
                <div className={styles.instructions}>
                    <ul>
                        <li>take turn asking each other questions</li>
                        <li>click a card for more info</li>
                        <li>double click a card to eliminate</li>
                        <li>first person to guess the other pokemon wins</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home