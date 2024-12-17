import markdownStyles from "./markdown-styles.module.css";
import "highlight.js/styles/tokyo-night-dark.min.css";
import TableOfContents from "@/app/_components/toc-Render";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  
  return (
    <div className="max-w-2xl mx-auto">
      {/* 목차 렌더링 */}
      <TableOfContents />
      {/* 본문 */}
      <div
        className={`prose lg:prose-lg ${markdownStyles["markdown"]}`}
        dangerouslySetInnerHTML={{__html: content}}
      />
    </div>
  );
}
