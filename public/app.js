function populate() {
    if (quiz.isEnded()) {
        showscores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showscores() {
    var gameoverHTML = "<h1> Result </h1>";
    gameoverHTML += "<h2 id='score'> Your Score is: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameoverHTML;
};

//create questions
var questions = [
    new Question("Which of the following is the smallest part of an element?",
        ["molecule", "atom", "ion", "compound"], "atom"),


    new Question("Which of the following is an atom with an electric charge?",
        ["molecule", "nucleus", "electron", "ion"], "electron"),


    new Question("An atom has an atomic number of 6. How many protons does it have?",
        ["6", "12", "0", "8"], "6"),

    new Question("An atom with an atomic number of 8 is most likely to have a mass number of what?",
        ["8", "12", "16", "32"], "12"),    

    new Question("If an atom loses 2 electrons, what will be the charge on its ion?",
        ["+2", "-2", "0", "Don't Know"], "+2"),


    new Question("In carbondioxide, carbon and oxygen combine by sharing electrons?",
        ["Carbondioxide is an ionic compound", "Carbondioxide is a covalent compound",
         "Carbondioxide is not a compound", "Carbondioxide is a crystal compound"],
         "Carbondioxide is a covalent compound"),
        
    new Question("Ionic bonds are formed whenever:",
         ["atoms smash togrther", "electrons are being shared", "electrons are lost or gained", "atoms undergo nuclear decay"], 
         "electrons are lost or gained"),

    new Question("Atoms are shared in __________ bonds?",
         ["simple", "covalent", "crystal", "unique"], "covalent"),

         new Question("___________ have a negative charge?",
         ["atoms", "electrons", "neutrons", "protons"], "electrons"),

         new Question("___________ gases have low boiling points?",
         ["noble", "unknown", "super", "non-noble"], "noble"),
   
         new Question("___________ bonds are formed from the electrostatic attraction between oppositely charged ions in a chemical compound?",
         ["crystal", "ionic", "covalent", "paired"], "ionic"),

         new Question("The periodic table is a table of the chemical elements in which the elements are arranged by order of _____________?",
         ["atomic weight", "atomic mass", "atomic numbers", "Don't Know"], "atomic numbers"),

         new Question("What is the first element on the periodic table?",
         ["Helium (He)", "Sodium (Na)", "Carbon (C)", "Hydrogen (H)"], "Hydrogen (H)"),


         new Question("What is the center of an atom called?",
         ["Proton", "Electron", "Nucleus", "Molecule"], "Nucleus"),


         new Question("What is the main gas found in the air we breathe?",
         ["Oxygen", "Carbon", "Nitrogen", "Hydrogen"], "Oxygen"),


         new Question("At room temperature what is the only metal that is in liquid form?",
         ["Silver", "Gold", "Mercury (Hg)", "Aluminium"], "Mercury (Hg)"),


         new Question("What orbits around the nucleus?",
         ["Neutrons", "Electrons", "Protons", "Alkaline"], "Electrons"),

         new Question("Periodic table comprises of all the  ___________ known elements?",
         ["118", "102", "122", "110"], "118"),

         new Question("The outer most shell of an atom is also known as ____________?",
         ["valley shell", "valency shell", "Proton shell", "egg shell"], "valency shell"),

         new Question("The periodic table is a table of elements developed by the ___________ scientist Dmitri Ivanovich Mendeleev?",
         ["Australian", "American", "Russian", "Indian"], "Russian"),



        ];
var quiz = new Quiz(questions);
populate();