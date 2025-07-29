<?php
function filter_xss($payload) {
    $payload = str_replace(
        [">", "<", "'", "(", ")"],
        "",
        $payload
    );
    return $payload;
}

if(isset($_GET['xss'])){
    $r=filter_xss($_GET['xss']);
    echo "<input type=\"hidden\" value=\"$r\">";
}
else{
    highlight_file(__FILE__);
}
?>
