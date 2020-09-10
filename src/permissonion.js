import router from "./router/index"

import Api from "./api/login"

import { Message } from "element-ui"

router.beforeEach((to, from, next) => {

    const token = localStorage.getItem("jy_token");
    
    if (!token) {
        if (to.path !== "/login") {
            localStorage.removeItem("jy_info");
            next("/login");
        } else {
            console.log("111")
            next()
        }
    } else {
        if (to.path == "/login") {
            next();
        } else {
            const info = localStorage.getItem("jy_info");
            if (info) {
                next();
            } else {
                next("/login");
                Message.warning("请重新登录")
            }
        }
    }

})