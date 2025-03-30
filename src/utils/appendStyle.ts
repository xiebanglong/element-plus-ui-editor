export default function appendStyle(cssStr: string) {
  const styleElement = document.createElement('style');
  // 设置 style 元素的内容
  styleElement.textContent = cssStr;
  // 将 style 元素插入到 head 中
  document.head.appendChild(styleElement);
}
