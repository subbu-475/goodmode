    var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for (tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    var sidemenu=document.getElementById("side-menu");
    function openmenu() {
        sidemenu.style.right="0";
    }
    function closemenu() {
        sidemenu.style.right="-200px";
    }

    var get=document.querySelector(".down-tag");
    var cl=document.querySelector("#btn-col").addEventListener("click",function() {
        document.querySelector("#alert").classList.remove("down-tag1");
        document.querySelector("#alert").classList.add("down-tag");
        setTimeout( () =>{
            document.querySelector("#alert").classList.remove("down-tag");
        },3000);
        setTimeout( () =>{
            document.querySelector("#alert").classList.add("down-tag1");
        },3000);
    });
