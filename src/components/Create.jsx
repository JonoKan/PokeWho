import styles from './Create.module.css'
import React, {useState} from 'react'

const Create = () => {

    const regions = ['alola', 'galar', 'hoenn', 'johto', 'kanto', 'unova', 'sinnoh', 'kalos', 'all regions']
    const [selectedRegion, setSelectedRegion] = useState("alola")

    const copyText = () => {

    }
    return (
        <div className='main-body'>
            <h2 className="title">PokéWho</h2>
            <div className={styles.section}>
                <div className={styles.link}>
                    <p>https://pokewho.com/pxla</p>
                    <button id='copy-button' className={styles.copybutton} onClick={copyText}>copy</button>
                </div>
                <div className={styles.regions}>
                    <h2>Select Region</h2>
                    {regions.map(region => <button key={region} onClick={() => setSelectedRegion(region)} className={region === selectedRegion ? `${styles.active}` : ''}>{region}</button>)}
                </div>
                <div className={styles.start}>
                    <p>start game</p>
                </div>
            </div>
        </div>
    )
}

export default Create