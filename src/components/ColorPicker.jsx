import React, {useState} from 'react'

const ColorPicker = ()=> {
    const [color, setColor] = useState('#FFF');
    const handleColorChange = (e)=> setColor(e.target.value);

    return (
        <>
        <p style={{backgroundColor: color}}>Selectec Color: {color}</p>
        <form action="">
            <p>
                    Select Color : <input type="color" onChange={(e) => handleColorChange(e)} />
            </p>
        </form>
        </>
    )
}
export default ColorPicker;