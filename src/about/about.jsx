import React from "react";
import "./about.css";

export function About() {
  return  <main>
  <div>
      <h1 className="text-center">About Mnemonic Study</h1>
  </div>
  <div >
      <img  className="banner"  src="../../inspirational.jpg" width = "700" alt="inspirational image placeholder"/>
      <p className="lead text-center">We believe that study is meant to go deeper than the surface level.</p>

      <p className="container-fluid">Mnemonic Study is a different kind of flashcard and study platform. Built around the psycholgical concepts of semantic encoding and mnemonics, 
         Mnemonic Study will help you move your studying beyond rote memorization and hard-coding of simple bits of information. We help you train your brain
         to remember what makes a piece of information meaningful, and what relationships it has to other pieces of information.  
      </p>
      <p className="container-fluid">
          You'll quickly find that using Mnemonic Study as part of your study toolkit isn't quick and easy, it may actually take longer. And that's exactly the point.
          Using Mnemonic Study, you may not cover as much content in the same amount of time, but what you do cover, will stick.
          Take a look down below to see how it works:
      </p>
  </div>

  <div className="container-fluid">
      <h2>The Details</h2>
      <p>
          First, a couple of definitions. <em>Semantic encoding</em> is a way to process new information by linking it to existing knowledge and experiences, and forming mental relationships between information.
          This differs from other methods of encoding information that are more shallow, such as just paying attention to how something looks or sounds. Jason Hreha describes it this way: 
          <blockquote className="blockquote">"It is a type of deep processing that focuses on the meaning of the information rather than its sensory or structural characteristics...Research has shown that semantic 
          encoding is more effective in cretaeing leasting memories compared to other forms of encoding, such as visual or acoustic encoding, which focus on the superficial characteristics of the information."</blockquote> 
          <figcaption className="blockquote-footer">(Semantic Encoding - The Behavioral Scientist)</figcaption>
      
          Mnemonics are some type of device, linguistic, digital, literary, or otherwise, that aids memory. Any catchy acronym that helps someone remember the meaning of
          some information, or some visual cue that helps memory, is a mnemonic.
      </p>
      <p>
          With this in mind, each flashcard that you make has a field to put the name of a term or piece of information you want to remember. The other side then contains two
          required fields: the information, <strong>and</strong> a mnemonic device or something that aids semantic encoding. Cards can be made with just the mnemonic/semantic
          and no definition, but not without the mnemonic. If you need ideas, Mnemonic Study uses the powerful Datamuse API to provide a multitude of similar meaning words to help you find synonyms and mnemonic devices.
      </p>
      <p>
          Quizzes will work similarly. After answering a question, you'll need to also give a mnemonic or semantic that you used to remember the answer. If you don't have one,
          we can provide you with a few tips.
      </p>
      <p>
          Requiring these mnemonics and semantic encoding may cause your studying to take longer, but, in a way, that's what we intend. Studying in this way may demand more in each repetition,
          but each repetition will be worth more, because you'll be doing the mental work that's proven to strengthen your memory. So it may be less reps, but your mind is 
          pushing more weight this way.
      </p>
  </div>

  <div className="container-fluid my-2">
      <p>Get in touch:</p>
      <a  className= "btn btn-primary" href="https://github.com/Jtoosh">Follow me on GitHub</a>
      <a className= " btn btn-primary "href="mailto:james.teuscher@outlook.com">Email</a>
  </div>
</main>;
}
