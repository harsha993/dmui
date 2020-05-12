const btn = document.getElementById("submit")
var xhr = new XMLHttpRequest();

btn.onclick = function () {
    var comment = document.getElementById("comment").value
    if(comment.length===0){
        alert("Please enter a review")
        return
    }
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
    xhr.open("POST", "https://cse5334-spring20.herokuapp.com/predict");
    xhr.send(data);
}