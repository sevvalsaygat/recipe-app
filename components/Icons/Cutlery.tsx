import React, { SVGProps, memo } from "react";

const Cutlery: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 76 76"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      baseProfile="full"
      enableBackground="new 0 0 76.00 76.00"
      xmlSpace="preserve"
      {...props}
    >
      <path
        fill="#aabe51"
        fillOpacity={1}
        strokeWidth="0.2"
        strokeLinejoin="round"
        d="M 49.5,19L 51,19L 51,55C 51,56.1046 50.1046,57 49,57L 48,57C 46.8954,57 46,56.1046 46,55L 46,45L 44,45C 44,22 49.5,19 49.5,19 Z M 32,57L 31,57C 29.8954,57 29,56.1046 29,55L 29,35C 28.3333,35 27.6667,35 26.8333,34.0833C 26,33.1667 25.25,31.3334 24.75,29.0834C 24.25,25 26,19 26,19L 27.2499,28.5001L 27.75,28.5001L 29.5,19.0001L 31.25,28.5001L 31.75,28.5001L 33.5,19L 35.25,28.5001L 35.75,28.5001L 37,19C 37,19 38.75,25 38.25,29.0833C 37.75,31.3333 37,33.1667 36.1667,34.0833C 35.3333,35 34.6667,35 34,35L 34,55C 34,56.1046 33.1046,57 32,57 Z "
      />
    </svg>
  );
};

export default memo(Cutlery);
