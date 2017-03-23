module.exports = {
    entry: ['./index2.js'],
    output: {
        filename: 'bundle.js',
        path: './'
    },
    module: {
        loaders:[
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
        ]
    }
};