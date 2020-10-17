// ==UserScript==
// @name         xTEA ECB Decrypt
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  La función de este script es desencriptar un mensaje inserto de un código HTML generado con Python
// @author       Maximiliano Andrés Vargas Viera
// @match        https://maxivargas78.github.io/
// @grant        none
//updateURL
// @require      https://cdn.jsdelivr.net/npm/xtea@1.0.0/xtea.min.js
// @require      https://cdn.jsdelivr.net/npm/xtea@1.0.0/xtea.js
// ==/UserScript==

(function decryp() {
    'use strict';

     var key = '0123456789012345';
     var IV = '01234567';

     function DecriptXtea(xtea, plaintext){
        var deciphertext = xtea.decryptBlock( plaintext, key, IV );
        return deciphertext;
    }


    var div = document.getElementsByTagName("div");
    var idMensajeCifrado = div[0].id;

    var result = DecriptXtea(idMensajeCifrado, key);
    result = result.toString();

    div[0].innerHTML = 'El mensaje oculto es: '+result;
})();