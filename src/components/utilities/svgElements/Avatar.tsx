import React from "react";
const Avatar = (props: { className?: string }) => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
    >
      <circle cx="27" cy="27" r="27" fill="#007930" />
      <g clipPath="url(#clip0_671_7088)">
        <path
          d="M21.6667 20.3333C21.6667 21.7478 22.2286 23.1044 23.2288 24.1046C24.229 25.1048 25.5855 25.6667 27 25.6667C28.4145 25.6667 29.7711 25.1048 30.7713 24.1046C31.7715 23.1044 32.3334 21.7478 32.3334 20.3333C32.3334 18.9188 31.7715 17.5623 30.7713 16.5621C29.7711 15.5619 28.4145 15 27 15C25.5855 15 24.229 15.5619 23.2288 16.5621C22.2286 17.5623 21.6667 18.9188 21.6667 20.3333Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 39V36.3333C19 34.9188 19.5619 33.5623 20.5621 32.5621C21.5623 31.5619 22.9188 31 24.3333 31H29.6667"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31 36.3333L33.6667 39L39 33.6667"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_671_7088">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(11 11)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Avatar;
