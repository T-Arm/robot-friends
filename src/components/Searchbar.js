import React from 'react';

const Searchbar = ({searchChange}) => {
    return (
    <div className= 'pa2 h3'>
        <input type= 'search'
        className= 'pa3 ba b--green bg-lightest-blue' 
        placeholder= 'search robots'
        onChange ={searchChange}/>
        
    </div>
    ) 
        
    
}

export default Searchbar