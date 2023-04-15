import { useState } from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'

const AddItemList = () => {

  //state
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <button
        className='md:text-4xl text-2xl'
        onClick={() => setShowForm(true)}
      >
        <AiOutlinePlusCircle />
      </button>
      {showForm && (
        <p>form</p>
      )}
    </>
  )
}

export default AddItemList