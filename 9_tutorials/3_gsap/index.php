<?/*

https://www.youtube.com/watch?v=809-Abmk--w&list=PLOQDek48BpZFzxKS-2sLAeSBB83x-xILB&index=2&ab_channel=htmllab



1) Введение
gsap.to('.selector',{
	x:100,
	translateY:100,
	background:'gray',
	duration:1, //длительность
	delay:1,  //задержка
	repeat:2,  //кол-во повторов
	repeatDelay:1, // задержка (вконце) между повторами
	stagger:1, // задержка старта для каждого селектора, когда их несколько
	ease:"power2.inOut", //анимация  https://greensock.com/docs/v3/Eases
	paused:true, //на паузу
	onCompleted:function () {
		console.log('Готово');
	}
});




2) Можно также менять свойства объекта
const myObj = {
	subscriber: 6000,
	sponsor:3,
	delta:.5,
	myColor:"#12356"
};

gsap.to(myObj,{
	subscriber:100000,
	sponsor:8,
	delta:.8,
	delta2:.8,
	myColor:"#987654",

	duration:10,
	delay:1
});




























