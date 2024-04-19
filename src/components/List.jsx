import PropTypes from 'prop-types'
const List = ( props ) => {
    const items = props.items;
    const category = props.category;
    const listItems = items.map(item => <li key={item.name}>{item.name}: &nbsp; <b>{item.calories}</b></li>);

    return (
        <>
        <h3>{ category }</h3>
        <ol>
            {listItems}
        </ol>
        </>
    )
}
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}

List.defaultProps = {
    items: [],
    category: 'Category'
}
export default List;