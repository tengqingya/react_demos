module.exports = {
    entry: ['./project/demo01/index.js','./project/demo01/main.js'],
    output: {
        filename: 'bundle.js',
        path: __dirname+'/dist'
    },
    module: {
        loaders:[
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
        ]
    }
};
