cd ../
echo off
echo CRAFT BRANCH
git branch
echo 新規リモート(ローカル)ブランチを作成します。
set /p BRANCH_NAME="ブランチ名を入力してください。 > "

git branch %BRANCH_NAME%
git checkout %BRANCH_NAME%
git push origin %BRANCH_NAME%

echo 処理が終了しました。
