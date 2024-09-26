
const SearchIcon = (props: { className?: string }) => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <g clipPath="url(#clip0_671_7326)">
        <path
          d="M4 13.3333C4 14.559 4.24141 15.7727 4.71046 16.905C5.1795 18.0374 5.86699 19.0663 6.73367 19.933C7.60035 20.7997 8.62925 21.4872 9.76162 21.9562C10.894 22.4253 12.1077 22.6667 13.3333 22.6667C14.559 22.6667 15.7727 22.4253 16.905 21.9562C18.0374 21.4872 19.0663 20.7997 19.933 19.933C20.7997 19.0663 21.4872 18.0374 21.9562 16.905C22.4253 15.7727 22.6667 14.559 22.6667 13.3333C22.6667 12.1077 22.4253 10.894 21.9562 9.76162C21.4872 8.62925 20.7997 7.60035 19.933 6.73367C19.0663 5.86699 18.0374 5.1795 16.905 4.71046C15.7727 4.24141 14.559 4 13.3333 4C12.1077 4 10.894 4.24141 9.76162 4.71046C8.62925 5.1795 7.60035 5.86699 6.73367 6.73367C5.86699 7.60035 5.1795 8.62925 4.71046 9.76162C4.24141 10.894 4 12.1077 4 13.3333Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 28L20 20"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_671_7326">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SearchIcon;
