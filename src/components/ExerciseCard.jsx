import React, { useState, useRef } from 'react'
import Confetti from 'react-confetti'

export default function ExerciseCard(props) {
    const { exercise, i } = props

    const [setsCompleted, setSetsComplete] = useState(0)
    const [showConfetti, setShowConfetti] = useState(false)
    const cardRef = useRef(null)

    function handleSetIncrement() {
        if (setsCompleted < 5) {
            setSetsComplete(setsCompleted + 1)
            if (setsCompleted + 1 === 5) {
                setShowConfetti(true)
            }
        }
    }

    return (
        <div ref={cardRef} className={`p-4 rounded-md flex flex-col gap-4 bg-white sm:flex-wrap transition-opacity duration-500 ${setsCompleted === 5 ? 'opacity-50' : 'opacity-100'}`}>
            {showConfetti && cardRef.current && (
                <Confetti
                    recycle={false}
                    numberOfPieces={100}
                    confettiSource={{ x: cardRef.current.getBoundingClientRect().left + cardRef.current.offsetWidth / 2, y: cardRef.current.getBoundingClientRect().top + window.scrollY }}
                />
            )}
            <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4'>
                <h4 className='text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-purple-500'>
                    0{i + 1}
                </h4>
                <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center text-purple-500'>{exercise.name.replaceAll("_", " ")}</h2>
                <p className='text-sm text-purple-500 capitalize'>{exercise.type}</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-purple-500 text-sm'>Muscle Groups</h3>
                <p className='capitalize text-purple-500'>{exercise.muscles.join(' & ')}</p>
            </div>

            <div className='flex flex-col bg-white rounded gap-2 '>
                {exercise.description.split('___').map((val, index) => {
                    return (
                        <div key={index} className='text-sm text-purple-500'>
                            {val}
                        </div>
                    )
                })}
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2'>
                {['reps', 'rest', 'tempo'].map(info => {
                    return (
                        <div key={info} className='flex flex-col p-2 rounded border-[1.5px] border-solid border-purple-500 w-full'>
                            <h3 className='capitalize text-purple-500 text-sm'>{info === 'reps' ? `${exercise.unit}` : info}</h3>
                            <p className='font-medium text-purple-500'>{exercise[info]}</p>
                        </div>
                    )
                })}
                <button onClick={handleSetIncrement} className={'flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-purple-500 w-full ' + (setsCompleted === 5 ? 'cursor-not-allowed opacity-50' : 'hover:border-purple-600')}>
                    <h3 className='text-purple-500 text-sm capitalize'>Sets completed</h3>
                    <p className='font-medium text-purple-500'>{setsCompleted} / 5</p>
                </button>
            </div>
        </div>
    )
}