import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="card animate__animated animate__bounce">
            <p> { title } </p>
            <img id={ id } src={ url } alt= { title }></img>
        </div>
    )
}
