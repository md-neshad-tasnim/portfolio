import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('models/react.glb')

  return (
    <Float floatIntensity={1}>
      <group position={[-8, 8, 0]} scale={0.4} {...props} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('models/react.glb')

export default ReactLogo



// import { useGLTF, Html } from '@react-three/drei'

// const ReactLogo = () => {
//   const { nodes, materials } = useGLTF('models/react.glb')

//   return (
//     <Html
//       position={[-6, 6, 0]} // still in world space, but we'll lock it visually
//       transform
//       zIndexRange={[100]}
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '60px',
//         height: '60px',
//         pointerEvents: 'none',
//       }}
//     >
//       <mesh
//         geometry={nodes['React-Logo_Material002_0'].geometry}
//         material={materials['Material.002']}
//         rotation={[0, 0, -Math.PI / 2]}
//         scale={[0.2, 0.2, 0.2]}
//       />
//     </Html>
//   )
// }

// useGLTF.preload('models/react.glb')

// export default ReactLogo

