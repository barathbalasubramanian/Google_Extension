
const inEl = document.getElementById('input-box')
const saveEl = document.getElementById('save-btn')
const ulEl = document.getElementById('ul-el')
let myleads = []

saveEl.addEventListener('click',function()
{
    myleads.push(inEl.value)
    inEl.value = ''
    render()
})



function render() {
    let listitems = ''
    for ( let i=0; i<myleads.length; i++ ) {
        listitems += `
            <li> 
            <a  href='${myleads[i]}'>
                ${myleads[i]}
            </a>
            </li> `
    }
    ulEl.innerHTML = listitems
}
