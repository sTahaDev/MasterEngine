import json
import shutil
import os
import time

exitt = False
def load_Json_Data(name):
    
    file_name = name
    file = open("Package.json","r")
    json_object = json.load(file)
    json_object["ObjectUrls"].append({"url":"./../Objects/"+file_name+".js"})

    file = open("Package.json","w+")
    json.dump(json_object,file)
    pass
def main():
    
    

    user_input = input("-> ")
    if user_input == "add-object":
        name = input("Object Name: ")
        shutil.copy("./Manager/CopyFiles/Object/object.js","./Objects")
        os.rename("./Objects/object.js","./Objects/"+name+".js")
        load_Json_Data(name)
        print("Added Successfully !")
        time.sleep(2)
        quit()
        
        pass
    elif user_input == "run":
        
        os.startfile("run.bat")
        
        
        pass
    pass


while exitt == False:
    main()
    pass