import { SvgInterface } from "../../types/svg/SvgInterface";

export const Heart = ({ color }: SvgInterface) => {
  return (
    <>
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.952 0.00184612C5.5664 0.00184612 3.53733 0.849176 2.11493 2.39431C0.7056 3.92282 0 6.01622 0 8.333C0 12.3574 2.072 15.5639 4.704 18.0579C7.3248 20.5408 10.6213 22.4293 13.3504 23.8415C13.5498 23.945 13.7715 23.9994 13.9967 24C14.2219 24.0006 14.444 23.9475 14.644 23.8452C17.3749 22.4478 20.6696 20.5445 23.2923 18.0487C25.9243 15.5473 28 12.3297 28 8.333C28 6.00699 27.2907 3.91544 25.8795 2.38692C24.4552 0.845484 22.4261 0 20.048 0C18.0395 0 16.3781 0.736568 15.1144 2.12479C14.6827 2.606 14.3087 3.13502 14 3.7013C13.6913 3.13502 13.3173 2.606 12.8856 2.12479C11.6219 0.736568 9.96053 0.00184612 7.952 0.00184612Z"
          fill={color ? color : "#C6C6C6"}
        />
      </svg>
    </>
  );
};
