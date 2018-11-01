module.exports = {
    dir: {
        src: 'src',
        bld: 'build',
        out: 'dist'
    },
    stylesheets: [
        'style.scss'
    ],
    sass: {
        implementation: 'dart-sass',
        precision: 5,
        style: 'expanded'
    },
    postcss: {
        autoprefixer: {
            browsers: 'last 8 versions'
        }
    },
    connect: {
        open: false,
        livereload: 35729
    },
    build: {
        default: ['clean', 'build', 'connect', 'watch'],
        clean: false,
        lint: true,
        optimize: true
    }
};
