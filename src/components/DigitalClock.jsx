import React, {useState, useEffect} from 'react';


const DigitalClock = ()=> {
    const [time, setTime] = useState(new Date());
    
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        }, 1000);

        return ()=> {
            clearInterval(intervalId);
        }
    }, []);

    const timeFormat = ()=> {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridien = hours >= 12 ? 'PM' : 'AM';
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridien}`;
    }

    const padZero = (n)=> {
        return (n < 10 ? "0" : '')+n;
    }

    return (
        <div>
            <p>
                <span>{timeFormat()}</span>
            </p>
        </div>
    );
}
export default DigitalClock;