<? /*

1) Знакомство с Less
http://lesscss.org/


Препроцессор - инструмент, преобразующий код из одного синтаксиса в другой.
Компиляция - поцесс перевода синтаксических конструкция в исходный код.
Синтаксический сахар - это дополнение синтаксиса языка программирования, которые не вносят каких-то существенных изменений или новых возможностей,
                    но делают этот язык  более читабельным для человека.


 Компиляция
 - в браузере используя библиотеку-компилятор ( less.min.js )
 - из командной строки ( npm install -g less   и   lessc path_to_less > path_to_css )
 - при помощи gulp
       1)  npm install gulp-less --save-dev
       2)  var less = require('guplp-less');

       3)  gulp.task('less', function(){
              return  gulp.src('dev/less/general.less')
                            .pipe(less())
                            .pipe(gulp.dest('build/css'))
			 });



Работа с селекторами:
1) вложенность, & - ссылка на родителя (то есть вместо & - подставится имя родителя)
2) группировка

		.header, .main, .article {
			text-align: center;
		}


		 .header{
		    text-align: center;
		 }
		.main:extend(.header){...}
	    .article{
	        &:extend(.header);
	    }

3) медиа запросы

		.header {
			text-align:center;

			@media screen  and (max-width: 600px) {
				text-align:left;
			}
		}


4) модульность
      @import 'header';



5) Переменные
    @headerFontSize: 2rem;

6) Примеси (миксин, ф-ия)
.bordered  (или #bordered  или bordered) - !желательно через точку

		--- Пример1 ---
			.bordered {
			  border: 1px solid #000;
			}

			.inline-block( @valign:top ) {
			  display: inline-block;
			  vertical-align: @valign;
			}

			.img-container {
			  .inline-block;
			  width: 80px;
			}

			.box {
			  .inline-block(middle);
			}


	 --- пример2. конкатенация строк ---

			@pathToIcon: 'img/tmp/';
			@iconW: 400px;

			.icon(@url) {
			  display: inline-block;
			  width: @iconW;
			  background: url("@{pathToIcon}@{url}.png");
			}

			.header {
			  .icon('logo');
			}



	 ---  пример3. выполнение миксина при условии  ---

			.fontSize(@fs) when (isnumber(@fs)) {
			  font-size: ~"@{fs}px"; // ~  !убирает кавычки после конкатенации
			}

			html {
			  .fontSize(12);
			}



    ---  пример4. Циклы, сетка  ---

			@tablet-width: 1170px;
			@phone-width: 768px;

			@columnCount: 12;

			.grid(@name, @columnNumber:1) when (@columnNumber<=@columnCount) {
			  .@{name}@{columnNumber} {
			    width: (100%/@columnCount)*@columnNumber;
			  }

			  .grid (@name, @columnNumber+1); //цикл
			}

			//вызов
			.grid(xs);
			@media screen and (min-width: @phone-width) {
			  .grid(sm);
			}

			@media screen and (min-width: @tablet-width) {
			  .grid(lg);
			}



7) Ф-ии
Полный перечень ф-ий здесь - http://lesscss.org/


 Работа с изображениями
    image-size(path_to_file) - возвращает размеры изображения (100px 100px)
    image-width(path_to_file)
    image-height(path_to_file) - возвращает отдельные значения высоты или ширины (в px)

 Работа с цветами
    !!! Работают либо в 16-ричном формате, либо в HSL-формате
		    lighten(color, percent) - увеличивает светлоту
		    darken(color, percent) - уменьшает светлоту
		    saturate(color, percent) - увеличивает насыщенность
		    desaturate(color, percent) - уменьшает насыщенность
		    mix(color, color, percent) - смешивает цвета в заданной пропорции






