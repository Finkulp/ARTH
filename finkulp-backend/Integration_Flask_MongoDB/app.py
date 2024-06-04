from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
import subprocess
import sys
from apscheduler.schedulers.background import BackgroundScheduler

app = Flask(__name__)

# Configuring the MongoDB connection
app.config["MONGO_URI"] = "mongodb+srv://arunrathaur985:Aa9406789323@finkulpdatabase.eefv0im.mongodb.net/?retryWrites=true&w=majority&appName=FinkulpDataBase"
mongo = PyMongo(app)

def run_action_script():
    # Run action.py as a subprocess
    result = subprocess.run([sys.executable, "action.py"], capture_output=True, text=True)
    print(result.stdout)
    return result.stdout

@app.route('/run-script')
def run_script():
    # data = request.json
    # collection_name = data.get('collection')
    # query = data.get('query', {})

    # collection = mongo.db[collection_name]
    # documents = list(collection.find(query))

    # Call the script
    result = run_action_script()

    return jsonify({"result": result})

# Schedule tasks
scheduler = BackgroundScheduler()
scheduler.add_job(func=run_action_script, trigger="interval", seconds=1)
scheduler.start()

if __name__ == '__main__':
    app.run(debug=True)
