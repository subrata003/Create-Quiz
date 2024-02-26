const que = [
        {
            question: "How many 0.5cm slices can you cut from a bread that is 25cm long? ",
            answers: [
                { text: "30", correct: false },
                { text: "50", correct: true },
                { text: "70", correct: false },
                { text: "20", correct: false },
            ]
        },
        {
            question: "Divide 30 by half and add ten. ",
            answers: [
                { text: "70", correct: true },
                { text: "30", correct: false },
                { text: "none", correct: false },
                { text: "75", correct: false },
            ]
        },
        {
            question: "You're 4th place right now in a race. What place will you be in when you pass the person in 3rd place?",
            answers: [
                { text: "1st", correct: false },
                { text: "2nd", correct: false },
                { text: "3rd", correct: true },
                { text: "None of the above", correct: false },
            ]
        },
        {
            question: "Jimmy's father has three sons- Paul I and Paul II. Can you guess the name of the third son? ",
            answers: [
                { text: "Jimmy", correct: true },
                { text: "jeso's", correct: false },
                { text: "Jerin", correct: false },
                { text: "None", correct: false },
            ]
        }
    ];
    const questionElement=document.getElementById("question");
    const answerbutton=document.getElementById("ans");
    const nextbutton=document.getElementById("nextbtn");
    const nice=document.querySelector(".app h1")

    let currentQuestionindex=0;
    let score=0;
    function startquize(){
        currentQuestionindex=0;
        score=0
        nextbutton.innerHTML="Next"
        showquestion();
    }
    function showquestion(){
        resetstate();
        let currentQuestion=que[currentQuestionindex];
        let questionNo=currentQuestionindex+1;
        questionElement.innerHTML= questionNo +". "+currentQuestion.question;

        currentQuestion.answers.forEach(answer=>{
            const button=document.createElement("button")
            button.innerHTML=answer.text;
            button.classList.add("btn")
            answerbutton.appendChild(button)
            if(answer.correct){
                button.dataset.correct=answer.correct;
            }
            button.addEventListener("click",selectans)
        })

    }
    function resetstate(){
        nextbutton.style.display="none";
        while(answerbutton.firstChild){
            answerbutton.removeChild(answerbutton.firstChild)
        }
    }
    function selectans(e){
        const selectbtn=e.target;
        const isCorrect=selectbtn.dataset.correct==="true"
        if(isCorrect){
            selectbtn.classList.add("correct")
            score++;
        }else{
            selectbtn.classList.add("incorrect")
        }
        Array.from(answerbutton.children).forEach(button=>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct")
            }
            button.disabled=true;

        })
        nextbutton.style.display="block"
    }
    function showScore(){
        resetstate()
        questionElement.innerHTML=`your scored ${score} out of ${que.length}`;
        nextbutton.innerHTML="Play Again"
        nextbutton.style.display="block"
        nice.innerHTML="Score..."
        
       
       

    }
    function handleNextBtn(){
        currentQuestionindex++
        if(currentQuestionindex<que.length){
            showquestion()
        }else{
            showScore();
        }
    }
    nextbutton.addEventListener("click",()=>{
        if(currentQuestionindex<que.length){
            handleNextBtn();
            
        }else{
            startquize()
            nice.innerHTML="Quiz Here"
        }
    })
    startquize();


