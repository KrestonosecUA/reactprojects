import React from 'react';
import style from "./Launch.module.css"

const Launch = ({launch}) => {

    const {mission_name, launch_year, links: {mission_patch_small}} = launch;

    return (
        <div className={style.launchBlock}>
            <h2 className={style.launchTitle}>{mission_name}</h2>
            <p className={style.launchYear}>Year: {launch_year}</p>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={mission_patch_small} alt="image"/>
            
        </div>
    );
};

export default Launch;