import React, { useEffect, useState } from 'react'

export default function Search(props) {
  const [searchText, setSearchText] = useState("")
  const handleChnage=(e)=>{
    setSearchText(e.target.value)
  }

  useEffect(()=>{
    props.onSearch(searchText)
  },[searchText])

    return (
    <div className='search'>
        <input type='text' placeholder='Search Country' value={searchText} onChange={handleChnage} />
    </div>
  )
}
