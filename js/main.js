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

