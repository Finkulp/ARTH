You have three scripts in the folder; 
1. app.py is the python script containing the Flask Server.
2. action.py is a demo python script to run in Flask Server. In your case, for example your python script name is stock.py then change the name in app.py file to run it. (Same format should be followed)
3. fetch-api.js is practically your React Frontend Communication means in your React frontend, you need to use Fetch to make requests to the Flask backend. js code is written, please change it in your React Frontend accrodingly.


Steps to work on:
1. Run the command in your python environment (If you not created, simply run in cmd)
pip install flask flask-pymongo
pip install APScheduler

2. Change your python script as per the format provided in action.py and rename it correctly in order to run the same in flask server.

3. Change the app.py to configure the MongoDB connection as well as python script to run (for example in the given code it is action.py), Added the BackgroundScheduler to schedule the run. 
In the given app.py, scheduler.add_job(func=run_action_script, trigger="interval", minutes=60) schedules the run_action_script function to run every hour. You can adjust the interval according to your needs.

When every changes done. Now to test it, follow the steps:
1. Run the app.py like in cmd "python app.py"
2. Your Flask app now has a "/run-script" endpoint that can be called from your React frontend to run the "action.py" script. The script will also run automatically based on the schedule set with APScheduler.

This setup allows your Flask application to run your external action.py script on demand via an API call from your React frontend and on a scheduled basis using APScheduler.

If any support require, Please let me know :)