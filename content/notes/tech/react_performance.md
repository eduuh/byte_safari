---
id: react_performance
aliases: []
tags: []
area: general
priority: low
project: none
related: []
---

## Repositories

https://github.com/stevekinney/wordman

https://github.com/stevekinney/packing-list

https://github.com/stevekinney/hottest-takes

https://github.com/stevekinney/project-notes

https://github.com/stevekinney/lots-to-do

## React Best practices

## Major topics to solve performance issues

1. React has a bunch of tools for Caching and memorizing components

2. You get a lot of benefits for free just in the way you structure you
   component hierarchy and application state.

3. Lastly, React 18 has a bunch of super cool new concurrency features.

## hierarchy of solving performance problem

- If you can solve a problem with how you shape your component hierarchy or state -
  do that first

- Memorization is a solid strategy only if the cost of checking pays itself with
  time you save rendering

- Using the suspense API to progressively load your application is a good idea.
  And more good stuff will come soon

- The Transition API is there for you when you're really in a pickle

## Quick wins

- Golden Rule of performance: Not Doing stuff is faster than doing anything.

- Are you running in Production mode? Because development mode is way than
  production mode.

- Are you out keys on the component that you mapped from arrays, right?

- The React Developer tools

- Measure first - before optimizing

```bash
npm install -g react-devtools

```

## React Rendering cycle

- renders
  - happen due to actions
  - Update refs to new Ids that exists

1. Render Phase

   - Mouting & UnMounting
   - Updating states, useReducers & useCallbacks

2. Commit Phase

   - Update Dom & refs
   - useEffect + UseLayoutEffects

3. Clean up phase
   - clean up effects

## Automatic batching (New in React 18)

- React 18 batch the state changes that happens the same time & do theme update together
- When a parent state changes. It tells all them child component to re-render

- This only used to work with event handlers prior to React 18.

## Fibers and keys

React tries real hard to keep track of all the component instances

- A fiber is a fancy work for a very cool data structure that React uses to keep
  track of component instances.

- When adding, removing or changing the order of the collection, having unique
  keys allows React to keep track of which and ideally avoiding having to spend
  too much effort trying out what changed.
