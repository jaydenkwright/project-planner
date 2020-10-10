from flask import Flask, request, jsonify, send_from_directory
import os
from ProjectModel import Project, project_Schema, projects_Schema 
from config import db, app
import ProjectRoute
import PhaseRoute
import TaskRoute
import UserRoute


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
  path_dir = os.path.abspath("./client/build")
  if path != "" and os.path.exists(os.path.join(path_dir, path)):
      return send_from_directory(os.path.join(path_dir), path)
  else:
      print(os.path.join(path_dir))
      return send_from_directory(os.path.join(path_dir),'index.html')
  
@app.route('/service-worker.js')
def serve_worker():
  return send_from_directory('./client/build/', 'service-worker.js')
  #return app.send_static_file('service-worker.js')

@app.errorhandler(404)   
def not_found(e):   
  return app.send_static_file('index.html')

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  response.headers.add('Access-Control-Allow-Credentials', 'true')
  return response

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)