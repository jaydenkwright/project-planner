from flask import Flask, request, jsonify
from ProjectModel import Project, project_Schema, projects_Schema 
from config import db, app

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