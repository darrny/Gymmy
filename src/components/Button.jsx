import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
        <button onClick={func} className='px-8 mx-auto py-4 rounded-md border-[2px] bg-white border-purple-500 border-solid purpleShadow duration-200'>
            <p className='text-purple-500 text-lg'>{text}</p>
        </button>
    )
}