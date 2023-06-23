import json
import shutil
import os
import time

exitt = False
def load_Json_Data(name):
    
    file_name = name
    file = open("save.json","r")
    json_object = json.load(file)
    json_object["ObjectUrls"].append({"url":"./../Objects/"+file_name+".js"})

    file = open("save.json","w+")
    json.dump(json_object,file)
    pass
def delete_json_data(name):
    
    file_name = name
    file = open("save.json","r")
    json_object = json.load(file)
    for i in json_object["ObjectUrls"]:
        if i["url"] == "./../Objects/"+file_name+".js":
            json_object["ObjectUrls"].remove(i)
            pass
        
        pass
    file = open("save.json","w+")
    json.dump(json_object,file)
    
    

    pass
def main():
    
    

    user_input = input("-> ")
    if user_input == "create-object":
        name = input("Object Name: ")
        shutil.copy("./Manager/CopyFiles/Object/object.js","./Objects")
        os.rename("./Objects/object.js","./Objects/"+name+".js")
        load_Json_Data(name)
        print("Created Successfully !")
        
        
        
    elif user_input == "run":
        
        os.startfile("run.bat")
        
        
        pass
    
    elif user_input == "delete-object":
        name = input("Object Name: ")
        os.remove("./Objects/"+name+".js")
        delete_json_data(name)
        print("Deleted Successfully !")
        
        pass


while exitt == False:
    main()
    pass