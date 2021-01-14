import React, { useState } from 'react'

export const AddCategory = ({ setCategories, categories }) => {

    const [input, setInput] = useState("")

    const HandleChangeCategory = e => {
        setInput( e.target.value );
    }

    const HandleSubmit = e => {
        e.preventDefault();
        if(!categories.some(c => input === c))
            setCategories([ input, ...categories ]);
    }

    return (
        <form onSubmit={ HandleSubmit }>
            <input type="text" onChange={ HandleChangeCategory } value={ input }></input>
        </form>
    )
}
