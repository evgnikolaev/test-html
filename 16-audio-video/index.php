<?/*

!!! Все новые элементы, о которых старые браузеры не знают, будут приводить к инлайн элементам.

Оснавная задача seo:
На выдачу влияет, количество посещений и сколько человек проводит на сайте.


дополнительные HTM5 элементы:
1)
Оборачиваем самостоятельный контент, обячно для картинок, графиков.
figure
	img
	figurecaption (сюда только текст)

2) спойлеры
details     (отображается по разному в разных браузерах!!!!)
	summary - видная зона
	скрытая часть


3) подобие селекта с поиском
input list='my_list'
datalist id='my_list'  (отображается по разному в разных браузерах!!!!)
	option value='текст1'
	option value='текст2'

4) вывод результата от скриптов
output


5) вывод начений в диапазоне
meter  (отображается по разному в разных браузерах!!!!)

6) progress (отображается по разному в разных браузерах!!!!)

7) button - кнопка

8) диалоговое окно
dialog  (отображается по разному в разных браузерах!!!!)



audio video

нужно использовать несколько источников звука и видео.
Разные браузеры исрользуют разные форматы.
нет защиты контента.

аудиофайл - 2 части  audio-кодек и мета-данные.
видеофайл - 3 части video-кодек , audio-кодек и мета-данные.



audio
атрибуты:
src - путь к файлу
controls - элементы воспроизведения
autoplay - автовоспроизведение
loop - циклическое воспроизведение
preload - предварительная загрузка
muted - включать звук при воспризведении или нет

video
дополнительно атрибуты:
height
width
poster - картинка, пока не нажали play/



либо путь указать в теге source для auduo и video
<auduo>
	<source src='song.mp3'></source>
				src - путь
				media - определяет тип медиа устройства(пока корректно не работает)
				type - определяет MIME-тип медиафайла (если используется дополнительный кодек для данного файла)
							type='audio/ogg; codecs=vorbis'
</audio>




*/?>