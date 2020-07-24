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
        'message': 'User created'
    }

@app.route('/login', methods=['POST'])
def login():
    auth = request.authorization
    email = auth.username
    password = auth.password
    if not auth or not email or not password:
        return {"error": "Missing email or password"}
    
    user = User.query.filter(User.email == email).first()
    if not user:
        return {"error": "No user found"}

    if check_password_hash(user.password, password):
        token = jwt.encode({'userId': user.userId, 
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=30)},
        app.config['SECRET_KEY']
        )
        resp = make_response('')
        resp.set_cookie('token', token.decode('UTF-8'), httponly = True)
        return resp

    return {"error": "Incorrect password or email"}

@app.route('/user', methods=['GET'])
@verify
def getCurrentUser(currentUser):
    user = User.query.filter(User.userId == currentUser.userId).first()
    return get_user_schema.jsonify(user)