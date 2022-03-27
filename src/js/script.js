import { tns } from "tiny-slider";

tns({
    loop: true,
    controls: false,
    nav: false,
    speed: 700,
    autoplay: true,
    autoplayTimeout: 2750,
    autoplayButtonOutput: false,
    responsive: {
        430: {
            items: 2,
            edgePadding: 30,
            gutter: 10,
        },
        769: {
            items: 2,
            edgePadding: 150,
            gutter: 20,
        },
        992: {
            items: 2,
            edgePadding: 150,
            gutter: 31,
        },
        1024: {
            items: 3,
            edgePadding: 150,
            gutter: 31,
        },
        1440: {
            items: 4,
            edgePadding: 150,
            gutter: 31,
        }
    }
});
tns({
    container: ".secondSlider",
    loop: true,
    controls: false,
    nav: false,
    speed: 700,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayButtonOutput: false,
    autoplayDirection: "backward",
    responsive: {
        430: {
            items: 2,
            edgePadding: 30,
            gutter: 10,
        },
        769: {
            items: 2,
            edgePadding: 150,
            gutter: 20,
        },
        992: {
            items: 2,
            edgePadding: 150,
            gutter: 31,
        },
        1024: {
            items: 3,
            edgePadding: 150,
            gutter: 31,
        },
        1440: {
            items: 4,
            edgePadding: 150,
            gutter: 31,
        }
    }
});