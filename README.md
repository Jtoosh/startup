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

### Features: HTML

- The quiz Template and Edit pages, and flashcard Template and Edit pages will provide a space for users to create quizzes and flashcards and including their semantic encoding methods. These were implemented using `input` elements that had their `required` attribute set to true.
- The quizEdit.html page is where the support for multiple choice and short answer is found. This was implemented using `input` elements with `type="radio"` and `type="text"` for multiple choice and short answer, respectively.
- Sharing quizzes and flashcards is done through the flashcardTemplate.html and quizTemplate.html pages, where a `button` element is placeholding for when that functionality is fully implemented. For viewing quiz scores and other people's study stats using WebSocket data, that will be displayed on the study.html page.
- Open-source APIs are given placeholder locations in quizEdit.html and flashcardsEdit.html, where a button is placed that will eventually call an API to give users ideas for quiz questions and flashcard terms.

### Technologies: HTML

- HTML was used to create the full structure of the page. It will however, be open to adjustments as implementation continues and understanding of the avaliable technologies grows.
- CSS was not yet implemented.
- JavaScript was not yet implemented.
- React was not yet implemented.
- Web service APIs were not yet implemented, but given placeholder buttons on the quizEdit.html and flashcardsEdit.html pages.
- Authentication was not yet implemented, but was given placeholder Login and Logout buttons in the `header` element of each page.
- Database usage was not yet implemented, but was given a placeholder div element in the account.html page.
- WebSocket data was not yet implemented, but was given placeholder div element in the study.html page.

## CSS Deliverable

Overview of CSS implementation:

CSS Styling was added to this application primarily using the Bootstrap 5 external framework. A custom CSS file was also used for some more specific styling to suit the needs of the application. The [Bootstrap Docs](https://getbootstrap.com/docs/5.2/getting-started/introduction/) and [W3Schools](https://www.w3schools.com/bootstrap5/index.php) docs were referenced extenstively, so I have linked to them here.

Due to the current time restraints of this project, styling was not taken to an extreme or fully drawn out level, but enough to give an appealing and professional look. I will now elaborate on how the CSS implementation helps achieve the features and technology usages outlined above.

### Features: CSS

- The fields for Semantic encoding on quiz answers and on editing fields were given `defaultValue` attributes of "Semantic Device" to indicate to the user the need for that information. CSS transitions were also used to flip flashcards, and make the backside "hidden". This functionality is not fully complete for interaction, but that will be handled when JavaScript is introduced to the application. Perplexity AI was consulted in the creation of the flip animation, and [here](https://www.perplexity.ai/search/what-would-be-the-most-practic-.PPFSQXRS_C3lgHIok9khw) is a link to the prompt used and information given.
- Quizzes were styled for both multiple choice and short answer, without proper behavior and exclusivity of one question type or the other.
- Sharing buttons were styled, and the areas where WebSocket live data and other user's study stats will be displayed were styled as well, with placeholder values inside them.
- Buttons that will interact with the open-source APIs were styled tas desired.

### Technologies: CSS

- HTML previously  used to create the full structure of the page. Some minor adjustments were made, such as wrapping some `button` elements in `form` elements, or wrapping elements in `div` elements to make them easier to style.
- CSS was fully implemented according to assignment specifications, subject to minor changes as the application develops.
- JavaScript was not yet implemented.
- React was not yet implemented.
- Web service APIs were not yet implemented, but placeholders were styled..
- Authentication was not yet implemented, but placeholer login and logout buttons were styled.
- Database usage was not yet implemented, but a placeholder `table` element was styled.
- WebSocket data was not yet implemented, but the placeholder `table` created was styled.

## React Deliverable

Overview of React implementation:

React was implemented by porting the entire application to a React app, which is bundled, built, and deployed using Vite. Separate view components were made for each of the "Home", "Study", "Account", and "About" tabs. Within the "Study" tab is where most of the additional files are, since that is where the majority of the behavior is. This included a component created for the Flashcard items, and for editing the Flashcards. The Quiz components still need to be implemented, as well as the components for updating account information. The react hook `useState` is used in the flashcard components to track which deck of flashcards is being studied or edited, and is updated when that is changed. A React router is used in the App component to route between different components.

To be frank, this deliverable is not implemented according to the feature specifications outlined above. The time restrains of this assignment along with personal shortcoming contributed to this, so a significant portion of the features remain unimplemented. I am committed to spending time on this project after this course however, to fully implement the features and technologies outlined above. In the mean time, I will outline how what is currently presented does meet the specifications.

### Features: React

- The ability to study using flashcards was fully implemented with this deliverable. Flashcard decks can be created, with any number of flashcards, and existing decks can be edited. The semantic encoding fields are present and functional, the card is able to flip upon clicking a button, whereas before the card flipped on mouse hover, making actually entering text in the front-side fields impossible. Edits will properly appear on a saved flashcard, and cards can be added to a deck without problem. Logic is present to allow the program to work regardless of the number of flashcards in a deck, the number of decks in local storage, and other cases.

### Technologies: React

- HTML previously was used to create the full structure of the page. The HTML files were deleted, and the rendered HTML was moved to be included in the return statements of the corresponding React components. Some adjustments were made, such as additional buttons, as development needs arose.
- CSS was fully implemented according to assignment specifications, adjusted slightly to work with React components. Stylesheets for indiviual components were created as necessary
- JavaScript was implmented via React.
- React was about 50% implemented, with full functionality for flashcards, with quizzes and account editing to be implemented soon.
- Web service APIs were not yet implemented, but placeholders were styled.
- Authentication was not yet implemented, but placeholer login and logout buttons were styled.
- Database usage was not yet implemented, but a placeholder `table` element was styled.
- WebSocket data was not yet implemented, but the placeholder `table` created was styled.
