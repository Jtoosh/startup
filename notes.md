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
  from {background-color: red;}
  to {background-color: yellow;}
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

>The following is courtesy of Copilot lol.

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

