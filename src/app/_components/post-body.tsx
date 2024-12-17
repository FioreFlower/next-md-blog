"use client";

import markdownStyles from "./markdown-styles.module.css";
import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/codepen-embed.min.css"; // 스타일 파일

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  
  useEffect(() => {
    // 코드 블록 하이라이팅 초기화
    hljs.highlightAll();
  }, []);
  
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={`prose lg:prose-lg ${markdownStyles["markdown"]}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
