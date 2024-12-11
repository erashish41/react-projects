import React, { useEffect, useState } from 'react'
import { ApiData } from '../../api/ApiData';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () =>{
        try{
            const response = await ApiData();
            console.log(response);
            setProducts(response);
            setLoading(false)
        }catch(error){
            console.log('error fetching products...', error.message);
            setLoading(false);
            setError(error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() =>{
        fetchProducts();
    },[])
    
    if(loading){
        return(
            <div>
                <h1>loading products...</h1>
            </div>
        )  
    }
    if(error){
        return(
            <div>
                <h1>Error: {error.message}</h1>
            </div>
        )
    }

  return (
    <>
        <div className='full-container'>
            <div className='container'>
                <h2>Product List</h2>

                {loading ? (<p>loading...</p>) 
                : (
                    <div className='row'>
                    {
                        products.map((product) =>(
                            <div className='col-md-4 p-3' key = {product.id} >
                                <div >
                                    <img 
                                        src={product.image}
                                        alt={product.title}
                                        className='card-img'
                                        />
                                </div>
                                <div className='card-details'>
                                    <h4 className='title'>{product.title}</h4>
                                    <p className='price'>${product.price}</p>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>)}
            </div> 
        </div>
    </>
  )
}

export default ProductList