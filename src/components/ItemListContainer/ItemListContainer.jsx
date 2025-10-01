import './itemlistcontainer.css'

const ItemListContainer = ({greeting}) => {

    return(
        <div className="itemlistcontainer">
            <h2 className="itemlistcontainer">{greeting}</h2>
        </div>
    )
}

export default ItemListContainer; 
