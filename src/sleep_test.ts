import { assert } from "assert";

import { sleep } from "@/src/sleep.ts";

Deno.test("does not resolve before the delay", async () => {
    const start = Date.now();
    const delay = 100;

    await sleep(delay);

    const end = Date.now();
    const elapsed = end - start;

    // check if the elapsed time is at least the delay
    assert(elapsed >= delay);
});
