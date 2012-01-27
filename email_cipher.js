// Complex E-Mail Cipher : Javascript
// - A better-awesomer-complexier-sexier email cipher by rezeusor
//
// USAGE:
//     encodeEmail('email@to.encode') -> returns "EMAIL_HASH;NUMERIC_HASH_KEY"
//     decodeEmail('EMAIL_HASH',NUMERIC_HASH_KEY) -> returns "plain@text.email"
//
//  Copyright rezeusor
//

function encodeEmail(e){
        c = "kX1*A450W.VKGaQS%dNm?ynv|pRYD_IxqU/9lw-FZM^Tb7f}Ocu6!#oCs`zr$igh{2B@HJPt3je8~EL";s=e.length;k=e.split(e.charAt(1)).length - 1;h="";
        for(i=0; i<s; i++){l = c.indexOf(e.charAt(i));t = (l+s+c.length+k) % c.length;h+=(c.charAt(t));}
        return h+";"+k ;
}

function decodeEmail(h,k){
        c = "kX1*A450W.VKGaQS%dNm?ynv|pRYD_IxqU/9lw-FZM^Tb7f}Ocu6!#oCs`zr$igh{2B@HJPt3je8~EL";s=h.length;p="";
        for (i=0; i<s; i++){l = c.indexOf(h.charAt(i));t = (l-s+c.length-k) % c.length;p+=(c.charAt(t));}               
        return p ;
}

