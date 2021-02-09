<?/*

Adaptive. Основные принципы:

 - Использование гибкого макета на основе сетки (grid-base layout)
		!!! С высотой больше не работаем. Если только 100% уверены что на всех разрешениях булет одна и та же высота

 - Использование гибких изображений
		div  с определенной шириной, и внутри картинка с шириной 100%

 - Работа с медиа запросами.

		@media screen and (max-width:768px){
			стили
		}
		@media 'тип носителя'    'лог. оператор'    ('медиа ф-ии'){
			стили
		}

		'тип носителя'   -  screen('экран)    print('для печати)    speech('синтезаторы речи)    all('все)
		'лог. оператор'  -  and not  only(для старыз браузеров)
		'медиа ф-ии'     -  width(min-width, max-width)     height(min-height, max-height)  orientation(landscape,portrait)

		!!нужно обязательно ставить, чтобы устройства понимали адаптивность
		<meta name="viewport" content="width=device-width">
						Значения атрибта content:
							width                device-width or number     -   определяет ширину viewport
							height              device-height or number     -   определяет высоту viewport
							initial-scale       0.1-1.0                     -   определяет начальный маштаб страниы
							user-scalable       no/yes                      -   определяет, может ли пользователь изменять маштаб в окне
							minimum-scale       0.1-10                      -   определяет минимальный маштаб в viewport
							maximum-scale       0.1-10                      -   определяет максимальный маштаб в viewport

 - Начинаем верстать с мобильной версии.



!!!!!!!! Не нужно забывать про специфичность. Примениться body#body.

body#body{
	color:red;
}
@media screen and (max-width:480px){
	body{
		color:black;
	}
}

!!!!! Не задаем стили через id. (их толька для java-скрипт). Только через классы.



























