# Eduuh's Byte Safari

This repository is designed to store my public notes and related source code together.

## Data Structures & Algorithms (DSA)

```mermaid
graph TD

  O[Linked List] --> P[Head]
  P[Head] --> Q[Node 1]
  Q[Node 1] --> R[Node 2]
  S[Node 2] --> T[Tail]


  G[Graph] --> H[Node 1]
  G[Graph] --> I[Node 2]
  G[Graph] --> J[Node 3]
  H[Node 1] -- Edge --> I[Node 2]
  I[Node 2] -- Edge --> J[Node 3]

  K[Tree] --> L[Root]
  K[Tree] --> M[Child 1]
  K[Tree] --> N[Child 2]
  L[Root] --> M[Child 1]
  L[Root] --> N[Child 2]
  K[Tree] --> N[Child 3]

```

> Goals

- Solve problems in single files with reusable cross-language test cases.
- Practice in multiple languages to learn new skills.
- Continuously add new solutions and refine old ones.
- Use [Neovim DAP](https://github.com/mfussenegger/nvim-dap) for quick debugging.

## Competitive Programming Tests

> Goals

- Regularly practice DSA problems to build skills.
- Review and optimize solutions for better performance.
- Participate in coding contests on platforms like [LeetCode]
  (<https://leetcode.com>) and [AtCoder](https://atcoder.jp/).

## Growth & Challenges

- Maintain versioned solutions to track progress and improvements.
- Organize solutions by topic (e.g., sorting, graphs, dynamic programming).
- Add documentation to make the repository a comprehensive reference.
- Introduce regular coding challenges to stay consistent.

> Future Enhancements to NVIM

- Automate question downloads and solution submissions
  for platforms like [LeetCode](https://leetcode.com) and [Codeforces](https://codeforces.com).
- Set up templates for competitive programming.
- Add code runners and visualization tools to enhance learning and blogging.

- Automate workflows for downloading, solving, and submitting problems via CLI.
- Develop proficiency in multiple languages for flexibility in problem-solving.

### Related Repositories

1. [nvim Configuration](https://github.com/eduuh/nvim)
2. [dotfiles - Base Configuration](https://github.com/eduuh/dotfiles)
