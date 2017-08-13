from scripts.createAssetArray import createAssetArray
from scripts.createAssetsDropdownOptions import createAssetsDropdownOptions
from scripts.createDummyData import createDummyData


def updateAssets():
	print("\tupdateAssets() Initiated")
	location = "/../../assets/"
	createAssetArray(location)
	# 989 on last update
	createAssetsDropdownOptions(location)
	# createDummyData(location)
	print("\tupdateAssets() Complete")

