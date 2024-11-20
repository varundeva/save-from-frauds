import React from "react"

const Loading = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className="loader"
      width="50"
      height="50"
    >
      <circle
        cx="50"
        cy="50"
        r="35"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="164"
        strokeDashoffset="164"
        className="circle"
      />
      <style jsx>{`
        .loader {
          animation: rotate 2s linear infinite;
        }
        .circle {
          animation: dash 1.5s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes dash {
          0% {
            stroke-dashoffset: 164;
          }
          50% {
            stroke-dashoffset: 41;
            transform: rotate(45deg);
          }
          100% {
            stroke-dashoffset: 164;
            transform: rotate(360deg);
          }
        }
      `}</style>
    </svg>
  )
}

export default Loading
