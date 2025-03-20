class customEasteregg extends HTMLElement {
  constructor() {
    super();
    this.consoleStyles = 'color:lime;background:black; font-size: 1.25em; padding: .25em;';
    this.questions = [
      {
        question: "What does WCAG stand for?",
        choices: ["1. Web Content Accessibility Guidelines", "2. World Content Accessibility Guidelines", "3. Web Content Accessibility Group"],
        answer: 1
      },
      {
        question: "What is the purpose of alt text for images?",
        choices: ["1. To provide a text alternative for screen readers", "2. To provide a caption for images", "3. To improve SEO"],
        answer: 1
      },
      {
        question: "What does ARIA stand for?",
        choices: ["1. Accessible Rich Internet Applications", "2. Accessible Rich Internet Accessibility", "3. Accessible Rich Internet Alternatives"],
        answer: 1
      },
      {
        question: "What is the keyboard shortcut for navigating to the next focusable element?",
        choices: ["1. Tab", "2. Shift", "3. Enter"],
        answer: 1
      },
      {
        question: "What is the purpose of semantic HTML?",
        choices: ["1. To improve SEO", "2. To provide meaning and structure to web content", "3. To make the website look better"],
        answer: 2
      },
      {
        question: "When was version 1.0 of the Web Content Accessibility Guidelines (WCAG) released?",
        choices: ["1. 1995", "2. 2008", "3. 1999", "4. 2003"],
        answer: 3
      },
      {
        question: "According to World Health Organization, how many people live with a disability?",
        choices: ["1. 15%", "2. 25%","3. 5%"],
        answer: 2
      },
      {
        question: "Links should be used for navigating, and buttons should be used for in page actions?",
        choices: ["1. True", "2. False"],
        answer: 1
      },
      {
        question: "For regular sized text (16px), what should the contrast ratio be between the text color and the background?",
        choices: ["1. 4.5:1", "2. 3:1", "3. 5:1"],
        answer: 1
      },
      {
        question: "Which WCAG principle ensures that content is usable through multiple input methods beyond just a keyboard and mouse?",
        choices: ["1. Perceivable", "2. Operable", "3. Understandable", "Robust"],
        answer: 2
      },
      {
        question: "Why is color alone not a sufficient way to convey information?",
        choices: ["1. Because some users may be colorblind or have low vision", "2. Because colors don't display the same on all devices", "3. Because colors can impact page loading speed"],
        answer: 1
      },
      {
        question: "Which of the following describes a proper use of ARIA roles?",
        choices: ["1. Adding ARIA roles to elements that already have native HTML semantics", "2. Using ARIA roles only when there is no native HTML element to convey the same meaning"],
        answer: 2
      },
      {
        question: "What is the primary purpose of high contrast mode?",
        choices: ["1. To enhance visual clarity for users with low vision", "2. To improve website aesthetics", "3. To reduce eye strain for all users"],
        answer: 1
      },
      {
        question: "What percentage of WCAG success criteria can typically be evaluated using automated accessibility testing tools?",
        choices: ["1. ~80-90%", "2. ~50%-60%", "3. ~25-35%"],
        answer: 3
      },
    ];

    this.score = 0;
    this.currentQuestionIndex = 0;
    this.selectedQuestions = this.getRandomQuestions(this.questions, 3);

    this.askToPlay();
  }

  askToPlay() {
    console.log("%c Would you like to play a quiz on digital accessibility? \n 1. Yes \n 2. No \n In the console, type answer(1) to play.", this.consoleStyles );
    window.answer = (response) => {
      if (response === "1" || response === 1) {
        this.runQuiz();
      } else {
        console.log("Maybe next time!");
      }
    };
  }

  runQuiz() {
    if (this.currentQuestionIndex < this.selectedQuestions.length) {
      const q = this.selectedQuestions[this.currentQuestionIndex];
      console.log(`%c Question ${this.currentQuestionIndex + 1}. `+ q.question, this.consoleStyles);
      q.choices.forEach(choice => console.log('%c ' + choice, this.consoleStyles));
      console.log("%c Please enter the number of your answer using answer(number);", this.consoleStyles);
      window.answer = (userAnswer) => {
        if (parseInt(userAnswer) === q.answer) {
          console.log(`%c 🎉🎉🎉 Question ${this.currentQuestionIndex + 1}: Correct!`, this.consoleStyles);
          this.score++;
        } else {
          console.log(`%c ❌ Question ${this.currentQuestionIndex + 1}: Incorrect. The correct answer is "${q.choices[q.answer - 1]}".`, this.consoleStyles);
        }
        this.currentQuestionIndex++;
        this.runQuiz();
      };
    } else {
      console.log(`%c You scored ${this.score} out of ${this.selectedQuestions.length}`, this.consoleStyles);
      this.askToPlayAgain();
    }
  }

  askToPlayAgain() {
    console.log("%c Would you like to play again? (1. yes/ 2. no)", this.consoleStyles);
    window.answer = (response) => {
      if (response === "1" || response === 1) {
        this.score = 0;
        this.currentQuestionIndex = 0;
        this.selectedQuestions = this.getRandomQuestions(this.questions, 3);
        this.runQuiz();
      } else {
        console.log("%c Thanks for playing!", this.consoleStyles);
      }
    };
  }

  getRandomQuestions(questions, num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
}

customElements.define('custom-easteregg', customEasteregg);