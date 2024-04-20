import React, {useState} from 'react';

const UpdateArrayOfObject = ()=> {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    const handleAddCar = ()=> {
        const newCar = {
            year:carYear,
            make:carMake,
            model:carModel
        }
        setCars(c => [...c, newCar])
        setCarYear(c => new Date().getFullYear())
        setCarMake(c => "")
        setCarModel(c => "")
    }
    const handleRemoveCar = ()=> {

    }
    const handleYearChange = (e)=> {
        setCarYear(c => e.target.value )
    }
    const handleMakeChange = (e)=> {
        setCarMake(c => e.target.value)
    }
    const handleModelChange = (e) => {
        setCarModel(c => e.target.value)
    }


    return (
        <>
            <h2>List of Car Object</h2>
            <ul>
                {cars.map((car, index)=> 
                    <li key={index}>
                        {car.year}, {car.make}, {car.model}
                    </li>
                )}
            </ul>

            <input type="number" value={carYear} onChange={(e)=>handleYearChange(e)} placeholder='Enter the year' />
            <br />
            <input type="text" value={carMake} onChange={(e)=>handleMakeChange(e)} placeholder='Enter Make ' />
            <br />
            <input type="text" value={carModel} onChange={(e) => handleModelChange(e)} placeholder='Enter Model ' />
            <br />
            <button onClick={()=>handleAddCar()}>Add Car</button>
        </>
    );
}
export default UpdateArrayOfObject; 