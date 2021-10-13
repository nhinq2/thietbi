$(document).ready(function() {
          $('.summernote').summernote({
            callbacks: {
              onImageUpload: function(files) {
                // upload image to server and create imgNode...
                sendFile(files[0]);
              }
            }
          });
          function sendFile(file) {
              data = new FormData();
              data.append("file", file);
              $.ajax({
                  data: data,
                  type: "POST",
                  url: "/api/image_upload",
                  cache: false,
                  contentType: false,
                  processData: false,
                  success: function(url) {
                    var image = $('<img>').attr('src', url);
                    $('.summernote').summernote("insertNode", image[0]);
                      //editor.insertImage(welEditable, url);
                  }
              });
        }
    $('#defaultCheck1').click( function() {
      $("#defaultCheck1").prop('checked', true);
    });
});
