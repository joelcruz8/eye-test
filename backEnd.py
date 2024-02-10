import speech_recognition as sr
import pyttsx3

# Create a Recognizer instance
recognizer = sr.Recognizer()
def receive_input():
    try:# Use the microphone as audio source
        with sr.Microphone() as source:
            print("Speak something...")
            recognizer.adjust_for_ambient_noise(source, duration=0.2)
            audio_data = recognizer.listen(source, phrase_time_limit=5)
    # Recognize speech using Google Speech Recognition
            text = recognizer.recognize_google(audio_data)
            text=text.lower()
            return text
    except sr.UnknownValueError:
        print("Google Speech Recognition could not understand the audio")
    except sr.RequestError as e:
        print("Could not request results from Google Speech Recognition service; {0}".format(e))

print(receive_input())