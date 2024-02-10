from flask import Flask, request, render_template 
 
app = Flask(__name__) 
 
@app.route('/') 
def index(): 
    return render_template('index.html') 
 
@app.route('/process', methods=['POST']) 
def process(): 
    # This function will be called when the button is clicked 
    # You can write your Python code here 
    return 'Function called successfully' 
 
if __name__ == '__main__': 
    app.run(debug=True) 




# import voice_to_text as de
# def check_if_correct(int: i):
#     text= de.receive_input()
#     # add random math to get random letter 
#     for x in i:
#         if x == text:
#             return True
     
#     return False   
       

# print(check_if_correct(1))
