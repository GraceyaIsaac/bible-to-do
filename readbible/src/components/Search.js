import React from 'react'

export const Search = ({search,setSearch}) => {
    
    
  return (
    <form className='SearchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='Search'>Search</label>
        <input
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Items'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
    </form>
  )
}
