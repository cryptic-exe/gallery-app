from flask import Flask,jsonify,url_for
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL

imageData = []
#code to connect to database
app = Flask(__name__)
app.config['MYSQL_HOST'] = 'db'
app.config['MYSQL_PORT'] = 90
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'deepmorindia2021'
app.config['MYSQL_DB'] = 'IMAGE_SCHEMA'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def index():

    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM IMAGE_SCHEMA.image_details")
    rv = cur.fetchall()
    imageData = jsonify(rv) 
    return imageData

@app.route("/<tag>",methods=["GET"])
def get_id(tag):
    if tag=="random":
        l = []
        cur = mysql.connection.cursor()
        cur.execute("SELECT IMAGES_ADDRESS FROM image_details ")
        rv1 = cur.fetchall()
        for i in rv1:
            d1={}
            url1 = url_for('static',filename=i['IMAGES_ADDRESS'])
            d1['IMAGES_ADDRESS']= url1
            l.append(d1) 
        rv2 = jsonify(l) 
        return rv2
    else:
      l=[]
      cur = mysql.connection.cursor()
      cur.execute("SELECT IMAGES_ADDRESS FROM image_details WHERE CATEGORY_ID = (SELECT CATEGORY_ID FROM category WHERE CATEGORY_NAME ='"+tag+"')")
      rv1 = cur.fetchall()
      for i in rv1:
          d1={}
          print(i)
          url1 = url_for('static', filename=i['IMAGES_ADDRESS'])
          d1['IMAGES_ADDRESS']= url1
          l.append(d1)  
      rv2 = jsonify(l)
      
      return rv2
    
if __name__ == "__main__":
    app.run(debug=True ,host='0.0.0.0',port=5000)








# # @cross_origin()
# def Images():
#     return "<h1>Images are here</h1>"

# @app.route("/images",methods=["GET"])
# def get():
#     return jsonify(imageData)

# @app.route("/images/<tag>",methods=["GET"])
# def get_id(tag):
#     l1=[]
#     for i in imageData:
#         for ele in i["tag"]:
#           if ele == tag:
#               l1.append(i)
#     return jsonify(l1)
# if __name__ == "__main__":
#     app.run()