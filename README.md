# twitter-words
This small project is a demostration on how to break the character constraint of twitter.
```
var dictionary = getDictionary();
var encoded = 'how now brown cow'.twitterEncode(dictionary)

console.info('encoded => ', encoded);
console.info('decoded => ', encoded.twitterDecode(dictionary));

```
Yeilds:
encoded => 怔蓼ᡃ⯳
decoded => how now brown cow