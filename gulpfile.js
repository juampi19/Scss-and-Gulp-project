const {src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const cssnano = require('cssnano');
const prefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

//imagenes
const webp = require('gulp-webp');
const min = require('gulp-imagemin');
const avif = require('gulp-avif');
const cache = require('gulp-cache');

//javascript
const terser = require('gulp-terser-js');



function css(done){
    src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss( [ prefixer(), cssnano() ] ))
        .pipe(dest('build/css'))

    done();
}

function javascript(done){
    src('src/js/**/*.js')
    .pipe(terser())
        .pipe(dest('build/js'));

    done();
}

function imgmin(done){
    const option = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(cache(min(option)))
        .pipe(dest('build/img'))

    done();    
}

function versionWebp(done){
    const option = {
        quality: 50,
    }

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(option))
        .pipe(dest('build/img'))

    done();    
}

function versionAvif(done){
    const option = {
        quality: 50,
    }

    src('src/img/**/*.{png,jpg}')
        .pipe(avif(option))
        .pipe(dest('build/img'))
    done();
}

function dev(done){
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);

    done();
}

exports.css =css;
exports.javascript = javascript;
exports.imgmin = imgmin;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imgmin,versionAvif, versionWebp, dev);
