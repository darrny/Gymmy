import Button from './Button'
import gymmy1 from '/src/assets/gymmy1.png'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <div className='w-1/2 mx-auto'>
                    <img src={gymmy1} alt="Gymmy" className='w-full h-auto transform transition-transform duration-200 hover:scale-105' />
                </div>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>💪Gym<span className='text-purple-700'>my🫱</span></h1>
            </div>
            <p className='text-med md:text-base font-light'>pst ... Gymmy can't wait to workout with you, quick!</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Let's exercise!"}></Button>
        </div>
    )
}