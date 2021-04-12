function getTimeShowAlert() {
    let d = new Date();
    alert("Bh là " + d.getHours() + " giờ, " +  d.getMinutes() + " phút!");
}

window.onload = function () {
    getTimeShowAlert();
};

