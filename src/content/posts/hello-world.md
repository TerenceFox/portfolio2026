---
title: "Hello, World"
description: "A throwaway stub for verifying the blog pipeline — drafts are excluded from production builds."
date: 2026-04-14
slug: hello-world
tags: [meta, test]
draft: true
---

This post exists to verify that the blog pipeline renders every Markdown feature correctly. It's marked `draft: true`, so it only shows up during `npm run dev`, never in `npm run build`. Delete it once the first real post lands.

## Heading level two

Prose should read comfortably at this width. Inline formatting: **bold**, *italic*, `inline code`, and [a link](https://example.com).

### Heading level three

Lists should feel tight:

- First item
- Second item with a [link inside](https://example.com)
- Third item
  - Nested item
  - Another nested item

Ordered lists work too:

1. Step one
2. Step two
3. Step three

#### Heading level four

> A blockquote. Used sparingly for epigraphs, pull quotes, and the occasional emphatic aside. Should stand out but not dominate.

Fenced code block with syntax highlighting:

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('world'));
```

A horizontal rule separates major sections:

---

Tables render via GitHub-flavored markdown:

| Column A | Column B | Column C |
|----------|----------|----------|
| Row 1    | Value    | Another  |
| Row 2    | Value    | Another  |
| Row 3    | Value    | Another  |

Task lists also work:

- [x] Write stub post
- [x] Verify prose styles
- [ ] Write the first real post

That's the gamut.
