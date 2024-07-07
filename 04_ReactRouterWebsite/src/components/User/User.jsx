import React from 'react'
import {useParams} from 'react-router-dom'
function User() {
    const {id}=useParams()
  return (
    <div className='bg-gray-600 text-white p-3 text-center text-2xl container m-auto'>User: {id}</div>
  )
}

export default User