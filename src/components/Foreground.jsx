import React, { useRef } from 'react'
import Card from './Card'
import Form from './Form'
import { useDispatch, useSelector } from 'react-redux'
import { SetFormOpen } from '../Redux/formslice'
import { GrClose } from 'react-icons/gr'
import { IoAddOutline } from 'react-icons/io5'

const Foreground = () => {
  const ref = useRef(null)
  const TodoData = useSelector((state) => state.todo)
  const isFormOpen = useSelector((state) => state.form.isOpen)
  const dispatch = useDispatch()
  console.log(isFormOpen)

  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0  w-full h-full flex gap-10 flex-wrap p-5"
    >
      <span
        onClick={() => dispatch(SetFormOpen())}
        className="absolute top-4 right-4 flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded"
      >
        <IoAddOutline size={24} />
      </span>
      {TodoData.length > 0 &&
        TodoData.map((item, idx) => (
          <Card key={idx} data={item} reference={ref} />
        ))}
      {isFormOpen && <Form reference={ref} />}
    </div>
  )
}

export default Foreground
