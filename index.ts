//output.txtをファイルとして取得し、テキストを読み出す
const file = Bun.file("output.txt");
const source = await file.text();

//コマンドライン引数の最後の文字列を取得する
const memo: string = Bun.argv.pop() ?? "";

//ファイルに元のテキストと改行、日時を書き込む
const writer = file.writer();
writer.write(source);
writer.write("\n");
writer.write(memo);
writer.end();

//ファイルから再びテキストを読み出す
const  result = await file.text();
console.log(result);

