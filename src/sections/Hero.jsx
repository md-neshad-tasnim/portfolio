import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Center, OrbitControls, Bounds } from '@react-three/drei'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Rings'
import HeroCamera from '../components/HeroCamera'


const Hero = () => {

  const x = useControls('HackerRoom', {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10
    },
    rotationX: {
      value: 0,
      min: -10,
      max: 10
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10
    },
    scale: {
      value: 1,
      min: 0.1,
      max: 10
    }
  })

  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet);


  return (
    <section className='min-h-screen w-full flex flex-col relative'>
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-genreralsans'>Hi, I'm Neshad <span className='waving-hand'>👋</span></p>
        <p className='hero_tag text-gray_gradient'>Building things for the web</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Leva hidden />

        {/* canvas camera position camera={{ position: [0, 2, 20], fov: 35 }} */}
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>

            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            {/* <Bounds fit clip observe margin={1.2}> */}
            {/* <Bounds fit clip observe> */}
            {/* <HeroCamera> */}
            <HackerRoom

              // position={[1.1, -6.7, 1.9]}
              // rotation={[0.4, 3.1, -6.3]}
              // scale={[0.1, 0.1, 0.1]}
              position={[1.9, -7, -1.9]}
              rotation={[0, -Math.PI, 0]}
              scale={[0.1, 0.1, 0.1]}
            />

            {/* </HeroCamera> */}



            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              {/* <Rings position={sizes.ringPosition} /> */}
            </group>


            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            {/* </Bounds> */}
            {/* <OrbitControls /> */}
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