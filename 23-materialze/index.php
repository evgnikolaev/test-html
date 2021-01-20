<?/*

Фреймворком Materialize.

Фреймворк - совокупность всего, заготовочка(то что постоянно переносятся из макета в макет).
Фреймворк(в переводе структура).


Materialize (продвигает гугл)
https://materializecss.com/

Materialize - много css и js. Мы добавляем в основном разметку по определенным правилам и все.
(если что то непонятно, лучше разбираться в исходниках)

Документация
css
	Цвет
			Цвет bg (teal lighten-2)  и цвет текста, используя префикс (light-blue-text text-darken-4)
			<h1 class="teal lighten-2 light-blue-text text-darken-4">This is a h1</h1>
	Сетка
			Контейнер ~70%.( 12 колонок)
									<= 600px	    > 600px	        > 992px			> 1200px
				Class Prefix	       .s	           .m	          .l	          .xl
				Container Width	       90%	           85%	          70%             70%

	Helpers  (Дополнительные возможности - выравнивание, скрытие)
	Media (responsive видео и картинки)
	Sass (кратко про исходники)
	Shadow, Table ... (несколько примеров использования)



компоненты Materialize.
Это готовые куски кода, которые мы вставляем на сайт.
		Badges (Дополнительные подписи к элементам, пометки)
		Кнопки(есть определенный эффект на кнопке)
		Иконки(используется класс - material-icons  (fontawesome - сторонние иконки))
		Breadcrumbs
		Карточки(несколько видов)
		Футер (есть также Sticky Footer - прижат к низу)
		Формы(инпуты, чекбоксы и т.д.)
		Navbar

		Javascript (Табы, модалки и т.д.)

