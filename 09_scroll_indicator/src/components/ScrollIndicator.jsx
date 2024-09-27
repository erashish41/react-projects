import { useEffect, useState } from "react"

export const ScrollIndicator = ({url}) => {

    const [items, setItems] = useState([]);
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const fetchItems = async (getUrl)=> {
        try {
            setLoading(true);
            const res = await fetch(getUrl)
            const data = await res.json()

            if(data && data.products && data.products.length > 0){
                setItems(data.products)
            }
            // console.log(data);
        } catch (error){
            console.log(error);
            setErrorMsg(error.message)
        }
    }

    useEffect(() => {
        fetchItems(url);
    },[url])

    const handleScrollPercentage = () => {
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        );

        const howMuchScrolled = 
        document.body.scrollTop || document.documentElement.scrollTop;
        
        const height = 
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled/height)*100)
    }

    useEffect(() => {
        window.document.addEventListener("scroll", handleScrollPercentage);

        return(
            window.document.removeEventListener("scroll", ()=> {})
        )
    }, [])

    console.log(items, scrollPercentage);

    if(loading){
        return <div>Loading some data! please wait</div>
    }

    if(errorMsg){
        return <div>Error Occured ! {errorMsg}</div>
    }

    return(
        <div>
            <div className="top-contianer">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div
                        className="current-progress-bar"
                        style={{width: `${scrollPercentage}%`}}
                    >
                    </div>
                </div>
            </div>
            <div className="contianer">
                {
                    items && items.length > 0 
                    ? items.map((currProduct) => <p key={currProduct.id}>{currProduct.brand}</p>)
                    : null
                }
            </div>
        </div>
    )
}