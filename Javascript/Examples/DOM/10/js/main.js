function showMore() {
    let dots = document.getElementById('dots');
    let showMore = document.getElementById('more-text');
    let btnShow = document.getElementById('show-hide-content');

    if (btnShow.value === "show") {
        dots.style.display = "none";
        showMore.style.display = "inline";
        btnShow.value = "less";
        btnShow.innerText = "Show less"
    } else {
        dots.style.display = "inline";
        showMore.style.display = "none";
        btnShow.value = "show";
        btnShow.innerText = "Show more";
    }
}