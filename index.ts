import { Database } from "bun:sqlite";
import { 
    createItem, 
    getItems,
    deleteItem,
    initializeItemTable,
    updateTodoToDone,
    archiveItems,
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
            break;
        case "todo":
            createItem(db, content, "todo");           
            break;
        case "done":
            updateTodoToDone(db, content);
            break;
        case "drop":
            deleteItem(db, content);
            break;
        default:
            throw new Error("不正なコマンドです");
    }
} else if (Bun.argv.length === 3) {
    const command: string = Bun.argv.pop() ?? "";

    switch (command) {
        case "trim":
            archiveItems(db);
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
db.close();