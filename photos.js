var photoIndex = 1;
$('.arrows-container').on('click', function(e) {
  var targetId = e.target.id;
  switch (targetId) {
    case 'next':
      photoIndex++;
      break;
    case 'back':
      photoIndex--;
      break;
  }
  if(photoIndex > 3) {
    photoIndex = 1;
  }
  if(photoIndex < 1) {
    photoIndex = 3;
  }
  updateGraphics(photoIndex);
});

$('.counter-container').on('click', function(e) {
  var targetId = e.target.id;
  switch (targetId) {
    case 'counter1':
      photoIndex = 1;
      break;
    case 'counter2':
      photoIndex = 2;
      break;
    case 'counter3':
      photoIndex = 3;
      break;
  }
  updateGraphics(photoIndex);
});

function updateGraphics(photoIndex) {
  $('.graphics').css('background-image', 'url(Images/profile-pic-' + photoIndex + '.jpg)');
  $('#counter' + photoIndex).css('background-color', 'white');
  switch (photoIndex) {
    case 1:
      $('#counter2').css('background-color', 'black');
      $('#counter3').css('background-color', 'black');
      break;
    case 2:
      $('#counter1').css('background-color', 'black');
      $('#counter3').css('background-color', 'black');
      break;
    case 3:
      $('#counter1').css('background-color', 'black');
      $('#counter2').css('background-color', 'black');
      break;
  }
}


$('.box7').on('click', fly);



function fly() {
    var isActive = true;
    var plane = $('.box7');
    var xPosition = 50;
    var yPosition = 40;
    var counter = 0;
    var id = setInterval(frame, 7);
    function frame() {
      if (counter === 65) {
        clearInterval(id);
      } else {
        xPosition += 2;
        yPosition -= 2;
        counter += 1;
        plane.css('background-position', xPosition + '%' + yPosition + '%' );
        console.log(counter);
        if (yPosition === -30) {
          xPosition = -10;
          yPosition = 100;
        }
      }
    }
  }
