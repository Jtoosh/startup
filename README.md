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

## HTML Deliverable

Overviews of the HTML pages:

- index.html: home page
- profile.html: user profile page
- quizMenu.html: page for selecting and creating quizzes
- quiz.html: template page for taking quizzes
- quizEdit.html: page for editing quizzes
- flashcardsMenu.html: page for selecting and creating flashcards
- flashcards.html: template page for viewing flashcards
- flashcardsEdit.html: page for editing flashcards
- login.html: login page
- about.html: about page