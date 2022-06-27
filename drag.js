$('.bar').resizable({
    handles: 'e',minWidth: 200,
    maxWidth: 700
});
$( function() {
    $( "#atk-bar" ).draggable();
  } );
  $( function() {
    $( "#def-bar" ).draggable();
  } );
  $( function() {
    $( "#hp-bar" ).draggable();
  } );