"use strict";

/* ================= GOODS HOVER =================== */
// elements
const goodsCards = document.querySelectorAll(".goods-card");
const goodsPrevs = document.querySelectorAll(".goods-card__preview");
const goodsTexts = document.querySelectorAll(".goods-card__text");
const goodsActions = document.querySelectorAll(".goods-card__action");
// logic
for (let i = 0; i < goodsCards.length; i++) {
	// add class
	goodsCards[i].addEventListener("mouseover", function() {
		goodsPrevs[i].classList.add("goods-card__preview--over");
		goodsTexts[i].classList.add("goods-card__text--over");
		goodsActions[i].classList.add("goods-card__action--over");
	});
	// remove class
	goodsCards[i].addEventListener("mouseout", function() {
		goodsPrevs[i].classList.remove("goods-card__preview--over");
		goodsTexts[i].classList.remove("goods-card__text--over");
		goodsActions[i].classList.remove("goods-card__action--over");
	});
};

/* =================== BURGER MENU ================= */
// elements
const burgerButton = document.querySelector(".burger-button");
const burgerLines = document.querySelectorAll(".burger-button__line");
const burgerMenu = document.querySelector(".menu");
// logic
burgerButton.addEventListener("click", function() {
	for (let i = 0; i < burgerLines.length; i++) {
		burgerLines[i].classList.toggle("burger-button__line--active")		
	};
	burgerMenu.classList.toggle("menu--open");
	document.body.classList.toggle("body--hidden")
})