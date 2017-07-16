import random

assets = ["btc","eth","xrp","ltc","etc","xem","dash","miota","bts","strat","xmr","zec","bcn","waves","gnt","steem","sc","xlm","doge","bcc",
"rep","lsk","fct","gno","dgb","game","bat","maid","ardr","icn","ans","kmd","gbyte","dgd","nxt","dcr","veri","sngls","usdt","btcd","ant","mgo",
"sys","1st","round","pivx","ubq","emc","ark","qrl","lkk","rdd","wings","rlc","ppc","leo","xvg","sjcx","lbc","mln","nxs","myst","nlg","obits",
"xzc","unity","blk","amp","mcap","ppy","xcp","xaur","nmc","ybc","trst","xdn","grc","omni","pot","vtc","bay","hmq","moon","vsl","burst","nav",
"gup","swt","exp","ioc","edr","taas","edg","xby","eac","qau","tkn","dtb","note","sky","block","nxc","via","dice","mona","rads","cloak","xas",
"uny","bcap","shift","ifc","clam","crb","flo","golos","jinn","time","ftc","ecn","mgc","ecc","emc2","neos","vash","vrc","bash","wdc","plu","crw",
"bcy","wct","bitcny","qrk","zen","tips","aeon","xpm","rby","bpc","ptoy","agrs","pepecash","pasc","b@","fldc","heat","mue","bela","frst","xrb",
"bitb","enrg","ok","slr","rise","xcn","xbc","lun","sib","sls","xvc","gam","nvc","uno","esp","safex","ion","cadastral","blitz","zeit","aby",
"pink","incnt","lmc","icoo","dar","xspec","aur","gcr","rlt","music","max","bitusd","ric","zcl","mne","bost","put","fair","naut","mint","emv",
"btm","bsd","apx","med","zet","xmy","dmd","dbix","coval","spr","grs","1337","dgc","mec","atms","zcc","hush","seq","huc","xc","sphr","bta","zeni",
"sbd","xst","vox","cure","xwc","blockpay","gld","visio","xto","anc","tix","ccrb","qwark","rbx","wbb","crea","swift","xbb","xtc","dbic","brk",
"adl","pdc","inpay","brx","tx","mer","2give","pangea","vrm","posw","start","html5","trig","hyp","vtr","cann","adz","tag","pepe","src","ufo",
"dwc","smly","bun","ac","snrg","thc","geo","cage","ptc","ldoge","pnd","pkb","dyn","adc","func","icash","fjc","egc","etb","vrs","alt","hkg","cdn",
"btb","nsr","dope","insane","erc","fst","synx","cv2","chc","nka","cft","xmg","hpc","yoc","eco","eb3","excl","dot","glc","tks","troll","insn",
"efl","42","xhi","eqt","trust","trc","infx","dsh","blu","krb","arc","btsr","dibc","gcn","tes","draco","fcn","iti","rns","sxc","cnt","proc","cnc",
"uis","kore","htc","moin","cpc","yash","net","8bit","dem","grev2","nobl","byc","cbx","uniburst","ammo","funk","bigup","trump","post","shorty",
"qtl","ntrn","hnc","adcn","piggy","netko","el","dp","tit","psb","rbies","bits","zoi","wgo","uni","mnm","zer","ltb","bitbtc","pasl","nlc2","tek",
"mscn","mi","drs","prc","gb","bitsilver","vltc","unb","putic","cach","usnbt","csc","newb","tor","hbn","klc","bitgold","worm","bern","sumo","ohm",
"biteur","adk","vta","kurt","frc","nro","xra","cj","chess","jwl","jin","yac","pip","808","ent","boli","meow","pho","icob","mar","mojo","linx",
"pie","ery","arco","hmp","gcc","creva","xrc","611","wex","$$$","ams","dollar","lvps","honey","zmc","zyd","cxt","bstar","prx","pizza","env",
"biob","dmb","cf","asafe","calc","token","xbg","dex","muse","arc","jns","scot","casino","ixc","log","carbon","usc","nyc","btx","ltbc","fc2",
"talk","sdc","brit","rarepepeprty","atom","rc","ree","dvc","v","i0c","xvp","j","mzc","orb","lot","fund","crave","super","hodl","mtm","smc","ele",
"kobo","kic","wyv","cube","aglc","xpy","qcn","bitz","utc","metal","bucks","mxt","evo","vc","slg","trk","q2c","tstr","blry","tse","cno","corg",
"ccn","lana","sts","frn","emd","cap","nyan","c2","flt","pak","mac","units","fly","pxc","gaia","vidz","ttc","red","amber","gun","vlt","xct","tri",
"btcr","au","xpd","dlc","ked","tgc","arg","bsty","rbt","swing","btd","way","xgr","888","gap","val","crx","unit","pr","ari","fire","stv","kush",
"spex","unic","vec2","frk","xre","hxx","blc","drm","atx","xjo","phs","spt","bumba","cnnc","blz","mad","pop","con","px","xcre","ponzi","coxst",
"space","cesc","all","bob","mcrn","zny","wmc","acoin","ocean","sfc","u","neva","bvc","lex","ccm100","pxi","xco","grt","uro","milo","soon","rpc",
"urc","gp","cwxt","cyp","evil","lea","hal","hiro","euc","flvr","ride","btq","bios","gpu","ims","isl","xptx","luna","dbtc","des","duo","xbtc21",
"b3","arb","song","dragon","sling","vprc","scs","mnd","imx","aum","zur","score","mst","orly","vip","abn","bip","dlisk","scrt","1cr","cto","gbt",
"xlr","warp","anti","taj","mtlmc3","plnc","bxt","sprts","tagr","benji","g3n","cmt","dix","may","flax","fuzz","steps","ibank","cab","xoc","cash",
"pulse","ego","acp","dpay","gcc","jobs","ebt","bsc","chao","os76","ltcr","hvco","volt","argus","lir","420g","qbk","jio","altc","icon","xbts",
"sdp","imps","fdc","geert","zne","sandg","conx","rev","sh","mgm","pex","els","p7c","nodc","xng","slfi","impch","dgcs","boat","pwr","zhs","crt",
"neu","xen","mug","gpl","snake","nanox","amis","xot","btu","zrc","malc","eca","guc","qtum","frgc","dct","etp","ae","warrant","iop","lgd","btg",
"xde2","btx","dmc","pzm","snm","ths","tesla","zengold","qora","stex","sak","club","troptions","yog","ivz","ldcn","ett","zbc","gary","apc","pcs",
"gbg","gay","topaz","deus","ebst","wec","wa","elc","tle","fazz","omc","shell","dcre","buk","hlb","edrc","iec","rycn","gyc","xid","tp1","soar",
"dtf","mg","9coin","zse","bit","rain","gp","egg","pi","nbit","xau","opal","dashs","tyc","psy","axiom","ur","gbc","aib","bgc","acn","pres","btcs",
"av","trick","bcf","xqn","mavro","slm","richx","sport","gml","clint","ocow","mmxvi","rhfc","ntcc","fun","best","today","wsx","tic","bxc","asc",
"skc","gmf","royal","opes","dbg","adt","qbc","irl","frwc","dub","vgina","bac","laz","moto","don","rubit","brain","kashh","cbd","xvs","disk","qrz",
"blazr","tera","tcoin","gmx","qbt","op","cyc","prm","skr","marx","gmb","xstc","xve","hcc","burn","gain","mbl","tcr","lth","moneta","pdg","hallo",
"vgc","ffc","lkc","payp","team","poke","money","wow","aces","iflt","tell","x2","cc","unc","rcn","lepen","soul","strb","gbrc","hill","karma","vty",
"cme","yes","feds","nbe","dime","rbbt","xp","bat","shnd","pac","bond"]

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


def generateData():
	with open("dummy_data.json", 'w') as outfile:
		outfile.write("[")
		dataLength = 2000
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
		

def convertAssetsToCaps():
	with open("assets.json", 'w') as outfile:
		outfile.write("\"assets\" = [")
		for asset in assets:
			outfile.write("\""+asset.upper()+"\",")
		outfile.write("]")



print("Script Initiated")
# convertAssetsToCaps()
generateData()
print("Script Complete")










