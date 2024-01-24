import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";
import {onClick,setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";


setInner("cookiestext",getCookie('login'));
onClick("copybutton",copyText);

function copyText() {
	getCookie('login');
    /* Copy text into clipboard */
    navigator.clipboard.writeText(getCookie('login'));
}