module.exports=function (grunt) {


	grunt.initConfig({
		serve:{
			option:{
				port:900
			}
		},

		browserify:{
			dist:{
				files:{
					'src/js/bundle.js':'src/js/progetto.js'
				}
			}
		},

		watch: {
			configJs: {
				files: 'src/js/progetto.js',
				tasks: 'browserify'
			},

			configCss: {
				files: 'src/css/styles.less',
				tasks: 'less'
			}
		},

		//UGLIFY minifica il file js (inoltre prende il file js e il file di bootstrap(il quale si aiuta con il js)e li unifica)
		uglify: {
			dist: {
				files: {
					'dist/js/progettomodify.min.js' : 'src/js/bundle-es5.js'
				}
			}
		},


		less: {
			dist: {
				files: {
					'src/css/styles.css':'src/css/styles.less' 
				}
			}
		},

		cssmin: {
			dist: {
				files: {
					'dist/css/stylesmodify.min.css' : [
					'node_modules/bootstrap/dist/css/bootstrap.css',
					'src/css/styles.css'
					]
				}
			}
		},


		babel:{
			options:{
				presets:['env']
			},
			dist:{
				files:{
					'src/js/bundle-es5.js':'src/js/bundle.js'
				}
			}
			
		}
	});


	//loadNpmTasks serve per caricare il tipo di task
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.task.registerTask('develop',['watch']);
	grunt.task.registerTask('build',['cssmin','browserify','babel','uglify','serve']);
};