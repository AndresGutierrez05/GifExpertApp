import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useGetGif } from '../hooks/useGetGif';

export const GifGrid = ({ category }) => {

    const { data : gifs, loading } = useGetGif(category);

    return (
        <>
            <h4>{ category }</h4>
            { loading && <p className="animate__animated animate__infinite animate__headShake">Cargando...</p> }
            <div className="card-list animate__animated animate__bounce">
                { gifs.map(gif => 
                    <GifGridItem key={gif.id} { ...gif } />    
                ) }
            </div>
        </>
    )
}
