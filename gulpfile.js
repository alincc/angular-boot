var gulp = require('gulp');

var concat = require('gulp-concat-sourcemap');
var minify = require('gulp-minify');

gulp.task('default', function (callback) {
    return gulp.src([
        './node_modules/es6-shim/es6-shim.min.js',
        './node_modules/systemjs/dist/system-polyfills.js',
        
        './node_modules/angular2/bundles/angular2-polyfills.min.js',
        './node_modules/systemjs/dist/system.js',
        './node_modules/typescript/lib/typescript.js',
        './node_modules/rxjs/bundles/Rx.js',
        './node_modules/angular2/bundles/angular2.dev.js'
    ])
        //.pipe(minify())
        .pipe(concat('fangular.js'))
        .pipe(gulp.dest('./dist'));
});
