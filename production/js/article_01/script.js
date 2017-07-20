/* 変動する値[
      各バーの値、$scr-Bar
      各10進数枠、$scr-Dec
      各16進数枠、$scr-Hex
      各パーセンテージの値、$scr-Par
      各カラーの窓、$scr-Win
]*/

//バーの値を取得
setValue(color,scr);{//colorに各色のバーid, strに値
  scr = document.getElmentbyId(color).value;
  return;
}

//10進数
//16進数
setHex();{
  scr = scr.toString(16);
  return;
}
//％
// カラー窓



// ---以下反映処理---
function preview(){
  aa
  aa
// RGB可視化
// RGB値のプレビュー
}


// 値をリセット
function reset() {
  setValue(rBar,0);
  setValue(gBar,0);
  setValue(bBar,0);
  preview();
}
