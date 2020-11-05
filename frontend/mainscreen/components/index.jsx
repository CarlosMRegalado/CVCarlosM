import React from 'react'
import styles from '../styles/Main.scss'
import Leftside from './leftside'
import Rightside from './rightside'

const MainScreen = () => {
    return (
        <div className={styles.Main}>

            <div className={styles.MainLeft}>
                <Leftside/>
            </div>
            <div className= {styles.MainRight}>
                <Rightside/>
            </div>
        </div>

    )
}

export default MainScreen
