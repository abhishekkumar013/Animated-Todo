import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { LuDownload } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { RemoveTodo } from '../Redux/slice'

const Card = ({ data, reference }) => {
  const dispatch = useDispatch()
  console.log(data)

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        {data.desc.desc}
      </p>
      <div className="footer absolute bottom-0  w-full    left-0 ">
        <div className="flex item-center justify-between py-3 px-8 mb-3">
          <h5>{data.desc.filesize}kb</h5>
          <span
            onClick={() => dispatch(RemoveTodo(data.id))}
            className="w-7 h-7 bg-zinc-600 rounded-full  flex items-center justify-center"
          >
            <IoClose size="1em" color="#fff" />
          </span>
        </div>
        {data.desc.isOpen && (
          <div
            className={`tag w-full py-4  flex items-center justify-center  ${
              data.desc.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'
            }`}
          >
            <h3 className="text-sm font-semibold">{data.desc.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Card
