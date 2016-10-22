var gulp = require('gulp');
//var gulp = require('gulp-connect');

gulp.task('default',function(){
	gulp.src(['./node_modules/requirejs/require.js','./node_modules/angular-ui-router/release/angular-ui-router.min.js','./node_modules/angular/angular.min.js','./bower_components/angularAMD/angularAMD.min.js'])
	.pipe(gulp.dest('libs'));
});
