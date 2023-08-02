/** 2023/06/21 - 사이드바 로고 컴포넌트 - by 1-blue */
const ASideLogo: React.FC = () => {
  return (
    <article className="p-8 flex justify-between border-b border-main-line bg-main-bg">
      <section className="flex items-center space-x-4">
        <img src="/images/logo.png" alt="로고" />
        <h1 className="font-black text-2xl">blegg</h1>
      </section>
    </article>
  );
};

export default ASideLogo;
