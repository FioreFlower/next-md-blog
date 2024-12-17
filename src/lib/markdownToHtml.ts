import { remark } from "remark";
import html from "remark-html";
import rehypePrism from "rehype-prism-plus";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html)
    .use(rehypePrism, { showLineNumbers: true }) // Prism 문법 하이라이팅
    .process(markdown);

  return result.toString();
}
