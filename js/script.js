var Project = {
    first:{
        name : "Covid-19 Tracker for India",
        description: "The Covid-19 Tracker for India was my 1st ever project in Web Development. In this project I learnt the use of API's and using the data to display statistics. The API link is present in the Documentation of the Project. This project displays the statistics of Covid-19 effects on the whole country, as well as the Statewise data. ",
        link : "https://arnab4srk.github.io/Covid-19/",
        repo: "https://github.com/arnab4srk/Covid-19",
        image: "../Assets/Portfolio/Covid.png",
        category: "Website",
        date: "March, 2020."
    },
    second:{
        name : "Guess the Gibberish Game",
        description: "This game was developed/inspired by the viral Instagram filter, Guess the Gibberish. This was made for an Online event conducted by Vimanaaz, a domain of Aaruush, a National level Techno-Management Fest of SRM IST.<br> This needed the use of HTML, CSS & Javascript. The questions & hints were made by Committee-Heads of Vimanaaz Domain.",
        link : "https://arnab4srk.github.io/VimanazGame/",
        repo: "https://github.com/arnab4srk/VimanazGame",
        image: "../Assets/Portfolio/Vimanaz.png",
        category: "Website",
        date: "May, 2020."
    },
    third:{
        name : "Name the Construction Game",
        description : "This game was developed as an Image Quiz game, the participant is expected to see the blueprint and guess the structure. The one with max points in the given time limit wins. This was made for an Online event conducted by Konstruktion, a domain of Aaruush, a National level Techno-Management Fest of SRM IST.<br> This needed the use of HTML, CSS & Javascript. The questions & hints were made by Committee-Heads of Konstruktion Domain.",
        link : "https://arnab4srk.github.io/KonstruktionGame/",
        repo: "https://github.com/arnab4srk/KonstruktionGame",
        image: "Assets/Portfolio/Konstruktion.png",
        category: "Website",
        date: "May, 2020."
    },
    fourth:{
        name : "LearnYuva Official Site",
        description: "LearnYuva is an Ed-Tech Startup which aims to provide Education with the help of Live & Interactive sessions.<br> LearnYuva is an online educational platform which focuses primarily on educating those aspiring students who wish to take a step forward and do more than the necessary by not just achieving their targets in school, but also in the outside world.<br>The Front-End of the Official site of our Startup was developed by me and <a href='https://www.linkedin.com/in/anurag-singh-07723719b/'>Anurag</a>. Anurag also designed the UI of the website. The Backend work was done by <a href='https://www.linkedin.com/in/rahmansaqib/'>Saqib</a>.",
        link : "https://learnyuva.live/",
        repo: "https://github.com/anuragbyte/ly",
        image: "../Assets/Portfolio/LearnYuva.png",
        category: "Website",
        date: "May, 2020."
    },
    fifth:{
        name : "Real Madrid site concept Web-Design",
        description: "LearnYuva is an Ed-Tech Startup which aims to provide Education with the help of Live & Interactive sessions.<br> LearnYuva is an online educational platform which focuses primarily on educating those aspiring students who wish to take a step forward and do more than the necessary by not just achieving their targets in school, but also in the outside world.<br>The Front-End of the Official site of our Startup was developed by me and <a href=''>Anurag</a>. Anurag also designed the UI of the website. The Backend work was done by <a href=''>Saqib</a>.",
        link : "https://arnab4srk.github.io/Real-Madrid/",
        repo: "https://github.com/arnab4srk/RealMadrid",
        image: "../Assets/Portfolio/RealMadrid.png",
        category: "Website",
        date: "May, 2020."
    },
    sixth:{
        name : "LearnYuva Official Site",
        description: "LearnYuva is an Ed-Tech Startup which aims to provide Education with the help of Live & Interactive sessions.<br> LearnYuva is an online educational platform which focuses primarily on educating those aspiring students who wish to take a step forward and do more than the necessary by not just achieving their targets in school, but also in the outside world.<br>The Front-End of the Official site of our Startup was developed by me and <a href=''>Anurag</a>. Anurag also designed the UI of the website. The Backend work was done by <a href=''>Saqib</a>.",
        link : "https://arnab4srk.github.io/Portfolio/",
        repo: "https://github.com/arnab4srk/Portfolio",
        image: "../Assets/Portfolio/Portfolio.png",
        category: "Website",
        date: "May, 2020."
    }
}
genDesc("first");
var c=0;
function genDesc(index){
    c++;
    document.querySelector("#projectName").innerHTML = Project[index].name;
    document.querySelector("#projectImage").setAttribute("src", Project[index].image);
    document.querySelector("#projectCategory").innerHTML = Project[index].category;
    document.querySelector("#projectDate").innerHTML = Project[index].date;
    document.querySelector("#projectDescription").innerHTML = Project[index].description;
    document.querySelector("#projectLink").setAttribute("href", Project[index].link);
    document.querySelector("#projectRepo").setAttribute("href", Project[index].repo);
    if(c>0){
        $('#projectModal').modal('show');
    }
}
