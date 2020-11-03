# text-omitted

精确的多行文字省略

## 代码片段

```js
const textOmitted = new TextOmitted({
    width,        // 内容宽度,  Number类型, 必填
    fontWeight,   // 字体粗细,  String类型, 可选, 默认值 normal
    fontSize,     // 字体大小,  Number类型, 可选, 默认值 14
    fontFamily,   // 字体类型,  String类型, 可选, 默认值 normal
    lineClamp,    // 多少行,    Number类型, 可选, 默认值 1
    text,         // 字符串,    String类型, 可选, 默认值 ''
    extraText,    // 文字溢出后断行所补充的字符串,        String类型, 可选, 默认值 '...'
    extraWidth,   // 文字溢出后断行可额外预留的宽度,      Number类型, 可选, 默认值  0
});

// 修改字体样式的方法
textOmitted.font({ 
    fontWeight, // 字体粗细,  String类型, 可选
    fontSize,   // 字体大小,  Number类型, 可选
    fontFamily  // 字体类型,  String类型, 可选,
});

// 修改extraText的方法，且会重新计算extraText的宽度，从而使extraText完整的显示出来
textOmitted.changeExtraText();

// 输出断行后的字符串
textOmitted.dispose(
    text   // 字符串, String类型, 可选,
); 

// 释放画布
textOmitted.delete();
```

### 使用方法

[浏览 HTML 文件](https://github.com/aloneqi/text-omitted/blob/main/index.html)
