let link = "https://www.facebook.com/ngothucdat";

function getIdNameFacebook(link) {
    for (let i = 0; i < link.length; i++) {
        if (link.slice(0, i) === "https://www.facebook.com/") {
            link = link.slice(i);
        }
    }

    return link;
}

console.log(getIdNameFacebook(link));