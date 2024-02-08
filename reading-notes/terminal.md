# Terminal

This is relevant to the course because the command line terminal is a fundamental skill for software development and any IT professional.

### The Command Line - What is it, how does it work and how do I get to one.

There are are a few different related and similar terms which are often confused:

1) Terminal - This is a text input and output environment. Many terminal windows and tabs can be opened, just like a web browser.
2) Shell - This is the program that acts as the interpreter for the commands entered at the command line interface. The shell program runs inside of the terminal environment. Examples of common shell programs are BASH and Z-Shell (Zsh).
3) Command Line Interface (CLI) - This is the actual prompt on the screen within the terminal, i.e. the interface where commands are entered into. The operating system has its own CLI which is the default CLI, but other programs can have their own CLI as well that also run inside of the same terminal.

On MacOS, the Terminal program opens the Command Line. It is found within the utilities folder of applications.

### Basic Navigation - An introduction to the Linux directory system and how to get around it.

- Absolute paths always start with a forward slash /
- Relative paths always do not start with a forward slash /
- Square brackets [] denote an optional argument

### More About Files - Find out some interesting characteristics of files and directories in a Linux environment.

- Everything is a file in Linux, including directories, the keyboard (a read-only file), and the monitor (a write-only file).
- All references to files or directories are in-fact paths (either relative or absolute paths).
- Linux is an extensionless operating system. This means that it does not use the extension within the file name to identify what type of file it uses. It looks for the actual headers within the data of the file itself to identify what type of file it is. This is in contrast to Windows.
- Linux is case sensitive. This is also in contrast to Windows.

### Manual Pages - Learn how to make the most of the Linux commands you are learning.

- Use the command `man -k <search term>` to search through all man pages for the given term, to help you find which man page you might need to look at.
- Use the command `/<search term>` from inside of a man page to search for the search term within just the currently active man page. This will highlight all instances of the search term in the man page, making it easier to find.
- Use `n` after searching within a man page to quickly navigate to the next search result.

### File Manipulation - How to make, remove, rename, copy and move files and directories.

- `touch` to make a file if the file name doesn't already exist. If the file name does already exists, then it can modify its access or modification time.
- `mkdir` to make a directory.
- `rmdir` to remove a directory - it must already be empty, though.
- `cp` to copy a file or directory.
- `mv` to move or rename a file or directory.
- `rm` to remove a file or with `-r` to recursively remove all the contents of a directory. Be very careful with these commands as there is no undo.

### Cheat Sheet - A quick reference for the main points covered in this tutorial.

Reference: [Ryans Tutorials - Linux Tutorial - Cheat Sheet](https://ryanstutorials.net/linuxtutorial/cheatsheet.php)

Source: [Ryans Tutorials - Linux Tutorial](https://ryanstutorials.net/linuxtutorial/)
