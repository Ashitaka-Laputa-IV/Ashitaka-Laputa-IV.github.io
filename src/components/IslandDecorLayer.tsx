function Cloud({ className }: { className: string }) {
  return (
    <svg
      className={`decor-svg decor-cloud ${className}`}
      viewBox="0 0 180 72"
      aria-hidden="true"
    >
      <path
        d="M34 52c-12 0-22-8-22-19s9-20 22-20c5 0 10 1 14 4C56 7 69 3 82 7c10 3 17 10 21 19 5-4 12-6 19-6 17 0 31 12 31 27 0 3-1 5-2 8H34z"
        fill="currentColor"
      />
      <path
        d="M34 54h117"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="7"
      />
    </svg>
  );
}

function Bush({ className }: { className: string }) {
  return (
    <svg
      className={`decor-svg decor-bush ${className}`}
      viewBox="0 0 260 220"
      aria-hidden="true"
    >
      <path
        d="M23 199c-9-21-1-41 18-49-14-22-3-50 23-56 2-24 26-41 51-33 16-25 53-22 66 5 27-1 49 20 45 46 23 10 30 39 14 58 8 9 12 18 10 29H23z"
        fill="currentColor"
        stroke="var(--decor-ink)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        d="M62 150c23 10 56 10 82-2M109 89c-12 18-8 39 8 52M184 101c9 14 8 29-2 43"
        fill="none"
        stroke="var(--decor-leaf-line)"
        strokeLinecap="round"
        strokeWidth="8"
      />
    </svg>
  );
}

function TreeTrunk({ className }: { className: string }) {
  return (
    <svg
      className={`decor-svg decor-tree ${className}`}
      viewBox="0 0 180 340"
      aria-hidden="true"
    >
      <path
        d="M74 335c2-46 3-89-6-131-8-37-7-69 1-103 7-27 4-58-12-89h105c-8 38-8 75 1 111 11 43 1 90-15 131-10 27-12 55-8 81H74z"
        fill="currentColor"
        stroke="var(--decor-ink)"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        d="M103 38c11 46 7 83-4 115M128 73c-9 34-6 65 7 92M94 223c18 13 36 18 55 13"
        fill="none"
        stroke="var(--decor-trunk-line)"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
}

function Flower({ className }: { className: string }) {
  return (
    <svg
      className={`decor-svg decor-flower ${className}`}
      viewBox="0 0 54 72"
      aria-hidden="true"
    >
      <path
        d="M28 39c-2 9-3 18-2 28"
        fill="none"
        stroke="var(--decor-ink)"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M29 53c8-1 14-6 17-13"
        fill="none"
        stroke="var(--decor-leaf-line)"
        strokeLinecap="round"
        strokeWidth="6"
      />
      <g fill="currentColor" stroke="var(--decor-ink)" strokeWidth="4">
        <path d="M27 14c7-14 23-2 13 10 14 2 9 19-4 16 2 14-17 16-17 2-12 6-22-11-8-17-8-13 9-24 16-11z" />
      </g>
      <circle cx="27" cy="29" r="7" fill="var(--decor-flower-core)" />
    </svg>
  );
}

function Mushroom({ className }: { className: string }) {
  return (
    <svg
      className={`decor-svg decor-mushroom ${className}`}
      viewBox="0 0 92 90"
      aria-hidden="true"
    >
      <path
        d="M40 43h16l7 37H33l7-37z"
        fill="#fff8dc"
        stroke="var(--decor-ink)"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <path
        d="M9 45c7-25 24-38 42-35 16 2 27 15 33 36-20 12-54 13-75-1z"
        fill="currentColor"
        stroke="var(--decor-ink)"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <circle cx="35" cy="28" r="5" fill="#fff8dc" />
      <circle cx="58" cy="31" r="6" fill="#fff8dc" />
    </svg>
  );
}

function GrassPatch({ className }: { className: string }) {
  return (
    <svg
      className={`decor-svg decor-grass ${className}`}
      viewBox="0 0 180 92"
      aria-hidden="true"
    >
      <path
        d="M12 70c15-30 41-43 72-31 16-25 50-26 68-1 16 2 27 12 34 29-43 19-123 23-174 3z"
        fill="currentColor"
        opacity="0.82"
      />
      <path
        d="M42 62c3-23 12-39 29-48M83 65c1-28 12-47 34-58M127 63c8-21 20-34 37-41"
        fill="none"
        stroke="var(--decor-leaf-line)"
        strokeLinecap="round"
        strokeWidth="7"
      />
      <path
        d="M30 72c36 9 83 9 139-3"
        fill="none"
        stroke="rgba(96, 150, 72, 0.16)"
        strokeLinecap="round"
        strokeWidth="9"
      />
    </svg>
  );
}

function Shell({ className }: { className: string }) {
  return (
    <svg
      className={`decor-svg decor-shell ${className}`}
      viewBox="0 0 96 82"
      aria-hidden="true"
    >
      <path
        d="M13 63c6-31 25-50 48-50 21 0 37 19 45 50H13z"
        fill="currentColor"
        stroke="var(--decor-ink)"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <path
        d="M29 58c2-20 9-35 23-45M49 61c-1-20 2-37 11-49M69 58c-4-19-3-33 4-42"
        fill="none"
        stroke="rgba(109, 69, 58, 0.35)"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d="M23 63h69"
        fill="none"
        stroke="rgba(109, 69, 58, 0.22)"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
}

function Firefly({ className }: { className: string }) {
  return <span className={`decor-firefly ${className}`} aria-hidden="true" />;
}

export function IslandDecorLayer() {
  return (
    <div className="island-decor-layer" aria-hidden="true">
      <Cloud className="decor-cloud-a" />
      <Cloud className="decor-cloud-b" />
      <Cloud className="decor-cloud-c" />

      <Bush className="decor-bush-left-hero" />
      <Bush className="decor-bush-left-board" />
      <Bush className="decor-bush-right-hero" />
      <Bush className="decor-bush-right-notes" />
      <Bush className="decor-bush-left-incubator" />
      <Bush className="decor-bush-right-incubator" />
      <TreeTrunk className="decor-tree-right" />
      <TreeTrunk className="decor-tree-left-lower" />

      <Flower className="decor-flower-a" />
      <Flower className="decor-flower-b" />
      <Flower className="decor-flower-c" />
      <Flower className="decor-flower-d" />
      <Flower className="decor-flower-e" />
      <Flower className="decor-flower-f" />
      <Flower className="decor-flower-g" />
      <Mushroom className="decor-mushroom-a" />
      <Mushroom className="decor-mushroom-b" />
      <Mushroom className="decor-mushroom-c" />
      <Mushroom className="decor-mushroom-d" />
      <GrassPatch className="decor-grass-a" />
      <GrassPatch className="decor-grass-b" />
      <GrassPatch className="decor-grass-c" />
      <Shell className="decor-shell-a" />
      <Shell className="decor-shell-b" />
      <Shell className="decor-shell-c" />

      <Firefly className="decor-firefly-a" />
      <Firefly className="decor-firefly-b" />
      <Firefly className="decor-firefly-c" />
      <Firefly className="decor-firefly-d" />
      <Firefly className="decor-firefly-e" />
      <Firefly className="decor-firefly-f" />
      <Firefly className="decor-firefly-g" />
      <Firefly className="decor-firefly-h" />
      <Firefly className="decor-firefly-i" />
      <Firefly className="decor-firefly-j" />
    </div>
  );
}
