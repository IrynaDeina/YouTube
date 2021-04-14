// var btn = document.getElementById("theme_button");
// var link = document.getElementById("theme_link");

// btn.addEventListener("click", function () { ChangeTheme(); });

// function ChangeTheme()
// {
//     let lightTheme = "light.css";
//     let darkTheme = "dark.css";

//     var currTheme = link.getAttribute("href");
//     var theme = "";

//     if(currTheme == lightTheme)
//     {
//     currTheme = darkTheme;
//     theme = "dark";
//     }
//     else
//     {    
//     currTheme = lightTheme;
//     theme = "light";
//     }

//     link.setAttribute("href", currTheme);
//     console.log(currTheme);
// }


if(!localStorage.theme) localStorage.theme = 'light';
document.body.className = localStorage.theme;

let switchMode = document.querySelector('#switch');

switchMode.onclick = () => {
    document.body.classList.toggle('dark');
    localStorage.theme = document.body.className || 'light';
}
