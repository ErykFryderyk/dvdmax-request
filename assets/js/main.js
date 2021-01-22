const items = document.querySelectorAll('.wrapper__item');
const buttonGet = document.querySelector('#add-value-btn');
const list = document.querySelector('.wrapper__list');

$('.modal').hide();

$('.add-item').click(function(){
    $('.modal').toggle();
})

$('#btn-close-modal').click(function(){
    $('.modal').hide();
})
$('#remove-item').click(function(){
    $('.wrapper__item--checked').remove();
})

items.forEach(el => {
    el.addEventListener('click', function (){
        items.forEach(el => el.classList.remove('wrapper__item--checked'))
        el.classList.toggle('wrapper__item--checked');
    })
})

function createElement(value, element){
    const parentElement = document.querySelector(`#${element}`);
    const li = document.createElement('li');
    li.classList.add('wrapper__item');
    li.innerHTML = value;
    
    parentElement.appendChild(li);
}


const addNewItem = function(){
    const selectedValue = document.querySelector('#select-element').value;
    const inputValue = document.querySelector('#input');

    if(inputValue.value === ''){
        alert("Wypełnij input");
    } else {
        createElement(inputValue.value, selectedValue);
        inputValue.value = '';
        $('.modal').hide();
    };
    
}
$('#add-value-btn').click(function(){
    addNewItem();
});




















