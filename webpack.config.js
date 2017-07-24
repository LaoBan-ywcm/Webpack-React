module.exports = {
    entry:__dirname + '/app/main.js',   //入口文件
    output:{
        path:__dirname + '/public',    //输出路径
        filename:'bundle.js'            //输出的文件名
    },
    devtool:"source-map",               //配置source Maps选项
    devServer:{                         //设置本地服务器
        contentBase:'./public',         //生成服务器的目录
        port:"9000",                    //端口号
        inline:true,                    //当源文件修改时要不要刷新页面
        historyApiFallback:true,        //HTML5中单页面应用
    }
}