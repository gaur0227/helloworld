$hour =date('G');
if($hour < 10) {
  eho 'おはようございます';
} elseif ($hour < 16 ){
  echo "こんにちは。";
} else {
  echo "おやすみなさい";
}
