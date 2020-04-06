const webpack= require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer= require('autoprefixer');
const CleanWebpackPlugin= require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    // devtool: "source-map",
    entry: {
        index:'./src/index.js',
        results:'./src/results.js',
        empleados:'./src/empleados.js',
        editarEmpleados:'./src/editarEmpleados.js',
        departamentos:'./src/departamentos.js',
        editarDepartamentos:'./src/editarDepartamentos.js',
        empresa: './src/empresa.js',
        editarEmpresa: './src/editarEmpresa.js',
        welcome: './src/welcome.js',
        login: './src/login.js',
    },
    output: {
        path: __dirname+'/dist',
        publicPath: '/',
        filename: 'js/[name].js', // Quita el js/ si tenemos problemas
        // filename: 'js/[name].[chunkhash].js', // Quita el js/ si tenemos problemas
        // publicPath: "/dist/"
    },
    devServer:{
        contentBase: __dirname+'/dist',
        compress: false,
        port: 9000,
        disableHostCheck: true
    },
    // devtool: 'source-map',
    module: {
        rules: [
            { // Loader
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { // Loader
                test: /\.(css|scss|sass)$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    {loader: MiniCssExtractPlugin.loader},
                    "css-loader",
                    "resolve-url-loader",
                    "sass-loader?outputStyle=compressed" // compiles Sass to CSS, using Node Sass by default 'compressed&sourceMap'
                ]
            },
            
            { // Loader
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use:[
                    "file-loader?name=img/[name].[ext]", 
                    "image-webpack-loader?bypassOnDebug"
                ]
            },
            { // Loader
                test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
                use:"file-loader?name=assets/[name].[ext]"
            },
            { // Loader
                test: /\.pug$/, 
                loader: "pug-loader", 
                query: { pretty: true }
            },
            { // Loader
                test: /\.vue$/, 
                loader: "vue-loader"
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({}),
        new HtmlWebpackPlugin({template: './src/pug/index.pug', filename: 'index.html',minify: false, chunks: ['index']}), // 'template' es el lugar de donde toma el archivo a compilar, y 'filename' es como se llamara el archivo compilado
        new HtmlWebpackPlugin({template: './src/pug/results.pug', filename: 'results.html',minify: false, chunks: ['results']}), // 'template' es el lugar de donde toma el archivo a compilar, y 'filename' es como se llamara el archivo compilado
        new HtmlWebpackPlugin({template: './src/pug/empleados.pug', filename: 'empleados.html',minify: false, chunks: ['empleados']}), // 'template' es el lugar de donde toma el archivo a compilar, y 'filename' es como se llamara el archivo compilado
        new HtmlWebpackPlugin({template: './src/pug/departamentos.pug', filename: 'departamentos.html',minify: false, chunks: ['departamentos']}), // 'template' es el lugar de donde toma el archivo a compilar, y 'filename' es como se llamara el archivo compilado
        new HtmlWebpackPlugin({template: './src/pug/editarEmpleados.pug', filename: 'editarEmpleados.html',minify: false, chunks: ['editarEmpleados']}), // 'template' es el lugar de donde toma el archivo a compilar, y 'filename' es como se llamara el archivo compilado
        new HtmlWebpackPlugin({template: './src/pug/editarDepartamentos.pug', filename: 'editarDepartamentos.html',minify: false, chunks: ['editarDepartamentos']}), // 'template' es el lugar de donde toma el archivo a compilar, y 'filename' es como se llamara el archivo compilado
        new HtmlWebpackPlugin({template: './src/pug/empresa.pug', filename: 'empresa.html' ,minify: false, chunks: ['empresa']}),
        new HtmlWebpackPlugin({template: './src/pug/editarEmpresa.pug', filename: 'editarEmpresa.html' ,minify: false, chunks: ['editarEmpresa']}),
        new HtmlWebpackPlugin({template: './src/pug/welcome.pug', filename: 'welcome.html' ,minify: false, chunks: ['welcome']}),
        new HtmlWebpackPlugin({template: './src/pug/login.pug', filename: 'login.html' ,minify: false, chunks: ['login']}),
        new MiniCssExtractPlugin({filename: "css/[name].css", chunkFilename: "[id].css" }), // Borra el 'css/' si quieres que se guarde en la raiz de 
        new webpack.ProvidePlugin({ $: 'jquery' }),
        new webpack.ProvidePlugin({ jQuery: 'jquery' }),
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    }
};