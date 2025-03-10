import styles from './Post.module.css'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post(props) {
    return <>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar url="https://images.unsplash.com/photo-1709651669999-57741c9bf085?q=80&w=260&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    borda={true}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{props.nome}</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de maios as 8h" dateTime="2025" >Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '} Alessandro</p>
                <a href='#'>exemplo.com</a>

            </div>

            <form className={styles.comment} action="">
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentario'>

                </textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
            </div>
           
        </article>
        

    </>
}