import { SVGProps } from 'react';
const RightArrowSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    className="w-4 h-4 text-white dark:text-gray-800"
    viewBox="0 0 6 10"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 9 4-4-4-4"
    />
  </svg>
);
export default RightArrowSvg;
