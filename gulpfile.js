const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();



const cssFiles = [
    './node_modules/normalize.css/normalize.css',
    './src/css/style.css',
    //'./src/css/newStyle.css'
];

const jsFiles = [
    './src/js/script.js',
    //'./src/js/some.js'
];

const imgFiles = [
    './src/img/*'
];

const fontsFiles = [
    './src/fonts/*'
];

function fonts(){
    return gulp.src(fontsFiles)
        .pipe(gulp.dest('./build/fonts'));
}

function images(){
    return gulp.src(imgFiles)
        .pipe(gulp.dest('./build/img'));
}

function styles(){
    return gulp.src(cssFiles)
        .pipe(concat('all.css'))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false}))
        .pipe(cleanCSS({level: 1}))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

function script(){
    return gulp.src(jsFiles)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/css/**/*.css', styles);
    gulp.watch('./src/js/**/*.js', script);
    gulp.watch('./*.html').on('change', browserSync.reload);

}

function clean(){
    return del(['build/*'])
};

gulp.task('styles', styles);
gulp.task('script', script);
gulp.task('watch', watch);
gulp.task('images', images);
gulp.task('fonts', fonts);

gulp.task ('build', gulp.series(clean, 
                    gulp.parallel(styles,script,images,fonts)
                    ));

gulp.task ('dev', gulp.series('build', 'watch'))                    