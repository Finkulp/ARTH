import time
import pymongo
from bson import ObjectId

def main():
    client = pymongo.MongoClient("mongodb+srv://arunrathaur985:Aa9406789323@finkulpdatabase.eefv0im.mongodb.net/?retryWrites=true&w=majority&appName=FinkulpDataBase")
    db = client.get_database("test")
    strategies = db.get_collection("strategies")
    users = db.get_collection("users")
    
    for strategy in strategies.find():
        for user_id in strategy['Users']:
            user = users.find_one({'_id': ObjectId(user_id)})
            print(user.get('_id'), " ", user.get('added_broker'))

        
if __name__ == "__main__":
    main()
