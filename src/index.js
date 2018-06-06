// class ParentButton {
//     constructor(text) {
//         this.text = text
//     }
//     map(f) {
//         return ParentButton.of(f(this.text))
//     }
// }
// ParentButton.of = function (val) {
//     return new ParentButton(val)
// }
// let ind = 0

// function containerClick(el) {
//     if (el.target.className === "content_con") {
//         console.log(el)
//         ind = el.target.innerHTML;
//         ind++
//         el.target.innerHTML = ind;
//         console.log(ind)
//     } else {
//         return
//     }
// }
// container.addEventListener("click", containerClick)


class ParentButton {
    constructor(ele) {
        this.ind = 0;
        this.event(this.el(ele), "click", this.containerClick.bind(this))
    }
    el(ele) {
        const container = document.querySelector(ele)
        return container
    }
    event(el, type, cb) {
        el.addEventListener(type, cb)
    }
    containerClick(el) {
        if (el.target.className === "content_con") {
            this.ind = el.target.innerHTML;
            this.ind++;
            el.target.innerHTML = this.ind;
        } else {
            return
        }

    }
    removeEle(el) {
        if (el.parentNode != null) {
            console.log(el.parentNode)
            el.parentNode.removeChild(el)
        }
    }
}
class Thumb extends ParentButton {
    constructor(ele, thumb) {
        super(ele)
        this.thumb = thumb

        this.event(super.el(ele), "click", this.createThumb.bind(this))
    }
    create() {
        let div = document.createElement("div")
        div.classList.add('demoSpan1')
        return div
    }
    createThumb(el) {
        if (el.path[1].tagName === "LI") {
            el.path[1].children[1].appendChild(this.create())
            setTimeout(() => {
                super.el(this.thumb).classList.add("active")
                super.event(super.el(".active"), "transitionend", this.transitonEnd)

            }, 400)
        }
    }
    transitonEnd(el) {
        super.removeEle(el.path[0])
    }
}
new Thumb(".content", ".demoSpan1")