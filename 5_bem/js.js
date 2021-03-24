var regionName, cityName, cities;
var str = '';
var iblock = document.querySelectorAll('.adm-sub-submenu-block.adm-sub-submenu-open .adm-sub-submenu-block.adm-submenu-level-2.adm-sub-submenu-open')[0];
var regions = iblock.querySelectorAll('.adm-sub-submenu-block.adm-submenu-level-3');


for (i = 0; i < regions.length; i++) {

	regionName = regions[i].querySelectorAll('.adm-submenu-item-name-link-text')[0];
	str = str + '\n\nРегион \n' + regionName.innerText + '\n\n\n' + 'города' + '\n';

	cities = regions[i].querySelectorAll('.adm-sub-submenu-block.adm-submenu-level-4');

	for (j = 0; j < cities.length; j++) {
		cityName = cities[j].querySelectorAll('.adm-submenu-item-name-link-text')[0];
		str = str + '\n' + cityName.innerText + '\n';
	}
}
console.log(str);