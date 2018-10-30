/**
 *  Gruntfile's inline documentation uses numerical annotations.
 *  Working notes use alphabetical annotations.
 *
 *  1. The config and config alias(es) are declared on one 'var' statement as
 *     a matter of preference.
 *  2. Automatically loads all grunt tasks listed in package.json.
 *  3. A function is used here to build the files object in accordance with the
 *     'stylesheets' array defined in the config.
 *
 *  a. This *could* use a function to specifically target files corresponding to
 *     those assigned to 'stylesheets'. As-is, doing so would probably provide
 *     little to no practical benefit.
**/

module.exports = function(grunt) {
    var config = grunt.file.exists('./config/grunt-local.js') ? require('./config/grunt-local.js') : require('./config/grunt.js'), // [1]
        dir    = config.dir,
        styles = config.stylesheets || grunt.file.expand({ cwd: dir.src + '/sass' }, ['*.s{a,c}ss', '!_*.s{a,c}ss']);

    require('load-grunt-tasks')(grunt); // [2]

    grunt.initConfig({
        copy: {
            'build-markup': { expand: true, cwd: dir.src + '/html', src: ['**/*'], dest: dir.bld + '/html/' },
            'build-styles': { expand: true, cwd: dir.src + '/sass', src: ['**/*'], dest: dir.bld + '/sass/' },

            'dist-markup': { expand: true, cwd: dir.bld + '/html', src: ['**/*.html'], dest: dir.out + '/www/' },
            'dist-styles': { expand: true, cwd: dir.bld + '/css', src: ['**/*.css'], dest: dir.out + '/www/css/' }, // [a]

            'make-local-config': { expand: true, cwd: 'config', src: ['*.js', '!*-local.js'], dest: 'config/', ext: '-local.js' }
        },

        sass: {
            options: {
                implementation: require(config.sass.implementation),
                indentWidth: 4,
                outputStyle: config.sass.style,
                precision: config.sass.precision
            },
            build: {
                files: (function() { // [3]
                    var out = [];

                    for (let sass of styles) {
                        out.push({
                            expand: true,
                            cwd: dir.bld + '/sass',
                            src: sass,
                            dest: dir.bld + '/css/',
                            ext: '.css'
                        });
                    }

                    return out;
                } ())
            }
        },

        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')(config.postcss.autoprefixer)
                    // require('cssnano')()
                ]
            },
            build: { expand: true, cwd: dir.bld + '/css', src: ['**/*.css'], dest: dir.bld + '/css/' }
        },

        minifyHtml: {
            options: {
                spare: true,
                quotes: true
            },
            build: {
                expand: true,
                cwd: dir.bld + '/html',
                src: ['**/*.html'],
                dest: dir.bld + '/html'
            }
        },

        connect: {
            localhost: {
                options: {
                    hostname: 'localhost',
                    port: 8000,
                    useAvailablePort: true,
                    base: dir.out + '/www',
                    open: config.connect.open,
                    livereload: config.connect.livereload
                }
            }
        },

        watch: {
            grunt: {
                files: ['gruntfile.js', 'config/*.js'],
                tasks: ['clean', 'concurrent:build'],
                options: {
                    reload: true
                }
            },
            html: {
                files: [dir.src + '/html/**/*'],
                tasks: ['_build-markup'],
                options: {
                    spawn: false
                }
            },
            sass: {
                files: ['petra/**/*', dir.src + '/sass/**/*'],
                tasks: ['_build-styles'],
                options: {
                    spawn: false
                }
            },
            livereload: {
                files: [dir.out + '/**/*'],
                options: {
                    livereload: config.connect.livereload
                }
            }
        },

        concurrent: {
            build: ['_build-markup', '_build-styles']
        },

        clean: {
            build: [dir.bld],
            dist: [dir.out],
            newer: ['node_modules/grunt-newer/.cache']
        },

        sasslint: {
            options: {
                configFile: './.sasslintrc'
            },
            src: [dir.src + '/sass/**/*.s{a,c}ss'],
            petra: ['petra/**/*.s{a,c}ss']
        },

        csslint: {
            options: {
                csslintrc: './.csslintrc'
            },
            dist: [dir.out + '/**/*.css']
        }
    });

    /*  Environment tasks
     *  ===================================================================== */

    grunt.registerTask('purge', 'Deletes the node_modules directory. Reinstall packages immediately after running.', function(){
        grunt.file.delete('node_modules');
        grunt.log.ok(['\'node_modules\' has been purged']);
    });

    grunt.registerTask('skipped-task', 'Prints when a task is skipped based on a ternary.', function(task){
  		grunt.log.writeln('Task \'' + task +'\' was skipped');
	});

    grunt.registerTask('make-local-config', ['copy:make-local-config']);


    /*  Build tasks
     *  ===================================================================== */

    grunt.registerTask('_build-markup', [
        'newer:copy:build-markup',
        config.build.optimize ? 'minifyHtml' : 'skipped-task:minifyHtml',
        'newer:copy:dist-markup'
    ]);
    grunt.registerTask('_build-styles', [
        'newer:copy:build-styles',
        'sass',
        config.build.optimize ? 'postcss' : 'skipped-task:postcss',
        'newer:copy:dist-styles'
    ]);
    grunt.registerTask('build', [
        config.build.lint ? 'sasslint:src' : 'skipped-task:sasslint',
        'concurrent:build',
        config.build.clean ? 'clean:build' : 'skipped-task:clean:build',
        config.build.lint ? 'csslint:dist' : 'skipped-task:csslint',
        'connect',
        'watch'
    ]);

    grunt.registerTask('default', config.build.default);


    /*  Debug tasks
     *  ===================================================================== */

    grunt.registerTask('lint-sass', 'Runs sasslint on the specified target, or on all targets.', function(target){
        grunt.task.run([target ? 'sasslint:' + target : 'sasslint']);
    });
    grunt.registerTask('lint-css', ['clean', '_build-styles', 'csslint:dist']);
};
