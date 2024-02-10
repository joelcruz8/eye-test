<<<<<<< HEAD

import speech_recognition as sr
import pyttsx3

# Create a Recognizer instance
recognizer = sr.Recognizer()
while True: 
    try:# Use the microphone as audio source
        with sr.Microphone() as source:
            print("Speak something...")
            recognizer.adjust_for_ambient_noise(source, duration=0.2)
            print("Does this work")
        
            audio_data = recognizer.listen(source, phrase_time_limit=1)
            print("does this work2")

    # Recognize speech using Google Speech Recognition

            text = recognizer.recognize_google(audio_data)
            text=text.lower()
            print(f"You said:{text} " )
    except sr.UnknownValueError:
        print("Google Speech Recognition could not understand the audio")
    except sr.RequestError as e:
        print("Could not request results from Google Speech Recognition service; {0}".format(e))

=======
import speech_recognition as sr

# Create a Recognizer instance
recognizer = sr.Recognizer()

# Use the microphone as audio source
with sr.Microphone() as source:
    print("Speak something...")
    audio_data = recognizer.listen(source)

# Recognize speech using Google Speech Recognition
try:
    text = recognizer.recognize_google(audio_data)
    print("You said: ", text)
except sr.UnknownValueError:
    print("Google Speech Recognition could not understand the audio")
except sr.RequestError as e:
    print("Could not request results from Google Speech Recognition service; {0}".format(e))

# print('Hello world')
>>>>>>> ba75d2a6faea9e4da13429e03e6ec35249c933d5