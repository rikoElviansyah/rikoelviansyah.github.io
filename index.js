function tambah_nilai(){
    let isi = document.getElementById("isi");
    let isiValue = isi.value;

    if (isiValue !== "") {
        let span = document.createElement("SPAN");
        span.className = "content_span1";
        span.innerHTML = isiValue;
        console.log(isiValue);
    
        let spanClose = document.createElement ("SPAN");
        spanClose.className = "content1_span_close";
        spanClose.innerHTML = "\u00D7";

        span.appendChild(spanClose);

        spanClose.addEventListener("click", function(){
            span.classList.add("content1_none");
        });

        let content1 = document.getElementById("isi");
        content1.appendChild(span);

    }

    isi.value = "";

}

isi.addEventListener("keyup", function (keyboardevent) {
    if(keyboardevent.keycode === 13 && isi.value !== "") {
        document.getElementById("input_button").click();
        // console.log(isiValue);
    }

});
