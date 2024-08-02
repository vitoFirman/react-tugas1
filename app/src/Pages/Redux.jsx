import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Features/counterSlice";

const Redux = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.counter.value)

    return(
        <div className="row">
            <div className="col-md-6 d-flex flex-column mx-auto">
                <button onClick={() => dispatch(addToCart())} className="btn mx-auto btn-dark mt-5">Add To Cart</button>
                <p className="text-center mt-4">My Cart ( {cart} )</p>
            </div>
        </div>
    )
}

export default Redux