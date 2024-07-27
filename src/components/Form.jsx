// Form.js

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../Redux/slice'
import { motion } from 'framer-motion'
import { SetFormClose } from '../Redux/formslice'
import { IoRemoveCircle } from 'react-icons/io5'

const Form = () => {
  const dispatch = useDispatch()

  // State for form inputs
  const [desc, setDesc] = useState('')
  // const [filesize, setFilesize] = useState('')
  const [close, setClose] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [tagTitle, setTagTitle] = useState('')
  const [tagColor, setTagColor] = useState('')

  const bytesToMegabytes = (bytes) => {
    return (bytes / 1024).toFixed(2)
  }

  // Function to calculate string size in bytes (assuming UTF-16 encoding)
  const calculateStringSizeInBytes = (str) => {
    return str.length * 2
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    const descSize = calculateStringSizeInBytes(desc)

    const tagTitleSize = calculateStringSizeInBytes(tagTitle)
    const tagColorSize = calculateStringSizeInBytes(tagColor)
    const totalSizeInBytes = descSize + tagTitleSize + tagColorSize + 2 // +2 for the boolean fields
    const totalSizeInMB = bytesToMegabytes(totalSizeInBytes)
    dispatch(
      AddTodo({
        desc,
        filesize: totalSizeInMB,
        close,
        isOpen,
        tagTitle,
        tagColor,
      }),
    )
    dispatch(SetFormClose())
    // Clear form inputs after submission
    setDesc('')
    setFilesize('')
    setClose(false)
    setIsOpen(false)
    setTagTitle('')
    setTagColor('')
  }

  return (
    <motion.div
      drag
      className="relative flex-shrink-0 w-60  h-[400px]  rounded-[45px] bg-zinc-900/90 text-white p-6 overflow-hidden shadow-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <div className="flex gap-20">
            <label
              htmlFor="desc"
              className="block text-white text-sm font-semibold"
            >
              Description:
            </label>
            <IoRemoveCircle
              size={20}
              className=" text-red-700"
              onClick={() => dispatch(SetFormClose())}
            />
          </div>
          <input
            id="desc"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full p-2 mt-1 bg-gray-700 text-white rounded"
            required
          />
        </div>

        <div className="mb-4 flex flex-row gap-4">
          <label
            htmlFor="close"
            className="block text-white text-sm font-semibold"
          >
            Close:
          </label>
          <input
            id="close"
            type="checkbox"
            checked={close}
            onChange={(e) => setClose(e.target.checked)}
            className="mt-1"
          />
        </div>

        <div className="mb-4 flex flex-row gap-4">
          <label
            htmlFor="isOpen"
            className="block text-white text-sm font-semibold"
          >
            Tag is Open:
          </label>
          <input
            id="isOpen"
            type="checkbox"
            checked={isOpen}
            onChange={(e) => setIsOpen(e.target.checked)}
            className="mt-1"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="tagTitle"
            className="block text-white text-sm font-semibold"
          >
            Tag Title:
          </label>
          <input
            id="tagTitle"
            type="text"
            value={tagTitle}
            onChange={(e) => setTagTitle(e.target.value)}
            className="w-full p-2 mt-1 bg-gray-700 text-white rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="tagColor"
            className="block text-white text-sm font-semibold"
          >
            Tag Color:
          </label>
          <select
            id="tagColor"
            value={tagColor}
            onChange={(e) => setTagColor(e.target.value)}
            className="w-full p-2 mt-1 bg-gray-700 text-white rounded"
            required
          >
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white bg-green-600 rounded-lg "
        >
          Add Todo
        </button>
      </form>
    </motion.div>
  )
}

export default Form
