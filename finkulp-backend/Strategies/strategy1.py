import sys

if(sys.argv!=3):
    print("Error")
    exit()
else:
    user_id  = sys.argv[1]
    api_key = sys.argv[2]       

print("Strategy 1 User ID: ", user_id, " API key: ", api_key)