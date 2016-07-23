'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    var serveStatic = require('serve-static');

    var options = {
        // Project settings
        paths: {
            // Configurable paths
            app: 'app',
            dist: 'dist'
        }
    };


    // Define the configuration for all the tasks
    grunt.initConfig({
        wiredep: {
            app: {
                src: ['app/index.html'],
                ignorePath: /\.\.\//,
                exclude: ['js-rich-marker', 'google-maps-utility-library-v3-markerwithlabel', 'google-maps-utility-library-v3-infobox', 'google-maps-utility-library-v3-keydragzoom']
            },
            //test: {
            //    devDependencies: true,
            //    src: '<%= karma.unit.configFile %>',
            //    ignorePath: /\.\.\//,
            //    fileTypes: {
            //        js: {
            //            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
            //            detect: {
            //                js: /'(.*\.js)'/gi
            //            },
            //            replace: {
            //                js: '\'{{filePath}}\','
            //            }
            //        }
            //    }
            //},
            //sass: {
            //    src: ['app/styles/{,*/}*.{scss,sass}'],
            //    ignorePath: /(\.\.\/){1,2}bower_components\//
            //}
        },
        includeSource: {
            options: {
                basePath: 'app',
                baseUrl: '/'
            },
            main: {
                files: {
                    'app/index.html': 'app/index.html'
                }
            }
        },


        //Connect Settings for serve the files
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: true
            },
            dev: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                            //  require('grunt-connect-proxy/lib/utils').proxyRequest,
                            function (req, res, next) {
                                //res.setHeader('Origin', 'http://localhost');
                                next();
                            },
                            serveStatic('.tmp'),
                            connect().use(
                                '/bower_components',
                                serveStatic('./bower_components')
                            ),
                            connect().use(
                                '/app/styles',
                                serveStatic('./app/styles')
                            ),
                            serveStatic('app')
                        ];
                    }
                },

            }
        },

        watch: {

            options: {
                livereload: true,
                spawn: false
            },
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['app/scripts/**/*.js', 'app/scripts/*.js'],
                tasks: ['includeSource']
            },
            html: {
                files: ['app/**/*.html']
            },
            // jsTest: {
            //     files: ['e2e-tests/spec/{,*/}*.js'],
            //     tasks: ['karma']
            // },
            // compass: {
            //     files: ['app/sass/{,*/}*.{scss,sass}'],
            //     tasks: ['compass:dev']
            // },
            gruntfile: {
                files: ['Gruntfile.js']
            }
        },


        ngAnnotate: {
            options: {
                singleQuotes: true
            },

            build: {
                files: [
                    {
                        expand: true,
                        src: ['.tmp/concat/**/*.js']
                    },
                ]
            }
        },

        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'app',
                        dest: 'build',
                        src: [
                            '*.{ico,png,txt}',
                            '.htaccess',
                            '*.html',
                            'scripts/**/*.html',
                            'images/{,*/}*.{webp}',
                            'fonts/{,*/}*',
                            'img/{,*/}*',
                            'styles/fonts/{,*/}*.*',
                            'uiconfig.json',
                            '**/*.json',
                            '!bower_components/**',
                            '!img/bak/**'
                        ]
                    },

                    {
                        expand: true,
                        dot: true,
                        cwd: 'app/bower_components/bootstrap', // change this for font-awesome
                        src: ['fonts/*.*'],
                        dest: 'build'
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'app/bower_components/font-awesome', // change this for font-awesome
                        src: ['fonts/*.*'],
                        dest: 'build'
                    }

                ]
            }
        },


        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: "app/index.html",
            options: {
                dest: "build"
            }

        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['build/{,*/}*.html'],
            css: ['build/styles/{,*/}*.css'],
            options: {
                dirs: ['build']
            }
        },


    });

    grunt.registerTask('build', [
        'useminPrepare',
        'concat:generated',
        'ngAnnotate',
        'uglify',
        'cssmin',
        'copy:build',
        'usemin',
    ]);
    grunt.registerTask('dev', [
        'wiredep',
        //'compass',
        'includeSource',
        'connect:dev',
        'watch',
    ])

};