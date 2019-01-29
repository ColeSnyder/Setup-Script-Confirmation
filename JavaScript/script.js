var OS = navigator.platform;
var localFile;

if (OS == "Win32") {
    localFile = "file:\\C:\Users\Public\Documents\error.txt";
} else if (OS == "MacIntel") {
    localFile = "Users/os4584kh/Desktop/error.txt";
}

// document.onload(readTextFile(localFile))






// function readTextFile(file)
// {

//     alert("into Function");


//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//         alert("1");
//         if(rawFile.readyState === 4)
//         {
//             alert("2");
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 alert("3");
//                 var allText = rawFile.responseText;
//                 alert(alltext);
//                 document.getElementById("errorSpace").innerHTML = alltext;
//             }
//         }
//     rawFile.send(null);
// }