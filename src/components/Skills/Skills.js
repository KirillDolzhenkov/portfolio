import React from "react"

import style from "./Skills.module.css"
import styleContainer from "../../common/styles/Container.module.css";
import {Skill} from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit ut voluptatem."}/>
                    <Skill title={"CSS"} description={"Dolorum esse eum fugiat hic id illum incidunt inventore laborum libero"}/>
                    <Skill title={"React"} description={"maiores nesciunt non officia, porro, repellat sunt repellendus sed."}/>
                </div>

            </div>
        </div>
    )
}

export {
    Skills
}