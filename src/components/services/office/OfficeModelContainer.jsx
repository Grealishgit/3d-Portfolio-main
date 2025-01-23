import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Model } from "./OfficeModel";  // Import the Model component

const OfficeModelContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="loading...">
                <Stage
                    environment="night"
                    intensity={2.5}>
                    <Model />  {/* Render the Model component */}
                </Stage>
                <OrbitControls
                    enableZoom={false}
                    autoRotate />
                <PerspectiveCamera
                    position={[-1, 0, 1.8]}
                    zoom={0.8}
                    makeDefault />
            </Suspense>
        </Canvas>
    );
};

export default OfficeModelContainer;
