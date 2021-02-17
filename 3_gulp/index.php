<? /*

 !!!!!!!!!
	 gulp 3 не поддерживается с версии node 12:
		 - можно либо понизить версию nvm use
		 - или использовать npm-shrinkwrap.json с содержимым:
				 {
				  "dependencies": {
				    "graceful-fs": {
				      "version": "4.2.2"
				    }
				  }
				}
 !!!!!!!



gulp  - сборщик плагинов (Таск менеджер).
	Для рутинных работ, например:
	- создание спрайтов.
	- минимизация js/css.
	- склеивание файлов.


Ставим:
 node.js(нужна серверная часть, так как простым js некоторые вещи не сделать)
 npm - пакетный менеджер(чтобы устанавливать пакеты), ставится вместе с node.js


 package.json - файл зависимостей проекта (можно создать при помощи npm init)
	Обязательные значения:
	{
		"name":"project",
		"version":"0.0.1",
		"devDependencies":{
	    }
	}
 devDependencies - зависимости при разработке (добавляются записи командой, например  npm install gulp --save-dev),
 есть еще dependencies - это зависимости, от которых зависит production проект (Библиотеки, без которых проект работать не будет!)


 https://gulpjs.com/plugins   -   основные плагины

 npm install gulp --save-dev - установка gulp
 gulpfile.js - задачи для gulp.




------------------------------------------------------------------------------------------------------------------------

 npm -v      - версия NodeJs
 gulp -v     - версия gulp
 bower -v    - версия bowe



--------------------  #2 Bower  ----------------------

 npm i bower -g       -  Установить bower глобально(в 1-ый раз)
 bower init           - Инициализация bower
 bower.json           - Файл манифеста bower.

1)
 bower s jquery                      - Поиск s(search)
 bower info jquery	                - Информация о версиях
 bower i jquery#1.6.4 --save	        - Установи jquery версии 1.6.4
 bower i normalize.css --save	    - Установи normalize.css
 bower list --path	                - Список установленных библиотек с путями
 bower uninstall jquery --save	    - Удалить библиотеку
 bower update jquery	                - Обновить jquery
 bower i jquery magnific-popup	    - Установим jquery и magnific-popup (библиотеки js)



   Версии:
 - 3.1.0
 - 3.0.0
 - 2.2.4
 - 2.2.3
 - 2.2.2
 - 2.2.1
 - 2.2.0
 - 2.1.4
 - 2.1.3
 - 2.1.2
 - 2.1.1
 - 2.1.0


 #2.1.4	     =2.1.4
 ~2.1.4	     >=2.1.4 <2.2.0 (будет 2.1.4)
 ^2.1.4	     >=2.1.4 <3.0.0 (будет 2.2.4)
 latest	     Получить последнюю версию




2)
 gulp-google-cdn	       - Подключает локальные библиотеки с google-cdn.
 main-bower-files	   - Помогает извлечь из папки bower.components только нужные нам файлы.
 preen	               - Уничтожает все ненужные нам файлы.



--------------------  #3 Gulp пакеты  ----------------------


 npm i gulp-concat --save-dev           - Установим пакет gulp-concat (для конкатенации файлов)
 npm i gulp-uglifyjs --save-dev          - Установим пакет gulp-uglifyjs (для сжатия JS)
 npm i gulp-cssnano --save-dev           - Установим пакет пакет gulp-cssnano (для минификации CSS)
 npm i gulp-rename --save-dev            - Установим пакет пакет gulp-rename (для переименования файлов)
 npm i del --save-dev                    - Установим пакет пакет del (для удаления файлов и папок)
 npm i gulp-imagemin --save-dev          - Установим пакет gulp-imagemin (для сжатия изображений)
 npm i imagemin-pngquant --save-dev      - Установим пакет imagemin-pngquant (для работы с png)
 npm i gulp-cache --save-dev             - Установим пакет gulp-cache (для кеширования, в основном для изображений)
 npm i gulp-autoprefixer --save-dev      - Установим пакет gulp-autoprefixer (для автоматического добавления префиксов)
 gulp-uncss                              - Удаляет неиспользуемый css ???