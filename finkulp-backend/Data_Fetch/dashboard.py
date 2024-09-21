from pya3 import *
import pandas as pd
import json

alice = Aliceblue(user_id = "710579", api_key="bM8WUpC2JiQtWDYnPbr8VHDRGvMjp1X3hLeKrmHkiJimpx7APAh5O1EsB3ahMfHK6H9BxKRNrJcAeMtEa1aqYbt4a7GxOgLtoi7z8dKOb9EOLhFrjjFonHTcY9nYB2hn")
session = alice.get_session_id()
data = {}
old_balance = alice.get_balance()[0]
keys = ['symbol','net','cashmarginavailable','coverOrderMarginPrsnt','collateralvalue']
balance = {key: old_balance[key] for key in keys if key in old_balance}
if(old_balance['stat']=='Not_Ok'):
    balance = []
data['Balance'] = balance  


holding_pos = []
holding_pos = pd.DataFrame(alice.get_holding_positions()['HoldingVal'])
holding_pos = holding_pos[['BSEHOldingValue','HUqty','Price','NSEHOldingValue','Ltp','SellableQty']]
holding_pos = holding_pos.to_dict(orient='records')
data['Holding Position'] =holding_pos  
orders = alice.get_order_history('')
if orders['stat']=='Not_Ok':
    orders = []
net_pos = alice.get_netwise_positions()
if net_pos['stat']=='Not_Ok':
    net_pos = []
data['Order_History'] = orders
data['Netwise Positions'] = net_pos        

json_data = json.dumps(data)
print(json_data)