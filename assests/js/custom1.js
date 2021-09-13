$(document).ready(function() {
  $("#crossIcon").click(function() {
    $("#imageContainer").show();
    
  });
  $("#searchIcon").click(function() {
    input=$("#searchInput").val();
    $("#imageContainer img").each(function() {
      attribute=$(this).attr("data-image");
      if (attribute.includes(input)) {
        $( "#searchResult" ).append(this);
      }
    })
    $("#imageContainer").hide();
  });
});