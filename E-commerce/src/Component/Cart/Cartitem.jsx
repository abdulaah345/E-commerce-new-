import React from 'react'
import storeitems from './../data/storeitem.json'
import { Row, Col } from 'react-bootstrap';
import './../Cart/cartitem.css'
const Cartitem = ({id,quantity}) => {
    const item=storeitems.find(i=>i.id===id)
    if (item==null)return null;
  return (
<>
      
                   

                
                    <Col  md={4} xs={6} lg={3} className='g-5'>
                        <div className='details-cart'>
                            <img src={item.imgUrl} alt={item.name} />
                            <p>{item.name}</p>
                            <h5>Running Shoes</h5>
                            <h3>Price</h3>
                            <h4>${item.price}</h4>
                            <h6>Quantity:{quantity}</h6>
                           
                        </div>

                    </Col>
          
            
            </>
  )
}

export default Cartitem
