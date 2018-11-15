$('#departures-filter').on('click', () => {
	$('.flight').addClass('hide');
	$('.departure').removeClass('hide');
});

$('#arrivals-filter').on('click', () => {
	$('.flight').addClass('hide');
	$('.arrival').removeClass('hide');
});

$('#delays-filter').on('click', () => {
	$('.flight').addClass('hide');
	$('.delay').removeClass('hide');
});

$('body').on('keyup' , '#filter-input' , function(){
  var searchText = $('#filter-input').val().toLowerCase();
  $('#container > .flight').each(function(i){
    var element = $(this);
    if (element.html().toLowerCase().indexOf(searchText)=== -1){
      element.addClass('hide');
    } else {
       element.removeClass('hide');
    }
   });
});