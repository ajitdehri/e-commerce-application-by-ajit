/* eslint-disable no-unused-vars */
import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className="text-gray-600 body-font bg-pink-300">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-900">Before they sold out
                            <br className="hidden lg:inline-block " />readymade gluten
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    </div>
                    <div className="lg:max-w-3xl lg:w-full md:w-1/2 w-5/6  border-double border-4 border-pink-600">
                        <img className=" object-contain object-center rounded " alt="hero" src="https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-all-kinds-of-beauty-products-on-a-dark-background-image_2537075.jpg" />
                    </div>
                </div>
            </section>
      
    </div>
  )
}

export default Hero
