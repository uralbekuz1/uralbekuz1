var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
    }
};
xhttp.open("GET", "https://uralbekuz1.netlify.app/example.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    document.getElementById("misol").innerHTML =
    xmlDoc.getElementsByTagName("distrybut3")[0][1].childNodes[0].nodeValue;
}


function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    document.getElementById("misqol").innerHTML =
    xmlDoc.getElementsByTagName("distrybut4")[0][1].childNodes[0].nodeValue;
}