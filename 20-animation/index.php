<?/*

CSS3: animation


Анимация бывает
- покадровая (важным будет частота кадров в секунду)
- анимация по ключевым кадрам (промежуточные кадры браузер считает сам)



@keyframes my-animation{

	from{
		описание кадра
	}

	to{
		описание кадра
	}

}


Все свойства выполняется одновременно, как в transition !!
animation  :  желательно по порядку ниже (но не обязательно)
				Несколько анимаций через запятые.
animation-name                   -  имя анимации
animation-duration               -  длительность
animation-timing-function        -  временная ф-ия
animation-delay                  -  задержка
animation-iteration-count        -  мжоно запустить несколько раз
animation-direction              -  направление повтора  (normal, reverse, altrnate-reverse -  туда сюда)
animation-fill-mode              -  определяет какие стили применить, когда анимация не проигрывается(закончилась) (forwards, backwards, both )
animation-play-state             -  позволяет управлять проигрываением, остановкой анимации (paused , running)


animation: my-animation 5s ease-in alternate;















