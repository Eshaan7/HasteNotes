from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET','POST'])
def index():
	if request.method == 'POST':
		n = ''
		n = request.form.get('note')
		if n:
			with open('notes.txt', 'a+') as NotesFileHandle:
				NotesFileHandle.write("%s\n" % n)
	notes = []
	try:
		NotesFileHandle = open('notes.txt', 'r')
	except:	
		NotesFileHandle = open('notes.txt', 'a+')
		NotesFileHandle.seek(0,0)
	for cur_note in NotesFileHandle.readlines():
		notes.append(cur_note.rstrip())
	NotesFileHandle.close()
	return render_template('index.html', notes=notes)

if __name__=='__main__': 
    app.run(debug = True) 