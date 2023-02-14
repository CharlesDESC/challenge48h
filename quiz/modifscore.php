<?php
$json = file_get_contents('../data.json', true);
$data = json_decode($json, true);
$tries = $data['jeux'][1]['max_tentative'];
$missiles = $data['missile'];
$data['jeux'][1]['max_tentative'] = $tries-1;
$json_data_tries = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents('../data.json', $json_data_tries);
$data['missile'] = $missiles+2;
$json_data_missiles = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents('../data.json', $json_data_missiles)
?>