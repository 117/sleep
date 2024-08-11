# sleep

![version](https://img.shields.io/jsr/v/%40117/sleep?style=flat-square&color=%23ff51bc&label=version)
![status](https://img.shields.io/github/actions/workflow/status/117/sleep/deploy.yml?style=flat-square)

A promise-based sleep function for Deno.

## Contents

- [Features](#features)
- [Install](#install)
- [Example](#example)
- [Contributing](#contributing)

## Features

- [x] Minimal and easy to use.
- [x] Can be used to `await` for a specified amount of time.

## Install

For Deno:

```sh
$ deno add @117/sleep
```

## Example

```ts
import { sleep } from "@117/sleep";

const work = async () => {
    console.log("please wait for 2 seconds");
    await sleep(2000);
    console.log("thanks for waiting");
};

work();
```

## Contributing

Feel free to contribute and PR to your 💖's content.
