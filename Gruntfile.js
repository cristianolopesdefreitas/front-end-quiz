module.exports = function( grunt ) {
    'use strict';

    grunt.initConfig({
        appConfig: {
            dev: {
                base: 'dev',
                css: 'dev/css',
                fonts: 'dev/fonts',
                images: 'dev/images',
                js: 'dev/js',
                pages: 'dev/pages',
                includes: 'dev/includes'
            },
            dist: {
                base: 'dist',
                css: 'dist/css',
                fonts: 'dist/fonts',
                images: 'dist/images',
                js: 'dist/js'
            },
            vendorJS: [
                'bower_components/jquery/dist/jquery.min.js',
                'bower_components/bootstrap/dist/js/bootstrap.min.js',
                'bower_components/jquery-validation/dist/jquery.validate.min.js'
            ],
            baseJS: [
                '<%= appConfig.dev.js %>/quizFPU.js',
                '<%= appConfig.dev.js %>/formValidateSettings.js',
                '<%= appConfig.dev.js %>/createUser.js',
                '<%= appConfig.dev.js %>/answerQuestion.js',
                '<%= appConfig.dev.js %>/quizResult.js',
                '<%= appConfig.dev.js %>/viewRanking.js',
                '<%= appConfig.dev.js %>/administrationLogin.js',
                '<%= appConfig.dev.js %>/registerQuestions.js',
                '<%= appConfig.dev.js %>/moderateRanking.js',
                '<%= appConfig.dev.js %>/quizSettings.js',
                '<%= appConfig.dev.js %>/app.js'
            ],
            vendorCSS: [
                'bower_components/bootstrap/dist/css/bootstrap.min.css'
            ],
            baseCSS: [
                '<%= appConfig.dev.css %>/custom.css'
            ],
            baseFonts: 'bower_components/bootstrap/dist/fonts/',
            includes: [
                // html includes
                '<%= appConfig.dev.includes %>/header.html',
                '<%= appConfig.dev.includes %>/nav.html',
                '<%= appConfig.dev.includes %>/footer.html'
            ],
            pages: [
                // html pages
                '<%= appConfig.dev.pages %>/create-user.html',
                '<%= appConfig.dev.pages %>/answer-question.html',
                '<%= appConfig.dev.pages %>/quiz-result.html',
                '<%= appConfig.dev.pages %>/view-ranking.html',
                '<%= appConfig.dev.pages %>/administration-login.html',
                '<%= appConfig.dev.pages %>/register-questions.html',
                '<%= appConfig.dev.pages %>/moderate-ranking.html',
                '<%= appConfig.dev.pages %>/quiz-settings.html'
            ],
            watchFiles: [ 'Gruntfile.js' ].concat(
                '<%= appConfig.baseCSS %>',
                '<%= appConfig.baseJS %>',
                '<%= appConfig.includes %>',
                '<%= appConfig.pages %>'
            )
        }, // appConfig

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            target: [ 'Gruntfile.js' ].concat(
                '<%= appConfig.baseJS %>'
            )
        }, // jshint

        uglify: {
            options: {
                preserveComments: false
            },
            dist: {
                files: {
                    '<%= appConfig.dist.js %>/quizfpu.min.js': [].concat(
                        '<%= appConfig.vendorJS %>',
                        '<%= appConfig.baseJS %>'
                    )
                }
            }
        }, // uglify

        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            dist: {
                files: {
                    '<%= appConfig.dist.css %>/quizfpu.min.css': [].concat(
                        '<%= appConfig.vendorCSS %>',
                        '<%= appConfig.baseCSS %>'
                    )
                }
            }
        }, // cssmin

        copy: {
            dist: {
                files:  [
                    {
                        expand: true,
                        cwd: '<%= appConfig.baseFonts %>',
                        dest: '<%= appConfig.dist.fonts %>/',
                        src: [ '*' ]
                    },
                    {
                        expand: true,
                        cwd: '<%= appConfig.dev.images %>',
                        dest: '<%= appConfig.dist.images %>/',
                        src: [ '*' ]
                    }
                ]
            },
            dev: {
                files:  [
                    {
                        expand: true,
                        cwd: '<%= appConfig.baseFonts %>',
                        dest: '<%= appConfig.dev.fonts %>/',
                        src: [ '*' ]
                    }
                ]
            }
        }, // copy

        concat: {
            css: {
                files: {
                    '<%= appConfig.dev.css %>/quizfpu.min.css':  [].concat(
                        '<%= appConfig.vendorCSS %>',
                        '<%= appConfig.baseCSS %>'
                    )
                }
            },
            js: {
                files: {
                    '<%= appConfig.dev.js %>/quizfpu.min.js': [].concat(
                        '<%= appConfig.vendorJS %>',
                        '<%= appConfig.baseJS %>'
                    )
                }
            }
        }, // concat

        includes: {
            dist: {
                cwd: '<%= appConfig.dev.pages %>',
                dest: '<%= appConfig.dist.base %>',
                src: [ '*.html' ],
                options: {
                    flatten: true,
                    includePath: '<%= appConfig.dev.includes %>'
                }
            },
            dev: {
                cwd: '<%= appConfig.dev.pages %>',
                dest: '<%= appConfig.dev.base %>',
                src: [ '*.html' ],
                options: {
                    flatten: true,
                    includePath: '<%= appConfig.dev.includes %>'
                }
            },
        }, // includes

        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: '*',
                    open: 'http://localhost:9000/create-user.html',
                    base: '<%= appConfig.dev.base %>'
                }
            }
        }, // connect

        watch: {
            dev: {
                files: '<%= appConfig.watchFiles %>',
                tasks: [ 'jshint', 'concat:css', 'concat:js', 'includes:dev' ],
                options: {
                    livereload: true
                }
            }
        } // watch
    });

    grunt.registerTask( 'default', function() {
        grunt.task.run([ 'dev' ]);
    });

    grunt.registerTask( 'dev', function() {
        grunt.task.run([
            'jshint',
            'concat:css',
            'concat:js',
            'includes:dev',
            'copy:dev',
            'connect',
            'watch:dev'
        ]);
    });

    grunt.registerTask( 'dist', function() {
        grunt.task.run([
            'jshint',
            'uglify:dist',
            'cssmin:dist',
            'includes:dist',
            'copy:dist'
        ]);
    });

    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-contrib-copy' );
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-includes' );
    grunt.loadNpmTasks( 'grunt-contrib-connect' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
};
