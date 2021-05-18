function unique_letters(str) {
    let array = str.split(''); 
    let unique = array.filter((item, i, arr) => arr.indexOf(item) === i);
    let str_done = unique.join(",");
    console.log(str_done);
   };