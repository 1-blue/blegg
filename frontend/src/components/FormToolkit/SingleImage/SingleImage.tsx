import { useState, useRef, useEffect } from "react";
import {
  PlusIcon as OPlusIcon,
  ArrowPathIcon as OArrowPathIcon,
  XMarkIcon as OXMarkIcon,
} from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /** label의 이름 */
  id: string;
  /** (브라우저에서만) 업로드한 이미지 setter */
  setImage: React.Dispatch<React.SetStateAction<FileList | null>>;
  /** 기본 이미지 */
  imageURL?: string;
}

/** 2023/07/14 - 단일 이미지 입력받는 컴포넌트 - by 1-blue */
const SingleImage: React.FC<Props> = ({
  id,
  required,
  setImage,
  imageURL,
  ...props
}) => {
  /** 2023/07/14 - 이미지 ref - by 1-blue */
  const photoRef = useRef<null | HTMLInputElement>(null);
  /** 2023/07/14 - 업로드 전 미리보기 - by 1-blue */
  const [preview, setPreview] = useState(imageURL);

  /** 2023/07/14 - 이미지 등록 - by 1-blue */
  const onUploadPreview: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setImage?.(e.target.files);

    // 이미 프리뷰가 있다면 제거 ( GC에게 명령 )
    if (preview) URL.revokeObjectURL(preview);

    // 썸네일이 입력되면 브라우저에서만 보여줄 수 있도록 blob url 얻기
    if (e.target.files && e.target.files.length > 0) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  /** 2023/07/14 - 이미지 업로드 취소 - by 1-blue */
  const onDeletePreview = () => {
    if (!preview) return;

    URL.revokeObjectURL(preview);
    setImage?.(null);
    setPreview("");
  };

  /** 2023/07/14 - 새로운 이미지 업로드하면 Blob 할당 해제 - by 1-blue */
  useEffect(() => {
    if (!photoRef.current) return;
    if (!preview) return;

    photoRef.current.onload = () => URL.revokeObjectURL(preview);
  }, [preview]);

  return (
    <fieldset
      className="relative"
      role="button"
      onClick={() => photoRef.current?.click()}
    >
      <label
        htmlFor={id}
        className={twMerge(
          "flex items-center space-x-1.5 cursor-pointer text-main-text font-bold"
        )}
      >
        <span className="text-sm">{id}</span>
        {required && (
          <span className={twMerge("text-xs text-blue-400")}>( 필수 )</span>
        )}
      </label>
      <div className="my-box group relative flex justify-center items-center min-w-[320px] w-full min-h-[320px] max-h-[800px] mx-auto transition-colors hover:border-main-300">
        {/* 이미지 입력받는 인풋 */}
        <input
          type="file"
          accept="image/*"
          hidden
          ref={photoRef}
          onChange={onUploadPreview}
          {...props}
        />

        {/* preview || 이미지 */}
        <figure>
          {preview && (
            <img src={preview} alt={id + "이미지"} className="mx-auto" />
          )}
        </figure>

        {!preview && (
          <OPlusIcon
            role="button"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 stroke-2 transition-all group-hover:border-main-300 group-hover:stroke-[3px]"
          />
        )}

        <div className="absolute inset-0 bg-main-900/50 w-full h-full flex justify-center items-center transition-all opacity-0 group-hover:opacity-100">
          {preview ? (
            <OArrowPathIcon
              role="button"
              className="w-10 h-10 stroke-2 transition-all group-hover:border-main-300 group-hover:stroke-[3px]"
            />
          ) : (
            <OPlusIcon
              role="button"
              className="w-10 h-10 stroke-2 transition-all group-hover:border-main-300 group-hover:stroke-[3px]"
            />
          )}
        </div>
      </div>

      {/* 이미지 업로드 및 취소 */}
      {preview && (
        <aside
          className="absolute right-2 -top-1 translate-y-full"
          onClick={(e) => e.stopPropagation()}
        >
          <OXMarkIcon
            role="button"
            className="w-8 h-8 stroke-[3px] text-red-500 transition-all hover:stroke-[4px]"
            onClick={onDeletePreview}
          />
        </aside>
      )}
    </fieldset>
  );
};

export default SingleImage;
