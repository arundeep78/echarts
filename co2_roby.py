import pandas as pd

file = "data/co2_raw.xlsx"

df= pd.read_excel(file)

df = df.drop_duplicates()
df.duplicated().sum()

df = df.set_index("Date")

df

df = df.dropna()

df_orig = df

df_left = df_orig[df_orig["channel"] == "left"]

df_left_3h = df_left["value"].resample("3H").last()


df_right = df_orig[df_orig["channel"]=="right"]

df_right_3h = df_right["value"].resample("3H").last()

df= df_orig.pivot_table(values ="value",columns="channel", aggfunc="sum",dropna=False,index=df.index)


df_left_3h.reset_index().merge(df_right_3h,on="Date",how="outer").plot(
  kind="scatter",x="Date",y=["value_x","value_y"]
)

df_co2 = df_left_3h.reset_index().merge(df_right_3h,on="Date",how="outer")

df_right_12h = df_right_3h.resample("12H").mean()

df_left_12h = df_left_3h.resample("12H").mean()

df_co2_12h = df_left_12h.reset_index().merge(df_right_12h,on="Date",how="outer")
df_co2_12h = df_co2_12h.rename(columns={"value_x":"left","value_y":"right"})

df_co2_12h["Year"]=df_co2_12h["Date"].dt.year
df_co2_12h["Month"] = df_co2_12h["Date"].dt.month