import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/officeModel.glb');

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['01___Default']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['01___Default']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Material__0} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Material__1} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Material__1} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Material__1} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Material__1} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Material__1} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Material__1} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Material__1} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Material__1} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Material__1} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Material__1} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Material__2} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Material__2} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Material__2} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Material__2} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Material__2} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Material__2} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Material__25} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.Material__25} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Material__25} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Material__25} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.wire_000000000} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.wire_000000000} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.wire_000000000} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.wire_000000000} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.wire_000000000} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.wire_000000000} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.Material__3} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.wire_127127127} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.wire_127127127} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.wire_127127127} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.wire_127127127} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.wire_127127127} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.wire_127127127} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.wire_127127127} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.wire_127127127} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.wire_127127127} />
      </group>
    </group>
  );
}

useGLTF.preload('/officeModel.glb');
