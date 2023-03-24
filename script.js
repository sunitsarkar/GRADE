let input=document.getElementsByClassName("marks");

let output=document.getElementsByClassName("output")

function calculate(){

    let english=input[0].value;
    let maths=input[1].value;
    let physics=input[2].value;
    let chemistry=input[3].value;
    let computer=input[4].value;

    for(let i=0;i<5;i++){
        if(input[i].value>100 || input[i].value<0){
            alert("please enter marks in between 0 and 100")
        }
        if(!input[i].value){
            output[2].value="You Got F Grade"
        }
    }

    let sum=parseInt(english)+ parseInt(maths)+parseInt(physics)+parseInt(chemistry)+parseInt(computer)
    let ave=(sum/500)*100;
    output[0].value="Total marks "+sum;
    output[1].value="Your average marks are: "+sum/5;

    if(english<36 || maths<36 || physics<36 || chemistry<36 || computer<36){
        output[2].value="F"
    }
    else if(ave>=90) output[2].value="You Got A Grade";
    else if(ave>=80) output[2].value="You Got B Grade";
    else if(ave>=70) output[2].value="You Got C Grade";
    else if(ave>=60) output[2].value="You Got D Grade"
    else if(ave<60) output[2].value="You Got F Grade";

}
