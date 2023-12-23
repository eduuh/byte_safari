## Exercises
These are some exercise to get used to the idea of storing to and
retrieving files from git objects store.

1. > create a new directory, and initialize it.
2. > look inside the .git folder. make sure you indetify folders and files
3. > use a text editor or the command line to create multiple files and write some text to it.
4. > use git hash function to generate the `sha1` hash and save the object to the git object store.
5. > Use git command to inspect the object in the database.

Repeat exercise 3 & 5 a couple of times.

6. > make an edit to your file, then save the new version  to 
git object store. what go you see in `.git/object`.

7. > Delete a file then recreate it with the object store.
8. > what if you save two files with the same content , but different file names. What do you see in the `.git/objects` ?
what do you expect to see.?


### Notes 
A brief recap of the exercises: steps 1-5 are repeating what we just did earlier.

In exercise 6, you see that git creates an entirely new object

    $ echo 'am enjoying this git session' >> learn.txt
    $cat learn.txt
    an awesome deep dive to git
    Git store is amazing

    $ # you could then use find of tree
    $ tree .git/objects
    .git/objects/
    ├── 99
    │   └── 7c8fb31f2f2d46c4c46931697ea291a87c43ee
    ├── b8
    │   └── 956fb060e39ac48d4ad69cc6402c13ed38f7aa
    ├── info
    └── pack

    4 directories, 2 files

For exercise 7. If you delete the file you can restore if using shell redirection.

    $ rm learn.txt
    $ git cat-file -p 997c > learn.txt
    $ cat learn.txt
    an awesome deep dive to git
    Git store is amazing

You could redirect the content of the blob to create a new file with the same content

    $ git cat-file -p 997c > learn-copy.txt

You can then add it to the `git object store` . Hopefully you can see that git store the content of the files - it is not saving 
anything about our the `file names`. Each object ID is a pointer to some text, but that text isn't associated with the filename.
If you need to save more that one files, we need to know how the files are called .

This takes us to the next section: how we use tree to save the `filename and directory structures.` in our repository.