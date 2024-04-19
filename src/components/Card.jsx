import profilePic from './../assets/farhad.jpg';

const Card = () => {
    return (
        <div className='card'>
            <img src={profilePic} alt="Profile picture" />
            <h2>Bro Code</h2>
            <p>I make youtube videos and play video games</p>
        </div>
    )
}

export default Card;