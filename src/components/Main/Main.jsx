import React from "react";
import styles from "./Main.module.css"

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <span>Hi there</span>
                    <h1>I am Kirill Dolzhenkov</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    )
}
export {
    Main
}