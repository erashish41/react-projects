import { useEffect, useState } from "react"

export const ScrollIndicator = ({url}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const fetchProduct = async (getUrl)=> {
        try {
            setLoading(true);
            const res = await fetch(getUrl)
            const data = await res.json()

            console.log(data);
        } catch (error){
            console.log(error);
            setErrorMsg(error.message)
        }
    }

    useEffect(() => {
        fetchProduct(url);
    },[url])

    return(
        <div className="contianer"></div>
    )
}