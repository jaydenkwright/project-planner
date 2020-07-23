from datetime import datetime
from config import db, marsh

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.String(200), unique=True)
    firstName = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(200))

    def __init__(self, userId, firstName, lastName, email, password):
        self.userId = userId
        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.password = password

class UserSchema(marsh.Schema):
    class Meta:
        fields = ('id',
        'userId',
        'firstName',
        'lastName',
        'email',
        'password')

user_schema = UserSchema()