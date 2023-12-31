import { twMerge } from "tailwind-merge";

import type { RiotChampionTag } from "@src/types";
interface Props {
  /** Riot API에서 제공해주는 tag들중 하나 */
  tag: RiotChampionTag;
  /** TailwindCss className */
  className?: string;
}

/** 2023/06/26 - Riot Tag에 해당하는 아이콘 컴포넌트 - by 1-blue */
const Tag: React.FC<Props> = ({ tag, className }) => {
  const getSvg = () => {
    switch (tag) {
      case "Fighter":
        return (
          <>
            <g clipPath="url(#clip0)">
              <path d="M6.89149 14.8664C4.47314 12.1457 6.76551 9.70211 8.0251 8.82047L11.4259 16L13.3153 15.2443L9.53658 7.68686C11.9549 6.47767 13.5672 8.94637 14.071 10.3319C14.9527 9.8281 16.4894 7.83801 15.5825 3.90817C14.6756 -0.021676 10.6702 -0.248398 8.78084 0.129472C12.4084 2.54784 10.0404 4.66391 8.40297 5.41964L7.26936 3.5303L5.75788 4.28604L6.89149 6.55325C3.86856 7.15784 2.86088 4.28604 2.73491 2.77456C-1.79953 10.6342 3.61662 14.1106 6.89149 14.8664Z" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="16" height="16" />
              </clipPath>
            </defs>
          </>
        );
      case "Marksman":
        return (
          <>
            <g clipPath="url(#clip0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.51065 12.3371L1.52588e-05 9.95419L6.12767 3.48608C5.58299 2.66905 3.85817 2.23782 3.06384 2.12433C7.48938 1.44349 9.75886 3.71299 10.8936 5.18816H11.5745V4.16689L16 4.84774L12.5958 7.91157L12.2553 6.89029L11.2341 7.57114C12.0511 11.9286 9.07801 14.1527 7.48938 14.7201L8.51065 12.3371ZM9.1915 6.20944C8.91916 4.84775 7.48938 4.05342 6.80853 3.82647L2.38299 8.59242L9.1915 6.20944ZM3.06384 9.61369L9.87236 7.91157C9.98585 8.81941 10.0085 10.8392 9.1915 11.6562L3.06384 9.61369Z"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="16" height="16" />
              </clipPath>
            </defs>
          </>
        );
      case "Tank":
        return (
          <path d="M8.17128 16C4.22166 12.8 2.41142 6.13336 2 3.2C4.63308 2.56 6.93703 0.8 7.75986 0L8.17128 10.4L8.99412 0.8C9.98153 2.08 12.6969 2.93334 13.9311 3.2C14.5894 7.68 10.3655 13.6 8.17128 16Z" />
        );
      case "Support":
        return (
          <>
            <g clipPath="url(#clip0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.81828 1H6.18186L5.54552 1.85001L8.00003 4.87224L10.4546 1.85001L9.81828 1ZM5.09093 3.92776H3.8147e-06C0.700401 4.61426 1.50855 5.26037 2.36364 5.7222C2.70659 5.83308 3.00437 5.91002 3.36365 5.91112H4.72729L3.27274 7.70556L5.63637 8.83891L6.5455 5.43886L5.09093 3.92776ZM10.909 3.92776H16C15.2994 4.61334 14.4913 5.26113 13.6363 5.7222C13.2934 5.83308 12.9956 5.91002 12.6364 5.91112H11.2727L12.7272 7.70556L10.3636 8.83891L9.45451 5.43886L10.909 3.92776ZM9.909 13.0889L8.45446 5.53335C8.3924 5.74805 8.21528 5.89006 7.99997 5.91112C7.78554 5.88904 7.60705 5.74723 7.5454 5.53335L6.09087 13.0889L7.99997 14.6L9.909 13.0889Z"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="16" height="16" />
              </clipPath>
            </defs>
          </>
        );
      case "Mage":
        return (
          <>
            <g clipPath="url(#clip0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.4545 1L8.36367 3.63636V12.5455L13.4545 10.3637V5.0909L14.7363 4.45454V11.5364L7.99998 14.2727L1.45455 11.5364V4.45454L2.54546 5.0909V10.3637L7.63637 12.5455V3.63636L2.54546 1V3.27273L1.52588e-05 1.81818V12.7272L7.99998 15.909L16 12.7272V1.81818L13.4545 3.27273V1Z"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="16" height="16" />
              </clipPath>
            </defs>
          </>
        );
      case "Assassin":
        return (
          <>
            <path d="M5.25806 11.4949C6.67742 8.06061 8.68815 7.0303 9.51613 6L11.6452 8.06061L8.80645 10.1212C9.51613 10.8081 11.2081 10.6936 12 10.4646C7.45806 15.9596 2.65591 15.3872 1 14.2424C2.06452 14.0135 4.49782 13.3344 5.25806 11.4949Z" />
            <path d="M16 2.89474L13.913 1L11.1304 3.84211L9.04348 2.89474L8 3.52632L13.913 7L14.6087 6.36842L12.1739 4.47368L16 2.89474Z" />
          </>
        );
    }
  };

  return (
    <svg
      className={twMerge("w-4 h-4 fill-main-100", className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {getSvg()}
    </svg>
  );
};

export default Tag;
