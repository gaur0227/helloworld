set /p num01="commitコメントを入力してください。"

git fetch
git add --all
git commit -a -m"%num01%"
git push --all
