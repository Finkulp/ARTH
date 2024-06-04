import sys

if(len(sys.argv)>1):
    input_values = sys.argv[1:]
else:
    input_values = "No Inputs"    
print(f"This is Zerodha. {input_values}")