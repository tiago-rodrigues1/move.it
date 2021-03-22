import styles from '../styles/components/Profile.module.css'

import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/70401246?s=400&u=22f17e7f986e04b56212b87f43e9ac625bfbe78f&v=4" alt="Tiago Rodrigues" />
            <div>
                <strong>Tiago Rodrigues</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}