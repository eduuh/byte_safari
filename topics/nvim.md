---
id: nvim
aliases:
  - Vim
  - Neovim
tags: []
area: ""
priority: ""
project: ""
related: []
---

## Macro

In Vim, macros are a way to record and replay a sequence of keystrokes, allowing you to automate repetitive tasks. Here's how to record, play, and manage macros in Vim:

### 1. **Recording a Macro**

To record a macro, you use the `q` command followed by a register (a letter from `a` to `z`) where the macro will be stored.

- Press `q` followed by a register letter, for example, `qa` to start recording into register `a`.
- Perform the series of commands you want to record.
- Press `q` again to stop recording.

Example:

```vim
qa    " Start recording into register 'a'
dd    " Delete a line
p     " Paste the deleted line
q     " Stop recording
```

This will record the action of deleting a line and then pasting it. You can replay the sequence stored in register `a` anytime.

### 2. **Playing Back a Macro**

To play back a macro that has been recorded in a register, use the `@` command followed by the register letter.

- Type `@a` to replay the macro recorded in register `a`.

Example:

```vim
@a    " Play the macro stored in register 'a'
```

### 3. **Repeat a Macro Multiple Times**

You can repeat the macro multiple times by prefixing the `@` with a number.

For example, to play the macro 5 times:

```vim
5@a   " Repeat the macro stored in register 'a' 5 times
```

### 4. **Viewing the Macro Content**

To view the content of a macro, you can use the `:registers` command, or just `:reg` for short. This will show all the registers and their contents.

```vim
:reg
```

This will display the content of all registers, including your macros.

### 5. **Editing a Macro**

To edit a macro stored in a register, you can use the `:let` command. For example, to modify the macro stored in register `a`:

```vim
:let @a = "ddp"    " Change macro in register 'a' to delete a line and paste it
```

This lets you directly modify the macro.

### Summary of Basic Commands:

- `q{register}`: Start recording a macro into the specified register.
- `q`: Stop recording the macro.
- `@{register}`: Play back the macro from the specified register.
- `:{number}@{register}`: Repeat the macro a specified number of times.
- `:reg`: List the contents of all registers.

## Command mode

To delete lines in Vim using command mode, you can use various commands depending on the scope of deletion (single line, multiple lines, or a range of lines). Here are the most common commands for deleting lines:

### 1. **Delete a Single Line**

To delete the current line, use the following command in command mode (press `Esc` to ensure you're in command mode):

```vim
dd
```

This will delete the entire line where the cursor is currently positioned.

### 2. **Delete Multiple Lines**

To delete multiple lines, you can specify a number before the `dd` command. For example, to delete 5 lines starting from the current line:

```vim
5dd
```

This will delete the current line and the next 4 lines (a total of 5 lines).

### 3. **Delete a Range of Lines**

To delete a specific range of lines, you can use the following format:

```vim
: [start_line],[end_line]d
```

For example, to delete lines 10 to 20:

```vim
:10,20d
```

Alternatively, if you're already on line 10 and want to delete from line 10 to line 20, you can use:

```vim
:.,20d
```

This deletes from the current line (`.`) to line 20.

### 4. **Delete All Lines**

To delete all lines in the file, use:

```vim
:%d
```

This will delete the entire content of the file.

### 5. **Delete the Current Line Without Saving It to the Register**

To delete the current line without saving it to the default register (which is the clipboard), you can use the following command:

```vim
"_dd
```

This deletes the current line but doesn't store it in the unnamed register.

### Summary of Commands:

- `dd`: Delete the current line.
- `5dd`: Delete 5 lines starting from the current line.
- `:10,20d`: Delete lines 10 to 20.
- `:%d`: Delete all lines in the file.
- `"_dd`: Delete the current line without saving it.
