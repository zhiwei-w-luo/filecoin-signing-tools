import {expect, test} from "jest";
import Transport from "@ledgerhq/hw-transport";
import {hello} from "fcwebsigner";

console.log(hello)

test("get version", async () => {
  hello();
});
