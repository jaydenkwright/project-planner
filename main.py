from flask import Flask, request, jsonify
from ProjectModel import Project, project_Schema, projects_Schema 
from config import db, app
import ProjectRoute
import PhaseRoute
import TaskRoute
import UserRoute

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return 'You want path: %s' % path

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  response.headers.add('Access-Control-Allow-Credentials', 'true')
  return response

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)