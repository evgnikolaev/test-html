/*
	https://www.youtube.com/watch?v=n-N1BnloIVE&ab_channel=WebDesignMaster
	https://webdesign-master.ru/blog/tools/gulp-4-lesson.html

	Инфо по пакетам черпать из https://www.npmjs.com/
	Ключевой момент gulp4: любые функции-таски нужно экспортировать!
	И функции-таски можно комбинировать при помощи parallel() и series()
*/

const {src, dest, parallel, series, watch} = require('gulp'); // Подключаем Gulp
const browserSync = require('browser-sync').create(); // Подключаем Browser Sync
const concat = require('gulp-concat'); // Подключаем Browser Sync
const uglify = require('gulp-uglify-es').default; // Для сжатия JS
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов
const cleancss = require('gulp-clean-css');// минимизируем,чистим css
const less = require('gulp-less');// минимизируем,чистим css
const imagemin = require('gulp-imagemin'); // Подключаем библиотеку для работы с изображениями
// вычисляет какие картинки были изменены(оптимизированы), и при следующей оптимизации их не трогает (в 3-ец версии gulp, вместо этого пактета использовали пакет cache )
const newer = require('gulp-newer');
const del = require('del');// модуль npm для удаления файлов и папок
const fileinclude = require('gulp-file-include');

function browsersync() {
	browserSync.init({ //инициализируем  browserSync
		server: { // Определяем параметры сервера
			baseDir: 'app' // Директория для сервера - app
		},
		notify: false, // Отключаем уведомления
		online: false// по умолчанию true , browsersync использует wifi, чтобы можно было смотреть на разных устройствах
	});
}


function scripts() {
	return src([
		//'node_modules/jquery/dist/jquery.js',
		'app/js/app.js'
	])
		.pipe(concat('app.min.js'))
		//.pipe(uglify())
		.pipe(dest('app/js'))
		.pipe(browserSync.stream()); // при stream не происходит перезагрузки страницы, при reload - происходит
}


function styles() {
	return src(['app/scss/main.scss']) // Берем источник
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'], grid: true})) // Создаем префиксы
		.pipe(cleancss({level: {1: {specialComments: 0}}, format: 'beautify'})) // минимизируем , чистим (если указан beautify) css
		.pipe(dest('app/css'))
		.pipe(browserSync.stream()); // при stream не происходит перезагрузки страницы, при reload - происходит
}

function html() {
	return src(['app/html/index.html','app/html/catalog.html','app/html/product.html'])
		.pipe(fileinclude())
		.pipe(dest('app/'))
}

function reload(done) {
	browserSync.reload();
	done();
}

function startWatch() {
	//watch(['app/**/*.html']).on('change', browserSync.reload); //можно так записать
	watch(['app/html/**/*.html'], series(html, reload));
	watch(['app/**/scss/**/*'], styles);  // можно и так
	watch(['app/**/*.js', '!app/**/*.min.js'], scripts);//при изменении js файлов тригерни(вызови) scripts()
	watch(['app/images/src/**/*'], images);
}


function images() {
	return src('app/images/src/**/*')
		.pipe(newer('app/images/dest'))
		.pipe(imagemin())
		.pipe(dest('app/images/dest'))
}


function cleanimg() {
	return del('app/images/dest/**/*', {force: true}); // Удаляем папку
}


// Ключевой момент gulp4: любые функции-таски нужно экспортировать!
// И функции-таски можно комбинировать при помощи parallel() и series()
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;
exports.html = html;

//дефолтный таск
exports.default = parallel(scripts, styles, html, browsersync, startWatch); // параллельное выполнение слева направо ф-ий

