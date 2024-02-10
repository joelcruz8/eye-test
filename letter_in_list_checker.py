import voice_to_text as de

def check_if_correct(i: int):
    text= de.receive_input()
    for x in i:
        if x == text:
            return True
     
    return False