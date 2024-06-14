
x = 0  # Global counter

# Function to simulate your script module
def run(user_data):
    # Declare x as global to modify it inside the function
    x += 1
    print("1 min is completed, x =", x)
    return {"status": "success", "user_data": user_data, "strategy": "strategy100", "x": x}
