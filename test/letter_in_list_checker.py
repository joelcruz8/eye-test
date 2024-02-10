import voiceToText as de
def check_if_correct(int: i):
    text= de.receive_input()
    for x in i:
        if x == text:
            return True
     
    return False   
       

print(check_if_correct(1))
