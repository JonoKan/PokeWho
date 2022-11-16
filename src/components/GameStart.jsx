import styles from './GameStart.module.css'

const GameStart = ({pic, pokemonName}) => {

    return (
        <div className={`${styles.darken}`}>
            <div className={styles.centreCircle}>
                <img src = "https://storage.googleapis.com/kagglesdsdata/datasets/413826/791739/Images/001.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20221116%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20221116T022834Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=165389dd5a0248a8cff8cd18af111b489772dba6f411e7e8bfc03108b20653ecce7175a0d8e536b780aae4e4af62ec7c4270e27e6e0f6072c397be8b6036c1561169813ba110be6e4eeba3ba573c1c4517495bb988a03dab040f8840d1ce4ed08c3d68768821079c409075fd843356654ddd23a7d07e87bf1eb503bd51886a8db900a5acdf7386b7278ab9779d8742c3180373ed522516c715b6346c9064cbe143c0227e8d5b112281529db5431368e7286760942540ab13934da70ef48841587d78032b83c63176d60b9853d1e0146cfed5e40788a5a8fbdf465c07de4d0a519a85333d3f5ebeb8422473b55b107763f20474c70240c2324137b4288c25139e"></img>
            </div>
            <p>You caught bulbasaur</p>
        </div>
    )
}

export default GameStart