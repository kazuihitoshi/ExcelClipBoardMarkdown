# ExcelClipBoardMarkdown
## 機能
 Excelのクリップボードデータ形式のデータを、Markdown形式のテキストデータに変換する。
## 使い方
<pre>
<html>
 <head>
     <script type="text/javascript" src="excelclipboardtomarkdown.js"></script>
 </head>
 <body>
    <script>
        :           :
    var ret = excelClipBoardToMarkdown(text);
        :           :
    </script>
 </body>
</html>
</pre>
そのほか sample.htmlを参照ください。
## Excelのクリップボードデータ形式
 Excelのクリップボードデータは、行が\r\n、セルが\t、セル内改行が\r、セル内改行する場合は、セル内データ先頭に"と最後に"が表記されている。
 これらの内容から、Markdown形式のテキストデータを生成する。
 <pre>
  セル1 \t セル2 \t セル3 \r\n
  セル1 \t "セル2 1行目\rセル2" \t セル3 \r\n
 </pre>
