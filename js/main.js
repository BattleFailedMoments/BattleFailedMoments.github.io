$(document).ready(function() {
    // MODAL
    // Click function for show the Modal
    $(".uploadBtn").on("click", function(){
        $(".mask").addClass("active");
        $(".modal").addClass("active");
    });

    // Function for close the Modal
    function closeModal(){
        $(".mask").removeClass("active");
        $(".modal").removeClass("active");
    }

    // Call the closeModal function on the clicks/keyboard
    $(".close, .mask").on("click", function(){
        closeModal();
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            closeModal();
        }
    });

    // MULTI STEP FORM
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    $(".next").click(function(){
        if(animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //activate next step on progressbar using the index of next_fs
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
                //2. bring next_fs from the right(50%)
                left = (now * 50)+"%";
                //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({
            'transform': 'scale('+scale+')',
            'position': 'absolute'
        });
                next_fs.css({'left': left, 'opacity': opacity});
            },
            duration: 800,
            complete: function(){
                current_fs.hide();
                animating = false;
            },
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });

    $(".previous").click(function(){
        if(animating) return false;
        animating = true;

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //de-activate current step on progressbar
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale previous_fs from 80% to 100%
                scale = 0.8 + (1 - now) * 0.2;
                //2. take current_fs to the right(50%) - from 0%
                left = ((1-now) * 50)+"%";
                //3. increase opacity of previous_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({'left': left});
                previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
            },
            duration: 800,
            complete: function(){
                current_fs.hide();
                animating = false;
            },
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });

    $('#input-form').on('submit',function(){

        function checkForm(form) {
            if(form.terms.checked) {
                var inputq1 = encodeURIComponent($('#input-q1').val());
                var inputq2 = encodeURIComponent($('#input-q2').val());
                var inputq3 = encodeURIComponent($('#input-q3').val());
                var inputq4 = encodeURIComponent($('#input-q4').val());
                var textareaq5 = encodeURIComponent($('#textarea-q5').val());
                var textareaq6 = encodeURIComponent($('#input-q6').val());

                var q1ID = "entry.1673796720";
                var q2ID = "entry.1984976514";
                var q3ID = "entry.2032704821";
                var q4ID = "entry.1880982110";
                var q5ID = "entry.1394787027";
                var q6ID = "entry.1209949091";
                var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSce4xXbuzHIFed314z_j2FeImTMVh_cL8naMXdsZf7mGKXtZg/formResponse?';
                // var baseURL = 'https://docs.google.com/a/industrydive.com/forms/d/e/1FAIpQLScPUWFIoMwOPyH2lFsSZVfjznr6BRrKa4gpKnmdEOb1WNi60A/formResponse?';
                var submitRef = '&submit=Submit';
                var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + "&" + q3ID + "=" + inputq3 + "&" + q4ID + "=" + inputq4 + "&" + q5ID + "=" + textareaq5 + "&" + q6ID + "=" + textareaq6 + submitRef);
                console.log(submitURL);
                $(this)[0].action=submitURL;
                $('#input-feedback').text('Thank You!');

                return true;
            } else {
                alert("Please indicate that you accept the Terms and Conditions");
                form.terms.focus();
                return false;
            }
        }

    });

    $(".submit").click(function(){
        function checkForm(form) {
            if(!form.terms.checked) {
                alert("Please indicate that you accept the Terms and Conditions");
                form.terms.focus();
                return false;
            }
            return true;
        }
    })

});
