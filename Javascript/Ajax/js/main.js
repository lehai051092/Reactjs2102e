let btnLoad = document.querySelector('.btn-load');
let showTotal = document.querySelector('.show-total');
let interval;


btnLoad.addEventListener('click', () => {
    clearInterval(interval);

    interval = setInterval(() => {
        loadDoc();
    }, 18000) // 30 minutes reload
});

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.response);
            showTotal.value = data.Global.TotalConfirmed;
        }
    };
    xhttp.open("GET", "https://api.covid19api.com/summary", true);
    xhttp.send();
}



