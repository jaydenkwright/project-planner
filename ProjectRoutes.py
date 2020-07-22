from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from main import db, app
from ProjectModel import Project, ProjectSchema, project_Schema, projects_Schema

def home():
    return {'data': 'hello world'}

def addProject():
    @app.route('/project', methods=['POST'])
    def add():
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