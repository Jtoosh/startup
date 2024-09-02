# CS 260: Web Programming

## Intro:

Web programming is one of the most useful branches of skills and technologies to have in the world today. Learning these skills will open previously inacessible doors. 
Because the specifics technologies of web programming shift constantly, focus less on the specific technologies and more on the overall concepts and frameworks of being a web programmer in this class.

4 keys of being a good software engineer:

1. Capable: know the technologies well, discern the meaningful tech from the fads, and know how to best leverage different technologies.
2. Creative: scuplting and writing code to be neat and intentional is very much a creative process, and can be beautiful to those who recognize it.
3. Collaborative: rarely are apps used by just one, and they are rarely built by just one. Remember, that in a team, 1+1+1 does not equal 3, but 4 or 5.
4. Curious: having a questioning mind is not bad (or a lack of faith!) but it opens pathways to new discoveries and solutions.

Underlying all of these should be to be a Christlike software engineer, including:

- Seeking divine help, including in coding, of what to do, where to go, and how to do something
- Having an eternal perspective, looking past a project due date, a class, a job, or even this life.

**AWS Account**
An Amazon Web Services account is an essential resource for this class, and for web development in general. Some of the tools we will use include:

- EC2: Elastic Cloud Compute - a virtual server in the cloud
- ECS
-
-

**Console Application**
A console application is an essential of web programming, and I need to make sure I have a POSIX compliant one. A console being POSIX compliant means that is supports a standard set of console commands. Warp is the one I am using, and it is POSIX compliant.

A note, terminal, shell, and console are all synonymous.

Some basic commands that I haven't run into yet include:

- curl - Command line client URL browser
- grep - Regular expression search
- find - Find files
- top - View running processes with CPU and memory usage
- df - View disk statistics
- cat - Output the contents of a file
- **less - Interactively output the contents of a file** I want to explore this one more.
- wc - Count the words in a file
- ps - View the currently running processes
- kill - Kill a currently running process
- sudo - Execute a command as a super user (admin)
- ssh - Create a secure shell on a remote computer
- scp - Securely copy files to a remote computer
- history - Show the history of commands
- ping - Check if a website is up
- tracert - Trace the connections to a website
- dig - Show the DNS information for a domain
- man - Look up a command in the manual

The ones that I remember are:

- cd - change directory
- ls - list files
- pwd - print working directory
- mkdir - make directory
- rmdir - remove directory
- rm - remove file (use -r flag to remove a directory)
- touch - create a file
- mv - move a file
- cp - copy a file
- clear - clear the console
- exit - exit the console
- nano - open a file in the nano text editor
- code - open a file in Visual Studio Code

You can also chain the input and output of commands using special characters

- `|` - Take the output from the command on the left and _pipe_, or pass, it to the command on the right
- `>` - Redirect output to a file. Overwrites the file if it exists
- `>>` - Redirect output to a file. Appends if the file exists

>Something that I loved from this assignemnt was figureing out that I could write a small bit of script, in the console, to manipulate a file, when I redirect the output of the script to the file using `>>`. I had no idea I could do something like that. I think that is connected to the `less` command, but I need to learn how it works more. Here is the line that was used:

```bash
for i in {1..2}; do printf 'y' >> other.txt; done;
```

## GitHub

While a repo can be made in a local directory using `git init`, it is easier to create a repo on GitHub and clone it to the local machine. This is done using the command `git clone <url>`.

To create a repository in GitHub, log into your account, select the `Repositories` tab, and press `New repository`. You then specify a unique repository name, give a description, indicate that you want it to be public, add a default README.md file, and choose a license. You can then clone the repository. A repo clone is an exact copy of the repo with all of the commits, comments, and SHAs. It also configures the clone to know what the remote source is so that you can use Git commands to keep them in sync as changes are made.

**This is the pattern that you want to make a reflexive part of your development process.**

1. Pull the repository's latest changes from GitHub (`git pull`)
2. Make changes to the code
3. Commit the changes (`git commit`)
4. Push the changes to GitHub (`git push`)

⚠ Note: The first time you make a push request to a repository Git will ask you how you want to identify yourself and what credential (e.g. password) to use in order to authenticate with GitHub. You will need to create a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) and provide that as your password.

```sh
*** Please tell me who you are

Run
  git config --global user.email "you@example.com"
  git config --global user.name "Your name"
```

The `git fetch` command will get the latest info about the changes to the remote source (GitHub) without making changes to the local repo. This info is displayed when running `git status` after running `git fetch`.

Normally pushing and pulling between collaborators is just fine, until the same lines of code are edited in different ways, then a merge conflict happens. A merge conflict is resolved by editing the file in question, deleting the conflict markers, and then committing the changes.

The `README.md` file is a markdown file that is displayed on the front page of the repository. To have it displayed on the front of the repo, it must be named README.md. 

A fork is a way to clone a GitHub repo. It is similar to the `git clone` command, but it is creating a copy of the repo on GitHub rather than my local development environment. This is useful when I want to make changes to a repo that I don't have write access to. The forked repo still has a link to the upstream (original) repo, so I can pull in changes, and make pull requests to push suggested changes to the upstream repo.
