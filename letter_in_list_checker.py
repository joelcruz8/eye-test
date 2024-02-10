import voice_to_text as de

def check_if_correct(str: str):
    text= de.receive_input()
    if str == text:
        return True
     
    return False