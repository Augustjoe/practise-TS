const path = require('path')

// webpack 中的所有配置信息都应该写在module.exports中
// 引入一个自动生成html的包
const HTMLWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    // 指定入口文件
    entry:"./src/index.ts",
    // 指定打包文件所在目录
    output:{
        path:path.resolve(__dirname,'dist'),
        // 打包文件的文件
        filename:"bundle.js",
        environment:{
            // 不要使用箭头函数,配合IE11使用
            arrowFunction:false,
        }
    },
    // 指定webpack打包时要使用的模块
    module:{
        // 指定加载的规则
        rules:[
            // 指定ts文件使用ts-loader进行编译，并排除了node-modules中的ts文件
            {   
                // test指定规则生效文件,指定所有的ts文件
                test:/\.ts$/,
                // 加载器可以写多个,执行顺序是从后往前执行
                use:[
                // 配置加载器
                {
                    loader:"babel-loader",
                    // 设置bable
                    options:{
                        // 设置预定义的环境
                        presets:[
                            [
                                // 指定环境插件
                                "@babel/preset-env",
                                {   
                                    // 要兼容的目标浏览器
                                    targets:{
                                        'chrome':"88"
                                    },
                                    // 指定corejs版本
                                    'corejs':"3",
                                    // 使用corejs的方式 "usage"表示按需加载
                                }
                            ]
                        ]
                    }
                },'ts-loader'],
                // 排除的文件
                exclude:/node-modules/
            },
            // 设置less打包
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    plugins:[
        // 自动生成一个html文件并引入打包后的JS
        new HTMLWebpackPlugin(
            // 配置项
            {
                // 可自定义打包后的HTML文件title
                // title:"自定义title"
                template:"./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    // 用来设置引用模块
    resolve:{
        // 设置可引入 ts 和 js 文件
        extensions:[".ts",".js"]
    }
}