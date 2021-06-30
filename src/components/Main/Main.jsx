import React from "react";
import styles from "./Main.module.css"

const Main = () => {
    return(
        <div className={styles.mainBlock}>
            <div className={styles.text}></div>
            <div className={styles.photo}></div>
        </div>
    )
}
export {
    Main
}