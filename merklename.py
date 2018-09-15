#calculate merkle hash of a string
# c e r n e r -> ce,rn,er -> cern, erer -> cernerer
# cerner_2^5_2018
import hashlib
def calchash(s):
    return hashlib.sha256(s.encode('utf-8')).hexdigest()

joinhash = lambda x,y : calchash(x+y)

def calcmerklehash(s):
    hasharray = list(map(calchash, list(s)))
    while(len(hasharray) > 1):
        if len(hasharray)%2 != 0:
            hasharray.append(hasharray[len(hasharray)-1])
        hasharray = list(map(joinhash, hasharray[::2], hasharray[1::2]))
    print (hasharray)
    
calcmerklehash('cerner')
calcmerklehash('FirstHandFoundation')
calcmerklehash('cerner_2^5_2018')
calcmerklehash('vishva')

