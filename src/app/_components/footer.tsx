import Container from "@/app/_components/container";
import {CMS_NAME, EXAMPLE_PATH} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col gap-2 mb-10 lg:mb-0 items-center">
            <img 
              className="w-32 h-32 rounded-full"
              src="https://www.gravatar.com/avatar/3d9642f3f1c17c046f3e97f2edba04c6?s=200&d=identicon" alt="fiore's Gravatar"/>
            <h3
              className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2 uppercase">
              developed by fiore
            </h3>
            {/* 컨택 영역 */}
            <ul className="flex gap-4 items-center">
              <li>
                <a
                  href="mailto:yukihira91@proton.me"
                  className="underline hover:text-blue-600 duration-200 transition-colors text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/FioreFlower"
                  target="_blank" rel="noopener noreferrer"
                  className="underline hover:text-blue-600 duration-200 transition-colors text-base">
                  <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle fill-current">
                    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-sm gap-2 flex flex-col text-gray-500">
              <li className="">본 사이트에서 언급되는 회사명 · 제품명 · 시스템 이름은 해당 소유자의 상표 또는 등록 상표입니다.</li>
              <li>
                본 사이트는{" "}
                <a
                  href="https://nextjs.org/"
                  className="underline hover:text-blue-600 duration-200 transition-colors">
                  Next.js
                </a>
                와 {CMS_NAME}를 활용해 개발되었습니다.
              </li>
              <li>이미지, 문장의 무단 전재는 삼가하여 주시기 바랍니다.</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
