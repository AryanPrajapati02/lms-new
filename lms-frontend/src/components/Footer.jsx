import React from 'react'
import { BsFacebook , BsInstagram , BsLinkedin , BsTwitterX} from 'react-icons/bs'
  
function Footer() {
  return (
    <>
    <footer className='relative bottom-0 w-[100vw] h-[10vh]  flex flex-col sm:flex-row items-center justify-between text-white  sm:px-10'>
        <section className='text-lg'>
             || Created By Aryan ||
        </section>
        <section className='flex items-center justify-center gap-7 p-5 text-2xl text-white'>
        <a href="" className='hover:text-black transition-all ease-in-out duration-300'><BsFacebook /></a>
        <a href="" className='hover:text-black transition-all ease-in-out duration-300'><BsInstagram /></a>
        <a href="" className='hover:text-black transition-all ease-in-out duration-300'><BsLinkedin /></a>
        <a href="" className='hover:text-black transition-all ease-in-out duration-300'><BsTwitterX /></a>
        </section>
    </footer>
    </>
  )
}

export default Footer