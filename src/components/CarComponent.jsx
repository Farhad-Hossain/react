
import React, {useState} from 'react';

const CarComponent = ()=> {
    const [car, setCar] = useState({
        year:2024,
        make:"Ford",
        model:"Mustang" 
    });
    const handleYearChange = (e)=> {
        setCar(c => ({...c, year: e.target.value}))
    }

    return (
    <>
    <p>My Favourite Car is {car.year}, {car.make}, {car.model}</p>

    <br />
            <input type="text" onChange={(e) => handleYearChange(e)} />
    </>);
}
export default CarComponent;