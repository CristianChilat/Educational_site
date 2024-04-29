document.addEventListener('DOMContentLoaded', function(){
    const finishTestButton = document.getElementById("finish-test");
    if(finishTestButton !== undefined && finishTestButton !== null) {
        finishTestButton.addEventListener('click', function(){
            calculateResults();
        })
    }

    showHide('blockIntroduction');

})

function calculateResults (){
    let correctAnswers = 0;
    let answeredQuestions = 0;

    const response1 = document.querySelector('input[name="response1"]:checked');
    if (response1!= undefined && response1?.value != undefined){
        answeredQuestions++;
    }
    if (response1?.value == 2){
        correctAnswers++;
    }


    const response2 = document.getElementById("response2");
    if (response2!= undefined && response2?.value != undefined){
        answeredQuestions++;
    }
    if (response2?.value == 5){
        correctAnswers++;
    }


    const response3 = document.querySelector('input[name="response3"]:checked');
    if (response3!= undefined && response3?.value != undefined){
        answeredQuestions++;
    }
    if (response3?.value == 4){
        correctAnswers++;
    }


    const response4 = document.getElementById("response4");
    if (response4!= undefined && response4?.value != ""){
        answeredQuestions++;
    }
    if (response4?.value == 3){
        correctAnswers++;
    }

    const response5 = document.querySelector('input[name="response5"]:checked');
    if (response5!= undefined && response5?.value != 0){
        answeredQuestions++;
    }
    if (response5?.value == 4){
        correctAnswers++;
    }

    if (answeredQuestions < 5){
        alert('Răspundeți la toate întrebările!');
    } else {
        alert(`Nota ta este ${correctAnswers * 2}`)
    }

}

function showHide(id) {
    const block  = document.getElementById(id);
    console.log(block.style.display);
    if(block.style.display === 'none' || block.style.display === '') {
        block.style.display = 'block';
    } else {
        block.style.display = 'none';
    }

}