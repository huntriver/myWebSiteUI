'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    var serveStatic=require('serve-static');

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
                ignorePath: /\.\.\//
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
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ['.tmp', '<%= paths.dist %>/*', '!<%= paths.dist %>/.git*']
                }]
            },
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: false,
                    cwd: '<%= paths.app %>',
                    dest: '<%= paths.dist %>',
                    src: ['*.{ico,png,txt}', '.htaccess', 'images/{,*/}*.webp', '{,*/}*.html', 'styles/fonts/{,*/}*.*']
                }]
            },
            styles: {
                expand: true,
                dot: false,
                cwd: '<%= paths.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
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
                files: ['app/scripts/**/*.js','app/scripts/*.js'],
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

    });
    
    grunt.registerTask('build', [
        'clean:dist',
        'concat',
        'uglify',
        'cssmin',
        'copy:dist'
    ]);
    grunt.registerTask('dev', [
        'wiredep',
        //'compass',
        'includeSource',
        'connect:dev',
        'watch',
    ])

};