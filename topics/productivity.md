---
id: productivity
aliases: []
tags: []
area: ""
priority: high
project: ""
related: []
---

# Tools

## Nvim

### Telescope

Default Mappings
Mappings are fully customizable. Many familiar mapping patterns are set up as defaults.

Mappings Action

<C-n>/<Down> Next item
<C-p>/<Up> Previous item
j/k Next/previous (in normal mode)
H/M/L Select High/Middle/Low (in normal mode)
gg/G Select the first/last item (in normal mode)
<CR> Confirm selection
<C-x> Go to file selection as a split
<C-v> Go to file selection as a vsplit
<C-t> Go to a file in a new tab
<C-u> Scroll up in preview window
<C-d> Scroll down in preview window
<C-f> Scroll left in preview window
<C-k> Scroll right in preview window
<M-f> Scroll left in results window
<M-k> Scroll right in results window
<C-/> Show mappings for picker actions (insert mode)
? Show mappings for picker actions (normal mode)
<C-c> Close telescope (insert mode)
<Esc> Close telescope (in normal mode)
<Tab> Toggle selection and move to next selection
<S-Tab> Toggle selection and move to prev selection
<C-q> Send all items not filtered to quickfixlist (qflist)
<M-q> Send all selected items to qflist
<C-r><C-w> Insert cword in original window into prompt (insert mode)
<C-r><C-a> Insert cWORD in original window into prompt (insert mode)
<C-r><C-f> Insert cfile in original window into prompt (insert mode)
<C-r><C-l> Insert cline in original window into prompt (insert mode)

### Telescope file browser

Mappings
telescope-file-browser.nvim comes with a lot of default mappings for discoverability. You can use telescope's which_key (insert mode: <C-/>, normal mode: ?) to list mappings attached to your picker.

path denotes the folder the file_browser is currently in
fb_actions refers to the table of provided telescope-file-browser.actions accessible via require "telescope".extensions.file_browser.actions
Insert / Normal fb_actions Description
<A-c>/c create Create file/folder at current path (trailing path separator creates folder)
<S-CR> create_from_prompt Create and open file/folder from prompt (trailing path separator creates folder)
<A-r>/r rename Rename multi-selected files/folders
<A-m>/m move Move multi-selected files/folders to current path
<A-y>/y copy Copy (multi-)selected files/folders to current path
<A-d>/d remove Delete (multi-)selected files/folders
<C-o>/o open Open file/folder with default system application
<C-g>/g goto_parent_dir Go to parent directory
<C-e>/e goto_home_dir Go to home directory
<C-w>/w goto_cwd Go to current working directory (cwd)
<C-t>/t change_cwd Change nvim's cwd to selected folder/file(parent)
<C-f>/f toggle_browser Toggle between file and folder browser
<C-h>/h toggle_hidden Toggle hidden files/folders
<C-s>/s toggle_all Toggle all entries ignoring ./ and ../
<Tab> see telescope.nvim Toggle selection and move to next selection

- [~] <S-Tab> see telescope.nvim Toggle selection and move to prev selection
- [ ] <bs>/ backspace With an empty prompt, goes to parent dir. Otherwise acts normally
      fb_actions.create_from_prompt requires that your terminal recognizes these keycodes (e.g. kitty). See :h tui-input for more information.

### Tree sitter

enter into visual mode with v and follow by pressing v/V to use treesitter incremental selection, or/and just w/W/b/%/f/j/l etc. Most base movements/selections should work.

### DAP
