---
id: action_based_editing
aliases:
  - Action Based Learning
tags:
  -  #nvim
  -  #vim
area: "[nvim-hub](hubs/nvim.md)"
priority: high
project: personal
related: "[nvim](hubs/nvim.md)"
---

## Insert mode

1. <;q> quit nvim

### cmp

1. <Tab> Open completion
2. <Cr> (enter) confirm completion
3. <C-n> or <Up> select next item
4. <C-p> or <Down> select prev item
5. <C-b> scroll docs down
6. <C-f> scroll docs up
7. <C-q> quit completion.

## telescope

1. <C-p> move selection to previous
2. <C-n> move selection to next
3. <C-q> Send to qflist + open trouble
4. <C-t> trouble_telescope.open

# Action Based Editing

## Leader

### Create <leader>c

1. Create new notes (n)

   - (1) select obsidian vault in telescope
   - (2) create note based on template

### Open <leader> o

1. Open new note (obsidian) in obsidian vault (n)
2. Open new workspace (obsidian) in obsidian vault (w)
3. Open completion list (c)
   - Add tags <C-l>
4. Open quick fix list q
5. Open telescope (t)
6. Open Marks (m)
7. Open Buffers (b)

### Add <leader> a

1. Add mark entry (m)

2. Add Breakpoint (b)

3. Add test case (t)

### Edit <leader> e

1. Edit marks (m)

### Insert i

1. Insert register

### Find <leader> f

1. Find Files (f). Respects gitignore
2. Find Word (w). Respects gitignore
3. Find symbols (s)
4. Find notes tags (t)
5. Find Diagnostic (d)

### Run / Start / step

## Step (s)

1. Step into (i)
2. Step over (o)

## start / stop

1. Start Debugger (d)

2. Kill debugger (kd)
3. Run to cursor (rc)

## Secondary Leader ;

1. Create new commit (c) ;c

   - (1) open lazy git

2. Find Files (;f). Ignore gitignore

3. Find Files (;;). Browse files

4. Find Files (;w). Ignore gitignore

5. Run Code (;r) Run code

6. Debug to cursor (;d)
