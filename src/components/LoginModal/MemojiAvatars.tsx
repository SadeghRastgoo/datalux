import { FC } from "react";

const MemojiAvatars: FC<{ src: string }> = ({ src }) => {
  return (
    <div className="aspect-square p-1.5 cursor-pointer hover:outline outline-offset-2 hover:outline-2 transition-all outline-[#fff] hover:outline-[#f1f3fe] rounded-full w-11 h-11 flex justify-center items-center bg-[#f1f3fe]">
      <img
        className="w-full h-full object-contain"
        src={src}
        alt="memoji avatar"
      />
    </div>
  );
};

export default MemojiAvatars;
