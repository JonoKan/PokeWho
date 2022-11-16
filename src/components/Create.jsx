import styles from './Create.module.css'
import React, {useState} from 'react'
import Title from './Title'

const Create = ({code}) => {

    const regions = ['alola', 'galar', 'hoenn', 'johto', 'kanto', 'unova', 'sinnoh', 'kalos', 'all regions']
    const [selectedRegion, setSelectedRegion] = useState("alola")
    const link = `https://pokewho.com/78ad`

    return (
        <div className='main-body'>
            <Title/>
            <div className={styles.section}>
                <div className={styles.link}>
                    <p>{link}</p>
                    <button id='copy-button' className={styles.copybutton} onClick={() => {navigator.clipboard.writeText(link)}}>copy</button>
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