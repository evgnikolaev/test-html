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
есть еще dependencies - это зависимости, от которых зависит production проект


https://gulpjs.com/plugins   -   основные плагины

npm install gulp --save-dev - установка gulp
gulpfile.js - задачи для gulp.






npm -v      - версия NodeJs
gulp -v     - версия gulp
bower -v    - версия bowe











