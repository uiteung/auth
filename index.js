import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";
import {onClick,setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";


let cookievalue= getCookie('login');
setInner("cookiestext",cookievalue);
onClick("copybutton",copyText);

function copyText() {
    navigator.clipboard.writeText(cookievalue);
}