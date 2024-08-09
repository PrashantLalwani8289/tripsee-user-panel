import React from "react";
const UserWhiteIcon = (props: { className?: string }) => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="40"
      height="40"
      viewBox="0 0 54 54"
      fill="none"
    >
      <g clipPath="url(#clip0_671_7071)">
        <path
          d="M27 4.5C29.225 4.5 31.4001 5.1598 33.2502 6.39597C35.1002 7.63213 36.5422 9.38914 37.3936 11.4448C38.2451 13.5005 38.4679 15.7625 38.0338 17.9448C37.5998 20.1271 36.5283 22.1316 34.955 23.705C33.3816 25.2783 31.3771 26.3498 29.1948 26.7838C27.0125 27.2179 24.7505 26.9951 22.6948 26.1436C20.6391 25.2922 18.8821 23.8502 17.646 22.0002C16.4098 20.1501 15.75 17.975 15.75 15.75L15.7613 15.2618C15.8871 12.3654 17.1261 9.6295 19.22 7.62448C21.3139 5.61947 24.101 4.50017 27 4.5Z"
          fill="white"
        />
        <path
          d="M31.5 31.5C34.4837 31.5 37.3452 32.6853 39.455 34.795C41.5647 36.9048 42.75 39.7663 42.75 42.75V45C42.75 46.1935 42.2759 47.3381 41.432 48.182C40.5881 49.0259 39.4435 49.5 38.25 49.5H15.75C14.5565 49.5 13.4119 49.0259 12.568 48.182C11.7241 47.3381 11.25 46.1935 11.25 45V42.75C11.25 39.7663 12.4353 36.9048 14.545 34.795C16.6548 32.6853 19.5163 31.5 22.5 31.5H31.5Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_671_7071">
          <rect width="54" height="54" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UserWhiteIcon;