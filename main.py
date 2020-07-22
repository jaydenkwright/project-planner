from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from datetime import datetime
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost/project_planner'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
marsh = Marshmallow(app)

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

    def __init__(self, userId, name, description, category, dueDate, github, figma, privacy):
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

project_Schema = ProjectSchema()
projects_Schema = ProjectSchema(many=True)

@app.route('/', methods=['GET'])
def home():
    return {'data': 'hello world'}

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


if __name__ == "__main__":
    app.run(debug=True)