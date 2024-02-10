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