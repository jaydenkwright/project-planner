from flask import Flask, request, jsonify
from ProjectModel import Project, project_Schema, projects_Schema 
from config import db, app

# Create new project
@app.route('/project', methods=['POST'])
def addProject():
    userId = request.json['userId']
    name = request.json['name']
    description = request.json['description']
    category = request.json['category']
    dueDate = request.json['dueDate'] 
    github = request.json['github']
    figma = request.json['figma']
    privacy = request.json['privacy']

    project = Project(userId, name, description, category, dueDate, github, figma, privacy)
    db.session.add(project)
    db.session.commit()

    return project_Schema.jsonify(project)

# Get a specific project with a given id
@app.route('/project/<id>', methods=['GET'])
def getProject(id):
    project = Project.query.get(id)
    return project_Schema.jsonify(project)

@app.route('/project/<id>', methods=['PUT'])
def updateProject(id):
    project = Project.query.get(id)
    userId = request.json['userId']
    name = request.json['name']
    description = request.json['description']
    category = request.json['category']
    dueDate = request.json['dueDate'] 
    github = request.json['github']
    figma = request.json['figma']
    privacy = request.json['privacy']

    project.userId = userId
    project.name = name
    project.description = description
    project.category = category
    project.dueDate = dueDate
    project.github = github
    project.figma = figma
    project.privacy = privacy

    db.session.commit()

    return project_Schema.jsonify(project)