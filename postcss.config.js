module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: [
                'last 3 version',
                '> 0.5%',
                'maintained node versions',
                'not dead'
            ],
        }),
        require('cssnano')
    ]
};
