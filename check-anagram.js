let inputString1 = 'anagra';
let inputString2 = 'nagra';


function checkAnagram(str1, str2) {
    str1 = str1.split("");
    let obj = {};
    str1.map(el => obj[el] = el)

    for (let i = 0; i < str2.length; i++) {
        if (!obj[str2.charAt(i)]) {
            console.log("Not Anagram ");
            process.exit(0)
        }
    }
    console.log("Anagram ");
}

checkAnagram(inputString1, inputString2);