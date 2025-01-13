
import styles from './Header.module.css'

import ignaitSimbol from '../assets/Ignite-simbol.svg'

export function Header(){
    return <>
        <div className={styles.header}>
           <img src={ignaitSimbol} alt="logotipo do ignit" />
        </div>
    </>
}