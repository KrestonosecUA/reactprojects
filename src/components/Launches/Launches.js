import React, {useEffect, useState} from 'react';
import {launchService} from "../../services/launchService";
import Launch from "../Launch/Launch";
import style from "./Launches.module.css"

const Launches = () => {

    const [launches, setLaunches] = useState([])

    useEffect(() => {
        launchService.getAll().then(({data}) => {

            //let filterArr = data.filter(function (item) {
            //    if (item.launch_year !== '2020') {
            //        return true
            //    }
            //})
            const filterArr = data.filter(item => item.launch_year !== '2020');

            setLaunches(filterArr)
        })
    }, []);

    console.log(launches)

    return (

        <div className={style.main}>
            <h1 className={style.mainTitle}>Launches of SpaceX</h1>
            <div className={style.launchBlocks}>
                {launches.map(launch => <Launch key={launch.flight_number} launch={launch}/>)}
            </div>
        </div>
    );
};

export default Launches;