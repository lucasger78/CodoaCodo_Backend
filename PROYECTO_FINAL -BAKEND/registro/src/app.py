from flask import Flask, render_template, request, redirect, url_for, send_from_directory, flash
from werkzeug.utils import secure_filename
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
import os
import database as db

template_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'templates')
app = Flask(__name__, template_folder=template_dir)
app.static_folder = 'static'

# Configuración de la clave secreta
app.secret_key = 'mi_clave_secreta_es_es_'

# Configuración para subir archivos
app.config['UPLOAD_FOLDER'] = os.path.join(os.path.dirname(__file__), 'uploads')
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

# @app.route('/uploads/<filename>')
# def uploaded_file(filename):
#     return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# Configuración Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

class User(UserMixin):
    def __init__(self, id, usuario, avatar, contraseña):
        self.id = id
        self.usuario = usuario
        self.avatar = avatar
        self.contraseña = contraseña

@login_manager.user_loader
def load_user(user_id):
    cursor = db.database.cursor()
    cursor.execute("SELECT id, usuario, avatar, contraseña FROM users WHERE id = %s", (user_id,))
    user = cursor.fetchone()
    if user:
        return User(id=user[0], usuario=user[1], avatar=user[2], contraseña=user[3])
    return None

@app.route('/')
def home():
    if current_user.is_authenticated:
        return render_template('home.html', usuario=current_user.usuario, avatar=current_user.avatar)
    else:
        return render_template('home.html', usuario=None, avatar=None)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        usuario = request.form['usuario']
        contraseña = request.form['contraseña']
        cursor = db.database.cursor()
        cursor.execute("SELECT id, usuario, avatar, contraseña FROM users WHERE usuario = %s", (usuario,))
        user = cursor.fetchone()
        if user and user[3] == contraseña:
            user_obj = User(id=user[0], usuario=user[1], avatar=user[2], contraseña=user[3])
            login_user(user_obj)
            return redirect(url_for('usuario'))
        else:
            flash('Usuario o contraseña incorrectos')
    return render_template('login.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('home'))

@app.route('/registro', methods=['GET', 'POST'])
def registro():
    if request.method == 'POST':
        avatar = request.files['avatar']
        usuario = request.form['usuario']
        nombre = request.form['nombre']
        contraseña = request.form['contraseña']
        fecha_de_nacimiento = request.form['fecha_de_nacimiento']
        email = request.form['email']
        ciudad = request.form['ciudad']
        sexo = request.form['sexo']

        if avatar and usuario and nombre and contraseña:
            avatar_filename = secure_filename(avatar.filename)
            avatar.save(os.path.join(app.config['UPLOAD_FOLDER'], avatar_filename))
            cursor = db.database.cursor()
            sql = "INSERT INTO users (avatar, usuario, nombre, contraseña, fecha_de_nacimiento, email, ciudad, sexo) VALUES(%s, %s, %s, %s, %s, %s, %s, %s)" 
            data = (avatar_filename, usuario, nombre, contraseña, fecha_de_nacimiento, email, ciudad, sexo)
            cursor.execute(sql, data)
            db.database.commit()
            return redirect(url_for('registro'))

    cursor = db.database.cursor()
    cursor.execute("SELECT id, usuario, avatar, contraseña, nombre, fecha_de_nacimiento, email, ciudad, sexo FROM users")
    users = cursor.fetchall()
    insertObject = []
    columnNames = [column[0] for column in cursor.description]
    for record in users:
        insertObject.append(dict(zip(columnNames, record)))
    cursor.close()
    return render_template('registro.html', data=insertObject)

# @app.route('/registro', methods=['GET', 'POST'])
# def registro():
#     if request.method == 'POST':
#         avatar = request.files['avatar']
#         usuario = request.form['usuario']
#         nombre = request.form['nombre']
#         contraseña = request.form['contraseña']
#         fecha_de_nacimiento = request.form['fecha_de_nacimiento']
#         email = request.form['email']
#         ciudad = request.form['ciudad']
#         sexo = request.form['sexo']

#         if avatar and usuario and nombre and contraseña:
#             avatar_blob = avatar.read()  # Leer los datos binarios de la imagen
#             cursor = db.database.cursor()
#             sql = "INSERT INTO users (avatar, usuario, nombre, contraseña, fecha_de_nacimiento, email, ciudad, sexo) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
#             data = (avatar_blob, usuario, nombre, contraseña, fecha_de_nacimiento, email, ciudad, sexo)
#             cursor.execute(sql, data)
#             db.database.commit()
#             return redirect(url_for('registro'))

#     cursor = db.database.cursor()
#     cursor.execute("SELECT id, usuario, avatar, contraseña, nombre, fecha_de_nacimiento, email, ciudad, sexo FROM users")
#     users = cursor.fetchall()
#     insertObject = []
#     columnNames = [column[0] for column in cursor.description]
#     for record in users:
#         insertObject.append(dict(zip(columnNames, record)))
#     cursor.close()
#     return render_template('registro.html', data=insertObject)



@app.route('/delete/<string:id>')
def delete(id):
    cursor = db.database.cursor()
    sql = "DELETE FROM users WHERE id=%s" 
    data = (id,)
    cursor.execute(sql, data)
    db.database.commit()
    return redirect(url_for('registro'))

@app.route('/edit/<string:id>', methods=['POST'])
def edit(id):
    avatar = request.files['avatar']
    usuario = request.form['usuario']
    nombre = request.form['nombre']
    contraseña = request.form['contraseña']
    fecha_de_nacimiento = request.form['fecha_de_nacimiento']
    email = request.form['email']
    ciudad = request.form['ciudad']
    sexo = request.form['sexo']

    cursor = db.database.cursor()
    
    if avatar.filename != '':
        avatar_filename = secure_filename(avatar.filename)
        avatar.save(os.path.join(app.config['UPLOAD_FOLDER'], avatar_filename))
        sql = "UPDATE users SET avatar = %s, usuario = %s, nombre = %s, contraseña = %s, fecha_de_nacimiento = %s, email = %s, ciudad = %s, sexo = %s WHERE id = %s" 
        data = (avatar_filename, usuario, nombre, contraseña, fecha_de_nacimiento, email, ciudad, sexo, id)
    else:
        sql = "UPDATE users SET usuario = %s, nombre = %s, contraseña = %s, fecha_de_nacimiento = %s, email = %s, ciudad = %s, sexo = %s WHERE id = %s"
        data = (usuario, nombre, contraseña, fecha_de_nacimiento, email, ciudad, sexo, id)

    cursor.execute(sql, data)
    db.database.commit()
    return redirect(url_for('registro'))

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/cards')
def cards():
    return render_template('cards.html')

@app.route('/users')
def users():
    cursor = db.database.cursor()
    cursor.execute("SELECT id, usuario, avatar, nombre, email FROM users")
    users = cursor.fetchall()
    insertObject = []
    columnNames = [column[0] for column in cursor.description]
    for record in users:
        insertObject.append(dict(zip(columnNames, record)))
    cursor.close()
    return render_template('users.html', users=insertObject)

@app.route('/usuario')
def usuario():
    return render_template('usuario.html')

@app.route('/cardsUsers')
def cardsUsers():
    return render_template('cardsUsers.html')

@app.route('/semana')
def semana():
    return render_template('semana.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')


if __name__ == '__main__':
    app.run(debug=True, port=4000)
