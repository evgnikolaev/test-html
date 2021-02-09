<?/*

Плавные переходы
(!!! Применяется ко всему, что можно посчитать)

Для селектора, на котором хотим видеть переход (в состоянии покоя) .
	transition-property         - свойство, которе меняем  (  all - все свойства   /	color, background-color - определенные свойства )
	transition-duration         - время(S или MS)
	transition-timing-function  - ф-ия    (	cibic-bezier() - можно задать свою ф-ию  )
	transition-delay            - ззадержка (S или MS)

transition : property duration  timing-function delay - желательно соблюдать порядок

по умолчанию   transition : all 0s ease 0s;

Задавать изменение можно при помощи псевдокласссов или js.