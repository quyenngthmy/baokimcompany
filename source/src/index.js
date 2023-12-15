import "./index.scss";
import "./js/menu";
import "./js/scrolltotop";
import "./js/plugin-chat";
import "./js/reveal";

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}