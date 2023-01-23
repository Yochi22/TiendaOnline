import React from 'react'
import '../hojas-de-estilo/buttonlist.css';


export const ButtonList = ({categories, filterCategory,}) => {
  return (

    <div className="categories">
        {categories.map(category => ( 
            <button className='btn-category' type='button' onClick={() => filterCategory (category)} key={category}>
                {category}
            </button>
        ))}
    </div>
  )
}
