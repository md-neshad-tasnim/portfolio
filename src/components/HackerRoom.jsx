
import { useGLTF, useTexture } from '@react-three/drei'
import { useEffect } from 'react'


// this is the old way of loading the model, but it is not clean

// const HackerRoom = (props) => {
//   const { nodes, materials } = useGLTF('/models/hacker-room.glb')
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes?.computer_computer_mat_0?.geometry}
//         material={materials?.computer_mat}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes?.server_server_mat_0?.geometry}
//         material={materials?.server_mat}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes?.vhs_vhsPlayer_mat_0?.geometry}
//         material={materials?.vhsPlayer_mat}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes?.shelf_stand_mat_0?.geometry}
//         material={materials?.stand_mat}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes?.keyboard_mat_mat_mat_0?.geometry}
//         material={materials?.mat_mat}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes?.arm_arm_mat_0?.geometry}
//         material={materials?.arm_mat}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes?.Tv_tv_mat_0?.geometry}
//         material={materials?.tv_mat}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes?.table_table_mat_0?.geometry}
//         material={materials?.table_mat}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes?.Cables_cables_mat_0?.geometry}
//         material={materials?.cables_mat}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes?.props_props_mat_0?.geometry}
//         material={materials?.props_mat}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes?.screen_screens_0?.geometry}
//         material={materials?.screens}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes?.screen_glass_glass_0?.geometry}
//         material={materials?.glass}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes?.Ground_ground_mat_0?.geometry}
//         material={materials?.ground_mat}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes?.peripherals_key_mat_0?.geometry}
//         material={materials?.key_mat}
//       />
//     </group>
//   )
// }

// useGLTF.preload('/models/hacker-room.glb');

// src/components/HackerRoom.jsx



// const HackerRoom = (props) => {
//   const monitorTexture = useTexture('/textures/desk/monitor.png');
//   const screenTexture = useTexture('/textures/desk/screen.png');

//   const { scene } = useGLTF('/models/hacker-room.glb')
//   //this is the correct way to load the model
//   // use primitive to load the scene which is clean. use this method always
//   return <primitive object={scene} {...props} />
// }

// useGLTF.preload('/models/hacker-room.glb')





const HackerRoom = (props) => {
  const monitorTexture = useTexture('/textures/desk/monitor.png')
  const screenTexture = useTexture('/textures/desk/screen.png')

  const { scene } = useGLTF('/models/hacker-room.glb')

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        if (child.name.toLowerCase().includes('monitor')) {
          child.material.map = monitorTexture
          child.material.needsUpdate = true
        }
        if (child.name.toLowerCase().includes('screen')) {
          child.material.map = screenTexture
          child.material.needsUpdate = true
        }
      }
    })
  }, [scene, monitorTexture, screenTexture])

  return <primitive object={scene} {...props} />
}

useGLTF.preload('/models/hacker-room.glb')






export default HackerRoom;
