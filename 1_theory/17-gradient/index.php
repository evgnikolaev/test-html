<?/*

вендорные префиксы
	-moz-          mozilla
	-webkit-       safary chrome
	-o-            opera
	-ms-           es8


Градиент (применяется для свойств, где может быть задана картинка)
! для background

linear-gradient(  направление(слово или угол),    цвет1,     точка останова,   цвет2,   точка останова )
linear-gradient(  top-bottom,                  #ffffff,        20% ,    #000000 ,    40%  )


radial-gradient(  тип      размер (слово или проценты)       точка центра,            цвета,  )
radial-gradient( circle         closest-corner             at 20px 30px,    #ffffff,       #000000 )
Можно задавать типы градиента:
circle
ellipse

closest-side - ближняя сторона
closest-corner - ближний угол


repeating-radial-gradient   -  повторы
