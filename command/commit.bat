echo off
set /p num01="commitƒRƒƒ“ƒg‚ð“ü—Í‚µ‚Ä‚­‚¾‚³‚¢B >"
echo on

git fetch
git add --all
git commit -a -m"%num01%"
git push --all

pause
