function logs(){
var fs = WScript.CreateObject("Scripting.FileSystemObject");
var file = fs.CreateTextFile("text.txt");
file.Write("マルペケつくろ～");
file.Close();
}
