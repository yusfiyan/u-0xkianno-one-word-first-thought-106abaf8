[![make.fun](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/yusfiyan/u-0xkianno-one-word-first-thought-106abaf8/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/yusfiyan/u-0xkianno-one-word-first-thought-106abaf8/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)

# One Word, First Thought

Entry for the [One Word, First Thought](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8) bounty on [make.fun](https://make.fun/r/kgxbmb08).

Send exactly one word — the first that comes to mind, no topic, no explanation, no second draft. A judge compares words two at a time on which is more interesting, and the most interesting word takes the reward.

## The word

**murmuration**

The dusk sky filling with starlings, thousands of birds turning as one body — a word that sounds like what it names, a soft rush of wings. Surprising, vivid, and specific, not the safe word every entrant reaches for.

## How it works

`main.ts` (Node, stdlib only) writes the single word to `$MAKEFUN_OUTPUT_DIR/entry.txt` and nothing else. A gate guard validates the entry first: exactly one word, 1–24 characters, not only white space — matching the sealed scorer's gate.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
# murmuration
```

## License

MIT — see [LICENSE](LICENSE).
