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
    },
    module:{
        loaders:[{                      //设置json-loader
            test:/\.json$/,             //loader处理的文件类型
            loader:"json-loader",       //需要用到的loader
            exclude:/node_modules/      //不包括的文件
        },{
            test:/\.js$/,               //babel
            loader:"babel-loader",
            exclude:/node_modules/
        },{
            test:/\.css$/,              //style-loader和css-loader
            loader:"style-loader!css-loader?modules"
        }]
    }
}