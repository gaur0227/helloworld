echo off
set /p num01="commit�R�����g����͂��Ă��������B >"
echo on

git fetch
git add --all
git commit -a -m"%num01%"
git push --all

cd ../
echo "�������I�����܂����B"
