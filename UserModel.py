from datetime import datetime
from sqlalchemy.orm import validates 
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

    @validates('firstName')
    def firstNameValidation(self, key, firstName):
        if not firstName:
            return {"msg": "First name was not provided"}, 401
        if len(firstName) > 50:
            return {"msg": "Max character limit exceeded"}, 401
        return firstName

    @validates('lastName')
    def lastNameValidation(self, key, lastName):
        if not lastName:
            return {"msg": "Last name was not provided"}, 401
        if len(lastName) > 50:
            return {"msg": "Max character limit exceeded"}, 401
        return lastName

    @validates('email')
    def emailValidation(self, key, email):
        if not email:
            return {"msg": "Email was not provided"}, 401
        if len(email) > 100:
            return {"msg": "Max character limit exceeded"}, 401 
        return email

    @validates('password')
    def passwordValidation(self, key, password):
        if not password:
            return {"msg": "Password was not provided"}, 401
        return password

class UserSchema(marsh.Schema):
    class Meta:
        fields = ('id',
        'userId',
        'firstName',
        'lastName',
        'email',
        'password')

class GetUserSchema(marsh.Schema):
    class Meta:
        fields = ('id',
        'userId',
        'firstName',
        'lastName',
        'email')

get_user_schema = GetUserSchema()
user_schema = UserSchema()