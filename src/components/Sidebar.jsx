import styles from './Sidebar.module.css'
import iconLapis from '../assets/iconLapis.svg'

import { PencilLine } from "@phosphor-icons/react";
import { Avatar } from './Avatar';

export function Sidebar(){

    return <>
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1735116356965-ad5b323d1af8?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt=""
            />
            
            <div className={styles.profile}>
            <       Avatar url="https://images.unsplash.com/photo-1709651669999-57741c9bf085?q=80&w=260&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    borda={true}/>
                <strong>Alessandro</strong>
                <span>Web Developer</span>
            </div>
                
            <footer>
                <a href='#' className={styles.button}>
                    <div><PencilLine size={20} /></div>
                    Edita seu Perfil
                </a>
            </footer>
        </aside>
    </>
}