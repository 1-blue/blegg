interface Props {
  /** 메인 텍스트 */
  title: string;
  /** 서브 텍스트 */
  sub?: string;
}

/** 2023/07/03 - 404 대체 컴포넌트 - by 1-blue */
const NotFound: React.FC<Props> = ({ title, sub }) => {
  return (
    <section className="flex flex-col items-center mt-6 -mx-4 p-12 bg-main-box-bg border border-main-line rounded-md font-sub space-y-4">
      <h6 className="text-8xl font-black">404</h6>
      <p className="font-bold text-2xl">{title}</p>
      {sub && <span className="font-bold text-lg">{sub}</span>}
    </section>
  );
};

export default NotFound;
