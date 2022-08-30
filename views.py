
from datetime import datetime
import calendar
from flask import Flask, render_template, jsonify, request
from flask import json
import os
from . import app
import glob

    
# db_file = "./config/database.ini"

# conn = csutils.get_alchemy_connection(config.config_db(db_file))

def get_jsons():
    
    files = glob.glob("./static/jsons/*")
    #files = [f.split("\\")[1] for f in files]
    print(files)

    json_dict = { f.split(os.path.sep)[-1]: json.load(open(f)) for f in files}
    return json_dict


@app.route("/")
def echarts():
    echart_jsons = get_jsons()

    
    return render_template("index.html", hello = "world", ejsons = echart_jsons)
