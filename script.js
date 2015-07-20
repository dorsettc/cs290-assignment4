var xmlhttp = new XMLHttpRequest();

function searchGists(){
        document.getElementById('results').innerHTML = "";
        var user = document.getElementById('searchQuery').value;

        xmlhttp.onreadystatechange = function(){
                if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                        var data = JSON.parse(xmlhttp.responseText);
                        var len = Object.keys(data).length;

                        var i = 0;
                        var j = 0;
                        for(i = 0; i < len; i++){
                                if(data[i].description == user){

                                        var eleBTN = document.createElement("BUTTON");
                                        var textBTN = document.createTextNode("Add");
                                        eleBTN.setAttribute("onclick", "addListElement(this.parentNode.id); removeListElement(this.parentNode.id);");
                                        eleBTN.appendChild(textBTN);

                                        var eleLI = document.createElement("LI");
                                        var dataURL = document.createTextNode(data[i].html_url);
                                        var dataDES = document.createTextNode(" " + data[i].description);
                                        eleLI.setAttribute("id",data[i].id);
                                        eleLI.setAttribute("src",data[i].html_url);
                                        eleLI.setAttribute("value",data[i].description);

                                        var eleA = document.createElement("A");
                                        eleA.setAttribute("href",data[i].html_url);

                                        eleLI.appendChild(eleBTN);
                                        eleA.appendChild(dataURL);
                                        eleLI.appendChild(eleA);
                                        eleLI.appendChild(dataDES);
                                        document.getElementById('results').appendChild(eleLI);
                                }
                                /*else if(user == ""){
                                        var eleBTN = document.createElement("BUTTON");
                                        var textBTN = document.createTextNode("Add");
                                        eleBTN.setAttribute("onclick", "addListElement(this.parentNode.id); removeListElement(this.parentNode.id);");
                                        eleBTN.appendChild(textBTN);

                                        var eleLI = document.createElement("LI");
                                        var dataURL = document.createTextNode(data[i].html_url);
                                        var dataDES = document.createTextNode(" " + data[i].description);
                                        eleLI.setAttribute("id",data[i].id);
                                        eleLI.setAttribute("src",data[i].html_url);
                                        eleLI.setAttribute("value",data[i].description);

                                        var eleA = document.createElement("A");
                                        eleA.setAttribute("href",data[i].html_url);

                                        eleLI.appendChild(eleBTN);
                                        eleA.appendChild(dataURL);
                                        eleLI.appendChild(eleA);
                                        eleLI.appendChild(dataDES);
                                        document.getElementById('results').appendChild(eleLI);
                                }*/
                        }
                }
        };
        xmlhttp.open("GET", "https://api.github.com/gists", true);
        xmlhttp.send();
}

function removeListElement(id) {
        var element = document.getElementById(id);
        element.parentNode.removeChild(element);
}

function addListElement(id){
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function(){
                if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                        var data = JSON.parse(xmlhttp.responseText);
                        var len = Object.keys(data).length;

                        var i = 0;
                        for(i = 0; i < len; i++){
                                if(data[i].id == id){

                                        var eleBTN = document.createElement("BUTTON");
                                        var textBTN = document.createTextNode("X");
                                        eleBTN.setAttribute("onclick", "removeListElement(this.parentNode.id);");
                                        eleBTN.appendChild(textBTN);

                                        var eleLI = document.createElement("LI");
                                        var dataURL = document.createTextNode(data[i].html_url);
                                        var dataDES = document.createTextNode(" " + data[i].description);
                                        eleLI.setAttribute("id",data[i].id);
                                        eleLI.setAttribute("src",data[i].html_url);
                                        eleLI.setAttribute("value",data[i].description);

                                        var eleA = document.createElement("A");
                                        eleA.setAttribute("href",data[i].html_url);

                                        eleLI.appendChild(eleBTN);
                                        eleA.appendChild(dataURL);
                                        eleLI.appendChild(eleA);
                                        eleLI.appendChild(dataDES);
                                        document.getElementById('fav').appendChild(eleLI);
                                }
                        }
                }
        };
        xmlhttp.open("GET", "https://api.github.com/gists/public", true);
        xmlhttp.send();
}
