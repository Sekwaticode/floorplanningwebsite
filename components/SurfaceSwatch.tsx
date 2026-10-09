import { FC, useId } from "react";

export type SurfaceVariant =
  | "epoxy"
  | "pu"
  | "concrete"
  | "sealed"
  | "metallic"
  | "terrazzo"
  | "repair"
  | "reseal";

// Small seeded PRNG so generated textures are identical on server and client
const random = (seed: number) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

const W = 400;
const H = 300;

const terrazzoChips = (() => {
  const rand = random(7);
  const colours = ["#2b2b2b", "#8f8f88", "#c46f3d", "#5f6f67", "#fafaf7", "#b8a993"];
  return Array.from({ length: 170 }, () => {
    const cx = rand() * W;
    const cy = rand() * H;
    const r = 2 + rand() * (rand() > 0.85 ? 14 : 6);
    const sides = 4 + Math.floor(rand() * 3);
    const turn = rand() * Math.PI;
    const points = Array.from({ length: sides }, (_, i) => {
      const a = turn + (i / sides) * Math.PI * 2;
      const rr = r * (0.6 + rand() * 0.5);
      return `${(cx + Math.cos(a) * rr).toFixed(1)},${(cy + Math.sin(a) * rr).toFixed(1)}`;
    }).join(" ");
    return { points, fill: colours[Math.floor(rand() * colours.length)] };
  });
})();

const cracks = (() => {
  const rand = random(11);
  return Array.from({ length: 4 }, () => {
    let x = rand() * 180;
    let y = rand() * H;
    const d = [`M${x.toFixed(1)} ${y.toFixed(1)}`];
    for (let i = 0; i < 9; i++) {
      x += 8 + rand() * 18;
      y += (rand() - 0.5) * 30;
      d.push(`L${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    return d.join(" ");
  });
})();

/** Generated floor-finish texture, used where project photography will go. */
const SurfaceSwatch: FC<{ variant: SurfaceVariant; className?: string }> = ({
  variant,
  className,
}) => {
  const id = useId().replace(/:/g, "");
  const grain = `${id}-grain`;
  const cloud = `${id}-cloud`;
  const sheen = `${id}-sheen`;
  const swirl = `${id}-swirl`;
  const split = `${id}-split`;

  const concreteBase = (tone: string) => (
    <>
      <rect width={W} height={H} fill={tone} />
      <rect width={W} height={H} filter={`url(#${cloud})`} opacity="0.5" />
      <rect width={W} height={H} filter={`url(#${grain})`} opacity="0.55" />
    </>
  );

  const gloss = (strength: number) => (
    <rect width={W} height={H} fill={`url(#${sheen})`} opacity={strength} />
  );

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <filter id={grain} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.4 1.1"
          />
        </filter>
        <filter id={cloud} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" seed="9" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 -1.2 0.9"
          />
        </filter>
        <filter id={swirl} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.03" numOctaves="5" seed="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.86  0 0 0 0 0.69  0 0 0 0 0.42  2.6 0 0 0 -1.05"
          />
        </filter>
        <linearGradient id={sheen} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.38" stopColor="#fff" stopOpacity="0.05" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="0.6" stopColor="#fff" stopOpacity="0.05" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id={split}>
          <polygon points={`0,0 ${W * 0.62},0 ${W * 0.42},${H} 0,${H}`} />
        </clipPath>
      </defs>

      {variant === "epoxy" && (
        <>
          <rect width={W} height={H} fill="#8b9095" />
          <rect width={W} height={H} filter={`url(#${cloud})`} opacity="0.25" />
          {gloss(0.7)}
          {/* safety line marking, as on a warehouse floor */}
          <rect x="0" y={H * 0.74} width={W} height="16" fill="#f2b705" />
        </>
      )}

      {variant === "pu" && (
        <>
          <rect width={W} height={H} fill="#55625a" />
          <rect width={W} height={H} filter={`url(#${grain})`} opacity="0.3" />
          {gloss(0.25)}
        </>
      )}

      {variant === "concrete" && (
        <>
          {concreteBase("#b4b0a8")}
          {gloss(0.35)}
        </>
      )}

      {variant === "sealed" && (
        <>
          {concreteBase("#8e8a82")}
          {gloss(0.8)}
        </>
      )}

      {variant === "metallic" && (
        <>
          <rect width={W} height={H} fill="#26231f" />
          <rect width={W} height={H} filter={`url(#${swirl})`} />
          {gloss(0.4)}
        </>
      )}

      {variant === "terrazzo" && (
        <>
          <rect width={W} height={H} fill="#e8e3d9" />
          <rect width={W} height={H} filter={`url(#${grain})`} opacity="0.12" />
          {terrazzoChips.map((chip, i) => (
            <polygon key={i} points={chip.points} fill={chip.fill} />
          ))}
          {gloss(0.3)}
        </>
      )}

      {variant === "repair" && (
        <>
          {/* restored half */}
          <rect width={W} height={H} fill="#9a9fa3" />
          {gloss(0.6)}
          {/* worn, cracked half */}
          <g clipPath={`url(#${split})`}>
            {concreteBase("#a39e94")}
            {cracks.map((d, i) => (
              <path key={i} d={d} fill="none" stroke="#3f3b35" strokeWidth="1.6" opacity="0.7" />
            ))}
          </g>
        </>
      )}

      {variant === "reseal" && (
        <>
          {concreteBase("#a8a49c")}
          {/* fresh roller lanes of sealer */}
          {Array.from({ length: 5 }, (_, i) => (
            <rect
              key={i}
              x={i * 80}
              y="0"
              width="80"
              height={H}
              fill="#fff"
              opacity={i % 2 ? 0.05 : 0.14}
            />
          ))}
          {gloss(0.55)}
        </>
      )}
    </svg>
  );
};

export default SurfaceSwatch;
