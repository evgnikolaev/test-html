<? /*

1) Знакомство с Less


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

6) Примеси

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


7) Ф-ии
























