echo off
cd command
dir *.bat
echo;
set /p NAME_01="コマンドを選択してください。(.batは省略) >"
%NAME_01%.bat

echo "処理が終了しました。"
cd C:\Users\4md-Design\Documents\github\helloworld
