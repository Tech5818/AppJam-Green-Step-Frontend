import { SvgInterface } from "../../types/svg/SvgInterface";

export const Profile = ({ color }: SvgInterface) => {
  return (
    <>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 21.25C2 19.7913 2.57946 18.3924 3.61091 17.3609C4.64236 16.3295 6.04131 15.75 7.5 15.75H18.5C19.9587 15.75 21.3576 16.3295 22.3891 17.3609C23.4205 18.3924 24 19.7913 24 21.25C24 21.9793 23.7103 22.6788 23.1945 23.1945C22.6788 23.7103 21.9793 24 21.25 24H4.75C4.02065 24 3.32118 23.7103 2.80546 23.1945C2.28973 22.6788 2 21.9793 2 21.25Z"
          stroke={color ? color : "#C6C6C6"}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M13 10.25C15.2782 10.25 17.125 8.40317 17.125 6.125C17.125 3.84683 15.2782 2 13 2C10.7218 2 8.875 3.84683 8.875 6.125C8.875 8.40317 10.7218 10.25 13 10.25Z"
          stroke={color ? color : "#C6C6C6"}
          strokeWidth="3"
        />
      </svg>
    </>
  );
};
