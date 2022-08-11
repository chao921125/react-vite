export const strToUtf8Bytes = (str : string)=> {
  const utf8:number[] = []
  for (let ii = 0; ii < str.length; ii++) {
    let charCode = str.charCodeAt(ii);
    if (charCode < 0x80) utf8.push(charCode);
    else if (charCode < 0x800) {
      utf8.push(0xc0 | (charCode >> 6), 0x80 | (charCode & 0x3f));
    } else if (charCode < 0xd800 || charCode >= 0xe000) {
      utf8.push(0xe0 | (charCode >> 12), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
    } else {
      ii++;
      charCode = 0x10000 + (((charCode & 0x3ff) << 10) | (str.charCodeAt(ii) & 0x3ff));
      utf8.push(
        0xf0 | (charCode >> 18),
        0x80 | ((charCode >> 12) & 0x3f),
        0x80 | ((charCode >> 6) & 0x3f),
        0x80 | (charCode & 0x3f),
      );
    }
  }
  //兼容汉字，ASCII码表最大的值为127，大于127的值为特殊字符
  for(let jj=0;jj<utf8.length;jj++){
    let code = utf8[jj];
    if(code>127){
      utf8[jj] = code - 256;
    }
  }
  return utf8;
}

export const strToHexCharCode = (str:number[]) => {
  let hexCharCode = [];
  let chars = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
  for(let i = 0; i < str.length; i++) {
    let bit1 = (str[i] & 0x0f0) >> 4;
    hexCharCode.push(chars[bit1]);
    let bit2 = str[i] & 0x0f;
    hexCharCode.push(chars[bit2]);
  }
  return hexCharCode.join("");
}
