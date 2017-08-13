import random, json
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


emails = ["bigdaddy@gmail.com", "hotmomma@gmail.com", "toelicker@hotmail.com", "jeffrey.johnson@aol.com", "mr.bonobo@yahoo.com", "yahoodi@israelioasis.com", "crypt0@crypt0.com", "salazar@thewalkingdead.com", "therock@wwf.com", "someguy@yahoo.com", "somewoman@domain.com", "lalala@tralala.com", "putitin@bunghole.com", "meetyou@thealter.edu", "thisisnotavirus@shadysite.com", "earthling@planetearth.info", "iamnotacop@dark.web", "childrenloveme@tocatchapredator.com", "somebritain@britishsite.uk.co", "eggs@dinosaurfood.com", "back@itagain.net", "makemewannasay@wayo.wayoooo", "backwardsman@namsdrawkcab.moc", "bananacity@caribeancruise.com"]
phoneNumbers = ["11935924938", "2950133948", "29458301938", "1953850285", "10539539533", "8573950395", "0258395385", "9738530294", "13958349385"]
metrics = ["price", "volume", "market cap"]
directions = ["above", "below"]

priceValues = ["0.00053652", "0.00187352", "0.0049285", "0.0069248", "0.009743", "0.014895", "0.0398245", "0.058204", "0.0792745", "0.0828475", "0.09248592", "0.10434", "0.209258", "0.40298", "0.50298", "0.602835", "0.82739485", "1.08235", "3.08245", "5.92842", "7.9283", "8.2845", "9.82442", "10.345", "10.928", "13.3294", "15.29458", "17.29458", "18.252", "20.245", "24.254", "27.28532", "31.9452", "32.2395", "34.255", "37.2452", "39.4652", "41.4624", "46.24625", "48.373", "50.262", "52.34632", "55.3562", "59.5263", "62.3463", "63.462", "65.452", "67.346", "68.3462", "69.356", "70.364", "75.346", "79.23462", "83.34", "84.345", "86.346", "88.35623", "91.146", "94.35641", "97.372", "99.3269", "100", "105", "112", "119", "140", "169", "184", "193", "208", "220", "223", "227", "234", "261", "294", "302", "311", "325", "369", "410", "436", "462", "482", "526", "537", "584", "628", "639", "693", "734", "702", "793", "738", "805", "848", "838", "860", "879", "902", "923", "950", "970", "1045", "1258", "1346", "1842", "1459", "1749", "1946", "2028", "2502", "2150", "2942", "2398", "3025", "3640", "3294", "3956", "4924", "5925", "8249", "12594", "10245", "9235"]
volumeValues = ["39104", "2354", "94252", "92501", "283501", "2408652", "204512", "824503", "230503", "20395", "302502", "2039502", "24985221", "209350124", "89341912", "1204592052", "1204852023", "2203850223", "932485223", "824824245", "24851204", "9284522", "2490682", "624092", "72496820", "2048635", "82468203", "2946820", "49246840", "103685203", "18498520"]
capValues = ["10000000", "5000000", "1000000", "85200000", "43000000", "26000000", "68000000", "106500000", "642000000", "926040000", "542590000", "824020000", "402520000", "23000000000", "60200000000", "90250000000", "243000000000", "525000000000", "25252002", "63000", "94000000", "5367900", "36785000", "206000000"]

currency = "usd"

# structure = {
# 	email
# 	phone
# 	asset
# 	metric
# 	direction
# 	amount
# 	currency
# }


def createDummyData(location):
	start("createDummyData()")
	path = os.path.dirname(__file__) + location
	fname = "asset-array.json"
	newfile = "dummy-data.json"
	print("\tOpening " + fname + "...")
	with open( path + fname ) as asset_list:
		assets = json.load(asset_list)
		with open( path + newfile, 'w') as outfile:
			print("\tCreated File: " + newfile)
			outfile.write("[")
			dataLength = 2000
			print("\tPopulating File...")
			for i in range(dataLength):
				email = random.choice(emails)
				number = random.choice(phoneNumbers)
				asset = random.choice(assets).upper()
				metric = random.choice(metrics)
				if metric == "price":
					amount = random.choice(priceValues)
				elif metric == "volume":
					amount = random.choice(volumeValues)
				elif metric == "market cap":
					amount =random.choice(capValues)
				direction = random.choice(directions)

				if i == dataLength - 1:
					entry = "{"+"\"email\":\""+email+"\",\"phone\":\""+number+"\",\"asset\":\""+asset+"\",\"metric\":\""+metric+"\",\"direction\":\""+direction+"\",\"amount\":\""+amount+"\",\"currency\":\""+currency+"\"}"
				else:
					entry = "{"+"\"email\":\""+email+"\",\"phone\":\""+number+"\",\"asset\":\""+asset+"\",\"metric\":\""+metric+"\",\"direction\":\""+direction+"\",\"amount\":\""+amount+"\",\"currency\":\""+currency+"\"},"
				
				outfile.write(entry)
			outfile.write("]")
		print("\tFile Complete")
	end("\t\t")












