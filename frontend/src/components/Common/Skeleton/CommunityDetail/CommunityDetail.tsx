import PostInfo from "../PostInfo";
import Square from "../Square";

/** 2023/07/14 - "CommunityDetail" Skeleton UI - by 1-blue */
const CommunityDetail = () => {
  return (
    <>
      <article className="my-box space-y-2">
        {/* 제목 / ( 수정 및 삭제 ) / 작성시간 */}
        <section className="flex justify-between space-x-2">
          <Square className="w-1/2 h-8" />
          <Square className="w-12 h-4" />
        </section>

        {/* 작성자 / 조회수 / 댓글수 / 좋아요수 / 싫어요수 / 공유 */}
        <PostInfo />
      </article>

      <article className="my-box mt-4 space-y-8">
        {/* 썸네일 */}
        <Square className="w-full h-80" />

        {/* 내용 */}
        <section className="space-y-2">
          <Square className="w-1/2 h-5" />
          <Square className="w-1/3 h-5" />
          <Square className="w-2/3 h-5" />
          <Square className="w-3/4 h-5" />
        </section>

        {/* 아바타 && 좋아요 및 싫어요 버튼 */}
        <PostInfo />
      </article>
    </>
  );
};

export default CommunityDetail;
