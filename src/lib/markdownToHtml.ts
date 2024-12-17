import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";


export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse) // 마크다운 파싱
    .use(remarkRehype) // Markdown AST -> HTML AST
    .use(rehypeSlug) // 헤더에 ID 추가
    .use(rehypeHighlight) // 코드 하이라이팅
    .use(rehypeStringify) // HTML AST -> HTML 문자열
    .process(markdown);

  return result.toString();
}
