const Skills = ["B.Tech Under Grad", "Front-End Web Developer", "Java Programmer", "Student"];
let index =0;
let skillIndex = 0;
let skill = "";
( function type(){
    if(skillIndex === Skills.length){
        skillIndex = 0;
    }
    skill = Skills[skillIndex];
    let char = skill.slice(0, ++index);
    console.log(char);
    document.querySelector(".type-text").textContent = char;
    if(char.length === skill.length){
        skillIndex++;
        index = 0;
        setTimeout(type, 2000);
    }
    else{
        setTimeout(type, 200);
    }
}());