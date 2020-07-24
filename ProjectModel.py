from datetime import datetime
from config import db, marsh


class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.String())
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

    @validates('name')
    def nameValidation(self, key, name):
        if not name:
            raise AssertionError('No name provided')
        if len(name) > 100:
            raise AssertionError('Max character limit exceeded')
    @validates('description')
    def descriptionValidation(self, key, description):
        if len(description) > 200:
            raise AssertionError('Max character limit exceeded')

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