"use client";

import { memo } from "react";

type NetworkGridBgProps = {
  className?: string;
  tint?: string; // hex or rgba
};

const NetworkGridBg = ({ className = "", tint = "rgba(15, 159, 149, 0.7)" }: NetworkGridBgProps) => {
  const rows = 10;
  const cols = 14;
  const packetPaths = [
    "M 30 30 L 140 30 L 195 75 L 305 75",
    "M 140 120 L 305 120 L 415 165",
    "M 85 255 L 195 255 L 305 300 L 470 300",
    "M 250 390 L 470 390 L 580 435",
    "M 360 75 L 470 120 L 635 120 L 690 165",
  ];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 h-full w-full opacity-85"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="gridStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={tint} stopOpacity="0.7" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
          </linearGradient>
        </defs>

        <g className="opacity-60">
          {Array.from({ length: rows }).map((_, row) =>
            Array.from({ length: cols }).map((__, col) => {
              const x = 30 + col * 55;
              const y = 30 + row * 45;
              const delay = (row + col) * 0.08;
              return (
                <g key={`${row}-${col}`}>
                  <circle cx={x} cy={y} r="2.8" fill={tint} stroke="rgba(255,255,255,0.7)" strokeWidth="0.6" />
                  {col < cols - 1 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x + 55}
                      y2={y}
                      stroke="url(#gridStroke)"
                      strokeWidth="1"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="stroke-opacity"
                        values="0.15;0.6;0.15"
                        dur="4s"
                        begin={`${delay}s`}
                        repeatCount="indefinite"
                      />
                    </line>
                  )}
                  {row < rows - 1 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x}
                      y2={y + 45}
                      stroke="url(#gridStroke)"
                      strokeWidth="1"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="stroke-opacity"
                        values="0.15;0.6;0.15"
                        dur="4s"
                        begin={`${delay + 0.2}s`}
                        repeatCount="indefinite"
                      />
                    </line>
                  )}
                </g>
              );
            })
          )}
        </g>

        {/* Data packets traveling along connections */}
        {packetPaths.map((path, idx) => (
          <g key={`packet-path-${idx}`}>
            <path d={path} fill="none" stroke="transparent" />
            <circle r="3" fill="#9ef6e8" stroke="rgba(255,255,255,0.6)" strokeWidth="0.6">
              <animateMotion
                dur="4.2s"
                repeatCount="indefinite"
                begin={`${idx * 0.4}s`}
                path={path}
              />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default memo(NetworkGridBg);
