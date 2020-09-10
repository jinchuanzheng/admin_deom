module.exports = {
    devServer:{
        port:8001,//端口号，如果端口被占用，就加1
        open:true, //启动项目会自动打开浏览器
        https:false, //使用什么协议 也可以用http
        host:"localhost",//主机名，也可以用127.0.0.1或者0.0.0.0,

        // proxy:{
        //     [process.env.VUE_APP_BASE_API]:{
        //         target:process.env.VUE_APP_SERVICE_URL,
        //         changOrigin:true,
        //         pathRewrite:{
        //             ["^" + process.env.VUE_APP_BASE_API] : ""
        //         }
        //     }
        // }
    },
    lintOnSave:false,// 默认 true, 警告仅仅会被输出到命令行，且不会使得编译失败
    outputDir: "dist2", // 默认是 dist ,存放打包文件的目录,
    assetsDir: "assets", // 存放生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir) 目录
    indexPath: "out/index.html", // 默认 index.html, 指定生成的 index.html 的输出路径 (相对于 outputDir)。
    productionSourceMap: false, // 打包时, 不生成 .map 文件, 加快打包构建
}
