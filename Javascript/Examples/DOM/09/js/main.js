function getClock() {
    let d = new Date();
    let html = '';

    html += "Ngày: " + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + "<br/>";
    html += "" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    document.getElementById('show-clock').innerHTML = html;
}

function runClock() {
    setInterval(function () {
        getClock();
    }, 1000);
}

window.onload = function () {
    runClock();
};

