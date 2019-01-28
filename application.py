
from flask import Flask, render_template, request, session
from flask_session import Session

app = Flask(__name__)

app.config["SESSION_PERMANENT"] = True
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

notes = []

@app.route('/', methods=['GET','POST'])
def index():
	n = ''
	if request.method == 'POST':
		n = request.form.get('note')
		if n:
			notes.append(n)
	return render_template('index.html', notes=notes)

if __name__=='__main__': 
    app.run(debug = True) 