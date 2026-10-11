
"use strict";

const bank = [
/* BEGINNER: 1-20 */
["What is polymorphism?",["One name, many forms","One class only","Data hiding","Memory allocation"],0,"Polymorphism allows one interface to have different behaviours."],
["Which is compile-time polymorphism?",["Virtual dispatch","Function overloading","Dynamic binding","Run-time overriding"],1,"Function overloading is resolved at compile time."],
["Which keyword enables dynamic dispatch?",["static","friend","virtual","const"],2,"Virtual functions enable run-time dispatch."],
["What is function overloading?",["Same name, different parameter lists","Same name in derived classes only","Same return type only","Two main functions"],0,"Overloaded functions share a name but have different parameter lists."],
["Can functions be overloaded by return type alone?",["Yes","No","Only in classes","Only with virtual"],1,"Return type alone cannot distinguish overloaded functions."],
["What is function overriding?",["Creating a variable","Redefining a virtual base function in a derived class","Overloading constructors","Hiding a namespace"],1,"Overriding supplies a derived implementation of a virtual function."],
["Which operator can be overloaded?",[".","::","+", "sizeof"],2,"The + operator can be overloaded for user-defined types."],
["Which keyword is used in a pure virtual declaration?",["pure","abstract","virtual","override"],2,"A pure virtual function is declared using virtual and = 0."],
["What is an abstract class?",["A class with a pure virtual function","A class with no members","A class with only static functions","A final class"],0,"An abstract class cannot be instantiated directly."],
["Which syntax declares a pure virtual function?",["void f() pure;","virtual void f() = 0;","abstract void f();","void virtual = 0;"],1,"Example: virtual void show() = 0;"],
["Which feature supports run-time polymorphism?",["Dynamic binding","Macros","Namespaces","Global variables"],0,"Virtual calls can be resolved at run time."],
["What is a base class?",["A class inherited from","A parent class that provides an interface or implementation","Always an abstract class","A global variable"],1,"Derived classes inherit from base classes."],
["Which syntax declares public inheritance?",["class B -> A","class B extends A","class B : public A","class B inherits A"],2,"C++ declares inheritance using a colon."],
["What does override do?",["Creates an overload","Checks that a function overrides a virtual base function","Makes a class abstract","Disables inheritance"],1,"override helps detect signature mistakes."],
["Can constructors be virtual?",["Yes, always","No","Only public constructors","Only abstract constructors"],1,"C++ constructors cannot be virtual."],
["Can destructors be virtual?",["Yes","No","Only private","Only static"],0,"Virtual destructors enable correct destruction through base pointers."],
["What is a virtual function?",["A member supporting dynamic dispatch","A global function","A static function","A function without a body only"],0,"A virtual member can be overridden for run-time dispatch."],
["Which is an example of overloading?",["draw(int) and draw(double)","Changing a return type only","Renaming a variable","Declaring two main functions"],0,"Different parameter types can distinguish overloads."],
["Which class can be instantiated directly?",["A class with an unimplemented pure virtual function","A concrete class","Every abstract class","No class"],1,"A concrete class implements all inherited pure virtual functions."],
["What is a benefit of polymorphism?",["Flexible and reusable code","Higher screen resolution","Faster internet","Larger disk capacity"],0,"Polymorphism supports reusable, flexible interfaces."],

/* INTERMEDIATE: 21-40 */
["Which overload is selected when f(int) and f(double) exist and f(5) is called?",["f(double)","f(int)","Both","Neither"],1,"An exact match is preferred."],
["What if two functions differ only by return type?",["Always valid","They cannot be distinguished as overloads","Valid with virtual","Valid only for int"],1,"Return type alone cannot distinguish overloads."],
["A base pointer refers to a derived object. Which implementation is called for an overridden virtual method?",["Base method","Derived override","Both automatically","Compilation always fails"],1,"Virtual dispatch uses the dynamic type."],
["Without virtual, a base-pointer call to a same-named method generally calls which implementation?",["Derived","Base","Both","Random"],1,"Non-virtual calls are resolved using the static type."],
["Which is a valid pure virtual declaration?",["void f() pure;","virtual void f() = 0;","abstract void f();","void virtual = 0;"],1,"This is standard C++ syntax."],
["Can an abstract class have a constructor?",["Yes","No","Only if final","Only if private"],0,"Abstract classes can initialize their base-class state."],
["Can a derived class remain abstract if it does not implement an inherited pure virtual function?",["No","Yes","Only with a virtual destructor","Only with static members"],1,"Unimplemented inherited pure virtual functions keep it abstract."],
["Which operator cannot be overloaded?",["+","[]","::","*"],2,"The scope resolution operator :: cannot be overloaded."],
["Which operator must be overloaded as a member function?",["=","+","<<","All operators"],0,"The assignment operator must be a non-static member function."],
["What is dynamic binding?",["Function selection at run time","File creation","Variable initialization","Compilation only"],0,"The actual virtual function is selected at run time."],
["Can a static member function be virtual?",["Yes","No","Only in abstract classes","Only in templates"],1,"Static functions do not have object-specific virtual dispatch."],
["Can a friend function be virtual?",["Yes","No","Only if public","Only if protected"],1,"Friend functions are not member functions."],
["What is a covariant return type?",["A compatible derived pointer or reference return in an override","Any changed return type","A changed parameter name","An overloaded operator"],0,"Covariant returns permit certain related class pointer/reference types."],
["Overloaded functions are distinguished primarily by what?",["Different function names","Different parameter lists","Virtual keyword only","Return types only"],1,"Overloads are distinguished by their parameter lists."],
["What does a virtual destructor support?",["Derived cleanup through a base pointer","Multiple inheritance only","Automatic overloading","Preventing destruction"],0,"It allows proper derived destruction through a base pointer."],
["What is object slicing?",["Copying a derived object into a base object by value, losing derived parts","Overloading an operator","Calling a pure virtual function","Dynamic allocation"],0,"A base value contains only the base subobject."],
["Which cast supports checked run-time downcasting?",["static_cast","dynamic_cast","const_cast","reinterpret_cast"],1,"dynamic_cast can check compatible polymorphic conversions."],
["What is operator overloading?",["Defining operator behaviour for user-defined types","Creating a new keyword","Declaring a virtual table","Creating only constructors"],0,"Operators can be given class-specific behaviour."],
["Can a virtual function also be overloaded?",["Yes","No","Only if private","Only if final"],0,"Overloading and virtual dispatch can coexist."],
["What does final on a virtual override prevent?",["Further overriding","Function calls","Object creation","All inheritance"],0,"A final virtual function cannot be overridden further."],

/* ADVANCED: 41-60 */
["What is true about calling a pure virtual function during base construction?",["It calls the derived override normally","It dispatches to the derived object","A pure virtual call in this context is undefined behaviour","It always prints zero"],2,"Virtual dispatch does not reach the not-yet-constructed derived part; a pure virtual call here is undefined behaviour."],
["Which call is statically bound?",["Virtual call through a base reference","Non-virtual member call","Virtual call through a base pointer","Overridden virtual call"],1,"Non-virtual calls use static binding."],
["A derived function has the same name but a different parameter list. What can happen?",["It may hide base overloads","It overrides every overload","The class becomes abstract automatically","It becomes virtual automatically"],0,"A same-named derived function can hide base overloads."],
["What does Base::show() inside a derived method do?",["Calls the qualified base implementation","Calls every override","Creates a virtual function","Allocates a base object"],0,"A qualified call suppresses virtual dispatch for that call."],
["What commonly supports virtual function dispatch in implementations?",["A vtable","A macro","A namespace","A loop"],0,"Many compilers use virtual tables, though the standard does not require them."],
["Does the C++ standard require a specific vtable layout?",["Yes","No","Only for abstract classes","Only for multiple inheritance"],1,"The standard specifies behaviour, not a particular vtable layout."],
["An override has an incompatible signature. What happens?",["It may hide the base function rather than override it","It always overrides","It changes all overloads","It makes the base function static"],0,"A valid override must have a compatible signature."],
["Can a derived override have a different access level?",["Yes","No","Only for static functions","Only with templates"],0,"Access control may differ in the derived declaration."],
["What does virtual inheritance address?",["Repeated base subobjects in a diamond hierarchy","Function templates","Return types","Array bounds"],0,"Virtual inheritance can share a common virtual base subobject."],
["What is the destructor order for a derived object?",["Base then derived","Derived then base","Random order","Only base"],1,"The derived destructor runs before base destructors."],
["What does a failed pointer dynamic_cast return?",["nullptr","0.5","A new object","Always an exception"],0,"A failed pointer dynamic_cast returns nullptr."],
["What happens when a reference dynamic_cast fails?",["Returns nullptr","Throws std::bad_cast","Returns false","Calls the destructor"],1,"A failed reference dynamic_cast throws std::bad_cast."],
["Can a pure virtual function have a definition?",["Yes","No","Only if static","Only in main"],0,"A pure virtual function may have an out-of-class definition."],
["Can a member function template itself be virtual?",["Yes","No","Only in abstract classes","All templates are virtual"],1,"C++ does not allow member function templates to be virtual."],
["What happens when deleting a derived object through a base pointer with a non-virtual destructor?",["Always safe","Undefined behaviour","Derived destruction is guaranteed","Compile-time polymorphism"],1,"Deleting through a base pointer in this situation has undefined behaviour."],
["What is the purpose of an interface-like abstract class?",["Define a common contract for derived classes","Prevent all inheritance","Store only global variables","Replace constructors"],0,"Abstract classes can define interfaces through pure virtual functions."],
["Can a private base virtual function be overridden publicly?",["Yes","No","Only if static","Only if friend"],0,"A derived class can override a private virtual function."],
["What does override help prevent?",["Accidental signature mismatches","All run-time errors","Memory allocation","Operator use"],0,"The compiler reports an error if the function does not override a base virtual function."],
["When is overload resolution generally performed?",["At compile time using argument types","At run time using only dynamic type","Only after execution","Using return type alone"],0,"Overload resolution generally happens at compile time."],
["What is the difference between overloading and overriding?",["Overloading uses different parameter lists; overriding redefines a virtual base method","They are identical","Overloading requires inheritance; overriding never does","Neither uses functions"],0,"Overloading and overriding are different mechanisms."]
];

const modes = {
    beginner: { start: 0, end: 20, label: "BEGINNER" },
    intermediate: { start: 20, end: 40, label: "INTERMEDIATE" },
    advanced: { start: 40, end: 60, label: "ADVANCED" },
    all: { start: 0, end: 60, label: "FULL CHALLENGE" }
};

const $ = id => document.getElementById(id);
let questions = [];
let current = 0;
let score = 0;
let answered = false;
let activeMode = "beginner";

const levelMenu = $("level-menu");
const quizGame = $("quiz-game");
const quizResult = $("quiz-result");
const questionText = $("question-text");
const answerOptions = $("answer-options");
const quizFeedback = $("quiz-feedback");
const nextButton = $("next-question");

function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function startQuiz(mode) {
    activeMode = mode;
    const settings = modes[mode];

    questions = shuffle(bank.slice(settings.start, settings.end).map(q => ({
        text: q[0],
        options: q[1],
        answer: q[2],
        explanation: q[3]
    })));

    current = 0;
    score = 0;
    levelMenu.hidden = true;
    quizResult.hidden = true;
    quizGame.hidden = false;
    $("quiz-level").textContent = settings.label;
    renderQuestion();
    $("arena").scrollIntoView({ behavior: "smooth" });
}

function renderQuestion() {
    const q = questions[current];
    answered = false;

    $("quiz-count").textContent = `Question ${current + 1} / ${questions.length}`;
    $("quiz-score").textContent = `Score: ${score}`;
    $("quiz-progress").style.width = `${current / questions.length * 100}%`;
    questionText.textContent = q.text;
    answerOptions.replaceChildren();
    quizFeedback.textContent = "";
    quizFeedback.className = "feedback";
    nextButton.hidden = true;

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-option";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const text = document.createElement("span");
        text.textContent = option;

        button.append(letter, text);
        button.addEventListener("click", () => selectAnswer(index));
        answerOptions.appendChild(button);
    });
}

function selectAnswer(index) {
    if (answered) return;
    answered = true;

    const q = questions[current];
    const correct = index === q.answer;
    if (correct) score++;

    [...answerOptions.children].forEach((button, i) => {
        button.disabled = true;
        if (i === q.answer) button.classList.add("correct");
        if (i === index && !correct) button.classList.add("incorrect");
    });

    quizFeedback.className = `feedback ${correct ? "success" : "error"}`;
    quizFeedback.textContent = `${correct ? "Correct! +1 point. " : "Incorrect. "}${q.explanation}`;
    $("quiz-score").textContent = `Score: ${score}`;
    $("quiz-progress").style.width = `${(current + 1) / questions.length * 100}%`;
    nextButton.hidden = false;
    nextButton.textContent = current === questions.length - 1 ? "See Results →" : "Next Question →";
}

function showResults() {
    quizGame.hidden = true;
    quizResult.hidden = false;

    const total = questions.length;
    const percent = Math.round(score / total * 100);

    $("result-heading").textContent =
        percent === 100 ? "Perfect Score!" :
        percent >= 75 ? "Excellent Work!" :
        percent >= 50 ? "Good Progress!" : "Keep Practising!";

    $("result-text").textContent = `You scored ${score} out of ${total} (${percent}%).`;
    $("result-details").textContent =
        `Correct answers: ${score} | Incorrect answers: ${total - score} | Accuracy: ${percent}%`;
}

document.querySelectorAll("[data-mode]").forEach(button => {
    button.addEventListener("click", () => startQuiz(button.dataset.mode));
});

nextButton.addEventListener("click", () => {
    if (!answered) return;
    if (current < questions.length - 1) {
        current++;
        renderQuestion();
    } else {
        showResults();
    }
});

$("quit-quiz").addEventListener("click", () => {
    quizGame.hidden = true;
    levelMenu.hidden = false;
});

$("restart-quiz").addEventListener("click", () => startQuiz(activeMode));

$("change-level").addEventListener("click", () => {
    quizResult.hidden = true;
    levelMenu.hidden = false;
    $("arena").scrollIntoView({ behavior: "smooth" });
});

/* PREDICT THE OUTPUT CHALLENGES */

const challenges = [
    {
        code: `class Printer {
public:
    void show(int x) { cout << "Integer: " << x; }
    void show(double x) { cout << "Double: " << x; }
};
Printer p;
p.show(5);`,
        options: ['"Double: 5"', '"Integer: 5"', '"5.0"', "Compilation error"],
        answer: 1,
        explanation: "The integer argument selects show(int). Output: Integer: 5"
    },
    {
        code: `class Animal {
public:
    virtual void sound() { cout << "Animal"; }
};
class Dog : public Animal {
public:
    void sound() override { cout << "Bark"; }
};
Dog d;
Animal* ptr = &d;
ptr->sound();`,
        options: ['"Animal"', '"Dog"', '"Bark"', "Compilation error"],
        answer: 2,
        explanation: "Virtual dispatch calls Dog::sound(). Output: Bark"
    },
    {
        code: `class Base {
public:
    void show() { cout << "Base"; }
};
class Derived : public Base {
public:
    void show() { cout << "Derived"; }
};
Derived d;
Base* ptr = &d;
ptr->show();`,
        options: ['"Derived"', '"Base"', '"BaseDerived"', "Compilation error"],
        answer: 1,
        explanation: "show() is non-virtual, so the Base implementation is called."
    }
];

let challengeIndex = 0;
let challengeAnswered = false;

function renderChallenge() {
    const q = challenges[challengeIndex];
    challengeAnswered = false;
    $("challenge-code").textContent = q.code;
    $("output-options").replaceChildren();
    $("output-feedback").textContent = "";
    $("output-feedback").className = "feedback";
    $("next-challenge").hidden = true;

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-option";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const text = document.createElement("span");
        text.textContent = option;

        button.append(letter, text);
        button.addEventListener("click", () => {
            if (challengeAnswered) return;
            challengeAnswered = true;

            [...$("output-options").children].forEach((b, i) => {
                b.disabled = true;
                if (i === q.answer) b.classList.add("correct");
                if (i === index && index !== q.answer) b.classList.add("incorrect");
            });

            const correct = index === q.answer;
            $("output-feedback").className = `feedback ${correct ? "success" : "error"}`;
            $("output-feedback").textContent = `${correct ? "Correct! " : "Not quite. "}${q.explanation}`;
            $("next-challenge").hidden = false;
            $("next-challenge").textContent =
                challengeIndex === challenges.length - 1 ? "Restart Challenges ↻" : "Next Challenge →";
        });

        $("output-options").appendChild(button);
    });
}

$("next-challenge").addEventListener("click", () => {
    if (!challengeAnswered) return;
    challengeIndex = (challengeIndex + 1) % challenges.length;
    renderChallenge();
});

renderChallenge();
console.log(`POLYVERSE ready: ${bank.length} MCQs loaded.`);
