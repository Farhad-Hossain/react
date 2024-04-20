import React, {useState} from 'react'

const UpdateArraysInState = () => {
    const [foods, setFoods] = useState([
        'Apple', 'Orange', 'PineApple', 'Guava'
    ]);

    const handleAddFood = (e)=>{
        const newFood = document.querySelector(`#foodInput`).value;
        document.querySelector(`#foodInput`).value = '';
        newFood && setFoods(f=> [...f, newFood]);
    }
    const handleRemoveFood = (index)=> {
        setFoods(f => f.filter((element, i) => i !== index));
    }

    return (
        <>
        <ul>
            {foods.map((food, index)=> 
                <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li> 
            )}
        </ul>
        <hr />
        <input type="text" id="foodInput" placeholder='Enter Food name' />
        <button onClick={(e)=>handleAddFood(e)}>Add Food</button>
        </>
    );
}
export default UpdateArraysInState;