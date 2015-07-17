//wait for everything to load
$(document).ready(function(){

$('#submit-btn').click(function(){
    event.preventDefault();

//find out which location the user picks
var city = $('#city-type').val();
$('#city-type').val('');
city = city.toLowerCase().trim();

//update the background based on the user input
   //Show NYC if input is...
   if (city == 'new york' || city =='new york city' || city == 'nyc') {
      $('body').attr('class','nyc');
    //Show SF if input is...
    } else if (city == 'san francisco' || city == 'san fran' || city == 'bay area') {      
       $('body').attr('class','sf');
    //Show LA if input is...
    } else if (city == 'los angeles' || city == 'la' || city == 'lax') {      
       $('body').attr('class','la');
    //Show ATX if input is...
    } else if (city == 'austin' || city == 'atx') {      
       $('body').attr('class','austin');
    //Show SYD if input is...
    } else if (city == 'sydney' || city == 'syd') {      
       $('body').attr('class','sydney');
    }
 });
});
