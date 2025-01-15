import { Trash, ThumbsUp } from "@phosphor-icons/react";

import styles from './Comment.module.css';

export function Comment(){
    return<>

<div className={styles.commentContainer}>
    <img
        src="https://images.unsplash.com/photo-1709651669999-57741c9bf085?q=80&w=260&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="User avatar"
    />
    <article>
        <div className={styles.commentContent}>
            <header className={styles.commentHeader}>
                <strong>Ale S <span>{' '} (você)</span></strong>
                <i><Trash size={20} /></i>
            </header>
            <time className={styles.commentTime} dateTime=""> Cerca de 2h </time>
            <div className={styles.commentText}>
                Muito bom, Devon, Parabéns 👍👍👍
            </div>
        </div>
        
        <i className={styles.commentActions}>
            <ThumbsUp size={20} />
            Aplaudir - 3
        </i>
    </article>
</div>
</>

}