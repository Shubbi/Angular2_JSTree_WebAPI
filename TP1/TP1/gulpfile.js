/// <binding BeforeBuild='scriptsNStyles' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

//var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');

//var tsProject = ts.createProject('tsconfig.json', {
//    typescript: require('typescript')
//});

gulp.task("scriptsNStyles", () => {
    gulp.src([
            '@angular/core/bundles/core.umd.js',
            '@angular/common/bundles/common.umd.js',
            '@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http/bundles/http.umd.js',
            '@angular/router/bundles/router.umd.js',
            '@angular/forms/bundles/forms.umd.js',
            'angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'rxjs/**',
            'lodash/lodash.js',
            'jquery/dist/jquery.js',
            'jstree/dist/**',
            'angular2-tree-component/dist/**'

    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./libs"));
});




//gulp.task('default', function () {
//    // place code for your default task here

//    //var tsResult = gulp.src(["app/*.ts"])
//    // .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
//    //return tsResult.js.pipe(gulp.dest('app/lib'));

//});