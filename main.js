const text_1 = document.getElementById('Fylo');
const btn_1 = document.getElementById('Get-Started');
const text_2 = document.querySelectorAll(".item p");
const text_3 = document.querySelectorAll(".text-part-two p");
const btn_2 = document.querySelector('#productive .text-part-two button');
const profileTexts = document.querySelectorAll('#profiles .container-profile .profile-text');
const text_4 = document.querySelector('#email .content p');
const btn_3 = document.querySelector('#email .content .form button');
const text_5 = document.querySelectorAll('.footer-items  p');
const links = document.querySelectorAll('.info-item a');
const socialIcon = document.querySelectorAll('#footer .footer-contianer .footer-items .social-icon ul li a');
let btn_up = document.getElementById("position-fixed");

//start change styling for elements by hover

(function () {
    text_1.addEventListener('mouseover' , function(){
        text_1.style.color = "#65e2d9";
    });
    text_1.addEventListener("mouseout" ,function () {
        text_1.style.color = "#ffffff";
    });
})();

(function(){
    btn_1.addEventListener('mouseover' , function(){
        btn_1.style.fontWeight = "bold";
    });
    btn_1.addEventListener("mouseout" ,function () {
        btn_1.style.fontWeight = "normal";
    });
})();

text_2.forEach(function(item) {
    item.addEventListener('mouseover', function(){
        item.style.color = "#65e2d9";
    });
    item.addEventListener("mouseout", function () {
        item.style.color = "#ffffff";
    });
});

text_3.forEach(function (item) {
    item.addEventListener('mouseover', function(){
        item.style.color = "#65e2d9";
    });
    item.addEventListener("mouseout", function () {
        item.style.color = "#ffffff";
    });
});

(function(){
    btn_2.addEventListener('mouseover', function() {
        btn_2.style.textDecoration = 'underline';
    });
    btn_2.addEventListener('mouseout', function() {
        btn_2.style.textDecoration = 'none';
    });
})();

profileTexts.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        item.style.boxShadow = '0 0 10px var(--Cyan)';
        item.style.color = 'var(--Cyan)';
        item.style.transitionDelay = '0.2s';
        item.style.transitionDuration = '0.5s';
        item.style.transform = 'scale(1.05)';
        item.style.outline = '3px solid var(--Cyan)';
    });
    item.addEventListener('mouseout', function() {
        item.style.boxShadow = 'none';
        item.style.color = '';
        item.style.transitionDelay = '';
        item.style.transitionDuration = '';
        item.style.transform = 'scale(1)';
        item.style.outline = 'none';
    });
});

(function(){
    text_4.addEventListener('mouseover', function() {
        text_4.style.color = 'var(--Cyan)';
    });
    text_4.addEventListener('mouseout', function() {
        text_4.style.color = "";
    });
})();

(function(){
btn_3.addEventListener('mouseover', function() {
    btn_3.style.color = "black";
    btn_3.style.boxShadow = '0 0 5px var(--Cyan)';
});
btn_3.addEventListener('mouseout', function() {
    btn_3.style.color = "";
    btn_3.style.boxShadow = "none";
});
})();

text_5.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.style.color = 'var(--Cyan)';
        });
        item.addEventListener('mouseout', function() {
            item.style.color = '';
        });
    });

links.forEach(function (item) {
    item.addEventListener("mouseover",function () {
        item.style.color ="white"
        item.style.fontWeight ="bold"
    } );
    item.addEventListener("mouseout", function() {
        item.style.color = ""
        item.style.fontWeight ="normal"
    })
});

socialIcon.forEach(function (item) {
    item.addEventListener("mouseover", function () {
        item.style.color = "var(--Blue)"
    });
    item.addEventListener("mouseout", function () {
        item.style.color = ""
    });
});

//end change styling for elements by hover
// function scroll up 
function btnUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        
    });
};
btnUp();
// Function to toggle button visibility based on scroll position
function btn() {
    if (window.scrollY > 0) {
        btn_up.style.display = 'block';
    } else {
        btn_up.style.display = 'none';
    }
    // Trigger the function on scroll
    window.addEventListener('scroll', btn);
}
btn();