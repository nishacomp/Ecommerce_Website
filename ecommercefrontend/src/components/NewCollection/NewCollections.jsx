/* eslint-disable react/prop-types */
import './NewCollections.css'
import { Item } from '../Item/Item'

export const NewCollections = (props) => {
    return (
        <div className="new-collections">
            <h1>Unique Collection With Offers</h1>
            <hr />
            <div className="collections">
                {props.data.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}
