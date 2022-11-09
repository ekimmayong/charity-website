const path = require('path'); 

module.exports = { 
    output: { 
        path: path.join(__dirname, '/dist'), 
        filename: 'index.bundle.js', 
    }, 
    cache: false,
    devServer: { 
        port: 3000 ,
        historyApiFallback: true
    }, 

    module: { 

        rules: [ 
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader' 
                } 
            }, 
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ] 
    } 
}; 