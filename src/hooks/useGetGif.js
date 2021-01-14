import { useEffect, useState } from "react"
import { GetGifs } from "../helpers/GetGifs";

export const useGetGif = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        console.log(category);
        GetGifs(category)
            .then(gifs => {
                setTimeout(() => {
                    setState({
                        data : gifs,
                        loading : false,
                    });
                }, 3000);
            });
    }, [category]);
    
    return state;
}
