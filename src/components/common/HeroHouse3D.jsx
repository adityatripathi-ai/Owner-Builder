import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

/* One building block: flies in from above, spins and snaps into place */
const Piece = ({ position, size, color, delay = 0, glass = false, from = [0, 7, 0], spin = 2.5 }) => {
  const ref = useRef();

  useFrame((state) => {
    const k = MathUtils.clamp((state.clock.elapsedTime - delay) / 1.3, 0, 1);
    const e = 1 - Math.pow(1 - k, 3);
    const g = ref.current;
    if (!g) return;
    g.visible = k > 0;
    g.position.set(
      MathUtils.lerp(from[0], position[0], e),
      MathUtils.lerp(from[1], position[1], e),
      MathUtils.lerp(from[2], position[2], e)
    );
    g.rotation.y = (1 - e) * spin;
    g.rotation.x = (1 - e) * 1.2;
    g.scale.setScalar(0.2 + 0.8 * e);
  });

  return (
    <group ref={ref} visible={false}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial
          color={color}
          roughness={glass ? 0.1 : 0.7}
          metalness={glass ? 0.6 : 0.05}
          transparent={glass}
          opacity={glass ? 0.75 : 1}
        />
      </mesh>
    </group>
  );
};

const House = ({ pointer }) => {
  const group = useRef();
  const ring = useRef();

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    const g = group.current;
    g.rotation.y = MathUtils.damp(
      g.rotation.y,
      0.55 + Math.sin(t * 0.35) * 0.25 + pointer.current.x * 0.5,
      3,
      dt
    );
    g.rotation.x = MathUtils.damp(g.rotation.x, pointer.current.y * 0.15, 3, dt);
    g.position.y = -0.9 + Math.sin(t * 1.1) * 0.08;
    ring.current.rotation.z = t * 0.2;
  });

  return (
    <group ref={group}>
      {/* foundation */}
      <Piece position={[0, 0, 0]} size={[4.4, 0.2, 3.4]} color="#20244F" delay={0.2} from={[0, 5, 0]} />

      {/* lower volume */}
      <Piece position={[-0.3, 0.7, 0]} size={[3.6, 1.2, 2.8]} color="#F8F7F3" delay={0.55} from={[-5, 4, 2]} />

      {/* upper volume */}
      <Piece position={[0.5, 1.8, 0]} size={[2.2, 1, 2.6]} color="#CFCBC0" delay={0.9} from={[5, 5, -2]} />

      {/* roofs */}
      <Piece position={[-0.2, 1.36, 0]} size={[4, 0.12, 3.2]} color="#20244F" delay={1.25} from={[-4, 6, 0]} />
      <Piece position={[0.5, 2.36, 0]} size={[2.5, 0.12, 3]} color="#7771D5" delay={1.45} from={[4, 7, 0]} />

      {/* glass + door */}
      <Piece position={[-1.0, 0.8, 1.43]} size={[1.4, 0.8, 0.05]} color="#A9A5F5" glass delay={1.75} from={[-3, 2, 6]} />
      <Piece position={[0.7, 0.65, 1.43]} size={[0.5, 0.9, 0.05]} color="#7771D5" delay={1.9} from={[3, 2, 6]} />
      <Piece position={[0.5, 1.8, 1.33]} size={[1.2, 0.5, 0.05]} color="#A9A5F5" glass delay={2.05} from={[0, 4, 6]} />

      {/* chimney */}
      <Piece position={[-1.9, 1.0, 1.2]} size={[0.2, 1.4, 0.2]} color="#7771D5" delay={2.2} from={[-3, 6, 0]} />

      {/* orbit ring on the ground */}
      <group position={[0, -0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh ref={ring}>
          <torusGeometry args={[3.6, 0.012, 8, 120]} />
          <meshBasicMaterial color="#A9A5F5" transparent opacity={0.7} />
        </mesh>
      </group>
    </group>
  );
};

const HeroHouse3D = () => {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [5.5, 3.6, 7], fov: 32 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 8, 5]} intensity={1.6} />
      <pointLight position={[-4, 2, 3]} intensity={0.8} color="#A9A5F5" />
      <House pointer={pointer} />
    </Canvas>
  );
};

export default HeroHouse3D;