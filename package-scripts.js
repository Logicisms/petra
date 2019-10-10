module.exports = {
    scripts: {
        clean: {
            build: "rimraf ./dev/build",
            dist: "rimraf ./dev/dist",

            default: "nps clean.build && nps clean.dist"
        },
        sass: {
            build: "copy ./dev/src/sass/**/* ./dev/build/sass",
            compile: "node-sass --output-style=expanded --indent-width=4 ./dev/build/sass/style.scss ./dev/build/css/style.css",
            postcss: "postcss ./dev/build/css/*.css !**/*.min.css --dir ./dev/build/css --ext .min.css",
            dist: "copy ./dev/build/css/**/*.min.css ./dev/dist/css",

            default: "nps sass.build && nps sass.compile && nps sass.postcss && nps sass.dist"
        },
        html: {
            dist: "copy ./dev/src/html/**/* ./dev/dist",

            default: "nps html.dist"
        },
        watch: {
            sass: "onchange './petra/**/*.scss' './dev/src/sass/**/*.scss' -- nps sass",
            html: "onchange './dev/src/html/**/*.html' -- nps html",
        },
        server: "http-server ./dev/dist -p 8000 -s",
        stylelint: "stylelint './petra/**/*.scss'"
    }
};
