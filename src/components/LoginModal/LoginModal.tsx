import { FC, useState } from "react";
import MemojiAvatars from "./MemojiAvatars";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { appFunctionalitiesInterface } from "../../types";
import toast from "react-hot-toast";

const LoginModal: FC<{ appFunctionalities: appFunctionalitiesInterface }> = ({
  appFunctionalities,
}) => {
  const [loginModalProgress, setLoginModalProgress] = useState(0);
  const [selectedMemoji, setSelectedMemoji] = useState(
    "/assets/memoji/apple-memoji-headwear-masks-hairstyles.png"
  );
  const [userName, setUserName] = useState("");

  const changeSelectedMemoji = (src: string) => {
    setSelectedMemoji(src);
  };

  const saveUserProfile = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (userName) {
            resolve("Resolved");
            appFunctionalities.setUserProfile(userName, selectedMemoji);
            setLoginModalProgress(loginModalProgress + 1);
          } else {
            reject("Rejected");
            setTimeout(() => {
              appFunctionalities.toastify(
                "Please fill out name field",
                "",
                "error"
              );
            }, 500);
          }
        }, 1000);
      }),
      {
        loading: "Saving...",
        success: <b>User profile saved</b>,
        error: <b>Could not save</b>,
      }
    );
  };

  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm z-10 ${
        loginModalProgress > 2 && "hidden"
      }`}
    >
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center rounded-lg shadow-md bg-white w-10/12 max-w-sm overflow-hidden ">
        <div
          className={`relative left-0 flex transition-all duration-1000 ${
            loginModalProgress === 1
              ? "-left-[100%]"
              : loginModalProgress === 2
              ? "-left-[200%]"
              : ""
          }`}
        >
          <article className="flex flex-col gap-4 min-w-full">
            <header className="h-48 bg-gradient-to-b from-[#e0e5fd] relative">
              <div className="absolute border border-[#3f27dc72] outline outline-offset-8 bg-white bg-opacity-50 outline-[#cfcfcf] -top-20 left-1/2 -translate-x-1/2 rotate-45 w-44 aspect-square"></div>
              <img
                className="relative z-20 w-full h-full object-contain p-6"
                src="/assets/memoji/animated-memoji.gif"
                alt=""
              />
            </header>
            <main className="flex flex-col gap-1 p-5 py-5">
              <h5 className="font-bold text-[#23293e]">Get Started</h5>
              <p className="font-light text-sm text-[#464445]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                omnis placeat ducimus quidem debitis perferendis.
              </p>
              <div className="flex gap-2 justify-center items-center mt-4">
                <div className="w-1.5 aspect-square bg-[#2a2ce4] rounded-full"></div>
                <div className="w-1.5 aspect-square bg-[#cfcfcf] rounded-full"></div>
                <div className="w-1.5 aspect-square bg-[#cfcfcf] rounded-full"></div>
              </div>
            </main>
          </article>
          <article className="flex flex-col gap-4 min-w-full">
            <header className="h-48 bg-gradient-to-b from-[#e0e5fd] relative">
              <img
                className="animated-image absolute left-1/2 -translate-x-1/2 p-4 w-1/2 max-w-full max-h-full object-cover"
                src="/assets/data-vector.png"
                alt=""
              />
            </header>
            <main className="flex flex-col gap-1 p-5 py-5">
              <h5 className="font-bold text-[#23293e]">Enter Your Name</h5>
              <input
                className="my-2.5 bg-gray-50 dark:bg-[#20242b] dark:focus:outline-neutral-700 dark:text-[#aaa] dark:placeholder:text-[#666] dark:border-gray-700 border border-gray-300 text-gray-800 text-sm rounded-md focus:outline focus:outline-2 transition-all focus:border-blue-500 focus:outline-blue-200 block w-full py-2 px-3"
                placeholder="e.g Sadegh Rastgoo"
                type="text"
                id="inp-employee"
                maxLength={15}
                onChange={(e) => setUserName(e.target.value)}
              />
              <div className="flex gap-2 justify-center items-center mt-4">
                <div className="w-1.5 aspect-square bg-[#cfcfcf] rounded-full"></div>
                <div className="w-1.5 aspect-square bg-[#2a2ce4] rounded-full"></div>
                <div className="w-1.5 aspect-square bg-[#cfcfcf] rounded-full"></div>
              </div>
            </main>
          </article>
          <article className="flex flex-col gap-4 min-w-full">
            <header className="h-48 bg-gradient-to-b from-[#e0e5fd] relative">
              <img src="/assets/memoji/memoji-cover.png" alt="" />
              <img
                className="absolute left-1/2 -translate-x-1/2 w-28 top-16 drop-shadow-lg"
                src={selectedMemoji}
                alt="selected memoji avatar"
              />
            </header>
            <main className="flex flex-col gap-1 p-5 py-5">
              <h5 className="font-bold text-[#23293e]">
                Choose your profile avatar
              </h5>
              <div className="relative select-none memoji-picker-container h-14 flex gap-3 items-center justify-center">
                <Swiper
                  className="py-2 pl-4 pr-12"
                  spaceBetween={50}
                  slidesPerView={6}
                >
                  <SwiperSlide>
                    <MemojiAvatars
                      changeSelectedMemoji={changeSelectedMemoji}
                      src="/assets/memoji/apple-memoji-headwear-masks-hairstyles.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <MemojiAvatars
                      changeSelectedMemoji={changeSelectedMemoji}
                      src="/assets/memoji/apple-memoji-blonde-girl-smile.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <MemojiAvatars
                      changeSelectedMemoji={changeSelectedMemoji}
                      src="/assets/memoji/apple-above-avalon-neil-cybart.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <MemojiAvatars
                      changeSelectedMemoji={changeSelectedMemoji}
                      src="/assets/memoji/apple-memoji-headwear-masks-hairstyles-2.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <MemojiAvatars
                      changeSelectedMemoji={changeSelectedMemoji}
                      src="/assets/memoji/apple-memoji-nurse-girl.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <MemojiAvatars
                      changeSelectedMemoji={changeSelectedMemoji}
                      src="/assets/memoji/apple-memoji-educated-girl-hat.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <MemojiAvatars
                      changeSelectedMemoji={changeSelectedMemoji}
                      src="/assets/memoji/apple-memoji-sport-man.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <MemojiAvatars
                      changeSelectedMemoji={changeSelectedMemoji}
                      src="/assets/memoji/apple-memoji-swimmer-girl.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <MemojiAvatars
                      changeSelectedMemoji={changeSelectedMemoji}
                      src="/assets/memoji/apple-memoji-nerd-boy.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <MemojiAvatars
                      changeSelectedMemoji={changeSelectedMemoji}
                      src="/assets/memoji/apple-memoji-sport-girl-hat.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <MemojiAvatars
                      changeSelectedMemoji={changeSelectedMemoji}
                      src="/assets/memoji/apple-memoji-colorful-girl.png"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="flex gap-2 justify-center items-center mt-4">
                <div className="w-1.5 aspect-square bg-[#cfcfcf] rounded-full"></div>
                <div className="w-1.5 aspect-square bg-[#cfcfcf] rounded-full"></div>
                <div className="w-1.5 aspect-square bg-[#2a2ce4] rounded-full"></div>
              </div>
            </main>
          </article>
        </div>
        <footer className="grid grid-cols-2 gap-2 mb-5 h-9 text-sm font-semibold mt-4 px-5">
          <button
            className={`border border-[#e2e2e3] rounded-md text-[#292e42] transition-colors hover:bg-[#f3f3f3] ${
              loginModalProgress === 0 &&
              "opacity-50 cursor-not-allowed hover:bg-[#ffffff]"
            }`}
            disabled={loginModalProgress === 0 && true}
            onClick={() => setLoginModalProgress(loginModalProgress - 1)}
          >
            Back
          </button>
          <button
            className="border border-[#4329e5] rounded-md bg-[#4329e5] transition-colors hover:bg-[#2508e2] text-white"
            onClick={() =>
              loginModalProgress < 2
                ? setLoginModalProgress(loginModalProgress + 1)
                : saveUserProfile()
            }
          >
            {loginModalProgress === 2 ? "Let's Go" : "Continue"}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default LoginModal;
