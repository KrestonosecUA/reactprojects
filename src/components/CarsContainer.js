import React, {useEffect, useState} from 'react';
import CarForm from "./CarForm";
import Cars from "./Cars";
import {carService} from "../services/carService";

const CarsContainer = () => {

    const [cars, setCars] = useState([])


    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, );

    return (
        <div>
            <CarForm setCars={setCars}/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export default CarsContainer;