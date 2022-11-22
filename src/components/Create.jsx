import styles from './Create.module.css'
import React, {useState} from 'react'
import Title from './Title'

const Create = ({code}) => {

    const regions = [
        {
            name: 'kanto',
            limit: 151,
            offset: 0
        },
        {
            name: 'johto',
            limit: 100,
            offset: 151
        },
        {
            name: 'hoenn',
            limit: 135,
            offset: 251
        },
        {
            name: 'sinnoh',
            limit: 106,
            offset: 386
        },
        {
            name: 'unova',
            limit: 155,
            offset: 493
        },
        {
            name: 'kalos',
            limit: 71,
            offset: 649
        },
        {
            name: 'alola',
            limit: 87,
            offset: 721
        },
        {
            name: 'galar',
            limit: 95,
            offset: 809
        },
        {
            name: 'all regions',
            limit: 100000,
            offset: 0
        },
        ]
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
                    {regions.map(region => <button key={region.name} onClick={() => setSelectedRegion(region.name)} className={region.name === selectedRegion ? `${styles.active}` : ''}>{region.name}</button>)}
                </div>
                {/* Will pass limit and offset as props to GamePage route */}
                <div className={styles.start}> 
                    <p>start game</p>
                </div>
            </div>
        </div>
    )
}

export default Create