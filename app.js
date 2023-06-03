let but1 = document.getElementById('but1')
let but2 = document.getElementById('but2')
let but3 = document.getElementById('but3')
let out = document.getElementById('out')

let imgUser = document.getElementById('img-user')
let imgComp = document.getElementById('img-comp')

but1.onclick = function() {
    human = 'f'
    humturn('огонь')
}
but2.onclick = function() {
    human='w'
    humturn('вода')
}
but3.onclick = function() {
    human='z'
    humturn('земля')
}

const variant = ['f','w','z']
const win = ['wf','fz','zw']
const loose = ['fw','zf','wz']
let human=''
let comp=''
let pobeda=''

function humturn(turn){
    console.log('вы выбрали',turn)
    compturn()
}

function compturn(){
    let r=Math.floor(Math.random()*3)
    console.log('комп выбрал',variant[r])
    comp=variant[r]
    result()
}

function result(){
    console.log(human,comp)
    let res=human+comp
    if (win.includes(res)){
        console.log('вы выиграли')
        pobeda='Вы выиграли'
    }
    else if (loose.includes(res)){
        console.log('вы проиграли')
        pobeda='Вы програли'
    }
    else {
        console.log('ничья')
        pobeda='Ничья'
    }
    out.innerText = pobeda
    if (human == 'z') {
        imgUser.setAttribute('src', 'z.png')
    }
    if (human == 'w') {
        imgUser.setAttribute('src', 'w.png')
    }
    if (human == 'f') {
        imgUser.setAttribute('src', 'f.png')
    }
    if (comp == 'z') {
        imgComp.setAttribute('src', 'z.png')
    }
    if (comp == 'w') {
        imgComp.setAttribute('src', 'w.png')
    }
    if (comp == 'f') {
        imgComp.setAttribute('src', 'f.png')
    }
    
}