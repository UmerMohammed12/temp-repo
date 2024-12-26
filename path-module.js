const path = require('path')


//path seperator
console.log(path.sep);// \


const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath);//\content\subfolder\text.txt

//path base
console.log(path.basename(filePath));//text.txt


//absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);//C:\Users\Umar Mohammed\Desktop\Tutorial\content\subfolder\text.txt
