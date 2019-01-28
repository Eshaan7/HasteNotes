import os

from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)

Notes = []

@app.route('/')
def index():
	return render_template("index.html", notes=Notes)

@socketio.on("submit note")
def sendnote(data):
	Notes.append(data['text'])
	lastNote = Notes[-1]
	emit("all notes", lastNote, broadcast=True)

if __name__=='__main__': 
    app.run(debug = True) 