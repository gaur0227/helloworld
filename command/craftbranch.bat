cd ../
echo off
echo CRAFT BRANCH
git branch
echo �V�K�����[�g(���[�J��)�u�����`���쐬���܂��B
set /p BRANCH_NAME="�u�����`������͂��Ă��������B > "

git branch %BRANCH_NAME%
git checkout %BRANCH_NAME%
git push origin %BRANCH_NAME%

echo �������I�����܂����B
