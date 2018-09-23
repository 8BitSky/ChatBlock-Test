$(document).ready(function() {
 $('button').click(function(e) {
   e.preventDefault();
   var name = $('#initials').val();
   var text = $('#message').val();
   var MSG = name+" : "+text;
   $('#history').append('<li>'+MSG+'</li>');
 });
});