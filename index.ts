import { Database } from "bun:sqlite";
import { 
    createItem, 
    getItems,
    initializeItemTable,
    updateTodoToDone,
 } from "./db";
import { formatToItem } from "./format";

const db = new Database("sqlite.db");

initializeItemTable(db);

if (Bun.argv.length === 4) {
    //コマンドライン引数の最後２つの文字列を取得する
    const content: string = Bun.argv.pop() ?? "";
    const command: string = Bun.argv.pop() ?? "";
    
    switch (command) {
        case "memo":
            createItem(db, content, "memo");
            //Todo: memo add write method
            break;
        case "todo":
            createItem(db, content, "todo");
            //Todo: task add write method
            break;
        case "done":
            updateTodoToDone(db, content);
            //Todo: task done write method
            break;
        default:
            throw new Error("不正なコマンドです");
    }
} else if (Bun.argv.length === 2) {
    const items = getItems(db);
    items.forEach((item) => {
        console.log(formatToItem(item));
    });
} else {
    throw new Error("コマンドライン引数の数が多すぎます");
}