'use strict';

const gulp      = require('gulp');
const ts        = require('gulp-typescript');
const server    = require('gulp-develop-server');
const concat    = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

const tsPath    = './backend/*.ts'
const jsPath    = './release/backend/index.js';

const tsProject = ts.createProject('./backend/tsconfig.json');

gulp.task('backend:compile', () => {
    const tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./release/backend/'));
});

gulp.task('backend:watch', () => {
    gulp.watch(tsPath, ['backend:compile']);
});

gulp.task('server:start', () => {
    server.listen({ path: jsPath });
});

gulp.task('server:restart', () => {
    server.restart((error) => {
        if(error) {
            console.error(error);
        };
    });
});

gulp.task('server:watch', ['server:start'], () => {
    gulp.watch(tsPath, ['backend:compile']);
    gulp.watch(jsPath, ['server:restart'] );
});
