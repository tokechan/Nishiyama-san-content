import { expect, test } from "bun:test";
import { formatToItem } from "./format";
import type { Item } from "./types";

const itemMemo = {
    id:1,
    content:"memo",
    kind: "memo",
    archived: false,
} as const;

const itmeTodo = {
    id:1,
    content:"todo",
    kind: "todo",
    archived: false,
} as const;

test("formatToItem", () =>{
    expect(formatToItem(itemMemo)).toBe("- memo");
    expect(formatToItem(itmeTodo)).toBe("o todo");
});