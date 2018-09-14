#COUNT THE NUMBER OF ONES IN THE BINARY REPRESENTATION OF A NUMBER
#cerner_2^5_2018
def countones(s):
    count = 0
    for i in s:
        n = ord(i)
        while n>0:
            if n%2 == 1:
                count = count + 1
            n = n//2
    print (count)

countones('vishva')
countones('a')
