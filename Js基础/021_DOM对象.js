
//DOM是操作网页的接口
//简单来说，DOM 就是把你的 HTML 网页结构解析成一棵由这些节点组成的“树”，让 JavaScript 能够读懂并操作网页
//就是将网页转为一个JS对象

/**
 * 节点是啥：
 *          DOM就是节点文档树
 *          节点的类型有七种
 *              1. Document：表示整个文档树的顶层节点
 *                  整个文档树的根节点，通常就是 document。
 *
 *              2. DocumentType：表示一个doctype标签
 *                  <!DOCTYPE html> 这类声明。
 *
 *              3. Element：网页的各种HTML标签
 *                  HTML 标签，如 <div>、<p>。
 *
 *              4. Attribute：网页元素的属性（比如：class="right）
 *                  元素的属性，如 class="right"。
 *
 *              5. Text：标签之间或者标签包含的文本
 *                  标签之间的文本内容（包括换行、空格）。
 *
 *              6. Comment：注释
 *                  HTML 注释。
 *
 *              7. DocumentFragment：文档的片段
 *                  轻量级文档片段，不在 DOM 树中，用来批量操作。
 *
 *
 *        节点同时有三个累心，父亲节点，儿子节点，统计父亲节点
 */