$('.container').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});


