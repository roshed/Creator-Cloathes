$('.image-btn').click(function(){
    $('#image').click();
});
$(function(){
    $(".productFront").html('<img src="img/tshirt.jpg" alt="Przód" class="img-responsive link"/>');
    $(".front").html('<img src="img/tshirt.jpg" alt="Przód" class="height-responsive link"/> ');
    $(".back").html('<img src="img/tshirtb.jpg" alt="Tył" class="height-responsive linkb"/> ');
    $('.clickItem').click(function(){
        var attr = $(this).attr('href');
        var link = "img/"+attr+".jpg";
        var linkb = "img/"+attr+"b.jpg";
        $(".productFront").html('<img src="'+link+'" alt="Przód" class="img-responsive link"/> ');
        $(".front").html('<img src="'+link+'" alt="Przód" class="height-responsive link"/> ');
        $(".back").html('<img src="'+linkb+'" alt="Tył" class="height-responsive linkb"/> ');

        return false;
        alert(attr);
    });
    
    $('.back').click(function(){
        var link = $(".linkb").attr('src');
        $('.productFront').removeClass('active').hide();
        $('.productBack').addClass('active').show();

        $(".productBack .image").html('<img src="'+link+'" alt="Przód" class="img-responsive linkb"/> ');
        $(this).hide();
        $('.front').show();
    });
    
    $('.front').click(function(){
        var link = $(".link").attr('src');

        $('.productBack').removeClass('active').hide();
        $('.productFront').addClass('active').show();
        
        $(".productFront .image").html('<img src="'+link+'" alt="Przód" class="img-responsive link"/> ');
        
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
        $('.active').prepend('<div class="add-file"><img src="#" id="load" class="added-img"/></div>');
        
        $('.add-file')
            .resizable({containment: "#wizardPanel .active"})
            .draggable({ containment: "#wizardPanel .active", scroll: false, stack: "#wizardPanel .active"});
    });


        
$(document).ready(function(){
        $(".text-btn").click(function() {

            $('.active').prepend(
                '<div id="text-div" class="image-preview"><p class="image-message">Dodaj tekst!</p></div>'
            );

        $('.image-preview').editable({
        type: 'text',
        title: 'Wpisz swój tekst',
        auto: '',
        emptytext: "",
        emptyclass: "empty-text"
        });
        $('.image-preview')
            .resizable({containment: "#wizardPanel .active"})
            .draggable({containment: "#wizardPanel .active", scroll: false, stack: "#wizardPanel .active"});

        });
        $('.pattern-btn').click(function(){
            $('.panelPattern').toggle();
        });
        
        $('.pattern-select').click(function(){
            var img = $(this).html();
            img = '<div class="pattern-img">'+img+'</div>';
            $('.active').prepend(img);

            //$('.active').prepend('<div class="add-file"><img src="#" id="load" class="added-img"/></div>');
            
            $('.pattern-img')
                .resizable({containment: "#wizardPanel .active"})
                .draggable({ containment: "#wizardPanel .active", scroll: false, stack: "#wizardPanel .active"});
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
});
