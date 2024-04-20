import React, {useState, useEffect} from 'react';

const UseEffectComponent = ()=> {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        console.log('Event Listener Added.');

        return ()=> {
            window.removeEventListener("resize", handleResize);
            console.log('Event Listener Removed.');
        }
    }, []);

    useEffect(()=>{
        document.title = `Size: ${height} x ${width}`;
    }, [width, height]);

    const handleResize = ()=> {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
            <p>Window Width is : {width}</p>    
            <p>Window height is : {height}</p>
        </>
    );
}
export default UseEffectComponent;