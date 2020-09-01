from flask import Flask, request, jsonify, make_response
from UserModel import User, user_schema, get_user_schema
from config import db, app
import uuid
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from verify import verify
import datetime

@app.route('/register', methods=['POST'])
def register():
    try:
        userId = str(uuid.uuid4())
        firstName = request.json['firstName']
        lastName = request.json['lastName']
        email = request.json['email']
        password = request.json['password']
        hashed_password = generate_password_hash(password, method='sha256')
        user = User(userId, firstName, lastName, email, hashed_password)
        db.session.add(user)
        db.session.commit()

        return {
            'msg': 'User created'
        }
    except:
        raise AssertionError('Something went wrong')

@app.route('/login', methods=['POST'])
def login():
    try:
        auth = request.authorization
        email = request.json['email']
        password = request.json['password']
        if not email or not password:
            raise AssertionError('Missing email or password')
        
        user = User.query.filter(User.email == email).first()
        if not user:
            raise AssertionError('Incorrect email or password')

        if check_password_hash(user.password, password):
            token = jwt.encode({'userId': user.userId, 
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=30)},
            app.config['SECRET_KEY']
            )
            resp = make_response('')
            resp.set_cookie('token', token.decode('UTF-8'), httponly = True)
            return resp

        raise AssertionError('Incorrect email or password')
    except:
        raise AssertionError('Something went wrong')
    

@app.route('/user', methods=['GET'])
@verify
def getCurrentUser(currentUser):
    try:
        user = User.query.filter(User.userId == currentUser.userId).first()
        return get_user_schema.jsonify(user)
    except:
        raise AssertionError('Something went wrong')

@app.route('/user/update', methods=['PUT'])
@verify
def updateUser(user):
    try:
        user = User.query.filter(User.userId == user.userId).first()
        firstName = request.json['firstName']
        lastName = request.json['lastName']
        email = request.json['email']
        password = request.json['password']
        if check_password_hash(user.password, password):
            user.firstName = firstName
            user.lastName = lastName
            user.email = email

            db.session.commit()
            return get_user_schema.jsonify(user)
        else:
            raise AssertionError('Incorrect password')

    except:
        raise AssertionError('Something went wrong')

@app.route('/user/<id>', methods=['GET'])
@verify
def getUser(user, id):
    try:
        user = User.query.get(id)
        return get_user_schema.jsonify(user)
    except:
        raise AssertionError('Something went wrong')

@app.route('/isLoggedIn', methods=['GET'])
@verify
def isLoggedIn(user):
    try:
        return {"msg": True}
    except:
        raise AssertionError('Something went wrong')