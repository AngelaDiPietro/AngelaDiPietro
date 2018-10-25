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
				configFiles: {
					files: 'src/js/progetto.js',
					task: 'browserify'
				}
			},

			cssmin: {
				files: {

					'dist/js/progettomodify.min.js' : 'src/js/progetto.js',
				}
			},

			uglify: {
				files: {

					'dist/css/stylesmodify.min.css' : ['src/css/styles.css',''],
				}
			},

			babel:{
				options:{
					presets:['env']
				},
				dist:{
					files:{
						'dist/js/bundle-es5.js':'src/js/progetto.js'
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
	
	grunt.task.registerTask('develop',['watch']);
	grunt.task.registerTask('build',['cssmin','browserify','babel','uglify','serve']);
};