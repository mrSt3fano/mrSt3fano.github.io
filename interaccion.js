var elemento1=document.getElementById("boton");
var elemento2=document.getElementById("boton1");
var elemento3=document.getElementById("boton2");
var elemento4=document.getElementById("boton3");
var elemento5=document.getElementById("boton4");
var elemento6=document.getElementById("uncp");
var elemento7=document.querySelector(".indice");
var elementox=document.querySelector(".texto");

    elemento1.style.top = "310px";
    elemento1.style.left = "850px";
    elemento2.style.top = "360px";
    elemento2.style.left = "850px";
    elemento3.style.top = "410px";
    elemento3.style.left = "850px";
    elemento4.style.top = "460px";
    elemento4.style.left = "850px";
    elemento5.style.top = "510px";
    elemento5.style.left = "850px";
    elemento6.style.top = "10px";
    elemento6.style.left = "500px";
    elemento7.style.top = "10px";
    elemento7.style.left = "760px";
    elementox.style.top = "130px";
    elementox.style.left = "740px";

    const emmet = document.querySelector("#boton");

    emmet.addEventListener("click",function(){
        window.open("\Emmet.html", "_blank");
    });
    
    const HTML = document.querySelector("#boton1");

    HTML.addEventListener("click",function(){
        window.open("\HTML.html", "_blank");
    });

    const css = document.querySelector("#boton2");

    css.addEventListener("click",function(){
        window.open("\css.html", "_blank");
    });

    const JavaScript = document.querySelector("#boton3");

    JavaScript.addEventListener("click",function(){
        window.open("\JavaScript.html", "_blank");
    });

    const React = document.querySelector("#boton4");

    React.addEventListener("click",function(){
        window.open("\React.html", "_blank");
    });

    document.addEventListener("DOMContentLoaded", function() {
        const selectFondo = document.getElementById("fondo");
    
        selectFondo.addEventListener("change", function() {
            const selectedValue = selectFondo.value;
            document.body.style.backgroundImage = selectedValue;
        });
    });
    

    
