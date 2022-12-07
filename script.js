let togglenone = document.querySelectorAll('.togglenone')
let blockChange = document.getElementById('blockChange')
let btnChane = document.getElementById('btnChane')
let fontSized = document.getElementById('fontSized')
let transoformChange = document.getElementById('transoformChange')
let blockSize = document.getElementById('blockSize')
let blockTextResult = document.getElementById('blockTextResult')
let textSize = document.getElementById('textSize')
let copyCode = document.getElementById('copyCode')
let backGroundColorBlock = document.getElementById('backGroundColorBlock')
let bordRightTop = document.getElementById('bordRightTop'), bordRightBottom = document.getElementById('bordRightBottom'), bordLeftTop = document.getElementById('bordLeftTop'), bordLeftBottom = document.getElementById('bordLeftBottom')
let BlockHeight = document.getElementById('BlockHeight'), blockWidth = document.getElementById('blockWidth')
let vertLength = document.getElementById('vertLength'), selectInset = document.getElementById('selectInset'), spread = document.getElementById('spread'), blurRad = document.getElementById('blurRad'), horLength = document.getElementById('horLength'), colorType = document.getElementById('colorType')
let opacityBgc = document.getElementById('opacityBgc'), rangeR = document.getElementById('rBBgc'), rangeG = document.getElementById('gBBgc'), rangeB = document.getElementById('bBgc')
let scaleSize = document.getElementById('scaleSize'), rotateTransform = document.getElementById('rotateTransform'), translateX = document.getElementById('translateX'), translateY = document.getElementById('translateY'), skewX = document.getElementById('skewX'), skewY = document.getElementById('skewY')
let boxBtn = document.getElementById('boxBtn')
let wind = window.getComputedStyle(blockChange)
let interval
copyCode.onclick = () => {
    clearInterval(interval)
    copyCode.style.border = 'none'
    interval = setInterval(() => {
        copyCode.style.border = '1px solid black'
    }, 100);
    navigator.clipboard.writeText(blockTextResult.innerHTML)
}
btnChane.addEventListener('click', (e) => {
    for (let ele of togglenone) {
        ele.classList.add('dnone')
    }
    togglenone[0].classList.toggle('dnone')
})

boxBtn.addEventListener('click', () => {
    for (let ele of togglenone) {
        ele.classList.add('dnone')
    }
    togglenone[1].classList.toggle('dnone')
})
backGroundColorBlock.addEventListener('click', () => {
    for (let ele of togglenone) {
        ele.classList.add('dnone')
    }
    togglenone[2].classList.toggle('dnone')
})
blockSize.addEventListener('click', () => {
    for (let ele of togglenone) {
        ele.classList.add('dnone')
    }
    togglenone[3].classList.toggle('dnone')
})
textSize.addEventListener('click', () => {
    for (let ele of togglenone) {
        ele.classList.add('dnone')
    }
    togglenone[4].classList.toggle('dnone')
})
transoformChange.addEventListener('click', () => {
    for (let ele of togglenone) {
        ele.classList.add('dnone')
    }
    togglenone[5].classList.toggle('dnone')
})
fontSized.addEventListener('input', () => {
    blockChange.style.fontSize = `${fontSized.value}px`
    blockTextResult.innerHTML = `font-size: ${fontSized.value}px;`
})
bordLeftTop.oninput = borderRad
bordRightTop.oninput = borderRad
bordRightBottom.oninput = borderRad
bordLeftBottom.oninput = borderRad
function borderRad() {
    blockChange.style.borderRadius = `${bordLeftTop.value}px ${bordRightTop.value}px ${bordRightBottom.value}px ${bordLeftBottom.value}px`
    blockTextResult.innerHTML = `border-radius: ${bordLeftTop.value}px ${bordRightTop.value}px ${bordRightBottom.value}px ${bordLeftBottom.value}px;`
}
selectInset.oninput = boxShad
horLength.oninput = boxShad
vertLength.oninput = boxShad
blurRad.oninput = boxShad
spread.oninput = boxShad
colorType.oninput = boxShad
function boxShad() {
    if (selectInset.value == 'Yes') {
        blockChange.style.boxShadow = `Inset ${horLength.value}px ${vertLength.value}px ${blurRad.value}px ${spread.value}px ${colorType.value}`
        blockTextResult.innerHTML = `box-shadow: Inset ${horLength.value}px ${vertLength.value}px ${blurRad.value}px ${spread.value}px ${colorType.value};`
    }
    else {
        blockChange.style.boxShadow = `${horLength.value}px ${vertLength.value}px ${blurRad.value}px ${spread.value}px ${colorType.value}`
        blockTextResult.innerHTML = `box-shadow: ${horLength.value}px ${vertLength.value}px ${blurRad.value}px ${spread.value}px ${colorType.value};`
    }
}
rangeR.oninput = backgroundColors
rangeG.oninput = backgroundColors
rangeB.oninput = backgroundColors
opacityBgc.oninput = backgroundColors
function backgroundColors() {
    blockChange.style.backgroundColor = `rgb(${rangeR.value}, ${rangeG.value}, ${rangeB.value}, ${opacityBgc.value})`
    blockTextResult.innerHTML = `background-color: rgb(${rangeR.value}, ${rangeG.value}, ${rangeB.value}, ${opacityBgc.value});`
}
blockWidth.oninput = blockSized
BlockHeight.oninput = blockSized
blockWidth.value = parseInt(wind.width)
BlockHeight.value = parseInt(wind.height)
function blockSized() {
    blockChange.style.width = `${blockWidth.value}px`
    blockChange.style.height = `${BlockHeight.value}px`
    blockTextResult.innerHTML = `width:${blockWidth.value}px; height: ${BlockHeight.value}px;`
}
scaleSize.oninput = transformBlock
rotateTransform.oninput = transformBlock
translateX.oninput = transformBlock
translateY.oninput = transformBlock
skewX.oninput = transformBlock
skewY.oninput = transformBlock
function transformBlock() {
    blockChange.style.transform = `scale(${scaleSize.value}) rotate(${rotateTransform.value}deg) translateX(${translateX.value}px) translateY(${translateY.value}px) skewX(${skewX.value}deg) skewY(${skewY.value}deg)`
    blockTextResult.innerHTML = `transform: scale(${scaleSize.value}) rotate(${rotateTransform.value}deg) translateX(${translateX.value}px) translateY(${translateY.value}px) skewX(${skewX.value}deg) skewY(${skewY.value}deg);`
}