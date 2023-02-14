<?php
$json = file_get_contents('../data.json');
$data = json_decode($json, true);
$nbMissile = $data["missile"];
$nbEssaisRestant = $data["jeux"][3]['max_tentative'];
$data['jeux'][3]['max_tentative'] = $nbEssaisRestant - 1;
$json_dataEssai = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents('../data.json', $json_dataEssai);
$data['missile'] = $nbMissile + 1;
$json_dataMissile = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents('../data.json', $json_dataMissile);
