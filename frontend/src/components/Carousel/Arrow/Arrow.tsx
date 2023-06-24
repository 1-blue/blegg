import {
  ChevronLeftIcon as OChevronLeftIcon,
  ChevronRightIcon as OChevronRightIcon,
} from "@heroicons/react/24/outline";

/** 2023/06/23 - Carousel Arrow Button 컴포넌트 - by 1-blue */
const Arrow: React.FC = () => {
  return (
    <>
      <OChevronLeftIcon
        role="button"
        data-type="prev"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 p-2 rounded-md stroke-[3px] transition-colors hover:text-main-text hover:bg-main-900"
      />
      <OChevronRightIcon
        role="button"
        data-type="next"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 p-2 rounded-md stroke-[3px] transition-colors hover:text-main-text hover:bg-main-900"
      />
    </>
  );
};

export default Arrow;
