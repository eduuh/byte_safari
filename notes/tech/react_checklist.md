---
id: react_checklist
aliases: []
tags: []
area: general
priority: low
project: none
related: []
---

## Dealing with performance problems

## Re-Renders

0. Make sure map lists have unique keys. Not index keys

   - Map data to unique ids

1. Push state down the component tree.

   - when state is down enough to make significant less things from
     re-rendering.
   - Stop the state change

2. Create very specific selectors
