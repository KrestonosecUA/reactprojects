import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carService";

const CarForm = ({setCars}) => {

    const {reset, register, handleSubmit} = useForm();

    const save = (item) => {
        carService.create(item).then(({data}) => setCars(prev => [...prev, data]))
    }


    console.log(carService)
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            <input type='text' placeholder={'price'} {...register('price')}/>
            <button>Save</button>
        </form>
    );
};

export default CarForm;