from zipfile import ZipFile, ZipInfo

import pandas as pd
from simpledbf import Dbf5
import sys

gl_regions_file = "./data/GlacReg_2017.zip"

gl_reg_zip = ZipFile(gl_regions_file)

gl_reg_fp = gl_reg_zip.extract("GTN-G_glacier_regions_201707.dbf","./data") 

dbf = Dbf5(gl_reg_fp)
df_dbf = dbf.to_dataframe()

file = "./data/DOI-WGMS-FoG-2021-05.zip"

wgms_id = "A-GLACIER"

gmb_file = "D-CHANGE"

zip = ZipFile(file, "r")

filenames = zip.namelist()

# file to get glacier ids based on lat and lon
wgms_file = [ f for f in filenames if f.find(wgms_id)>0][0]

wgms_fp = zip.extract(wgms_file,"./data")
wgms_fp

wgms_fp
df_gid = pd.read_csv(wgms_fp, encoding= "latin1")

wgms_id_cols = ["NAME","WGMS_ID","LATITUDE", "LONGITUDE","GLACIER_REGION_CODE",	"GLACIER_SUBREGION_CODE"] 

df_gid = df_gid[wgms_id_cols].dropna()

arctic_wgms_df = df_gid[df_gid["LATITUDE"]>66]

arctic_codes = arctic_wgms_df.GLACIER_REGION_CODE.unique()

arctic_wgms_id_lat = arctic_wgms_df["WGMS_ID"].unique()

arctic_wgms_id_codes = df_gid[df_gid["GLACIER_REGION_CODE"].isin(arctic_codes)]["WGMS_ID"].unique()

# file to get glacier stats
gl_file =[ f for f in filenames if f.find(gmb_file)>0][0]



gl_fp = zip.extract(gl_file,"./data")
gl_fp


df = pd.read_csv(gl_fp)

df_lat = df[df["WGMS_ID"].isin(arctic_wgms_id_lat)]

df_codes = df[df["WGMS_ID"].isin(arctic_wgms_id_codes)]

df_lat= df_lat.dropna(subset=["VOLUME_CHANGE"])


import requests

file= "https://minio.arcticrisk.org/arcticrisk/siextent/nsidc_g02135/siextent_nsidc_g02135.json?token="

file_download = "https://minio.arcticrisk.org/minio/download/arcticrisk/siextent/nsidc_g02135/siextent_nsidc_g02135.json?token="

r = requests.get(file_download)