const disappear = (selector, time) => {
    setTimeout(() => {
        document.querySelector(selector).style.visibility = "hidden";
    }, time);
};

function scrollTo(element, to, duration) {
    if (duration < 0) { return; }
    let difference = to - element.scrollTop;
    let perTick = difference / duration * 2;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        scrollTo(element, to, duration - 2);
    }, 10);
}

export default function() {
    document.getElementById("reset-button").addEventListener("click", function() {
        window.onpopstate = () => location.reload();

        scrollTo(document.body, 0, 100);
        disappear(".navigation", 500);

        setTimeout( () => {
            document.querySelectorAll("p, ul").forEach( (p) => { p.style.color = "red"; });
        }, 500);

        disappear("#reset-button", 750);
        disappear(".post-title", 2000);
        disappear(".post-date", 2500);

        setTimeout( () => {
            document.querySelectorAll("p:nth-child(odd), ul").forEach( (p) => { p.style.visibility = "hidden"; });
        }, 3000);

        disappear(".post-container", 3250);
        disappear(".post-sub-title", 4000);
        disappear(".nav-bar", 4500);



        setTimeout(() => {
            const img = document.createElement("IMG"),
                container = document.querySelector(".main-post-content");
            img.setAttribute("src", "/img/breathe.gif");
            img.setAttribute("width", "180px");
            img.style.marginTop = "100px";
            container.style.textAlign = "center";
            container.prepend(img);
        }, 5000);

    });
}
