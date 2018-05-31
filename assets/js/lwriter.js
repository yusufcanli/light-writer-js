$count = $('.lwriter').length;
$text = $('.lwriter:eq(0)').attr('writer');
$input = $('.lwriter:eq(0)');
if ($input.get(0).hasAttribute('lwalign')) {
    $align = $input.attr('lwalign');
    $input.css('text-align', $align);
}
$input.focus();
$input.css('width', '' + $text.length + 'ch');
$op = 1;
$i = 0;

function lwriter() {
    if ($i != $text.length) {
        $speed = $input.attr('lwspeed');
        $input.val($input.val() + $text.charAt($i));
        $i++;
        setTimeout(function () {
            lwriter();
        }, $speed);
    } else {
        if ($op >= $count) {

        } else {
            $text = $('.lwriter:eq(' + $op + ')').attr('writer');
            $input = $('.lwriter:eq(' + $op + ')');
            $input.css('width', '' + $text.length + 'ch');
            if ($input.get(0).hasAttribute('lwalign')) {
                $align = $input.attr('lwalign');
                $input.css('text-align', $align);
            }
            $input.focus();
            $op++;
            $i = 0;
            setTimeout(function () {
                lwriter();
            }, 1000);
        }
    }

}
