<?/*

Фреймворком Bootstrap.

Фреймворк - совокупность всего, заготовочка(то что постоянно переносятся из макета в макет).
Можно настроить и скачать собственный https://bootstrap-4.ru/docs/3.3.7/customize/ .
Также можно скачать и разбираться в исходниках (он собирается на grunt). Это в случае когда пишем собственный фреймворк на основ bootstrap.

В большинсвте случаев просто скачиваем стандартный bootstrap, оставляем bootstrap.css , bootstrap.js и fonts.
Остальное все удаляем.


Элементы вида data-dismiss="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" нужны для js, для разных скринридеров.
ШАБЛОНЫ, можно использовать готовые шаблоны, зарисовочки для себя!


1)  Bootstrap имеет 12-колонок.
	Класс префикса	.col-xs- (None (auto))	.col-sm-( 750px	)	.col-md-( 970px )	.col-lg-( 1170px)

2)  !!!  так как адаптивность идет с мобильных устройств и выше, нужно сетку-колонки рисовать для всех расширений, иначе колонки могут смотреться не так как нам нужно. !!!
	если этого не делать можем использовать "Адаптивную колонку сброса"   -  <div class="clearfix visible-xs-block"></div>

3)  Вырывание колонок.
	Например можно изменить порядок классами .col-md-push- * и .col-md-pull- *.

4) можно вкладывать друг в друга, будет сетка в сетке.




























