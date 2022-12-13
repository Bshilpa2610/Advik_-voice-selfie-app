var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function Start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}





recognition.onresult = function(event) {

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;


    ///// mistake - it should be == when you compare not single
    if (Content == "take my selfie") {
        console.log("taking");
        speak();
    }

   // speak(); ///// mistake repaet

   

}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking you Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        takesnapshot(); 
        save();
    }, 5000);
}




 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

 function newpage() {
    window.location = "info.html";
}

function takesnapshot() {
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+ data_uri +'"/>';
    });
}



function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}


/*
function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link_href = image;                      /////// MISTAKE  link.href
    link.click();
}
*/

