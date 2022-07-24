
const dropDowns: NodeListOf<Element> = document.querySelectorAll('.select')

const toggler = (element: any, toggleClassCSS: string, toggleClassCSS2: string):void => {
    element.classList.toggle(toggleClassCSS)
    element.classList.toggle(toggleClassCSS2)
}


dropDowns.forEach(select => {
    select.addEventListener('click', ():void => {
        toggler(select, 'active__false', 'active__true')
    })

})

const initDorpDown=(dropDown: NodeListOf<Element> , activeSpan:NodeListOf<Element>  ):void => {
    let options: any = []

    for (let i: number = 0; i < dropDown.length; i++) {
        options.push(dropDown[i].children)
    }
    for (let i:number = 0; i < options.length; i++) {
        for(let n:number = 0; n<options[i].length; n++ ){
            options[i][n].addEventListener('click', ():void => {
                activeSpan[i].textContent = options[i][n].textContent
            })
        }
    }

}


let dropDownsOptions: NodeListOf<Element>  = document.querySelectorAll('.select_body')
let activeSpans:NodeListOf<Element> = document.querySelectorAll('.select_span>span')
initDorpDown(dropDownsOptions, activeSpans)