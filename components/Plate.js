import { useId } from "react";

function defs(id) {
  return (
    <defs>
      <linearGradient id={`brass-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#d7bc86" />
        <stop offset="0.42" stopColor="#8d7040" />
        <stop offset="1" stopColor="#5e4624" />
      </linearGradient>
      <linearGradient id={`linen-${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#fbf6ee" />
        <stop offset="0.55" stopColor="#f0e4d0" />
        <stop offset="1" stopColor="#e3d2b8" />
      </linearGradient>
      <linearGradient id={`oak-${id}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#c9a56e" />
        <stop offset="0.5" stopColor="#a8834e" />
        <stop offset="1" stopColor="#7d6238" />
      </linearGradient>
      <linearGradient id={`stone-${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ddd6cc" />
        <stop offset="1" stopColor="#a79e93" />
      </linearGradient>
      <linearGradient id={`char-${id}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#4e4944" />
        <stop offset="1" stopColor="#241f1b" />
      </linearGradient>
      <linearGradient id={`opal-${id}`} x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="#f7f1e6" />
        <stop offset="1" stopColor="#fffdf8" />
      </linearGradient>
      <radialGradient id={`glow-${id}`} cx="50%" cy="42%" r="60%">
        <stop offset="0" stopColor="#fff4df" stopOpacity="0.95" />
        <stop offset="1" stopColor="#e7d3b0" stopOpacity="0" />
      </radialGradient>
      <radialGradient id={`disc-${id}`} cx="42%" cy="40%" r="65%">
        <stop offset="0" stopColor="#fffaf3" />
        <stop offset="0.58" stopColor="#f3e6d2" />
        <stop offset="1" stopColor="#ddc9a8" />
      </radialGradient>
      <linearGradient id={`clay-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f7f3ec" />
        <stop offset="1" stopColor="#e4d9cb" />
      </linearGradient>
    </defs>
  );
}

function ground(y = 700, rx = 120) {
  return <ellipse cx="320" cy={y} rx={rx} ry="14" fill="#241f1b" opacity="0.07" />;
}

const scenes = {
  "pie-nube": (id) => (
    <g>
      {ground(690, 150)}
      <ellipse cx="320" cy="668" rx="74" ry="13" fill={`url(#oak-${id})`} />
      <rect x="314" y="300" width="12" height="368" fill={`url(#oak-${id})`} />
      <path d="M150 196h340l-24 150H174z" fill={`url(#linen-${id})`} />
      <ellipse cx="320" cy="196" rx="170" ry="22" fill="#f8f3ea" stroke="#e4d5bf" />
      <ellipse cx="320" cy="346" rx="146" ry="16" fill="#e7d5ba" />
      <ellipse cx="320" cy="270" rx="110" ry="36" fill={`url(#glow-${id})`} />
      <rect x="302" y="186" width="36" height="8" rx="1" fill={`url(#brass-${id})`} />
    </g>
  ),
  "colgante-lira": (id) => (
    <g>
      <line x1="320" y1="0" x2="320" y2="168" stroke="#8d7040" strokeWidth="1.6" />
      <ellipse cx="320" cy="176" rx="18" ry="5" fill={`url(#brass-${id})`} />
      <ellipse cx="320" cy="214" rx="132" ry="16" fill="none" stroke={`url(#brass-${id})`} strokeWidth="7" />
      <path d="M196 214h248l-36 214H232z" fill={`url(#linen-${id})`} />
      <ellipse cx="320" cy="428" rx="96" ry="13" fill="#e8d5b8" />
      <ellipse cx="320" cy="318" rx="70" ry="40" fill={`url(#glow-${id})`} />
      {ground(620, 80)}
    </g>
  ),
  "mesa-orion": (id) => (
    <g>
      {ground(700, 100)}
      <path
        d="M248 470c0-62 28-86 72-86s72 24 72 86l12 150c2 36-160 36-156 0z"
        fill={`url(#clay-${id})`}
        stroke="#ddd2c3"
      />
      <ellipse cx="320" cy="620" rx="86" ry="16" fill="#e5dacb" />
      <ellipse cx="320" cy="470" rx="46" ry="10" fill="#f7f2ea" />
      <rect x="312" y="360" width="16" height="112" fill={`url(#brass-${id})`} />
      <path d="M176 188h288l-46 176H222z" fill={`url(#linen-${id})`} />
      <ellipse cx="320" cy="188" rx="144" ry="18" fill="#f8f3ea" stroke="#e6d8c4" />
      <ellipse cx="320" cy="364" rx="100" ry="14" fill="#e6d3b6" />
      <ellipse cx="320" cy="270" rx="80" ry="34" fill={`url(#glow-${id})`} />
    </g>
  ),
  "colgante-disco": (id) => (
    <g>
      <line x1="246" y1="0" x2="292" y2="330" stroke="#8d7040" strokeWidth="1.25" />
      <line x1="320" y1="0" x2="320" y2="322" stroke="#8d7040" strokeWidth="1.25" />
      <line x1="394" y1="0" x2="348" y2="330" stroke="#8d7040" strokeWidth="1.25" />
      <ellipse cx="320" cy="348" rx="210" ry="30" fill={`url(#brass-${id})`} />
      <ellipse cx="320" cy="336" rx="196" ry="24" fill={`url(#disc-${id})`} />
      <ellipse cx="286" cy="328" rx="70" ry="8" fill="#fff" opacity="0.35" />
      {ground(560, 110)}
    </g>
  ),
  "mesa-rio": (id) => (
    <g>
      {ground(690, 110)}
      <rect x="214" y="560" width="212" height="96" fill={`url(#stone-${id})`} />
      <path d="M214 560h212l-16 18H230z" fill="#fff" opacity="0.28" />
      <path d="M230 640h180l8 16H222z" fill="#241f1b" opacity="0.08" />
      <rect x="304" y="468" width="32" height="92" fill={`url(#brass-${id})`} />
      <path d="M246 360h148l-22 112H268z" fill={`url(#linen-${id})`} />
      <ellipse cx="320" cy="360" rx="74" ry="12" fill="#f8f3ea" stroke="#e5d6c2" />
      <ellipse cx="320" cy="472" rx="54" ry="9" fill="#e4d0b4" />
      <ellipse cx="320" cy="412" rx="40" ry="18" fill={`url(#glow-${id})`} />
    </g>
  ),
  "colgante-vela": (id) => (
    <g>
      <rect x="150" y="78" width="340" height="10" fill={`url(#brass-${id})`} />
      <line x1="230" y1="88" x2="230" y2="230" stroke="#8d7040" strokeWidth="1.3" />
      <line x1="410" y1="88" x2="410" y2="360" stroke="#8d7040" strokeWidth="1.3" />
      <rect x="196" y="230" width="68" height="128" fill={`url(#linen-${id})`} />
      <ellipse cx="230" cy="230" rx="34" ry="8" fill="#f8f3ea" stroke="#e6d8c4" />
      <ellipse cx="230" cy="358" rx="34" ry="8" fill="#e5d2b6" />
      <rect x="376" y="360" width="68" height="128" fill={`url(#linen-${id})`} />
      <ellipse cx="410" cy="360" rx="34" ry="8" fill="#f8f3ea" stroke="#e6d8c4" />
      <ellipse cx="410" cy="488" rx="34" ry="8" fill="#e5d2b6" />
      <ellipse cx="230" cy="292" rx="18" ry="28" fill={`url(#glow-${id})`} />
      <ellipse cx="410" cy="422" rx="18" ry="28" fill={`url(#glow-${id})`} />
      {ground(640, 90)}
    </g>
  ),
  "aplique-muro": (id) => (
    <g>
      <rect x="0" y="0" width="210" height="800" fill="#e3dbcf" />
      <line x1="210" y1="0" x2="210" y2="800" stroke="#d5cbbd" />
      <rect x="188" y="336" width="36" height="78" fill={`url(#brass-${id})`} />
      <rect x="214" y="370" width="108" height="10" fill={`url(#brass-${id})`} />
      <path
        d="M310 292c78 0 132 58 132 86 0 28-54 34-132 34 18-16 28-40 28-60s-10-44-28-60z"
        fill={`url(#opal-${id})`}
        stroke="#e4dccf"
      />
      <ellipse cx="392" cy="378" rx="36" ry="22" fill={`url(#glow-${id})`} />
      {ground(560, 70)}
    </g>
  ),
  "aplique-arco": (id) => (
    <g>
      <rect x="0" y="0" width="168" height="800" fill="#e4dcd0" />
      <rect x="142" y="300" width="22" height="96" rx="1" fill={`url(#char-${id})`} />
      <path
        d="M164 328c120 0 168 52 168 132"
        fill="none"
        stroke="#2c2824"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="332" cy="460" r="8" fill={`url(#brass-${id})`} />
      <path d="M310 468h44l-8 42h-28z" fill={`url(#linen-${id})`} />
      <ellipse cx="332" cy="510" rx="16" ry="4" fill="#e5d2b6" />
      {ground(600, 60)}
    </g>
  ),
};

export function Plate({ slug, title }) {
  const uid = useId().replace(/:/g, "");
  const draw = scenes[slug];
  return (
    <div className="plate">
      <svg
        viewBox="0 0 640 800"
        role={title ? "img" : "presentation"}
        aria-label={title || undefined}
      >
        {defs(uid)}
        <rect width="640" height="800" fill="#ebe3d6" />
        {draw ? draw(uid) : null}
      </svg>
    </div>
  );
}
