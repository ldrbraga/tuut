var banners = ["img/s2.png", "img/s1.png"];
function trocaBanner() {
	document.querySelector('.carousel__img').src = banners[0];
	banners.reverse();
}
setInterval(trocaBanner, 4000);