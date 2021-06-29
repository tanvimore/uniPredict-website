import pandas as pd

ds=pd.read_csv("C:/Users/TanviMore/Desktop/DataAnalytics/InternProject/yocket_data.csv")
#print(ds)

gs = int(input("Enter your GRE score:"))
if gs>340:
    print("Invalid score entered. Please try again.")
else:
    safe= ds.loc[ds.gre <= gs+5]
    print("Safe Universities: ")
    print(safe.Name)
    moderate = ds.loc[(ds.gre > gs+5) | (ds.gre <= gs + 10)]
    print("Moderate Universities: ")
    print(moderate.Name)
    ambitious = ds.loc[ds.gre > gs + 10]
    print("Ambitious Universities: ")
    print(ambitious.Name)
