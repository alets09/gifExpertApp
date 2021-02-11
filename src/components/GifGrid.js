import React, { useState , useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const {data, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>
            {loading && <p className=" load animate__animated animate__zoomOutDown animate__delay-1s">Loading...</p>}
            <div className="card-grid">
                {
                    data.map(img => (
                        <GifGridItem key={img.id} {...img}/>
                    ))
                }
            </div>
        </> 
    )
}
