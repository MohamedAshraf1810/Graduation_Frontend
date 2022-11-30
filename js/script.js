var loader = document.getElementById("preloader");
window.addEventListener("load" , function()
{
    setTimeout(() =>
    {
      loader.style.display="none";
    },1000);
})
