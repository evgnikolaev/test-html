<? /*

	Видос
	https://www.youtube.com/watch?v=TOlqVNC86XI&list=PL0lO_mIqDDFVv3vF9BG1j1RwfGcQEoxs2&index=3&ab_channel=%D0%93%D0%BE%D1%88%D0%B0%D0%94%D1%83%D0%B4%D0%B0%D1%80%D1%8C

	https://sass-scss.ru/ - документация
	Можно ком при помощи программ (здесь он использовал https://prepros.io/ ). Но этот путь не удобен.


	//Комментарий - такой не компилится в css

	Работа с селекторами:
	1. переменные
		$fz: 18px;


	2. вложенность, & - ссылка на родителя (то есть вместо & - подставится имя родителя)

		$color: #ff0000;
		.header {
		  background: $color;
		  &.span {
		    background: $color+#00ff00;
		  }
		}



	3-4. Миксины (примеси)

       3.1)  Без параметров
			    @mixin font {
					...
				}

		        С параметрами
				@mixin font($color,$fontW:bold,$padd...) {
					  display: block;
					  font-size: $mainFontSize;
					  font-weight: $fontW;
					  color: $color;
					  padding: $padd; //$padd... - для паддингов, т.к. здесь 1,2,3,4 варианта записи
				}

		        @include font($color, bold, 20px 30px); //подключение миксина


        3.2)  Пример с &

				1-ый вариант записи
				@mixin link($link,$hover,$visited) {
				  color: $link;
				  &:hover {
				    color: $hover
				  }
				  &:visited {
				    color: $visited
				  }
				}


				a {
				  @include link(red, blue, green);
				}


				2-ый вариант записи
				@mixin link2($link,$hover,$visited) {
				  a {      -  можно сразу теги в миксине указать
				    color: $link;

				    &:hover {
				      color: $hover
				    }

				    &:visited {
				      color: $visited
				    }
				  }
				}

				@include link2(#fff, #56fffc, #a0ff36);


	5. Импортирование
		@import "_variables";

	6. Математические операции и ф-ии

			 @mixin grid($cols,$margin) {
				  float: left;
				  background: #cedeee;
				  margin-right: $margin;
				  margin-bottom: $margin;
				  height: 150px;
				  width: ((100%-(($cols - 1)*$margin))/$cols);

				  &:nth-child(#{$cols}n) {   -- конкатенация
				    margin-right: 0;
				  }
			}


			#grid {
				  float: left;
				  width: (100%/3);
                  // width: (100%/4 -4px); - будет ошибка, разные единицы измерения.
				  background: #ccc;

				  > div {
				    @include grid(4, 2%);
				  }
			}


		ф-ии sass https://sass-lang.com/documentation/modules  :

			darken(#ddd,10%) - затемнить
			lighten(#ddd,50%) - засветлить




    7. Условия, циклы и оператор @content

		7.1
				p {
					  @if 1 + 1 == 2 {
					    border: 1px solid;
					  }
				}


		7.2
				$someVar: some_class;
					@for $i from 24 to 29 {
						  .#{$someVar}-#{$i} {
						    width: 50px+$i;
						    height: 50px+$i;
					  }
				}



        7.3  @content  - Существует возможность передачи блока стилей в миксин, которые будут расположены среди стилей, подключаемых этим миксином.

				@mixin reference_link($link,$hover) {
					  color: $link;
					  &:hover {
					    color: $hover
					  }
					  @content; // сюда можно расширять миксин для определенных блоков.
				}


				a.simple {
				     @include reference_link(red, blue)
				}

				a.complex {
					  @include reference_link(red, blue) {
		                    // здесь все попадет в @content
						    background: #ccc;
						    &:visited {
						      color: green;
						    }
					  }
				}














