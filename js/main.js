const btn = document.getElementById("submit")
var xhr = new XMLHttpRequest();

function random(number) {
    return Math.floor(Math.random() * (number + 1))
}
btn.onclick = function () {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'
    document.body.style.backgroundColor = rndCol
    var comment = document.getElementById("comment").value
    var data = new FormData();
    data.append("key", comment);
    // data = { key: comment }

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.response)
            var prediction = JSON.parse(this.responseText)
            document.getElementById("response").style.display = "inline"
            document.getElementById("prediction").innerHTML = prediction.response

        }
    });
    xhr.open("POST", "https://cse5334-spring20.herokuapp.com/post_test");
    // xhr.open("POST", "http://localhost:8080/post_test");
    xhr.send(data);
}