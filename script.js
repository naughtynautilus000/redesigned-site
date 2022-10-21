"use strict"

const cartSummaryElement = document.getElementById("cart-summary")
const orderSummaryElement = document.getElementById("order-summary")

const mq940Width = window.matchMedia("(max-width: 940px)")

mq940Width.onchange = () => {
  orderSummaryElement.style.display = ""
  orderSummaryElement.classList.remove("show")
}

window.addEventListener("mouseup", (e) => {
  if (e.target === orderSummaryElement || orderSummaryElement.contains(e.target)) {
    return
  }

  if (cartSummaryElement.contains(e.target)) {
    orderSummaryElement.classList.add("show")
  } else {
    orderSummaryElement.classList.remove("show")
  }
})
