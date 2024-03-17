---
id: git_tricks
aliases: []
tags: []
area: ""
project: ""
---

## Change the author-email for a few commits

```bash


git config --global user.name "New Author Name"
git config --global user.email "<email@address.example>"

git rebase -r <some commit before all of your bad commits> \
 --exec 'git commit --amend --no-edit --reset-author'

```

source: https://stackoverflow.com/questions/750172/how-do-i-change-the-author-and-committer-name-email-for-multiple-commits

## Delete other branch except main/master

git branch | grep -v "master" | xargs git branch -D
