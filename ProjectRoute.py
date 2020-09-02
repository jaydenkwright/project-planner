from flask import Flask, request, jsonify, make_response
from ProjectModel import Project, project_Schema, projects_Schema
from verify import verify
from config import db, app


# Create new project
@app.route('/project/add', methods=['POST'])
@verify
def addProject(user):
    try:
        userId = user.userId
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
    except:
        raise AssertionError('Something went wrong')

# Get all projects created by a certain user
@app.route('/projects', methods=['GET'])
@verify
def getUserProjects(user):
    try:
        projects = Project.query.filter(Project.userId == user.userId).all()
        return projects_Schema.jsonify(projects)
    except:
        raise AssertionError('Something went wrong')

# Get a specific project with a given id
@app.route('/project/<id>', methods=['GET'])
def getProject(id):
    try:
        project = Project.query.get(id)
        return project_Schema.jsonify(project)
    except:
        raise AssertionError('Something went wrong')

# Update a project
@app.route('/project/update/<id>', methods=['PUT'])
@verify
def updateProject(user, id):
    try:
        project = Project.query.get(id)
        userId = user.userId
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
    except:
        raise AssertionError('Something went wrong')

# Delete a project
@app.route('/project/delete/<id>', methods=['DELETE'])
@verify
def deleteProject(user, id):
    try:
        project = Project.query.get(id)
        db.session.delete(project)
        db.session.commit()

        return project_Schema.jsonify(project)
    except:
        raise AssertionError('Something went wrong')