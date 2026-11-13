import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { MathUtils, SRGBColorSpace, TextureLoader } from "three";

const W = 5;
const H = 4;

/* corners of a W x H rectangle, used for the back frame outline */
const frameCorners = new Float32Array([
  -W / 2, -H / 2, 0,
  W / 2, -H / 2, 0,
  W / 2, H / 2, 0,
  -W / 2, H / 2, 0,
]);

const Scene = ({ src }) => {
  const group = useRef();
  const mesh = useRef();
  const frame1 = useRef();
  const frame2 = useRef();
  const base = useRef(null);

  const texture = useLoader(TextureLoader, src);

  /* make the texture behave like object-fit: cover */
  useMemo(() => {
    texture.colorSpace = SRGBColorSpace;
    const img = texture.image;
    const imgAspect = img.width / img.height;
    const boxAspect = W / H;

    if (imgAspect > boxAspect) {
      const r = boxAspect / imgAspect;
      texture.repeat.set(r, 1);
      texture.offset.set((1 - r) / 2, 0);
    } else {
      const r = imgAspect / boxAspect;
      texture.repeat.set(1, r);
      texture.offset.set(0, (1 - r) / 2);
    }
    texture.needsUpdate = true;
  }, [texture]);

  /* remember the flat vertex positions so the wave can be recomputed each frame */
  useEffect(() => {
    base.current = mesh.current.geometry.attributes.position.array.slice();
  }, []);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    const g = group.current;
    if (!g) return;

    /* entrance: swings in from the side */
    const k = MathUtils.clamp((t - 0.1) / 1.4, 0, 1);
    const e = 1 - Math.pow(1 - k, 3);

    const px = state.pointer.x;
    const py = state.pointer.y;

    g.rotation.y = MathUtils.damp(
      g.rotation.y,
      (1 - e) * -1.1 + px * 0.35 + Math.sin(t * 0.4) * 0.07,
      4,
      dt
    );
    g.rotation.x = MathUtils.damp(
      g.rotation.x,
      -py * 0.22 + (1 - e) * 0.3 + Math.sin(t * 0.5) * 0.03,
      4,
      dt
    );
    g.position.y = Math.sin(t * 0.9) * 0.08;
    g.scale.setScalar(0.9 + 0.1 * e);

    /* back frames drift on their own depth */
    frame1.current.position.set(-0.15 - px * 0.1, -0.15 + py * 0.08, -0.45);
    frame2.current.position.set(-0.3 - px * 0.2, -0.3 + py * 0.16, -0.9);

    /* soft wave across the photo */
    const pos = mesh.current.geometry.attributes.position;
    const b = base.current;
    if (b) {
      const amp = 0.09 + (1 - e) * 0.25;
      for (let i = 0; i < pos.count; i++) {
        const x = b[i * 3];
        const y = b[i * 3 + 1];
        pos.array[i * 3 + 2] =
          Math.sin(x * 1.3 + t * 1.2) * amp * 0.6 +
          Math.sin(y * 1.6 + t * 0.9) * amp * 0.4;
      }
      pos.needsUpdate = true;
    }

    mesh.current.material.opacity = e;
  });

  return (
    <group ref={group}>
      {/* back frame 2 (tinted plate) */}
      <mesh ref={frame2}>
        <planeGeometry args={[W, H]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.07} />
      </mesh>

      {/* back frame 1 (outline) */}
      <lineLoop ref={frame1}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[frameCorners, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#A9A5F5" transparent opacity={0.7} />
      </lineLoop>

      {/* the photo */}
      <mesh ref={mesh}>
        <planeGeometry args={[W, H, 40, 32]} />
        <meshBasicMaterial map={texture} transparent toneMapped={false} />
      </mesh>
    </group>
  );
};

const PhotoPlane3D = ({ src }) => (
  <Canvas
    dpr={[1, 2]}
    camera={{ position: [0, 0, 7.2], fov: 35 }}
    gl={{ alpha: true, antialias: true }}
  >
    <Scene src={src} />
  </Canvas>
);

export default PhotoPlane3D;