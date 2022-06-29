var slideIndex = 1;
showSlides(slideIndex);

// חצים ימינה ושמאלה
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// שורת התמונות האופציונליות שמופיעות מתחת לתמונה הראשית
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
////הודעת שגיאה לפי שדה
//function chackFunc() {
//var input = document.getElementById("fullName").value;
//if (input == "") {
//    alert("נא מלא את שמך בשדה "שם מלא"");
//    }
//}