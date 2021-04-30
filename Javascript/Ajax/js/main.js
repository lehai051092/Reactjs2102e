let btnLoad = document.querySelector('.btn-load');
let showTotal = document.querySelector('.show-total');
let interval;


btnLoad.addEventListener('click', async () => {
    // callApi();
    // getCovidInfo().then((data) => {
    // });
    let data = await getCovidInfo();
    showTotal.value = data.Global.TotalConfirmed;
    console.log("main thread");
    // async await
});

// function callApi() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             const data = JSON.parse(this.response);
//             showTotal.value = data.Global.TotalConfirmed;
//         }
//     };
//     xhttp.open("GET", "https://api.covid19api.com/summary", true);
//     xhttp.send();
// }

function getCovidInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("done get api");
            resolve({
                Global: {
                    TotalConfirmed: 10000
                }
            })
        }, 500);
    });
}



