let card_1 = document.getElementById('card_1')
let card_2 = document.getElementById('card_2')
let card_3 = document.getElementById('card_3')
let card_1_hover = document.getElementById('card_1_hover')
let card_2_hover = document.getElementById('card_2_hover')
let card_3_hover = document.getElementById('card_3_hover')

card_1.addEventListener("mouseover", () => { 
    card_1.style.display = "none"
    card_1_hover.style.display = "flex"
})
card_1_hover.addEventListener("mouseout", () => { 
    card_1.style.display = "flex"
    card_1_hover.style.display = "none"
})
card_2.addEventListener("mouseover", () => { 
    card_2.style.display = "none"
    card_2_hover.style.display = "flex"
})
card_2_hover.addEventListener("mouseout", () => { 
    card_2.style.display = "flex"
    card_2_hover.style.display = "none"
})
card_3.addEventListener("mouseover", () => { 
    card_3.style.display = "none"
    card_3_hover.style.display = "flex"
})
card_3_hover.addEventListener("mouseout", () => { 
    card_3.style.display = "flex"
    card_3_hover.style.display = "none"
})
