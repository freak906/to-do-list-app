function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    let text = $(li).append(document.createTextNode(inputValue));

    if (inputValue === '') {
        alert('You must write something!');
    }else{
        let list = $('#list').append(li);
    }

    function crossOut(){
        li.addClass('strike');
    }
    li.on('dblclick',function crossOut() {
        li.toggleClass('strike');
    }); 

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);


    crossOutButton.on('click', function deleteThisItem() {
        li.addClass('delete');
    });

    $('#list').sortable();
}