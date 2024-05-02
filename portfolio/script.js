let  numberPercent = document.querySelectorAll('.countbar')
let getPercent = Array.from(numberPercent)

getPercent.map((items) => {
    let startCount = 0
    let progressBar = () => {
        startCount ++
        items.innerHTML = `<h3>${startCount}%</h3>`
        items.style.width = `${startCount}%`
        if(startCount == items.dataset.percentnumber) {
            clearInterval(stop)
        }
    }
    let stop = setInterval(() => {
        progressBar()
    },25)
})

const toggleBtn = document.getElementById('toggleBtn')
const menu = document.getElementById('menu')
toggleBtn.addEventListener('click',()=>{
    
    menu.style.left = "0%"
})

const links = document.querySelectorAll('.link')


Array.from(links).forEach((link)=>{
    link.addEventListener('click',()=>{
        menu.style.left="-50%"
       
    })
})