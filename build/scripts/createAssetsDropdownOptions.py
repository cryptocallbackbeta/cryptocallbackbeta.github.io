import json
import os.path
from colorama import init
from termcolor import colored

init()
red = "\033[31m"
green = "\033[32m"
yellow = "\033[33m"
reset = "\033[37m"

def start(functName):
    print("\t" + functName + " Initiated")
def end(indent):
    print(indent + "\tComplete")




def createAssetsDropdownOptions(location):
	start("\tcreateAssetsDropdownOptions()")
	path = os.path.dirname(__file__) + location
	assetNameFile = "assetNames.json"
	newfile = "asset-dropdown-options.json"
	print("\t\t\tOpening " + assetNameFile + "...")
	with open( path + assetNameFile ) as asset_list:
		assets = json.load(asset_list)
		assets = sorted(assets, key=str.lower)
		with open( path + newfile, 'w+') as outfile:
			print("\t\t\tCreated File: " + newfile)
			print("\t\t\tPopulating File...")
			for asset in assets:
				entry = "<option>" + asset + "</option>\n"
				outfile.write(entry)
		print("\t\t\tFile Complete")
	end("\t\t")
