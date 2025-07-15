import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Center, OrbitControls, Bounds } from '@react-three/drei'
import { Leva } from 'leva'

const Hero = () => {


  return (
    <section className='min-h-screen w-full flex flex-col relative'>
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-genreralsans'>Hi, I'm Neshad <span className='waving-hand'>👋</span></p>
        <p className='hero_tag text-gray_gradient'>Building things for the web</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas camera={{ position: [0, 2, 20], fov: 35 }} className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>

            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <Bounds fit clip observe margin={1.2}>

              <HackerRoom scale={0.07} position={[0, 0, 0]} rotation={[0, 280, 0]} />

              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
            </Bounds>
            <OrbitControls />
          </Suspense>
        </Canvas>

        -----------------------------
        {/* <Canvas camera={{ position: [0, 2, 15], fov: 35 }} className='w-full h-full' shadows>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <Suspense fallback={<CanvasLoader />}>
            <Bounds fit clip observe margin={1.2}>
              <HackerRoom />

            </Bounds>

            <OrbitControls />
          </Suspense>
        </Canvas> */}
      </div>
    </section>
  )
}

export default Hero