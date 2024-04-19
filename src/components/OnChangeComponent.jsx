import React, {useState} from 'react'

const OnChangeComponent = ()=> {
    const [name, setName] = useState('Farhad Hossain');
    const [shipping, setShipping] = useState()

    const updateName = (e)=> setName( e.target.value );
    const handleShippingChange = (e)=> setShipping( e.target.value )
    


    return (
        <>
        <p>My Name is {name}</p>
        <p>My Age is 28</p>
        <p>Shipping {shipping}</p>


        <form action="">
            <p>Name: <input type="text" name="name" onChange={(e)=>updateName(e)} /></p>
            
            <p>Shipping type</p>
            <p>
                <input type="radio" value={'Pick Up'} checked={shipping === 'Pick Up'} onChange={(e)=>handleShippingChange(e)} /> Pick Up
            </p>

            <p>
                <input type="radio" value={'Delivery'} checked={shipping === 'Delivery'} onChange={(e) => handleShippingChange(e)} /> Delivery
            </p>

        </form>
        </>
    )
}
export default OnChangeComponent;