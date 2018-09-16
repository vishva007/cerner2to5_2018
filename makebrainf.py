def createbrainf(s):
    for i in s:
        print ('>', end='')
        for i in range(0,ord(i)):
            print ('+', end='')
        print ('.', end='')
    print ('')

createbrainf('FirstHandFoundation')
createbrainf('cerner')
createbrainf('cerner_2^5_2018')
