import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Chuunibyou demo ko ga shitai", "one punch men", "anohana"])

    return(
        <div id="Generalcomponent">
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories } categories={ categories }/>
            <hr></hr>
            {
                categories.map( category => <GifGrid key={ category } category={ category } />)
            }
        </div>
    )
}

export default GifExpertApp;