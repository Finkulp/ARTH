# main.py
import sys
import json

def main():
    if len(sys.argv) < 3:
        print(json.dumps({"error": "API key and login ID required"}))
        sys.exit(1)
    
    api_key = sys.argv[1]
    login_id = sys.argv[2]

    # Create a JSON response based on the input
    response = {
        "status": "success",
        "message": "Broker information processed successfully",
        "data": {
            "api_key": api_key,
            "login_id": login_id
        }
    }

    # Print the JSON output (which will be captured by Node.js)
    print(json.dumps(response))

if __name__ == "__main__":
    main()
