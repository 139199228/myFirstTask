class ParentButton {
    constructor(text) {
        this.text = text
    }
    map(f) {
        return ParentButton.of(f(this.text))
    }
}
ParentButton.of = function (val) {
    return new ParentButton(val)
}
let ind = 0

function containerClick(el) {
    ind = el.target.innerHTML
    ind++
    el.target.innerHTML = ind

}
let container = document.querySelector(".content")
container.addEventListener("click", containerClick)