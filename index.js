
var a = new Array(10).fill(0);
var cnt = 0;
function myFunction() {

    var theme = document.getElementsByTagName('link')[0];

    if (theme.getAttribute('href') == 'light.css') {
        theme.setAttribute('href', 'dark.css');
        document.getElementById("s1").src = "s1-dark.png";
        document.getElementById("s2").src = "s2-dark.png";
        document.getElementById("s3").src = "s3-dark.png";
        document.getElementById("s4").src = "s4-dark.png";
    } else {
        theme.setAttribute('href', 'light.css');
        document.getElementById("s1").src = "s1.webp";
        document.getElementById("s2").src = "s2.webp";
        document.getElementById("s3").src = "s3.webp";
        document.getElementById("s4").src = "s4.webp";
    }



}
function cartfunction(n, l) {
    document.getElementById("quantity" + l).style.display = "inline-block";
    if (a[l] >= 0)
        a[l] += n;
    if (a[l] > 0) {
        document.getElementById("quantity" + l).innerHTML = a[l];
        document.getElementById("btn" + l).style.display = "none";

        document.getElementById("plus" + l).style.display = "inline-block";
        document.getElementById("minus" + l).style.display = "inline-block";
    }
    else {

        document.getElementById("plus" + l).style.display = "none";
        document.getElementById("minus" + l).style.display = "none";
        document.getElementById("quantity" + l).style.display = "none";
        document.getElementById("btn" + l).style.display = "inline-block";

    }

    cnt = 0;
    for (var p = 0; p < 10; p++) {
        cnt += a[p];
    }
    if (cnt > 0) {
        document.getElementById("CartCount").style.display = "inline-block";
        document.getElementById("CartCount").innerHTML = cnt;
    }
    else
        document.getElementById("CartCount").style.display = "none";

}
