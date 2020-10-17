from xtea4 import *

key = struct.pack('16s', b"0123456789012345")
text = b"calafate"
x = new(key, mode=MODE_ECB)
c = x.encrypt(text)
text == (x.decrypt(c))
w = binascii.b2a_base64(c)
y = w.decode()
print(y)
True

html = """
<p> En algún lugar de este sitio hay un mensaje cifrado </p>
<div class ='xTEA' id='"""+y+"""'></div>
"""


archivo = open("index.html", "w")
archivo.write(html)
archivo.close()



