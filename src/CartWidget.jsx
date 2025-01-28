import react from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            <FaShoppingCart size={24} />
        </div>
    );
};



export default CartWidget;