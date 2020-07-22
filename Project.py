from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from datetime import datetime
from main import db, marsh

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(200))
    category = db.Column(db.String(100), nullable=False)
    dueDate = db.Column(db.DateTime)
    github = db.Column(db.String())
    figma = db.Column(db.String())
    privacy = db.Column(db.Boolean())
    date = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, id, name, description, category, dueDate, github, figma, privacy):
        self.userId = userId
        self.name = name 
        self.description = description
        self.category = category
        self.dueDate = dueDate
        self.github = github
        self.figma = figma
        self.privacy = privacy

class ProjectSchema(marsh.Schema):
    class Meta:
        fields = ('id', 
        'userId', 
        'name', 
        'description', 
        'category', 
        'dueDate',
        'github',
        'figma',
        'privacy',
        'date')