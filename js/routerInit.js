/*
 * Created by Stefan Korecko, 2020
 * Parametric client side hash router import and initialisation
 */

import Router from "./paramHashRouter.js";
import Routes from "./routes.js";

window.router = new Router(Routes,"welcome");