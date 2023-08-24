$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const inputs = $("#formOne input");
    const values = inputs.map(function() {
      return $(this).val();
    }).get();

    $("span").each(function(index) {
      $(this).text(values[index]);
    });

    $("#story").show();
  });
});