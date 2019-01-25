from flask import Flask, render_template, request, session
from flask_session import Session

app = Flask(__name__)

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

@app.route('/', methods=['GET', 'POST'])
def index():
	if session.get("notes") is None:
		session["notes"] = []
	n = ''
	if request.method == 'POST':
		n = request.form.get('note')
		if n:
			session["notes"].append(n)
	return render_template('index.html', notes=session["notes"])


if __name__=='__main__': 
    app.run(debug = True) 
