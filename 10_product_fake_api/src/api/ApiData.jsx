export const ApiData = async () =>{

    const apiUrl = "https://fakestoreapi.com/products";
    try{
        const response = await fetch(apiUrl);
        // console.log(response);

        if(!response.ok){
            throw new Error(`error occured, please check your code ${response.status}`);
        }
        const data = await response.json();
        return data;
        // console.log(data);

    }catch(error){
        console.log(error);
    }
}