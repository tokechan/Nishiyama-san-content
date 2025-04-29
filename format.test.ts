import { expect, test } from "bun:test";
import { formatToItem } from "./format";
import type { Item } from "./types";

const itemMemo = {
    id:1,
    content:"memo",
    kind: "memo"
} as const;

const itmeTodo = {
    id:1,
    content:"todo",
    kind: "todo"
} satisfies Item;

test("formatToItem", () =>{
    expect(formatToItem(itemMemo)).toBe("- memo");
    expect(formatToItem(itmeTodo)).toBe("o todo");
});