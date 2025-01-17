
import styles from './Avatar.module.css'

export function Avatar({borda=false, url}){
    return(
        <span className={borda ?styles.avatarComBorda  : styles.avatar}>
            <img
            src={url}           
            alt="User avatar"
            />
        </span>
    )
}


/*

export function Avatar({ borda, url }) {
    function getClassName() {
        if (borda) {
            return styles.avatarComBorda;
        } else {
            return styles.avatar;
        }
    }

    return (
        <span className={getClassName()}>
            <img
                src={url}
                alt="User avatar"
            />
        </span>
    );
}

*/