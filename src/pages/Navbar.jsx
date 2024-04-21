import {Link} from 'react-router-dom';

const Navbar = ()=> {
    return (
        <header className='nav'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </header>
    );
}
export default Navbar;