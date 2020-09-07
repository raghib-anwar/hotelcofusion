<script type="text/javascript">
        $(document).ready(function() {
            // body...
            $('#mycarousel').carousel({interval:1000});
            $('#carouselButton').click(function(){
                if($('#carouselButton').children('span').hasClass('fa-pause'))
                {
                    $('#mycarousel').carousel('pause');
                    $('#carouselButton').children('span').removeClass('fa-pause');
                    $('#carouselButton').children('span').addClass('fa-play');
                }
                else
                {
                    $('#mycarousel').carousel('cycle');
                    $('#carouselButton').children('span').removeClass('fa-play');
                    $('#carouselButton').children('span').addClass('fa-pause');
                }
            });
            $('#reservebutton').click(function(){
                $('#reservemodal').modal('toggle');
            });
            $('#loginbutton').click(function(){
                $('#loginModal').modal('toggle');
            });
            //$('#carousel-play').click(function(){
            //    $('#mycarousel').carousel('cycle');
            //});
        });
    </script>