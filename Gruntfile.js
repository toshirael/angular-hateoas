module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		uglify: {
			options: {
				banner: "/*! <%= pkg.name %> <%= pkg.version %>-<%= grunt.template.today('yyyymmdd') %> (http://github.com/jmarquis/angular-hateoas) */\n"
			},
			build: {
				src: "src/<%= pkg.name %>.js",
				dest: "build/<%= pkg.name %>.min.js"
			}
		},
		karma: {
			unit: {
				configFile: "karma.conf.js"
			},
			continuous: {
				configFile: "karma.conf.js",
				singleRun: true
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-karma");

	grunt.registerTask("default", ["karma:continuous", "uglify"]);

	grunt.registerTask("startTestServer", ["karma:unit:start"]);
	grunt.registerTask("test", ["karma:unit:run"]);

};