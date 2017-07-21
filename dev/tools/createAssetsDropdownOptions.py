import json


def createAssetsDropdownOptions():
	print("Initiating createAssetsDropdownOptions()")
	fname = "asset-array.json"
	newfile = "asset-dropdown-options.json"
	print("\tOpening " + fname + "...")
	with open(fname) as asset_list:
		assets = json.load(asset_list)
		assets.sort()
		with open(newfile, 'w+') as outfile:
			print("\tCreated File: " + newfile)
			print("\tPopulating File...")
			for asset in assets:
				entry = "<option>" + asset + "</option>\n"
				outfile.write(entry)
		print("\tFile Complete")
	print("Completed createAssetsDropdownOptions()")
