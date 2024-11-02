// import React from "react";
// import storeitems from "./../data/storeitem.json";
// import { Row, Col, Button } from "react-bootstrap";
// import "./../Cart/cartitem.css";
// import { useshoppingcart } from "../Providorc";
// import { useNavigate } from "react-router-dom";
// const Cartitem = ({ id, quantity }) => {
//   const { addtocart,addtocheckout, decreaseitem ,cartItems,addAllToCheckout} = useshoppingcart();
//   const navigate = useNavigate();
//   const handelcheckout = (itemId) => {
//     // إيجاد العنصر الحالي في cartItems
//     const itemInCart = cartItems.find((item) => item.id === itemId);
   

//     if (itemInCart) {
//       // تحديث checkoutItems بناءً على العنصر في cartItems
//       addtocheckout({ id: itemId, quantity: itemInCart.quantity });
//     }
//     addAllToCheckout(itemId);
//     navigate("/checks");
//   };
  
//   const item = storeitems.find((i) => i.id === id);
//   if (item == null) return null;
//   return (
//     <>
//       <Row>
//         <Col md={4} xs={6} lg={3} className="g-5">
//           <div className="details-cart">
//             <img src={item.imgUrl} alt={item.name} />
//             <p>{item.name}</p>
//             <h5>Running Shoes</h5>

//             <h6>Quantity:{quantity}</h6>
//           </div>
//         </Col>
//         <div className="dis-cart">
//           <p>{item.name}</p>
//           <h1>{item.description}</h1>
//           <h5>Available Sizes:</h5>
//           <select id="size-selector">
//             {item.sizes.map((size) => (
//               <option key={size} value={size}>
//                 {size}
//               </option>
//             ))}
//           </select>

//           <div className="btnn-cart">
//             <h4>${item.price}</h4>
//             <Button className="mx-1" onClick={() => decreaseitem(id)}>
//               -
//             </Button>
//             <span className="fs-5">{quantity} in cart</span>
//             <Button className="mx-1" onClick={() => addtocart(id)}>
//               +
//             </Button>
//             <Button  className="mx-1" onClick={() => handelcheckout(item.id)}>
//               Check out
//             </Button>
//           </div>
      
//         </div>
//       </Row>
      
//     </>
//   );
// };

// export default Cartitem;
import React from "react";
import storeitems from "./../data/storeitem.json";
import { Row, Col, Button } from "react-bootstrap";
import "./../Cart/cartitem.css";
import { useshoppingcart } from "../Providorc";
const Cartitem = ({ id, quantity }) => {
  const { addtocart, decreaseitem,removeitem } = useshoppingcart();

  const item = storeitems.find((i) => i.id === id);
  if (item == null) return null;
  
  return (
    <>
      <Row>
        <Col md={4} xs={6} lg={3} className="g-5">
          <div className="details-cart">
            <img src={item.imgUrl} alt={item.name} />
            <p>{item.name}</p>
            <h5>Running Shoes</h5>
            <h6>Quantity: {quantity}</h6>
          </div>
        </Col>
        <div className="dis-cart">
          <p>{item.name}</p>
          <h1>{item.description}</h1>
          <h5>Available Sizes:</h5>
          <select id="size-selector">
            {item.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          <div className="btnn-cart">
            <h4>${item.price}</h4>
            <Button className="mx-1" onClick={() => decreaseitem(id)}>
              -
            </Button>
            <span className="fs-5">{quantity} in cart</span>
            <Button className="mx-1" onClick={() => addtocart(id)}>
              +
            </Button>
            <Button className="mx-1" onClick={() => removeitem(id)}>
             Remove
            </Button>
            
          </div>
        </div>
      </Row>
    </>
  );
};

export default Cartitem;
