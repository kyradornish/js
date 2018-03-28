/*******************/
/* 4 STEPS OF AJAX */
/*******************/

// 1. CREATE XMLHttp REQUEST OBJECT
var xhr = new XMLHttpRequest();

// 2. CREATE CALL BACK FUNCTION
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        document.getElementById("ajax").innerHTML = xhr.responseText;
        // $('#ajax').html(xhr.responseText);
        console.log("Yo - it works!")
    }
};

// 3. OPEN REQUEST
xhr.open('GET', '../../header.html');

// 4. SENT THE REQUEST
function getData() {
    xhr.send();
    document.getElementById("load").style.display = 'none';
};