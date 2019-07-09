let re;
re = /hello/i; //
re = /^h/i;
re = /world$/i;
re = /^hello$/i;
re = /^h.llo$/i;
re = /^h*llo$/i;
re = /gre?a?y\?/i;
re = /gr[ea]y/i;
re = /[^GF]ray/i;
re = /[A-Z]ray/;
re = /[a-z]ray/;
re = /[A-Za-z]ray/;
re = /[0-9]ray/;
re = /hel{2}o/i;
re = /hel{2,4}o/i;
re = /hel{2,}o/i;
re = /\w/;
re = /\w+/;
re = /\W/;
re = /\d+/;
re = /\D+/;
re = /\s/;
re = /\S/;
re = /Hell\b/i;
re = /x(?=y)/;
re = /x(?!y)/;

str = 'dskdsdxlds';

const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does Not match ${re.source}`);
    }
}

reTest(re, str);