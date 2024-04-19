import PropTypes from 'prop-types';

const Student = (props) => {
    return (
    <>
    <h2>Student List</h2>
    <p>Name : {props.name}</p>
    <p>Age: {props.age}</p>
    <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
    </>)
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: 'Mim',
    
}
export default Student;