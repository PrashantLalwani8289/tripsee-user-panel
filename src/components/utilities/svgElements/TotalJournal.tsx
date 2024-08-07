import React from "react";
const TotalJournal = (props: { className?: string }) => {
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
      <g clipPath="url(#clip0_671_6637)">
        <path
          d="M23 16.3333V40.3333M19 16.3333H33.6666C34.3739 16.3333 35.0521 16.6143 35.5522 17.1144C36.0523 17.6145 36.3333 18.2928 36.3333 19V35C36.3333 35.7073 36.0523 36.3855 35.5522 36.8856C35.0521 37.3857 34.3739 37.6667 33.6666 37.6667H19C18.6463 37.6667 18.3072 37.5262 18.0572 37.2762C17.8071 37.0261 17.6666 36.687 17.6666 36.3333V17.6667C17.6666 17.3131 17.8071 16.9739 18.0572 16.7239C18.3072 16.4738 18.6463 16.3333 19 16.3333Z"
          stroke="#F8F9FA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.3334 21.6667H31"
          stroke="#F8F9FA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.3334 27H31"
          stroke="#F8F9FA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_671_6637">
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

export default TotalJournal;
