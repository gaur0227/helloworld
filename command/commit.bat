echo off
set /p num01="commitコメントを入力してください。 >"
echo on

git fetch
git add --all
git commit -a -m"%num01%"
git push --all

pause
