$count = $('.lwriter').length;
$('.lwriter').each(function () {
    $(this).hide();
})
$text = $('.lwriter:eq(0)').attr('writer');
$input = $('.lwriter:eq(0)');
if ($input.get(0).hasAttribute('lwalign')) {
    $align = $input.attr('lwalign');
    if ($align == 'left') {
        $input.css({
            direction: 'lft',
            textAlign: 'left'
        });
    }
    if ($align == 'center') {
        $input.css({
            textAlign: 'center',
            direction: 'unset'
        })
    }
    if ($align == 'right') {
        $input.css({
            direction: 'rtl',
            textAlign: $align
        });
    }
}
if ($input.get(0).tagName.toLowerCase() != 'input') {
    $input.html('<span class="lwcarpet"></span>');
    $('.lwcarpet').css({
        borderRight: '1px solid'
    })
}
$input.focus();
$op = 1;
$i = 0;
$input.show();

function start() {
    if ($i != $text.length) {
        $speed = $input.attr('lwspeed');
        if ($input.get(0).tagName.toLowerCase() != 'input') {
            $('.lwcarpet').before($text.charAt($i));
        } else {
            $input.val($input.val() + $text.charAt($i));
            console.log($input.get(0).tagName.toLowerCase())
        }
        $i++;
        setTimeout(function () {
            start();
        }, $speed);
    } else {
        $input.blur();
        $('.lwcarpet').remove();
        if ($op >= $count) {} else {
            $text = $('.lwriter:eq(' + $op + ')').attr('writer');
            $input = $('.lwriter:eq(' + $op + ')');
            if ($input.get(0).hasAttribute('lwalign')) {
                $align = $input.attr('lwalign');
                if ($align != 'right') {
                    $input.css({
                        direction: 'lft',
                        textAlign: 'left'
                    });
                }
                if ($align == 'right') {
                    $input.css({
                        direction: 'rtl',
                        textAlign: $align
                    });
                }
            }
            if ($input.get(0).tagName.toLowerCase() != 'input') {
                $input.html('<span class="lwcarpet"></span>');
                $('.lwcarpet').css({
                    borderRight: '1px solid'
                })
            }
            $op++;
            $i = 0;
            $input.show();
            $input.focus();
            setTimeout(function () {
                start();
            }, 1000);
        }
    }

}
