String.prototype.twitterEncode = function(dictionary) {
    var words = this.trim().toLowerCase().split(' ');
    var output= '';
    
    for(x in words) {        
        output += String.fromCharCode(
            dictionary.indexOf(words[x])
        );
    }

    return output;
}

String.prototype.twitterDecode = function(dictionary) {
    var characters = this.trim().split('');
    var output = '';
    
    for(x in characters) {
        output += dictionary[characters[x].charCodeAt(0)] + ' ';
    }

    return output;
}
