    let allQuestions;

    var allAnswers = new Map

    let result = []

    startTest=()=>{
        fetch('./questions.json')
        .then(data=>data.json())
        .then(questions=>{
            allQuestions = questions;
            questions.forEach((element,i) => {
                var qlist = `
                <a class="button is-rounded box-shadow-lift button-special qtbutton" id="qt${i}" onclick="getQuestion(${i})">
                    <span class="icon">
                        <i aria-hidden="true" id="icn${i}" class="fas fa-question"></i>
                    </span>
                    <span>Question:${i+1}</span>
                </a>
                `;
                document.getElementById("Qlist").insertAdjacentHTML('beforeend',qlist)    
            });
            getQuestion(0);
        })

    }

    getQuestion=(n)=>{
       
        document.getElementById('options').innerHTML= '';
        document.querySelectorAll('.qtbutton').forEach(qt=>qt.classList.remove('is-danger'))

        document.getElementById(`qt${n}`).classList.toggle('is-danger')

        document.getElementById("question").innerHTML = allQuestions[n].question
        allQuestions[n].options.forEach((option,i)=>{
            var optionitem= `
            <div class="field">
                <input type="radio" name="opt" id="${option}" class="option" onclick='submitAnswer(${n},"${option}")' >
                    <span class="icon">
                        <i aria-hidden="true" class="fab fa-centos"></i>
                    </span>
                    ${option}
            </div>
            `;
            document.getElementById('options').insertAdjacentHTML('beforeend',optionitem)
        })

        //paste answers if any !
        var ans = allAnswers.get(n)
        if(ans){
            document.getElementById(ans).checked = true
        }

    }
    
    submitAnswer=(n,ans)=>{
        if(allAnswers.get(n)){
            allAnswers.delete(n)
            allAnswers.set(n,ans)
        }
        else{
            allAnswers.set(n,ans)
        }

        //change icon of the question tab !
        document.getElementById(`icn${n}`).classList.replace("fa-question","fa-check")

        if(allAnswers.size == allQuestions.length ){
            document.getElementById("sub-btn").innerHTML = `
            <a class="button is-rounded box-shadow-lift button-special" style="float: right;" onclick="calculateResult()">
                <span class="icon" style="color: rgb(252, 78, 78)">
                    <i aria-hidden="true" class="fas fa-clipboard-check"></i>
                </span>
                <span>Submit Answers</span>
            </a>`;

        }
    }

    calculateResult=()=>{
        var answer = window.confirm("Are you sure you wanna submit the answer ?");
        if (answer) {
            allQuestions.forEach((question,i)=>{
                if(question.answer == allAnswers.get(i)) result.push({"question":question.question,"answer":question.answer,"given":allAnswers.get(i),"result":"check"})
                else result.push({"question":question.question,"answer":question.answer,"given":allAnswers.get(i),"result":"times"})
            })
            if(result.length == allQuestions.length){
                document.getElementById('congo').style.display = 'block'
                result.forEach((item,i)=>{
                    document.getElementById('finalresult').insertAdjacentHTML('beforeend',`
                        <span class="tag">${i}. ${item.question} - ${item.answer}</span> your answer <code>${item.given}</code> <i class="fas fa-${item.result}"></i> <br>
                    `);
                })
                var score = result.filter((q)=>q.result == 'check').length
                document.getElementById('score').innerHTML = `you scored ${score} out of ${allQuestions.length} your percentage <code> ${score / allQuestions.length * 100}% </code>`
            }
        }   
    }