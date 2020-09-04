let repeat = (str) => {
    let obj = {};
    for(let i=0;i<str.length;i++){
        let c = str[i].toLowerCase();
        obj[c] ? obj[c].push(str[i]) : obj[c] = [str[i]];
    }
    let value = Object.values(obj);
    value.sort((a,b) => a.length-b.length);
    let newStr = '';
    for(let i=0;i<value.length;i++){
        newStr += value[i].join('');
    }
    return newStr
}