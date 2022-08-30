import glob
import json
files = glob.glob("./static/jsons/*")
files

{ f.split("\\")[1]: json.load(open(f)) for f in files}


[f.split("\\")[1] for f in files]