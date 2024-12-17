"use client";

import markdownStyles from "./markdown-styles.module.css";
import {useEffect, useState} from "react";
import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.min.css";

type Props = {
  content: string;
};

type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function PostBody({ content }: Props) {
  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    // 목차 생성
    const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const tocItems: TocItem[] = Array.from(headers).map((header) => ({
      id: header.id || header.textContent?.replace(/\s+/g, "-").toLowerCase() || "",
      text: header.textContent || "",
      level: parseInt(header.tagName.replace("H", ""), 10),
    }));

    setToc(tocItems);
  }, []);
  
  useEffect(() => {
    // 코드 블록 하이라이팅 초기화
    hljs.highlightAll();
  }, []);
  
  return (
    <div className="max-w-2xl mx-auto">
      {/* 목차 렌더링 */}
      <nav className="my-4 bg-emerald-100 text-black py-4 border-l-8 border-l-emerald-600">
        <p className="text-2xl ml-12 py-3 font-black underline">Index</p>
        <ul className="flex flex-col gap-2 list-disc ml-4 pl-2">
          {toc.map((item,index) => {
            if (index === 0 || index === 1 ||index === toc.length-1) return 
            return(
              <li key={item.id} style={{marginLeft: `${(item.level - 1) * 16}px`}}>
                <a href={`#${item.id}`} className="hover:underline hover:text-amber-600 hover:font-bold">
                  {item.text}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      {/* 본문 */}
      <div
        className={`prose lg:prose-lg ${markdownStyles["markdown"]}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
