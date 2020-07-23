from flask import Flask, request, jsonify
from ProjectModel import Project, project_Schema, projects_Schema 
from config import db, app
import ProjectRoute
import PhaseRoute
import TaskRoute
import UserRoute

if __name__ == "__main__":
    app.run(debug=True)