/* import { router } from '../router/index.routes'; */

const ruta = require("../router/index.routes.js");

window.addEventListener('hashchange', () => {
    /* console.log(window.location.hash); */

    ruta.rou(window.location.hash);
});