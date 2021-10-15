import React from "react";
import styles from "./Main.module.css"

const Main = () => {
    return(
        <div className={styles.mainBlock}>
            <div className={styles.text}></div>
                <span>Hi there</span>
            <h1>I am Kirill</h1>
            <p></p>
            <div className={styles.photo}></div>
        </div>
    )
}
export {
    Main
}