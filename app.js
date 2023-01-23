//creating a new todo
$('#inp').keypress(function(e){
    if(e.which===13)
    {
        const todoText=$(this).val(); //or-->const todo=$('#inp').val();
        $('#list').append(`<li><span><i class="fa-solid fa-trash-can"></i></span> ${todoText}</li>`);
        $('#inp').val("");
    }
});

//mark the todo as completed
$('ul').on('click','li',function(){
    $(this).toggleClass('completed'); //refers to li
});

//delete the list
$('#list').on('click','span',function(e){  //this refers to span; this.parent refers to li
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    e.stopPropagation(); //to stop event bubbling
});

$('#plus').click(function(){
    $('#inp').fadeToggle();
});