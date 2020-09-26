from flask import Flask, request, jsonify
from ProjectModel import Project, project_Schema, projects_Schema 
from config import db, app
import ProjectRoute
import PhaseRoute
import TaskRoute
import UserRoute


@app.route('/', defaults={'u_path': ''})
@app.route('/<path:u_path>')
def catch_all(u_path):
  path_dir = os.path.abspath("./client/build") #path react build
    if path != "" and os.path.exists(os.path.join(path_dir, path)):
        return send_from_directory(os.path.join(path_dir), path)
    else:
        return send_from_directory(os.path.join(path_dir),'index.html')

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  response.headers.add('Access-Control-Allow-Credentials', 'true')
  return response

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)