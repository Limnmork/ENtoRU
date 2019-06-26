function ENtoRU(){
    var str = document.getElementById("text").value;
    var ru = [
        "й","ц","у","к","е","н","г","ш","щ","з","х","ъ",
        "ф","ы","в","а","п","р","о","л","д","ж","э",
        "я","ч","с","м","и","т","ь","б","ю"
    ];

    var en = [
        "q","w","e","r","t","y","u","i","o","p","\\[","\\]",
        "a","s","d","f","g","h","j","k","l",";","'",
        "z","x","c","v","b","n","m","\\,","\\."
    ];

    for (var i = 0; i < en.length; i++)
    {
        var reg = new RegExp(en[i], 'mig');
        str = str.replace(reg, function (a) {
            return a == a.toLowerCase() ? ru[i] : ru[i].toUpperCase();
        });
    }
    document.getElementById("text").value = str;
}

window.onload = function(){ 
    document.getElementById("myb").onclick = ENtoRU;
};