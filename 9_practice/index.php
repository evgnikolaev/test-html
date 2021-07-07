<?/*

https://www.youtube.com/watch?v=ltMSrSis9ww&list=RDCMUCqGjCzCi5zG3RjJUA-ZDBkQ&index=2&ab_channel=BrainsCloud

https://files.brainscloud.ru/files/adaptivnaya-verstka-sajta-s-nulya-dlya-nachinayushchih-mogo




https://caniuse.com/ - можно задать свойство и посмотреть поддержку этого св-ва в браузере,
						нужны ли для него префиксы.



 -  Для декоративных элементов (before after)
 -  лучше использовать трансформации (transfom) при анимации, чем анимировать при помощи
    top (left) . transform не пересичитывается на каждом шаге, оптимизировано.
 -  flex: 1 1 0; - ! равномерное количество карточек
 - 	-webkit-font-smoothing: antialiased;  - сглаживание шрифтов

 -   https://www.flaticon.com/ru/    -   svg иконки
		Если svg вставлена тегом img, то мы не можем управлять цветом при наведении:
		<img src="img/facebook.svg">


 - 		Sprite
		<svg style="display: none;">
			<symbol id="facebook" viewBox="0 0 155.139 155.139">
				<g>
					<path  d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184
				c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452
				v20.341H37.29v27.585h23.814v70.761H89.584z"/>
				</g>
			</symbol>
		</svg>


		<svg class="social__icon">     -  теперь можем менять цвет заливки (fill)
			<use xlink:href="#facebook"></use>
		</svg>








