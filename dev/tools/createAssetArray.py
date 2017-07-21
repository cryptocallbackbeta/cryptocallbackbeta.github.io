import requests, json # needs to be downloaded through "pip install requests"


def createAssetArray():
	print("Initiating createAssetArray()")
	url = "https://api.coinmarketcap.com/v1/ticker/"
	print("\tQuerying CoinMarketCap...")
	response = requests.get(url, verify=True) #Verify is check SSL certificate

	if response.status_code != 200:
		print('Status:', response.status_code, 'Problem with the request. Exiting.')
		exit()
	assets = response.json()
	newfile = "asset-array.json"
	with open(newfile, 'w+') as outfile:
		print("\tCreated File: " + newfile)
		outfile.write("[")
		print("\tPopulating Array...")
		for asset in assets[:-1]:
			entry = "\"" + asset["symbol"] + "\","
			outfile.write(entry)

		outfile.write("\"" + assets[-1]["symbol"] + "\"")
		outfile.write("]")

	print("\tArray Complete")
	print("\tArray Length: " + str(len(assets)))
	with open("asset-array.json") as asset_list:
		assetArray = json.load(asset_list)
		assetArray.sort()
		# assets = "".join(assetArray)
		with open("asset-array.json", 'w+') as outfile:
			outfile.write(json.dumps(assetArray))
	print("Completed createAssetArray()")
