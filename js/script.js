
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
