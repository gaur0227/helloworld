/* 変動する値[scr=score
      各バーの値、$set-Val
      各10進数枠、$scr-Dec
      各16進数枠、$scr-Hex
      各パーセンテージの値、$scr-Par
      各カラーの窓、$scr-Win
]*/

//バーの値を取得
function getValue(scr){//scrに各色のバーid
  var barVal = document.getElmentbyId(scr).value;
  return Number(barVal);
}

//16進数を2桁の値に出力
function scrHex(scr){
  var hex = scr;//バーの値を取得
  hex = scr.toString(16);//バーの値を16進数に変換
  //変換した数値に"00"を足して、後ろから2桁の値を返す。
  return('00' + hex).substr(-2);
}

//％に変換
function scrPar(scr){
  return Math.ceil(scr/255*100);
}

// カラー窓の値を出力
function scrWin(str,scr){
  if (str == 'red'){
    return scr + "0000";
  }
  else if (str == 'green') {
    return '00' + scr + '00';
  }
  else if (str == 'blue') {
    return '0000' + scr;
  }
}

//指定エリアに値を設置
function setValue(str,scr){
  document.getElmentbyId(str).value = scr;
}
//背景スタイルを設置
function setStyle(str,red,green,blue){
  str.style.background = rgb(red,green,blue);
}


// ---以下反映処理---
function preview(){
  //色を取得
  var col = {
    r : getValue('rBar'),
    g : getValue('gBar'),
    b : getValue('bBar')
  }

  //10進数設置
  setValur('Rcolor',col.r);
  setValue('Gcolor',col.g);
  setValue('Bcolor',col.b);

  //16進数設置
  setValue('Rcolor16',scrHex(col.r));
  setValue('Gcolor16',scrHex(col.g));
  setValue('Bcolor16',scrHex(col.b));

  //%設置
  setValue('Rava',scrPer(col.r));
  setValue('Gava',scrPer(col.g));
  setValue('Bava',scrPer(col.b));


// ----RGB可視化------
//各カラー窓に設置
  setStyle(red,scrHex(col.r),'00','00');
  setStyle(green,'00',scrHex(col.g),'00');
  setStyle(blue,'00','00',scrHex(col.b));

// ----RGB値のプレビュー-----
}

// 値をリセット
function reset() {
  getValue(rBar,0);
  getValue(gBar,0);
  getValue(bBar,0);
  preview();
}
