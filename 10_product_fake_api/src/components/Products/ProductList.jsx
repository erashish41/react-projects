import React, { useEffect, useState } from 'react'
import { ApiData } from '../../api/ApiData';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() =>{
        const fetchProducts = async () =>{
            try{
                const response = await ApiData();
                console.log(response);
                setProducts(response);
                
            }catch(error){
                console.log('error fetching products...', error);
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();
    },[])
    

  return (
    <>
        <div className='container m-4'>
            <h2>Product List</h2>

            {loading ? (<p>loading...</p>) 
            : (
                <div className='row'>
                {
                    products.map((product) =>(
                        <div key = {product.id} >
                            <div className='card'>
                                <img 
                                    src={product.images[0]}
                                    alt={product.title}
                                    className='card-img'
                                    />
                            </div>
                            <div className='card-details'>
                                <h4 className='title'>{product.title}</h4>
                                <p className='price'>{product.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>)}
        </div> 
    </>
  )
}

export default ProductList