$('.bar').resizable({
    handles: 'e',minWidth: 200,
    maxWidth: 700
});
$( function() {
    $( "#atk-bar" ).draggable({
      grid: [ 50, 20 ]
    });
  } );
  $( function() {
    $( "#def-bar" ).draggable({
      grid: [ 50, 20 ]
    });
  } );
  $( function() {
    $( "#hp-bar" ).draggable({
      grid: [ 50, 20 ]
    });
  } );