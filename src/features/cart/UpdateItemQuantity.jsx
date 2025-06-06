/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice"

function UpdateItemQuantity({ pizzaId, currentQuantity }) {

    const dispatch = useDispatch()

    return (
        <div className="flex gap-1 items-center md:gap-3">
            <Button type='round' onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <p>{currentQuantity}</p>
            <Button type='round' onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
