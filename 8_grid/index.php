<? /*

 https://www.youtube.com/watch?v=yTLqfUxwdDk&ab_channel=webDev

https://www.youtube.com/watch?v=GV92IdMGFfA&list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr&index=28&ab_channel=%D0%A4%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8-IT%D0%B8%D1%84%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81

    Grid Layout

	 Суть этого модуля заключается в разделении веб-страницы на столбцы и строки. В получившейся сетке можно размещать элементы.
	 Grid умеет управлять элементами в двухмерной плоскости, то есть и по горизонтали и по вертикали одновременно. Работает со строками и колонками. Flex же работает с одной осью – горизонтальной либо вертикальной.
	 По данным сервиса Can I Use модуль Grid Layout Level 1 поддерживают 93% пользователей. Нужно использовать с префиксами.
	 Но поскольку Grid Layout довольно большой модуль использующий множество свойств, проверять поддержку следует каждого свойства который захотите использовать.


	1) display: grid;  - для контейнера включаем гриды.

	2) grid-template-columns и grid-column-gap

			grid-template-columns: 100px 1fr 200px; - количество колонок
		        ( grid-template-rows:  1fr 300px;         - количество строк )
			Эти свойства могут принимать относительные и абсолютные величины ( px em rem % )
				fr - fraction - фактор гибкости, коэффициент пропорциональности, отталкивается от общего количества фракций (аналог процентов).
				Если элемента не будет, появится отступ!!!


			grid-template-columns: min-content 1fr max-content;
		        Ширина колонок может быть задана по минимальному(самое длинное слово) и максимальному(весь контент) размеру контента.
		        Колонки будут ориентироваться под контент.


			grid-template-columns: 2fr 1fr minmax(100px,300px);
		       Колонка может занимать от 100px до 300px, в зависимости от разрешения.


		    grid-template-columns: repeat(4, 1fr);
		        Повторяем колонки одинаковой ширины.

		 Если для какой то колонки не задать ширину, по умолчанию auto.

            grid-gap:
				grid-column-gap: 12px;  - Отступы между колонками.
				grid-row-gap: 11px; -  Отступы между строками.



	3) Управление размерами и позицией отдельного элемента ( 1_позиция.jpg ):

        grid-column:4/5;
		    grid-column-start: 4; - Когда начинается (с какой линии)
			grid-column-end: 5; - когда заканчивается (с какой линии)
		аналогично : grid-row: 1/3;

        grid-area: 1/4/3/5; - общее для grid-column  и grid-row
            Порядок:
	            grid-row-start
	            grid-column-start
	            grid-row-end
	            grid-column-end




	4) Именование grid-линий
		grid-template-columns: [col1] 200px [col2] 450px [col3] 200px [col4] 200px;
            col1-col4  - это линии начала столбца!!!
		grid-column:col1/col2;  - с какой линии до какой
		grid-column:col1/span 3; - с какой линии, сколько ширин столбцов взять



	5) Выравнивание контента

        для всех элементов контейнера (задаем там, где display:grid)
            align-items:   stretch (по умолчанию) start end center;  по Y
			justify-items: stretch (по умолчанию) start end center;  по X

        для отдельно взятого элемента
            align-self:   stretch (по умолчанию) start end center;   по Y
			justify-self: stretch (по умолчанию) start end center;   по X



	6) Выравнивание сетки(grid-элементов) внутри контейнера

          Выравнивают сетку внутри контейнера только тогда, когда заданы абсолютные значения:
          и высота и ширина имеют внутри промежутки:
				 .grid {
					height: 400px;  !!
					width: 800px;
					display: grid;
					grid-template-columns: 150px 150px 150px;   !!
					grid-template-rows:  150px 150px;           !!
					justify-content: space-evenly;
					align-content: center;
				}

        Только для grid-контейнера:
		justify-content: start(по умолчанию) end  stretch  space-around space-between space-evenly ;  по X
		align-content: start(по умолчанию) end  stretch  space-around space-between space-evenly ;  по Y



	7) Управление порядком элементов

		гриды работают быстрее флексбокса.
        grid-auto-flow: row(горизонтальный по умолчанию) column(вертикальныый) dense(заполнить пустые области);
		order: -1; (отрицательные цифры, 0 - по умолчанию , положительный цифры)


	8) Вложенности
		Гриды можно вкладывать друг в друга.


    9) Гибкость grid-эдементов при изменении размеров экрана

        Автоматический перенос колонок при разных расширениях,
        анализируется пустое пространство
			grid-template-columns: repeat(auto-fill,minmax(300px, auto)); - ЗАПОЛНЯЕТ, строку максимально возможным числом колонок
			grid-template-columns: repeat(auto-fit,minmax(300px, auto)); - ПОДСТРАИВАЕТ,растягивает дочерние элементы на всю ширину


	10) grid-template-areas   и   grid-area   - управление позицией и порядком при помощи именований

		 .container {
				display: grid;
				grid-template-columns: minmax(150px, 200px) 1fr minmax(150px, 200px);
				grid-template-areas: "header header header"
									 "main nav  aside"
									 "footer footer footer";
			}

			header {grid-area: header;}
			nav {grid-area: nav;}
			aside {grid-area: aside;}
			main {grid-area: main;}
			footer {grid-area: footer;}

