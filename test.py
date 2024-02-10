from http.server import BaseHTTPRequestHandler, HTTPServer
# import voice_to_text as vtt
import random

class HTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Set CORS headers
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.send_header('Access-Control-Allow-Origin', '*')  # Allow requests from any origin
        self.send_header('Access-Control-Allow-Methods', 'GET, POST')  # Allow GET and POST requests
        self.end_headers()

        # Send response body
        # vtt_response = str(vtt.receive_input())
        # self.wfile.write(vtt_response.encode())
        random_character = random.choice('abcdefghijklmnopqrstuvwxyz')
        self.wfile.write(random_character.encode())


def run(server_class=HTTPServer, handler_class=HTTPRequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print('Starting server...')
    httpd.serve_forever()

if __name__ == "__main__":
    run()