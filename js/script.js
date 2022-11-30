var loader = document.getElementById("preloader");
window.addEventListener("load" , function()
{
    setTimeout(() =>
    {
      loader.style.display="none";
      
    },1);
})

var username = document.getElementById("username");
var password = document.getElementById("password");
var popupSection = document.getElementById("popUpSection")
var video = document.querySelector("#videoElement");

function cameraOpen() 
{
  if (navigator.mediaDevices.getUserMedia) 
    {
      navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) 
      {
        video.srcObject = stream;
      })
      .catch(function (error) 
      {
        console.log("Something went wrong!");
      });
    }  
}

function cameraClose() 
{
    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) 
    {
      var track = tracks[i];
      track.stop();
    }
  video.srcObject = null;
}

function CheckData() 
{
  if (username.value== "" || password.value == "") 
  {
    alert("Missing Values")
  }
  else
  {
    popupSection.setAttribute("style", "display:flex");  
    // Camera Open
    cameraOpen();
  }
}

function PopUpclose()
{
  popupSection.setAttribute("style", "display:none"); 

  // Close Camera
  cameraClose();
}




