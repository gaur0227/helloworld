cd ../
echo off
echo SASS�̃E�H�b�`���O�����߂܂��B
dir scss
dir css
set /p filename="�t�@�C�������w�肵�Ă��������B(�g���q�͏ȗ�) > "
sass --watch --style expanded scss/%filename%.scss:css/%filename%.css
