$('.image-btn').click(function(){
    $('#image').click();
});
$(function(){
    $(".product").html('<img src="img/tshirt.jpg" alt="Przód" class="img-responsive link"/>');
    $(".front").html('<img src="img/tshirt.jpg" alt="Przód" class="height-responsive link"/> ');
    $(".back").html('<img src="img/tshirtb.jpg" alt="Tył" class="height-responsive linkb"/> ');
    $('.clickItem').click(function(){
        var attr = $(this).attr('href');
        var link = "img/"+attr+".jpg";
        var linkb = "img/"+attr+"b.jpg";
        $(".product").html('<img src="'+link+'" alt="Przód" class="img-responsive link"/> ');
        $(".front").html('<img src="'+link+'" alt="Przód" class="height-responsive link"/> ');
        $(".back").html('<img src="'+linkb+'" alt="Tył" class="height-responsive linkb"/> ');

        return false;
        alert(attr);
    });
    
    $('.back').click(function(){
         var link = $(".linkb").attr('src');
        $(".product").html('<img src="'+link+'" alt="Przód" class="img-responsive linkb"/> ');
        $(this).hide();
        $('.front').show();
    });
    
    $('.front').click(function(){
         var link = $(".link").attr('src');
        $(".product").html('<img src="'+link+'" alt="Przód" class="img-responsive link"/> ');
        $(this).hide();
        $('.back').show();
    });
    
});

    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

        reader.onload = function(e) {
        $("#load").attr('src', e.target.result);}

         reader.readAsDataURL(input.files[0]);};};

    $("#image").change(function() {
        readURL(this);
        $('.wizardPanel').prepend('<div class="add-file"><img src="#" id="load" class="added-img"/></div>');
        
        $('.add-file')
            .resizable({containment: "#wizardPanel"})
            .draggable({ containment: "#wizardPanel", scroll: false, stack: "#wizardPanel div"});
    });


        
$(document).ready(function(){
        $(".text-btn").click(function() {
            $(".text-form").show();

            $('.wizardPanel').prepend(
                '<div id="text-div" class="image-preview"><p class="image-message">Dodaj tekst!</p></div>'
            );
            
        $('.image-preview')
            .resizable({containment: ".wizardPanel"})
            .draggable({containment: ".wizardPanel", scroll: false, stack: "#wizardPanel div"});

        $('.image-preview').editable();
        });
        


        $('.message-box').keyup(function(){
            var value = $(this).val();
            $('.image-message').text(value);
        }); 

        $('.message-form').submit(function(e){
            e.preventDefault;
            return false;
        });

        $('#saveProject').on('click', function(){
            html2canvas($('#wizardPanel'), {
                onrendered: function(canvas) {
                    var myImage = canvas.toDataURL('image/jpg');
            $('.lightbox').fadeIn(200);
            $('.new-image').attr('src', myImage).fadeIn(200);
            $('.new-image').attr('class', 'img-responsive');
                }
            });

        
           
        });

        $('.closebox').click(function(){
            $('.text-form').hide();
        });

});
