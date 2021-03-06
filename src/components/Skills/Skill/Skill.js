import React from "react"

import style from "./Skill.module.css"

const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <div className={props.description}>{props.description}</div>
        </div>
    )
}

export {
    Skill
}