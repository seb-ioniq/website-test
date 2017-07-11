module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    module: {
        loaders: [
            {
                test: /\.ts?$/, loader: "ts-loader"
            }
        ]
    }
};