import { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export const ImageSlider = ({url, limit}) => {

    const [image, setImage] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImage(getUrl){
        setLoading(true);
        try{
            const response = fetch(getUrl);
            const data = (await response).json();
            
            if(data) setImage(data);
            setLoading(false);

            
        }catch(e){
            console.log(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if(url !== "") fetchImage(getUrl)
    }, [url]);

    if(loading) {
        return <div>Loading data! please wait</div>
    }
    
    if(error){
        return <div>Error occured {errorMsg}</div>
    }

    return (
        <div className="container">
            <BsArrowLeftCircle onClick={handlePreviousImage} className="arrow arrow-left" />

            <BsArrowRightCircle onClick={handleNextImage} />

        </div>
    )
}