# startup

---

## Specifications

Here are the specifications for my startup web application, which will be a quiz design and studying application. These specs include a short pitch, overview of features, and a description of how certain technologies will be used.

### Elevator Pitch

My application will help you study in a way that emphasizes semantic encoding, allowing you to really remember not just pieces of information, but why that information is important. It will also provide methods for collaborative study. This application will also provide tools for instructors to design smarter methods of studying for their students.

### Features

- The application will emphasize semantic encoding, which is the process of encoding information in a way that emphasizes the meaning of the information, rather than just the information itself. This will be done by requiring users to enter not simply correct answers, but also the method through which they remembered the information, and what meaning the information holds.
- The application will support multiple-choice and short answer quizzes, as well as flashcards.
- The application will support collaborative study, allowing users to share quizzes and flashcards with each other, and to view quiz scores.
- Open-source APIs will be used to provide information for various quizzes and flashcards, expanding the application's funcitonality.

### Technologies

- HTML: This will be used to structure the different pages of the application, such as the flashcards, the quizzes, and the profile and home pages. HTML `input` elements will be used to receive andswers and for quiz design.
- CSS: This will be used to style the pages, creating a consistent theme, and it will also be used for animations and transitions. CSS will also be used to create responsiveness for mobile devices and various monitor sizes.
- JavaScript: This will handle the input from the HTML `input` elements, evalutate quiz logic and assign scores, and handle the sharing of quizzes and flashcards.
- React: This will be used to create reusable components, such as flashcards, quiz questions, and others. React will also be used to manage the state of the application, such as the user's score, the user's profile information, and the user's quizzes and flashcards.
- Web service APIs: As stated before, various available APIs will be used to provide added functionality to the application, such as quiz questions or flashcards on certain topics, and other functions
- Authentication: This will be used to secure data and user information, and to allow users to log in and out of the application and have distinct profiles.
- Database usage: This will be used to store created quizzes and flashcards, as well as prior quiz scores and user information.
- WebSocket data: This will be used for the collaborative study feature, allowing users to share quizzes and flashcards with each other in real time, and view quiz scores and status (online, in quiz, offline, etc.) of other users.

### Outline Sketch

![Outline sketch](startupSketch.png)

## HTML Deliverable

Overviews of the HTML pages needed:

- index.html: home page
- account.html: user profile page
- study.html: page for selecting and quizzes and flashcards
- quizTemplate.html: template page for taking specific quizzes
- quizEdit.html: page for editing quizzes
- flashcardTemplate.html: template page for viewing a certain flashcard deck
- flashcardsEdit.html: page for editing flashcards
- about.html: about page

Here, I will describe how this delivarable helps achieve the specifications outlined above.

### Features:HTML

- The quiz Template and Edit pages, and flashcard Template and Edit pages will provide a space for users to create quizzes and flashcards and including their semantic encoding methods. These were implemented using `input` elements that had their `required` attribute set to true.
- The quizEdit.html page is where the support for multiple choice and short answer is found. This was implemented using `input` elements with `type="radio"` and `type="text"` for multiple choice and short answer, respectively.
- Sharing quizzes and flashcards is done through the flashcardTemplate.html and quizTemplate.html pages, where a `button` element is placeholding for when that functionality is fully implemented. For viewing quiz scores and other people's study stats using WebSocket data, that will be displayed on the study.html page.
- Open-source APIs are given placeholder locations in quizEdit.html and flashcardsEdit.html, where a button is placed that will eventually call an API to give users ideas for quiz questions and flashcard terms.

### Technologies:HTML

- HTML was used to create the full structure of the page. It will however, be open to adjustments as implementation continues and understanding of the avaliable technologies grows.
- CSS was not yet implemented.
- JavaScript was not yet implemented.
- React was not yet implemented.
- Web service APIs were not yet implemented, but given placeholder buttons on the quizEdit.html and flashcardsEdit.html pages.
- Authentication was not yet implemented, but was given placeholder Login and Logout buttons in the `header` element of each page.
- Database usage was not yet implemented, but was given a placeholder div element in the account.html page.
- WebSocket data was not yet implemented, but was given placeholder div element in the study.html page.