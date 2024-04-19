import styles from './Button.module.css';

const Button = () => {
    let count = 0;
    const handleClick = (e)=>{
        e.target.textContent = 'OUCH!';
        console.log( e.target.textContent );
    }


    return (
        <>
            <button 
                className={styles.btn} 
                onDoubleClick={(e)=>handleClick(e)}
                >Sample Button
            </button>
        </>
    )
}

export default Button;