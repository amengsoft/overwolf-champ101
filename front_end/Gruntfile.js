module.exports = function (grunt) {
	grunt.initConfig({
		"steal-build": {
			dist: {
				options: {
					system: {
						config: __dirname + "/stealconfig.js",
						main: ['js/main', 'js/settings', 'js/match'],
						bundlesPath: 'dist/bundles/'
					},
					buildOptions: {
						bundleSteal: false, // doesn't work? propably needs steel-tools also then
						minify: true,
						sourceMaps: false,

						//debug: false, // use script tag environment="development" instead
						//removeDevelopmentCode: true, // use script tag environment="development" instead

						//	quiet {Boolean}
						//	bundle {Array<moduleName>}
						//bundleDepth {Number}
						//mainDepth {Number}
						//cleanCSSOptions {Object}
						//uglifyOptions {Object}
						//sourceMapsContent {Boolean}
						watch:false
					}
				}
			}
			// TODO: copying html files + change data-env
			// TODO: copying manifest.json
			// TODO: copying other neccessary dist files
			//, test: { // TODO: config karma
			//	options: { system: { config: __dirname + "/stealconfig.js", main: ['js/main', 'js/settings', 'js/match']},
			//		buildOptions: { bundleSteal: false, minify: false, sourceMaps: true, watch:false}
			//	}
			//}
		},
		clean: ["dist", 'out'],
		copy: {
			views: { expand: true, src: 'views/**/*', dest: 'out/',
				options: {
					timestamp: true,
					process: function (content, srcpath) {
						var temp = content.replace(/data-env="development"/g,'data-env="production"');
						//temp = temp.replace(/data-main="js\/main"/g,'data-main="../../js/main');
						return temp.replace(/src='\.\.\/node_modules\/steal\/steal\.js'/g,'src="../steal.production.js"');
						//var temp = content.replace(/data-env="development"/g,'data-env="production"');
						//return temp.replace(/src='\.\.\/node_modules\/steal\/steal\.js'/g,'src="../bundles/steal.js"');
					}
				}
			}
			, js: { expand: true, cwd: 'dist/', src: 'bundles/**', dest: 'out/dist/'}
			, css: { expand:true, src: ['assets/css/*.css'], dest: 'out/'}
			, fonts: { expand:true, src: ['assets/font/**/*'], dest: 'out/'}
			, img: { expand:true, src: 'assets/img/**/*', dest: 'out/'}
			, cfg: { expand:true, src: 'manifest.json', dest: 'out/'}
			, steal: { expand:true, cwd: 'node_modules/steal', src: ['steal.production.js'], dest: 'out/'}
			, videojs: { expand:true, src: ['node_modules/video.js/dist/video-js/**'], dest: 'out/'}
		}
	});
	grunt.loadNpmTasks("steal-tools");
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask("build", ["clean","steal-build:dist", "copy"]);
	grunt.registerTask("karma", ["steal-build:test"]);
};