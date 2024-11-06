import React from 'react';

const BorderBeam = ({
  className = '',
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}) => {
  return (
    <div
      style={{
        "--size": `${size}px`,
        "--duration": `${duration}s`,
        "--anchor": `${anchor}%`,
        "--border-width": `${borderWidth}px`,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": `-${delay}s`,
      }}
      className={`border-beam pointer-events-none absolute inset-0 rounded-[inherit] ${className}`}
    />
  );
};

export default BorderBeam;
