# CS 260: Web Programming

## Intro

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
- **Console Application**
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

> Something that I loved from this assignemnt was figureing out that I could write a small bit of script, in the console, to manipulate a file, when I redirect the output of the script to the file using `>>`. I had no idea I could do something like that. I think that is connected to the `less` command, but I need to learn how it works more. Here is the line that was used:

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

Personal access tokens are a way to authenticate with GitHub. They are used in place of a password when pushing or pulling from a repo. They are more secure than a password because they can be revoked at any time, and they can be limited to only the permissions that are needed. The two types described are fine-grain PATs and classic PATs. Fine-grain PATs are more secure because they can be limited to only the permissions that are needed. Classic PATs are less secure because they have access to all of the permissions that the user has, but they have some functions that don't work with fine-grain PATs. Read more about them [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

**Pull requests:**
Pull requests are how you suggest/request a change to a respository. You can submit a pull request to push changes from your forked copy to the original repository. The owner of the original repository can then review the changes and decide whether or not to accept them. Pull requests are a way to collaborate with others on a project, and they are the way to contribute to open source projects.

Pull requests are specifically for propsing changes to the main branch of code by merging in changes from a feature (other) branch. Pull requests can be reviewed and commented on by others in the repositories, and a pull request can have changes committed to it while it is still open and under review, and the files changed in the pull request can be viewed. A user can also make a draft pull request, which is a pull request that is still in progress and not ready to be merged. It is essentially a "draft" of a pull request.

A lot more good info on pull requests can be found [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests)

**Lecture 9.5.24**
One of Prof. Ventura's biggest course objectives is for us to learn to think analytically and creatively.
He also wants us to gain confidence, have fun, and of course learn web programming.

Don't be trapped by the accumulation of ignorance, understand as I go.

**Lecture 9.10.24 and Startup Spec Notes:**
Here are how some of the technologies work and what their functions are:

- APIs/Services: These are files and code written by others that can perform a function or provide data. They are used to provide added functionality to an application.
- A `deployfiles.sh` script is used to deploy the application to the EC2 instance. I'll want to look at that in one of the versions of Simon and see how it works.
- Database: how any data that persists between sessions is maintained and reloaded.

Peer-to-peer model: This is a model where each computer in the network can act as a server or a client. This is useful for sharing files, and it is more secure than a client-server model because there is no central server that can be attacked. It is also more efficient because the data can be transferred directly between the computers. This is how the scores were shared in the Simon example.

Like with other projects I have had, remember to balance ambition with reality. I felt this when I had the idea to add the file input and quiz generation feature. I think I am going to still make the quiz/study app, but only do a simpler part of it for the project. Then afterwards I'll work on the quiz generation feature.

Maintain the separation between the Development and Production environments. It is bad practice to do any coding/developing in the production environment. Development is the designated place for breaking and messing up. Also ensure that things being done in the development environment are being pushed to GitHub.

## Lecture 9.12.24

Caddy
: a gateway that can be used for 3 main purposes: serving static files, web user authentication, and redirecting web traffic. It serves the same function as Apache in my ITC210 class.

DNS
: Domain Name System, and it translates domain names into IP addresses. It is like a phone book for the internet. In the case of AWS, the DNS is Route 53, and the web server is EC2.

The unique combinations of IP addresses actually ran out in 2011, so now there are IPv4 and IPv6 addresses. IPv4 addresses are 32 bits long, and IPv6 addresses are 128 bits long. Most people haven't adopted those yet though. Other things that are being done to address the shortage of IP addresses are NAT (Network Address Translation) and CIDR (Classless Inter-Domain Routing), so I'll still have a "unique" location for my server so it will be secure.

Layers of the Internet:
Link: The physical connection between devices (fiber, hardware)
Internet: The network of networks that connects devices (IP, routers)
Transport: The protocols that move data between devices (TCP, UDP)
Application: The protocols that define how data is formatted and transmitted (HTTP, FTP)

**Creating EC2 Instance:**
Something important about the region in which we set up this server, is that the AMI file that they provided for the class is only avalibe in the N. Virginia region. So if you try to set up the server in a different region, it will work, but I won't be able to use the AMI file that they provided.

_Notes about the server from the reading:_
The `Caddyfile` is the configuration file for your web service gateway. The `public_html` directory contains all of the static files that you are serving up directly through Caddy when using it as a web service. We will cover Caddy configuration in a later instruction. The `services` directory is the place where you are going to install all of your web services once you build them.

## Lecture 9.17.24

Domain name anatomy:
[subdomain].[domain].[tld]
tld = top level domain. Examples: .com, .org, .net, .edu, .gov, etc.

There are different records that are associated with a domain name. The most common ones are:

- A record: This is the most common record. It maps a domain name to an IP address. This is the record that you will use to map your domain name to your EC2 instance.
- CNAME record: This is an alias for another domain name. It is used when you want to map one domain name to another domain name.
- MX record: This is used to map a domain name to a mail server. It is used when you want to receive email at your domain name.
- TXT record: This is used to store text information about a domain name. It is used for things like SPF records, DKIM records, and DMARC records.

Caddy cannot use HTTPS with just an IP address, it needs a domain name to do that.

Something that was a stumbling block for me was remembering the syntax of the ssh command. Here is is: `ssh -i keyfile.pem ubuntu@public-ip-address`. The `-i` flag is for the key file, and the `ubuntu` is the username of the server, which would change depending on the server.

Prof. Ventura mentioned that class may not seem very hard right now, which is fine, it'll get more difficult as time goes on.

Make sure to take notes of things as I do the HTTPS assignment reading and the HTML readings.

## HTTPS Assignment

HTTPS, or Hypertext Transfer Protocol Secure, is a protocol that is used to secure the communication between a web server and a web browser. It is an extension of HTTP, or Hypertext Transfer Protocol, which is the protocol that is used to transfer data. HTTPS uses encryption to secure the data that is being transferred. This encryption is done using SSL, or Secure Sockets Layer, which is a protocol that is used to encrypt data that is being transferred. SSL is now unsecure and was surpassed by TLS Protocol. HTTPS is used to secure sensitive data, such as credit card numbers, passwords, and other personal information, that is being transferred between a web server and a web browser.

Web certificates are generated by trusted 3rd parties, and then given to the owners of a domain. The certificate can then be served from the web server, and those who want to access the domain can do so using the certificate and the public/private key encryption system.

Web certificates used to be very expensive to get, and there was quite a monopoly on them. This monopoly was busted by 2 Mozilla employees when they started a non-profit called Let's Encrypt. Let's Encrypt dynamically provides and renews free, credible web certificates to anyone who wants them, using their IETF standard ACME protocol. This has made the internet a much safer place, because now anyone can have a secure website.

Caddy uses Let's Encrypt to provide HTTPS certificates to websites. It does this by automatically requesting a certificate from Let's Encrypt when the website is set up, and then automatically renewing the certificate when it expires. This makes it very easy to set up a secure website with Caddy.

To implement HTTPS on my website, I need to do the following:

1. Set up a domain name for my website by leasing it from a DNS, such as Route 53.
2. Create an A record in the DNS that maps the domain name to the IP address of my web server.
3. In the EC2 instance, with Caddy installed, edit the Caddyfile to include the domain name. Do this by editing the section that says `:80{` (meaning port 80) to be the domain name (`mnemonicstudy.com{` in my case).

## HTML Assignments

`input` HTML elements have a `pattern` attribute that can be used to specify a regular expression that the input must match. This is useful for validating user input.
To edit the color of a `color` input element, use the `value` attribute to assign it a hexidecimal color value.

According to Prof. Ventura, the best resources are MDN Web Docs and W3Schools.

`aside` elements
: An HTML structural element used to organize tangental or unrelated content, such as sidebars or footnotes.

`main` elements
: An HTML structural element used to organize the main content of a page.

`audio` elements
: An HTML external media element used to embed audio content in a webpage.
Attributes: `src`, `controls` creates a visual representation of the audio, `autoplay` beings playing as soon as the `audio` element is rendered (strongly discouraged), `loop` replays the audio when finished, and others.

`video` elements
: An HTML external media element used to embed video content in a webpage.
Attributes: `src`, `controls`, `autoplay`, `loop`, and others. These have the same functions as the corresponding attributes in an `audio` element. Another one is `crossorigin`, which is used to specify how the element should handle CORS requests (cross-origin resource sharing). This is needed when the video is hosted on a different domain than the webpage.

`svg` elements
: An HTML internal media element used to embed SVG (Scalable Vector Graphics) content in a webpage. SVG is a vector image format that is used to create graphics that can be scaled to any size without losing quality. SVG images are created using XML, and they can be manipulated using CSS and JavaScript. SVG images can be used to create logos, icons, and other graphics that need to be scalable.

`canvas` elements
: An HTML internal media element used to create graphics in a webpage. The HTML element itself creates the canvas, but JavaScript is needed to actually draw on it.

## Lecture 9.19.24

Don't worry about making the pieces look like the finished product, just make sure that all of the pieces are present in my HTML. In the Simon example code, most of the pieces don't look or behavior _anything_ like the final product, but they are all there.

## Startup HTML notes

What pieces do I need?

- Nav bar
- Title
- Promo/headliner

- Flashcards page
- Flashcard set selection (`div`, `p`)
- Individual cards, front and back ( series of `div`s)
- buttons to edit/save cards (`button`)
- buttons to move between cards (`button`)
- back button to exit set (`button`)
- Create set button (`button`)

- Quiz page
- Quiz question (div, p)
- Quiz help button (button)
- Flag question button (button)
- button to move between questions (button)
- back button to exit quiz (button)
- Quiz selection (div)
- Edit quiz button (button)

  - Edit quiz page
  - Save quiz button (button)
  - Create quiz button (button)

- Account page
- Login button/icon
- Account info fields
- log out button
- edit account button
- save account button
- study history/stats

- About page
- picture of me?
- bio paragraph
- contact info
- mission of Mnemonic study

## Lecture 9.24.24 - CSS

Psuedo selecters allow you to select an element based on its state. The syntax is `element:state`. Some of the most common ones are: `:hover`, `:active`, `:focus`, `:visited`, and others.

A few methods to import an external font:

1. Use a `@font-face` rule in the CSS file, and in the `src` property, set the value to the url. This is for if you personally have the font file.
2. Use and `@import` rule in the CSS file, and in the `url` property, set the value to the url of the font file. This is for if you are using a font from a font service, like Google Fonts.

Animation is something that can be applied using CSS. The `animation-name` property is used to specify the name of the animation, and the `animation-duration` property is used to specify the duration of the animation. These are placed on the elements which will have the animation applied to them. Then, the `@keyframes` rule is used to define the animation, with the name of the animation matching the value of `animation-name`. The `from` and `to` keywords are used to define the starting and ending states of the animation. Intermediate states can be defined using percentages. 'Keyframes' are the major points of animation, and the browser will interpolate between them.

Here is an example of a simple animation:

```css
@keyframes example {
  from {
    background-color: red;
  }
  to {
    background-color: yellow;
  }
}

div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```

## Lecture 9.26.24 - CSS Continued

> The following is courtesy of Copilot lol.

To remember the order of the properties in the CSS box model, from outside to inside, you can use the mnemonic:
**"My Big Purple Cat"**

- **M**argin
- **B**order
- **P**adding
- **C**ontent

Review of `display` property values:

- `block`: The element will take up the entire horizontal space of the browser, and it will start on a new line.
- `inline`: The element will take up only as much horizontal space as it needs, and it will try to fit on existing lines.
- `inline-block`: The element will take up as much width as is set in the CSS, and it will try to fit on existing lines.
- `none`: The element will not be displayed at all.
- `flex`: The element will be displayed as a flex container, and the children of the element will be displayed as flex items.
- `grid`: The element will be displayed as a grid container, and the children of the element will be displayed as grid items.

Grid and flex are a bit more complex, so here is some more info on them:

- [Grid] (<https://www.w3schools.com/css/css_grid.asp>)
- [Flex] (<https://www.w3schools.com/css/css3_flexbox.asp>)

Bootstrap is the most popular CSS framework, and Tailwind CSS is a newer one that is gaining popularity. All CSS frameworks are built on top of CSS, and they provide a set of pre-built styles that can be used to create a website. They are useful because they save time and effort, and they provide a consistent look and feel to a website. They are also useful because they make responsive web design much easier.

The downside to Bootstrap is that sites styled with it are pretty uniform, so like all programming tools, it is not an end-all-be-all.

## CSS Frameworks Assignment Notes

Bootstrap is far and away the most popular CSS framework, but its major success is also its weakness: Bootstrap styling has become the de facto look of the web, so using Bootstrap can deliver a reliable and comfortable user experience, but it won't be able to stand out and be unique. Tailwind CSS is the next closest framework as of recent years, emerging in the last 4 years. It allow for different "looks" and avoids having a single distinct style.

Bootstrap is a mobile-first framework, meaning that it is designed to work on mobile devices first, and then scale up to larger devices. It can be used by downloading the files and using a package manager, or by their content delivery network (CDN) Here are their official CDN links:

CSS: <https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css>
JS: <https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js>

## Lecture Notes 10.1.24

In Caddy, different from Apache, the `publichtml` directory is the root directory of the website. This is where the `index.html` file is located that gets displayed when no subdomain is specified. The HTML for any subdomain is located in the `services` directory.

Remember when using the `deployFiles.sh` script, to be in the directory that you want to deploy.

The colors for Bootstrap is present in their CSS using a Sass map. If I want, I can make my own Sass file and customize the colors to my liking. Or, I can just use other assignments for different purposes, like not using the 'danger' color just for warning components.

When debugging CSS, the `Styles` tab in the browser inspector is my best friend. It will only show the styles that are being applied to the element that I have selected, so I need to select one first. In `Styles` I'll see all of the styles applied, and then the ones that are overridden will be crossed out. I can also add new styles to the element to see how they will look, or toggle styles using the checkbox next to them. The `Computed` tab will show me the final styles that are being applied to the element, including the ones that are inherited from the parent elements.

## Lecture Notes 10.3.24 - JavaScript Intro

UX has become a complex subject, and in the setting of designing a good, mature application, serious consideration must be given to UX.

"Turing complete" Languages

Recall of Events and event handling:

Events are certain actions that happen in a browser. Includes `click`, `mouseover`, `keydown`, `load`, `submit`, and others. Handling an event is done by executing certain code when the event happens. Listening for an event constitutes observing a specific element for a specific event, and then executing code when that event happens.

The `debugger` command in JS will also function as a breakpoint.

In JS strings, %c and %s are used to format data. %c is used to apply CSS styling, and %s is used to format the value as a string. Other formatters are %d or %i for integers, %f for floating point numbers, %o for DOM objects, and %O for JavaScript objects.

There are at least 3 types of objects in JavaScript;

1. Objects that are instances of a class and have methods, such as String, Array, and Date, and others.
2. Objects that are defined with key value pairs, such as `{name: 'John', age: 30}`, and don't require instantiation.
3. Type objects.

## Startup CSS notes

One of the core things that I've noticed as I've used Bootstrap for this is the placement of most of the elements into some type of container, referred to as `components` in their docs. A lot of the stylistic choices include choosing the right component for the job.

Also, alot of the box model classes are similar to the way that they are in Tailwind. `m` for margin, and `mr` for right margin and so on. The `p` classes are for padding, and the `w` classes are for width. The `bg` classes are for background color, and the `text` classes are for text color. Other common ones that I found were `fw` for font weight, `fs` for font size, `text-center` and others for text alignment.

I'm thinking that to achieve my specific needs and ideas, I'm going to have to use a combination of Bootstrap and my own defined CSS. My idea for the flashcards is to have a flashcard class that has a animation defined for it that will flip the card and toggle the visibility of the corresponding side.

The `input` element has an attribute called `placeholder` where the string value that you give it will appear as placeholder text (which disappears when something is typed) in the input field, when the input type is `text`.

Like Tailwind, Bootstrap has some classes that can apply generally to everything, like `my-` for margins on the y-axis. Most of these classes are 'utility' classes, and can be found in that section of the docs.

## JS Array Assignment notes

The Array object has several interesting static functions associated with it. Here are some of the interesting ones.

| Function | Meaning                                                              | Example                       |
| -------- | -------------------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                                  | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                             | `x = a.pop()`                 |
| slice    | Return a sub-array                                                   | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                             | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop                     | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function                     | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                                    | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item            | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array                        | `a.map(i => i+i)`             |
| filter   | Run a function to remove items (items that return false are removed) | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                            | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                            | `a.some(i => i < 1)`          |

## Lecture Notes 10.8.24 - JavaScript Continued

- Generally always use the strict equality operator, `===`, not the loose one, `==`. Falsey and truthy values are only functional with the loose equality operator, but they do work with comparison operators.
- With a switch block, remember to use the `break` keyword to prevent the code from falling through to the next case.
- An anonymous function is one without a name in the function declaration. They can be called using a name if they are assigned to a variable, however.
- Unlike other languages, Js allow parameters to be unused and the function still called, that parameter will just be `undefined`.
- With arrow functions, a return nor curly braces are needed if the function is only one statement. If curly braces are present, a return is needed. Syntax is `arrowfunction = (param) => statement`. This is comparable to a lambda function in Python.
- A _closure_ is comparable to higher order functions. When a function is returned from another function, the returned function is called a closure. The closure has access to the variables in the outer function, even after the outer function has finished executing.
- There are `for of` loops which iterates through each value (the iterator needs to be instantiated) and `for in` loops which iterates through each key in an object.

## Lecture Notes 10.10.24 - JavaScript Continued

- `try` and `catch` blocks are used similarly to other languages: the code in the `try` block is tried, if an error is thrown, then the thrown error is "caught" in the `catch` block. The `finally` block is always executed.
- A **spread** operator, `...` is used to spread, or add, the elements of an array into another array as individual elements, not as a nested array.
- Here is the link to the class [Javascript Demo](https://htmlpreview.github.io/?https://github.com/webprogramming260/.github/blob/main/profile/javascript/introduction/jsDemo.html)
- Modern web application have very few pages. This is because rather than making lots of separate files, the DOM is manipulated using JavaScript. At some point, I want to try this, maybe during Christmas break. This weekend I'll make a branch for trying that.
- Remember that using the DOM, a new element is created using `document.createElement()` method. This only creates an instance of an element object, however, it isn't attached to the DOM. It's just free-floating right now. To attach it to the DOM, use the `appendChild()` method of the parent element.
- localStorage can be used to manually cache in case the database goes down.

## Lecture Notes 10.15.24 - JavaScript Promises, Async Await

- Browser rednering is single-threaded, so typical sequential execution can cause the browser to hang. This is where promises come in. They are used to handle asynchronous operations in JavaScript.

Promise
: an **object** that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
Asynchronous operating allows the program to work on other tasks while waiting for another part of the program to finish. It is like when I go and do another task while waiting for something in the oven to cook.

W3Schools talks about the idea of "producing code" and "consuming code". The producing code is the code that takes some time, and the consuming code must wait for the results of the consuming code.

Anatomy of a Promise:

`new Promise(executor)`
Where executor is a function to be executed by the constructor, which should take two functions as parameters, `resolve` and `reject`. The `resolve` function is used to return the result of the promise, and the `reject` function is used to return an error. When the `resolve` function is passed a primitive or object that can't have `then` called on it, it is instantly fulfilled.

**Promise Syntax:**

- A promise has 3 states: `pending` (initial state, currently running), `fulfilled` (completed successfully), and `rejected` (failed to complete).
- A promise also has 3 important methods: `then()`, `catch()`, and `finally()`. The `then()` method is used to handle the fulfilled state, the `catch()` method is used to handle the rejected state, and the `finally()` method is used to run code after the promise has been settled. Using this is referred to as the "promise chain" or "promise syntax". In this syntax, the code here in the promise chain is the consuming code.

**Async Await Syntax:**

- Another syntax for dealing with asynchronous operations is the `async` and `await` keywords. The `async` keyword is used to define an asynchronous function. An `async` function always returns a promise, and the value of the promise is the value that the `async` function returns. The `await` keyword is used to pause the execution of the prefixed function until the promise from the `async` function is settled.
- `await` should only be used on a top-level function, and not in a nested function. This is because `await` will pause the execution of the function until the promise is settled, and if the function is nested, then the parent function will also be paused. If a nested function needs the `await` keyword, then the parent function needs to be an `async` function.

> Figure out what the `resolve()` and `reject()` methods do.
> I found out that they are predefined in JavaScript. Basically `resolve()` is used to return the result of the promise, and `reject()` is used to return an error.

**Notes from kahoot:**

- The `i` at the end of the regex statement `/A|f/i` makes the regex case-insensitive.

## JS Promises and Async/Await assignment

- I learned the "producing code" and "consuming code" way of thinking about promises is useful for me. When I tried to put the next promise inside of a function called by the `.then()` method, it didn't work. It only did when I placed the promise function directly inside of the `.then()` method. I'm not 100% sure why this is, I'll likely learn later on. What I did learn is that Promises are objects that take in a function to produce something, and then with the promise syntax, the promise chain consumes the product of the producing code.

In doing these assignments, I decided to read up on callbacks, since that kept being mentioned. A callback in JS is a function that is passed to another function as an argument. In other words, it is like a higher-order function. In JavaScript, functions are executed in the order that they are called. Hence the name callback, because a function can be defined and passed as a parameter, but isn't called until the function that it is passed to is called, and it "calls back" to the callback function. **Remember** that when passing a function as an argument, don't put parenthesis.

When using async/await, remember that the `await` keyword can only be used inside of an `async` function. Thus, async is only needed when I want to (1) return a Promise, or (2) use the `await` keyword.

## JS Extra Credit notes

- Remember that most JS methods are camel case. length, toUpperCase, toLowerCase are all string methods.
- Date is an object type. Use `new Date()` to create a new instance.
- The method to get and the full year from a date object is `getFullYear()` and `setFullYear()`. The method for the month is `getMonth()`, but it is zero-indexed, so January is 0, February is 1, and so on. The method for the day is `getDate()`.
- All of the Math operations beyond the primative operators are in the `Math` library.
- The JS ternary operator is the same as that in C++, `condition ? <expression if true> : <expression if false>`.
- In a `switch` statement, the `default` keyword is what denotes a block that will execute if none of the cases are true.
- JS's version of `for in` loops is the `for (x of array)` loop.

## Lecture Notes 10.17.24 - Node.js

Modules
: A file that contains code that can be exported to other files. Like a package in Python or Java.

The `export` keyword in front of a function signfies that said function is to be accessible by .js files that are trying to import. The `import()` function is used to import a function, and the `from` keyword is used to specify the file that the function is being imported from.

To import all of the functions from a modules, use the `*` wildcard. The syntax is `import * from 'module'`. You might also be able to use `import 'module` to import the entire module, I'm not sure though.

Node.js is a runtime environment that allows you to run JavaScript on the server. It is built on the V8 JavaScript engine, which is the same engine that is used in the Chrome browser.

Some Node things to know:
**NVM** - Node version manager
**Node** - JavaScript runtime
**NPM** - Node package manager

Don't push the `node_modules` directory to GitHub, because of how large it can get.

The `require()` function is used to include a module, passing in the name of the module as a parameter.

Stuff from lecture to look up later (Web service functions):

- `require()`
- `createServer()`
- `writeHead()`
- `write()`
- `end()`
- `listen()`

## Lecture Notes 10.22.24 - React

React is a Web Development framework. Frameworks focus on the DRY principle, simplfying and bundling common patterns and components. They also strive to improve performance and increase device coverage.

The three most used web frameworks are **React**, **Angular**, and **Vue**.

**JSX** is Javascript and HTML combined. It is a syntax extension for JavaScript that allows you to write HTML in your JavaScript code. It stands for JavaScript XML.

**Babel** is a transpiler, that is part of the React package, and it is used to convert JSX into JavaScript.

React works quicker than native JavaScript by using a virtual DOM stored in memory. When a change is made to the DOM, React updates the virtual DOM, and then compares the virtual DOM to the actual DOM. If there are differences, React only updates the parts of the DOM that have changed, rather than re-rendering the entire DOM. This is referred to as Reactivity.

React is not a page-centric or file-centric system like native HTML, CSS, and JS development. Instead, it is component-centric.

A **component** is a function that returns an HTML element. They are isolated from other JS and they run independently. Components exist as either **functional** or **class** components. Functional components are just functions that return JSX, and class components are classes that extend the `React.Component` class. Class components are becomeing deprecated because of hooks, so avoid using them.

When using a component in JSX, the component is used like an self-closing HTML element, with the name of the component as the tag name.

**Props** are used to pass data to a component as HTML attributes. Props are passed to a component as attributes, and they are accessed in the component using the `props` object. They are essentially parameters for the behind the scenes function of a component.

Destructuring is a way to extract values from an object or an array and assign them to independent variables. This is done in JavaScript using the `{}` syntax.

A **hook** is a function that allows you to access and use the state of other React componenets.

`useState` is a hook that is used to add state to a functional component. It takes an initial value as an argument, and **it returns an array with two elements**: the current value of the state, and a function that can be used to update the state.

## React Assignment Notes

With Component props, I can access them a couple ways. I can list them as a parameter inside {braces}, or uses the props object and refer to the properties of `props`, using the name of the prop passed in the component call. For example: `<Demo who = "James">` could have the `who` prop accessed in the component as `props.who`, or as `{who}` if that was how it was passed in.

To do inline styling with React, use the `style` attribute in the component's return HTML. The value of the `style` attribute should be a JavaScript object with the CSS properties as keys and the values as values. The keys should be camelCase versions of the CSS properties.

3 main parts of React having reactivity is the `state`, `props` and `render()` method. Anytime a change is made to the state or props of a component, that component's `render()` method is called, and the component is re-rendered, making the change visible.

Another key to reactivity in React is making components return HTML with event listeners. Two that I used for the assignment were `onChange` and `onInput`. The latter is used for input elements, and the former is used for other elements. Something from the assignment that I didn't understand yet was the attributes used to get the value of the input element. What appeared in the code was `e.target.value`, and I'm thinking `e` was just the parameter used for the input data, but I'm not 100% sure, and I'll need to find out exactly what `.target.value` is.

## Lecture Notes 10.24.24 - React Continued (Router and Toolchain)

React routing is what allows the application to navigate between different "pages" without actually changing the URL or html file. The router finds the correct component to render based on the file path given, and then renders that component.

Some important components for this: `BrowserRouter`, `Route`, `Routes`,`NavLink`, and others.

The toolchain used to push a React app into production includes Babel (transpiling JSX, polyfilling) and Minify JS for compressing the JS files. An application called Vite is used to bundle the files, and then the application is deployed to a server.

An important difference between JS and JSX syntax is that in JSX, the `class` attribute is replaced with `className`. This is because `class` is a reserved keyword in JavaScript.

Things to look for in router assignment: relationship between `NavLink` component's `to` attribute and the `Route` component's `path` attribute.

## React Router Reading/Assignment Notes

[React Reading](https://blog.webdevsimplified.com/2022-07/react-router/)

Install React Router using npm, either the DOM version or the Native version, for web apps and mobile apps respectively.
There are 3 things that need to be done to use React Router:

1. Set up the React Router
2. Define the routes
3. Handle navigation

Here's a bit more about each step:

1. Setting up the router is very easy. Just import the `BrowserRouter` component from the `react-router-dom` package, and then wrap my entire application in the `BrowserRouter` component. Following the standard nomenclature, This would look like wrapping my `<App />` component in the `<BrowserRouter>` component.

2. Defining the routes is also pretty easy. Import the `Route` and `Routes` components from the `react-router-dom` package. Each individual `Route` component has 2 essential props: `path` and `element`. The `path` prop is the URL/file path to element in the `element` prop, and the `element` prop is a component to be rendered.

3. Handling navigation is done with the `Link` component. It functions like an anchor element, and the path to the component to be rendered is passed in the `to` prop, not in an `href` attribute. Links are used outside of the `Routes` component, because only the `Routes` components get re-rendered when the URL changes, and we generally want nav bars to be static across pages. Routes are navigated by matching the `to` prop of the `Link` component to the `path` prop of the `Route` component.

One of the simplest advanced features is dynamic routing. If I want to render a page/component for individual products, to keep the code DRY and avoid hardcoding, I can use a dynamic route using a colon followed by name for the dynamic parameter.

Route priority is determined by rules similar to those that dictate CSS specificity. The more specific the path, and the less dynamic parameters, the higher the priority. Also the `*` character can be used as a wildcard to match any path that hasn't been matched by a more specific path.

The big thing to remember is that, as long as I put the path name in the `path` prop of the `Route` component, and then the same path in the `to` prop of the `Link` component, the router will handle the navigation.

## React Porting Notes

Here are some notes from my studying React on W3 and porting my startup app to React:

- The command to create a React app is `npx create-react-app my-app`. The command to start a React app from the root directory is `npm start`.
- React uses `root` objects, using the `createRoot()` method. `root` objects have a method called `render()` that takes a JSX element as an argument.
- Though parameters aren't required in arrow functions in ES6, the () are still required, so `() => {}` is the correct syntax, regardless of the presence of parameters.
- When destructuring from an array, use `[]` with a comma for each element to skip. To destructure the 3rd element, use `[, , varName]`. The name put in the brackets is the name of the variable that the element will be assigned to.
- The spread operator `...` copies all or part of an array or object into a new array or object. It is commonly used with destructuring.
- Remember, the ternary in JS is the same as in C++: `condition ? trueValue : falseValue`. This differs from Python, where the ternary is
  `value if condition else otherValue`.
- JSX syntax includes replacing where parenthesis would be used in JS with curly braces `{}`. As well as when variables are referenced.
- React events are written in camelCase, unlike JS. And functions passed to event handlers are passed inside of curly braces `{}`.
- React keeps track of list items with a `key` attribute. This is used to keep track of which items have changed, and which items are new.
- Something that I ran into often as I was porting was forgetting to import things into `.jsx` files. I'll need to get into the habit of doing that with every `.jsx` file I make and work in.

## React Startup Notes

- Describe using Context API to manage state between App, Study, and Flashcard components.
- One of my biggeset takeaways from this stage of the startup was that it took much much longer than I anticipated or gave it time for. I think experiencing this will serve as a good learning step for me. In the future I'll devote a lot more time to the design and planning to also get a feel for how long a project like this will take.
- One challenge that I encountered was comparing object equality. I found it easier to compare object indeces in an array.
- Remember that data is stored in localStorage as JSON, so it needs to be parsed when it is retrieved, and stringified when it is stored.
- State is real-time data _only available in that component_. Props are always passed _from parent component to child_.
- `indexOf()` returns -1 when the argument can't be found in the array.
- Potential rework would include rendering flashcard, quiz, and respective edit components in the study component, rather than separate URLs.

## Spooky Lecture Notes 10.31.24 - Fetch, Web Mechanics

- A router is a special kind of computer, so routers connecting to routers is how the internet works. The internet is a network of networks.
- A modem is a device that modulates and demodulates signals. It is used to connect a computer to the internet using the infrastructure of telephone lines.

- Fetch is a function that is used to make network (HTTP) requests in JavaScript. It is used to get data from a server, and it returns a _promise_ that resolves to the response from the server. The `fetch` function takes a URL as an argument, and it returns a promise that resolves to the response from the server. The response object has a `json()` method that is used to parse the response as JSON. The `json()` method also returns a promise that resolves to the parsed JSON data. Because of the promise returned, the `fetch` function is asynchronous, and its results are used with the `then()` method to handle the response from the server. The `await` method can also be used. The default method for a fetch call is `GET` but `POST` can be used by using the optional argument.

## Vite Assignment Notes

Vite is a toolchain for web frameworks that bundles code quickly, and allows for features like minification, JSX, polyfilling, and others. It is used to bundle the code for a React app, and then deploy it to a server. This is implemented for my startup in the deployment script. Vite is installed using npm, and the commands `npm run dev` and `npm run build` are used to make development and production builds, respectively.

## Lecture Notes 11.5.24 - Web Services, Express, CORS/SOP

After some more reading, the class notes for Express and middleware were the most helpful for me. [Here](../notes/cs260.github/profile/webServices/express/express.md) is the link to the notes.

Using `require('http')` returns an object that can be assigned, with methods. The major one is `createServer()`, which takes a callback function as an argument. The callback function takes two arguments, `req` and `res`, which are the request and response objects, respectively. The `req` object contains information about the request, and the `res` object is used to send a response to the client. The `createServer()` method then returns a server object, which has a `listen()` method that is used to start the server listening on a specific port, by passing in the port number as an int, and an optional callback function.

Endpoint
: A valid destination for an HTTP Request. A URL path that calls a function when visited. This is code on the server that can be triggered/interacted with via HTTP requests. When an endpoint cannot be found is when a 404 error occurs.

Express
: A Node.js module used for manipulating and routing HTTP requests, generating HTTP responses, and using middleware to increase functionality.

Express works similarly to managing HTTP with Node, but rather than creating an `http` object, an `express` object is created, which has `get()` and `listen()` methods.

**Middleware stack:**
There is also a `use()` method, which attempts to use the callback function that is passed in the parameters (often as an arrow function). `app.use([path], callback (req, res, next) => {})` is the basic anatomy of using a middleware function. The `path` argument is optional, and defines the path of the endpoint to trigger the callback on.
`middleware` refers to software/programs that execute in between the request and response of a HTTP interaction. Functionalities are added in Express middleware using the `next()` function, which is used to pass control to the next middleware function on the stack. When no more middleware functions are left, the response is sent to the client.

Express allows variables to be passed in the URL, and these variables are accessed using the `req.params` object. The `req.params` object is an object that contains the values of the variables passed in the URL as attributes. They are passed in the URL as `/:variableName`.

`express.router()` is used to create a router object, which is used to create modular, mountable route handlers, more just a syntatic sugar for organizing routes.

## Lecture Notes 11.12.24 - Web Services: Endpoint Design, Debugging

PM2 is a process manager that uses daemons to keep node services running. Terminal commands can be used to do various things related to PM2 on a server where it is installed. For example, `pm2 ls` lists the services running via pm2. `pm2 start` starts a service, and `pm2 stop` stops a service. `pm2 delete` deletes a service, and `pm2 restart` restarts a service. `pm2 logs` shows the logs of a service, and `pm2 monit` shows the monitoring of a service.

Dr. Ventura reminded us that having a big picture mental model of the system/project and how it should work and what architecture it should have, is super important. I can be a bit better at that.

To debug the backend code, it can be a bit trickier, since it technically runs on a computer in Virginia. Luckily, Vite allows for debugging by proxying into the port that the backend is running on. This is done using a `vite.config.js` file, where this port is specified. This file is placed in the root directory of the project, and frontend code can be stepped through in the browser dev tools as normal, and the backend code can be stepped through in VSCode.

A good way to think of a closure is when a function is returns and all of its state is returned and accessible as well.

Cross Site Request Forgery (CSRF) is a type of attack that tricks the user into performing an action that gives attackers access to their information, by using a fake website to send a fetch request to the real website, and access personal data.

Cross Origin Resource Sharing (CORS) is a security feature that restricts what resources can be accessed by a web page from another domain. So, in this example, the Wells Fargo would only allow requests with an origin of their own domain.

Single Origin Policy (SOP) is a security feature that restricts what resources can be accessed by a web page from another domain.

_Remember:_ `fetch` statements are used on the front end to make requests to the endpoints specified on the backend, or a third-party.

## Lecture Notes 11.14.24 - Web Authentication

The best notes are in the class readings. I'll link to the files [here](../notes/cs260.github/profile/webServices/dataServices/dataServices.md).

For accessing data that is user-specific, Dr. Ventura recommended creating a collection for each username, and only access the collection tied to that username.

Rainbow tables are a type of attack that uses precomputed hash values for common passwords to crack hashed passwords, and then map those hash values to the original passwords to find matches.

## Startup Service Notes

My understanding of endpoints is you define a path/URL that triggers a certain function when visited. Then, on certain components on the frontend, when I want to access that data, I use a fetch statement that is connected to that component to get that data.

Design overview:

**Objectives:**

- Create user objects and store them in memory of the backend service.
- Create a login/create user endpoint.
- Store the study objects of each user in the backend service.
- Create an endpoint for getting flashcard suggestions.

**Breaking down the objectives:**

1. Create user objects and store them in memory of the backend service.
   - Create a User class with a constructor that takes a username, password, and study materials as arguments.
   - Create a set of users to store the user objects in memory and disallow duplicates.
   - Create methods for adding users and transferring data from the backend to the front end. Move data storage from local storage to backend.
2. Create a login/create user endpoint.

   - Create Login and Authentication components, add those routes to my frontend.
   - Create a login endpoint.
   - For both of these, copy the Simon code, since Dr. Ventura encouraged us to do so. Make sure I read and understand all of that code as I do so, however
3. Store the study objects of each user in the backend service.
   - Create an endpoint for updating the User object in the Users set with the study materials.
   - Create an endpoint for getting the study materials of a user as they are updated on the frontend.
4. Create an endpoint for getting flashcard suggestions.
    - Create an endpoint for getting flashcard suggestions when using the Help button on the front end.

I'm going to start with the 2nd objective, since it seems to be a bit of a prerequisite, and should be the easiest.

**Notes**
I got a little mixed up while trying to connect the backend to the front end, and using the vite config file. After having Micahel help me, I got a few things cleared up mentally.

- The Vite server simulates the front end, serving all of that up.
- The port that the Vite server runs on and the backend port need to be different.
- The port listed in the `proxy` object in `vite.config.js` for a particular endpoint is the port the backend is running on.
- Postman is a useful tool for testing endpoints.
- Remember that, as far as my understanding, a node package needs to be installed in the same directory as the file it is being used in.
- Because I needed a consistent data structure for Decks between the front and backend, I got to tackle the task of sharing the classes between the front and backend. I made the Card and Deck classes into separate `.js` files, and then put them in a `shared` directory in the root of the project.
- Continuing from the last point, I found some trouble with importing the classes into both the frontend `.jsx` files, and the backend `.js` node files. I learned that the `import` statement is used in the frontend, because `.jsx` files use ES6 modules, while the node.js backend files use the CommonJS syntax for including modules, which is done with the `require()` function. So, to make this work for the full stack, I changed the `type` of the node app to use ES6 modules. I did this by adding the line `"type": "module"` to the `package.json` file. This allowed me to use the `import` statement in the backend files as well. However, then I had to change and update the `require()` statements for the other node modules I was using like `express` and `uuid`. I was able to do this with identical functionality by doing `import express from 'express'` and `import { v4 as uuidv4 } from 'uuid'`.
- **Important note:** 3rd party API calls don't need endpoints defined in my backend, because they've been defined in the backend of the 3rd party. I simply make the client-side call on my frontend code.
- Some important Object methods that I learned about are `Object.keys()` and `Object.entries`. `Object.keys()` returns an array of all of the keys than an object contains. `Object.entries()` returns an array of all of the values in an object, with its index in the returned array as the first value of said array.
- I ran into a challenge with `Object.entries()` where I thought just the entry was in the array, I didn't know it was an array of arrays with the array index and the entry. So I just had to alter the code slightly to access that data correctly.
- `useEffect` is the mechanism in React to perform external API calls, because function components cannot by asynchronous. It takes 2 parameters, a function to run, and an array of dependencies. The function runs when the dependencies change, after the DOM updates with those changes. The passed in function returns a cleanup function, which is used to clean up the effect before the next DOM update. Understanding this hook and using it properly was extremely useful.
- After taking a look, I think I am going to have to move around my shared Card and Deck .js files, or experiment with editing the deployment shell script so that the build version can access those correctly. Just for future reference.
- Dylan helped me find the error that I had in accessing the Object passed from the backend to the front in the HTTP response. I was calling `res.json({ "userObject":user})`, which was returning a nested object, with an attribute of `userObject` that contained the object I had stored in `user`. So by instead just using `res.json(user)`, I was able to access the object directly in the front end.
- The class repo notes on Troubleshooting 502 errors was really useful. One of the most helpful things was remembering that I can run the backend script on the server itself, and see what errors are being thrown, `node index.js`.

**CURRENT TODOS**:

- Finish data structure implementation for full stack.
- Get correct data handling for exisitng pages (flashcard, flashcard edit)

## Lecture Notes 11.19.24 & Assignment Notes - Data Services

Main implementations for Startup Login:

- Cookies
- Store decks in DB now, can keep front end methods the same.

Notes:

- To safely establish a database connection, import `MongoDB` library in to your backend file. Then put your database credentials in a separate .json file, _**and make sure that that .json file is in your .gitignore file, DO NOT commit or push those credentials**_. Then call the MongoDB method to establish a connection, using the info from the .json file.

MongoDB is built around using JSON. The data are stored as JSON objects, but also the queries to access the data are in a JavaScript-esque style.

Each "table" is called a collection, and each individual entry in a collection is called a document. The object model of Mongo starts with the `MongoClient` object, constructed using a url that connections to the MongoDB server, which contains the username, password, and host name, such as this: `mongodb+srv://${userName}:${password}@${hostname}`

A `db` object is created from the `MongoClient` object, and then the `db` object, which is used to create and access `collection` objects. If a database or collection does not exist when called, then MongoDB will create it.

The main query method is `.find()`. This method takes an object as an argument, which is used to filter the results of the query. An example for a collection of rental houses would be `collection.find({bedrooms: { $gte: 3}})`, which would return all of the documents of the collection that have 3 or more bedrooms. `.find()` is asynchronous, and can take a query object, and an options object as arguments (the options object is optional, for configuring the number of documents returned, sort order, etc).

The method for inserting a document into a collection is `.insertOne()`. This method takes an object as an argument, which is the document to be inserted into the collection. The method returns a promise that resolves to the result of the insertion.

>Remember that to debug the backend, set breakpoints, and then just run them in the terminal with `node <filename>`.

## Lecture Notes 11.21.24 - Web Sockets

The [reading](../notes/cs260.github/profile/webServices/webSocket/webSocket.md) for this was pretty helpful. WebSocket connections move from client-server to peer-peer communication. The main difference in between these two is that client-server can only ever be initiated by the client, while peer-peer can have communication (after the initial) initiated by either end.

On the backend, import the `ws` node module, and create and instance of the `WebSocketServer` class. The `on` method in WebSocketServer objects and other WebSocket objects, sets up a sort of event listener. So a WebSocketServer called `wss` with the method `wss.on('connection', (ws) => {console.log("Hello webSocket")})` Will log out that string on a client connection to the server. The `.on('message')` method will execute the passed in callback function when a client message is received.

On the frontend, WebSocket capacities are built in, so you can simply create an instance of the existing WebSocket class. The frontend WebSocket object also has a type of event listeners, with slightly different syntax (`.onmessage()` instead of `.on('message')`).

>Remember that the `...` spread operator when used on Objects or Arrays "destructures" them, separating them into their individual elements.

The `WebSocket.close()` method closes the connection.
When WebSocket capacities are only wanted for some of the data traffic, a non-webSocket server can be made, as well as an instance of WebSocketServer, with the property `noServer` set to true. Then connections can be specified to be upgraded or not, and the backend can have event listeners for those upgrades.

## Startup Login Notes

**Design Outline**:
To start, I'm going to outline what needs to be implemented using the DB and roughly how to do it.
Because all of the Class instantiation happens on the front end, I don't need to worry about that on the backend at all. The main thing will be identifying which endpoints need to access data, and how to get the data from the DB for those end points.

Data-needing endpoints:

- Login endpoint
- Create user endpoint
- Logout endpoint

These will follow the same general structure as the Simon example, but slightly different because of the data structure.

**Notes/Insights from Implementation**:

- Ran into more fun stuff with Common JS/ES6 modules. I think that the there is no way to use a mix of the two, only ever one or other other. I realized that because the file structure that led to the Card and Deck classes are odd, I just defined the classes again in the backend file, and because that was the main reason I was using ES6 on the backend, I found it easier to just use CommonJS for the backend. I also learned that because ES6 modules and Common JS use different methods of exporting, that a class or method that is being exported can only be exported via one of those two methods, not both.
- I had to understand `cookie-parser` a bit better for this one too. I learned that when the express app is using `cookie-parser` the `req` object has a property called `cookies` that is an object that contains all of the cookies that are stored in the browser for the site. The cookie-parser is what parses and populates this property of the request object.
- Remember that `bcrypt.hash()` requires the string to hash as the first argument, and the salt rounds as the second argument.
- The commond `lsof` shows what ports are being used on MacOS. `lsof -i :<port>` shows what process is using a specific port.
- I was running into a problem of trying to debug the backend index.js file, but it kept saying that the port was in use. I didn't realize that because the bash script runs `pm2 restart startup`, that the index.js file was already running using pm2. So I had to stop the pm2 process, and then run the index.js file in the terminal to debug it.
- I also was reminded to check the discord more often! That honestly should come earlier in the hierarchy before googling, because the info an questions in the Discord are specific to the class' context. I was able to find that other people had already had the exact same problem as me, with the server not being able to access the Database despite the IP address being whitelisted, and the fix was to change the MongoDB version to an earlier one.

## Lecture Notes 12.3.24 - Web Socket Simon

There are 2 ways to think of peer-to-peer communication: First, the server and the client being direct "peers" where their communication is bidirectional. Second, different clients are "peers" to each other via their common connection to the server. A client doesn't communicate directly to another client, but it communicates a message directed for a client to the server, and the server sends that message to the receiving client, with the server initiating the communication.

In a `on.('connection', )` event listener, the callback function takes a `ws` object as an argument. This object is a WebSocket connection object that is created by a client connecting to the server. So, the WebSocket object is instantiated at connection, not by the callback function.

If no dependencies are passed into a `useEffect()` hook, then all of the state variables of the component are its dependencies. To set no dependencies, pass an empty array `[]` as the second argument of the `useEffect()` hook.

The WebSocket deliverable will deal alot with event handlers.

On a different note, a popular platform for testing web apps on different devices is called BrowserStack. There is also UI and Endpoint testing, check the class readings for useful resources there.

## Lecture Notes 12.5.24 - Security

A good place to see notices about recent data breaches is on Tech.co, [here](https://tech.co/news/data-breaches-updated-list).

Security is a massive concern that should always be considered. Some major types of security threats are:

- Injection attack: When an attacker sends malicious data as part of a query to a server, and the server executes the query with the malicious data.
- Cross-Site Scripting (XSS): When an attacker sends malicious scripts to a server, and the server executes the scripts.
- Social Engineering: When an attacker tricks a user into revealing sensitive information.
- Denial of Service (DoS): When an attacker sends a large number of requests to a server, overwhelming it and causing it to crash.

The "Line of Death"
Don't unconditionally trust anything below the URL bar, because it can be faked. The URL itself is the most trustworthy source.

OWASP, the Open Web Application Security Project, is a non-profit organization that provides resources for web application security. They have a list of the top 10 security risks for web applications, which is a good resource to check out, [here](https://owasp.org/www-project-top-ten/).

Juice Shop is a web application developed by OWASP that is intentionally insecure, and is used to teach developers about web application security.

## Startup Web Socket Notes

- One way to get some useful data like protocol, port #, and hostname is to use the `location` object in the browser. It is accessed as a proptery of the `window` object, so `window.location` will return an object with all of the data about the current URL. The location object has properties like `protocol`, `port`, and `hostname` that can be used to get the data needed to connect to a WebSocket.

## Demo day

Here are ideas and insights that I got from people's demos:

- The deck of cards workout app was a really cool idea.
- Abe said that API ninja is what he used to get the recipie data for his app.

URLs to keep:

- <https://startup.mymovieknight.com/>
- <https://startup.subak.click/>
- <https://startup.deckofdeath.click/>
- <https://startup.homeworkhub.click/>

Test Review:

- Port 80 is for HTTP, Port 443 is for HTTPS.
- Language is not a standard HTTP header.
- Cookies allow for the server to store data on the client's machine.
