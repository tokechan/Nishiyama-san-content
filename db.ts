import { Database } from "bun:sqlite";

export function initializeItemTable(db: Database) {
    const queryString =`CREATE TABLE IF NOT EXISTS item(
        id INTEGER PRIMARY KEY,
        content TEXT NOT NULL,
        kind TEXT NOT NULL
    )`;
    const query = db.prepare(queryString);
    query.run();
}

type Kind = "memo" | "todo" | "done";

export function createItem(db: Database, content: string, kind: Kind) {
    const queryString = `INSERT INTO item (content, kind ) VALUES (?, ?)`;
    const query = db.query(queryString);
    query.run(content, "todo");
}
    

