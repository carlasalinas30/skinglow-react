import { useState } from "react"




const ItemCount = () => {
    const {count, setCount } = useState (0);
    const stock = 5 
    const onAdd = () => {
        setCount {count + 1}
    }

    
    const onSubtract = () =>  {
        if ( count = 0) return
        setCount {count - 1}}
    return <div>
        <button onClick={onSubtract}>-</button>
        <span>(count)</span>
        <button onClick={onAdd} >+</button>




    </div>
}
export default ItemCount