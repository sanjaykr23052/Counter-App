const count = document.querySelector('.count');
const minusBtn = document.querySelector('.minus-button');
const plusBtn = document.querySelector('.plus-button');
const changeby = document.querySelector('.changeby');
const resetBtn = document.querySelector('.reset-btn')


minusBtn.addEventListener('click', ()=>{
    const countValue = parseInt(count.innerText)
    const changebyValue = parseInt(changeby.value)
    count.innerText=countValue-changebyValue;
    

})
plusBtn.addEventListener('click', ()=>{
    const countValue=parseInt(count.innerText)
    const changebyValue = parseInt(changeby.value)
    count.innerText = countValue+changebyValue;

})
resetBtn.addEventListener('click', ()=>{
    count.innerText = 0;
})