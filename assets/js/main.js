function newToast(message,color){var notification;var toast=document.getElementById('toast');toast.innerHTML='<div id="notification" style="" class="'+color+'">'+message+'</div>';var nHeight=document.getElementById('notification').offsetHeight;notification=document.getElementById('notification');notification.classList.add("anim");notification.style.top=0;setTimeout(hideToast,3000);};function hideToast(){var notification=document.getElementById('notification');notification.style.top="-34px";};var assetNames=['020LondonCoin','0x','1337','1CRedit','23 Skidoo','2GIVE','300 Token','42-coin','808Coin','8Bit','9COIN','Abncoin','Aces','Acoin','Adelphoi','AdEx','AdShares','adToken','Advanced Internet Blocks','Adzcoin','Aeon','Aeternity (Pre-Launch)','Agoras Tokens','AgrolifeCoin','Aidos Kuneen','Alexium','Allion','AllSafe','AlpaCoin','Alphabit','Altcoin','AmberCoin','AMIS','Ammo Rewards','AmsterdamCoin','AnarchistsPrime','Animecoin','Anoncoin','AntiBitcoin','Antilitecoin','Antimatter','AppleCoin','APX','AquariusCoin','Aragon','ARbit','Arcade Token','ArcticCoin','Ardor','Argentum','Argus','Aricoin','Ark','ArtByte','Artex Coin','Asch','AsiaCoin','Asiadigicoin','AsicCoin','Asset Backed Coin','ATC Coin','Atmos','Atomic Coin','AudioCoin','Augur','Auroracoin','AurumCoin','AvatarCoin','Avoncoin','AxFunds','Axiom','B3Coin','BagCoin','Bancor','Bankcoin','Basic Attention Token','Bata','BatCoin','BBQCoin','BCAP','Beatcoin','BeaverCoin','BenjiRolls','BERNcash','BestChain','BetaCoin','BigUp','BillaryCoin','Binance Coin','BioBar','BiosCrypto','BipCoin','Birds','Bit20','BitAlphaCoin','BitAsean','BitBar','BitBay','BitBean','bitBTC','Bitcedi','BitCentavo','Bitcloud','bitCNY','BitCoal','Bitcoin','Bitcoin 21','Bitcoin Cash','Bitcoin Planet','Bitcoin Plus','Bitcoin Scrypt','Bitcoin Unlimited (Futures)','BitcoinDark','BitcoinFast','BitcoinTX','BitConnect','Bitcore','Bitcrystals','Bitcurrency','Bitdeal','bitEUR','Bitgem','bitGold','Bitland','Bitmark','Bitok','Bitpark Coin','BitQuark','Bitquence','Bitradio','BitSend','BitShares','bitSilver','Bitstar','Bitswift','BitTokens','bitUSD','Bitvolt','Bitz','Bitzeny','BlackCoin','Blackstar','Blakecoin','BlakeStar','BlazeCoin','BlazerCoin','Blitzcash','BlockCAT','Blocknet','BlockPay','Blocktix','BlueCoin','BnrtxCoin','Bolenum','Bolivarcoin','Bongger','Boolberry','BoostCoin','Bottlecaps','BowsCoin','Braincoin','Breakout','Breakout Stake','BriaCoin','BritCoin','BTCDragon','BTCGold','BTCtalkcoin','BTSR','BumbaCoin','BunnyCoin','Burst','BurstOcean','Byteball','Bytecent','Bytecoin','Bytom','C-Bit','Cabbage','CacheCoin','CageCoin','Californium','CaliphCoin','CampusCoin','Canada eCoin','CannabisCoin','Cannacoin','Cannation','Capricoin','Carboncoin','Cashcoin','Cashme','Casino','CasinoCoin','Catcoin','CBD Crystals','CCMiner','Centra','Centurion','ChainCoin','ChanCoin','Cheapcoin','ChessCoin','CHNCoin','Chronobank','Chronos','Circuits of Value','Civic','Clams','Clinton','CloakCoin','ClubCoin','CoEval','CoExistCoin','Cofound.it','Coimatic 2.0','Coin(O)','Coin2.1','CoinDash','Coinonat','CoinonatX','Colossuscoin V2','Comet','Compcoin','CompuCoin','Concoin','Condensate','CorgiCoin','Counterparty','Coupecoin','Crave','Cream','Creatio','Creativecoin','Creditbit','CrevaCoin','Crown','CRTCoin','CryptCoin','Crypto','Crypto Bullion','CryptoCarbon','CryptoEscudo','CryptoForecast','Cryptojacks','Cryptonite','CryptoPing','CryptoWorldX Token','Cthulhu Offerings','Cubits','Curecoin','CVCoin','CyberCoin','Cycling Coin','Cypher','DAO.Casino','DAPPSTER','Darcrus','DarkLisk','Darsek','DAS','Dash','Dashcoin','Dashs','Databits','DaxxCoin','Debitcoin','DECENT','Decred','DeepOnion','DeltaCredits','Denarius','Dent','Dentacoin','Destiny','DeusCoin','Deutsche eMark','Devcoin','DHG','Diamond','DIBCOIN','DigiByte','DigiCube','Digital Bullion Gold','Digital Credits','Digital Money Bits','Digital Rupees','Digitalcoin','DigitalDevelopersFund','Digitalfund','DigitalNote','DigitalPrice','DigixDAO','Dimecoin','Dinastycoin','district0x','Dix Asset','DNotes','Dobbscoin','Dogecoin','Dollar Online','Dollarcoin','Donationcoin','DopeCoin','Dotcoin','Doubloon','DPAY','DraftCoin','Dreamcoin','DT Token','DubaiCoin','Dubstep','Dynamic','DynamicCoin','E-coin','E-Currency Coin','E-Dinar Coin','e-Gulden','E4ROW','EarthCoin','EB3 Coin','Ebittree Coin','eBoost','Ecobit','EcoCoin','Edgeless','EDRCoin','EggCoin','EGO','Einsteinium','Elacoin','Elastic','Elcoin','ELcoin','Electra','Elementrem','Elysium','EmberCoin','Embers','Emerald Crypto','Emercoin','EMoneyPower','EncryptoTel','Energycoin','Enigma','Environ','EOS','EquiTrader','Ergo','Eryllium','Espers','Eternity','Ethbits','Ethereum','Ethereum Classic','Ethereum Movie Venture','Etheriya','Etheroll','Etherx','Eurocoin','EuropeCoin','EverGreenCoin','Evil Coin','Evotion','Excelcoin','ExclusiveCoin','Expanse','Factom','FairCoin','Falcoin','Fantomcoin','Fargocoin','Fastcoin','Fazzcoin','Feathercoin','FedoraCoin','FedoraShare','FiboCoins','FIMKrypto','FinCoin','Firecoin','FireFlyCoin','First Bitcoin','First Bitcoin Capital','FirstBlood','FirstCoin','Flash','FlavorCoin','Flaxscript','FlorinCoin','FlutterCoin','Flycoin','FoldingCoin','Fonziecoin','Footy Cash','Francs','Franko','FrankyWillCoin','Freicoin','FuckToken','Fuda Energy','FuelCoin','FujiCoin','FUNCoin','FundYourselfNow','FunFair','FutCoin','Future Digital Currency','FuturXe','FuzzBalls','G3N','GAIA','Gambit','Gambleo','GameBet Coin','GameCredits','GameLeagueCoin','GameUnits','GanjaCoin','Gapcoin','Gas','GAY Money','GBCGoldCoin','GCoin','GeertCoin','GeoCoin','GeyserCoin','Global Business Revolution','Global Currency Reserve','Global Tour Coin','GlobalBoost-Y','GlobalCoin','GlobalToken','Gnosis','Gold Pressed Latinum','GoldBlocks','GoldCoin','GoldMaxCoin','Goldpay Coin','GoldPieces','GoldReserve','GoldUnionCoin','Golem','Golfcoin','Golos','Golos Gold','Good Karma','GPU Coin','Grantcoin','Greencoin','GridCoin','Groestlcoin','GuccioneCoin','Gulden','GulfCoin','Guncoin','GXShares','Gycoin','Hacker Gold','Halcyon','Halloween Coin','Happy Creator Coin','Happycoin','HarmonyCoin','HBCoin','Health Care Chain','HealthyWormCoin','HEAT','Helleniccoin','HempCoin','HempCoin','Hexx','HiCoin','High Voltage','Hirocoin','HitCoin','HoboNickels','HOdlcoin','Honey','HTMLCOIN','Humaniq','Huncoin','HunterCoin','Hush','Hyper','HyperStake','I/O Coin','I0Coin','iBank','ICO','ICO OpenLedger','ICOBID','iCoin','Iconic','Iconomi','iDice','iExec RLC','Impact','ImpulseCoin','IncaKoin','Incent','Independent Money System','InfChain','Infinitecoin','InflationCoin','Influxcoin','InPay','InsaneCoin','InsureX','International Diamond','Internet of People','Internet of Things','InvestFeed','InvisibleCoin','ION','IOTA','IOU1','IrishCoin','IslaCoin','iTicoin','IvugeoCoin','Ixcoin','Janus','JetCoin','Jewels','Jin Coin','Jinn','JIO Token','JobsCoin','Joincoin','Joulecoin','Karbowanec','Karmacoin','KashhCoin','Kayi','KekCoin','KibiCoin','KiloCoin','KingN Coin','Kittehcoin','Kobocoin','KolschCoin','Komodo','KoreCoin','Kurrent','KushCoin','LanaCoin','LandCoin','LAthaan','Lazaruscoin','LBRY Credits','LeaCoin','Legends Room','LEOcoin','Lepaoquan','LePen','LetItRide','LeviarCoin (Pre-Launch)','LevoPlus','Lex4All','Linda','Link Platform','LinkedCoin','Linx','Lisk','LiteBar','LiteBitcoin','Litecoin','Litecred','LiteDoge','Live Bela','LoMoCoin','LottoCoin','LTBcoin','LuckChain','Luna Coin','Lunyr','Lykke','Machinecoin','MACRON','Magi','Magnum','MaidSafeCoin','Malcoin','MantraCoin','Mao Zedong','Marijuanacoin','Marscoin','MarteXcoin','MarxCoin','Master Swiscoin','Matchpool','Mavro','MaxCoin','MazaCoin','MCAP','Megacoin','Melon','Mercury','MergeCoin','Metal','Metal Music Coin','MetalCoin','Metaverse ETP','microCoin','MikeTheMug','MiloCoin','Mind Gene','MindCoin','Minereum',"Miners' Reward Token",'Mineum','Minex','Mintcoin','MIYUCoin','MMXVI','MobileCash','MobileGo','Moin','MojoCoin','Monaco','MonaCoin','Monero','Moneta','MonetaryUnit','Money','MoneyCoin','Monkey','Monster Byte','Mooncoin','Mothership','Motocoin','MTMGaming','MUSE','Musicoin','MustangCoin','Myriad','Mysterium','Namecoin','NautilusCoin','NAV Coin','NEM','NEO','NeosCoin','Neptune Classic','netBit','NetCoin','Netko','Neuro','Neutron','NevaCoin','NEVERDIE','Newbium','NewYorkCoin','Nexium','Nexus','Nexxus','Nimiq','NobleCoin','NodeCoin','NoLimitCoin','Novacoin','NuBits','Numeraire','NuShares','NVO','Nxt','Nyancoin','OBITS','OCOW','Octanox','OctoCoin','OHM Wallet','OKCash','Omicron','OmiseGo','Omni','Onix','Opal','OpenAnx','OperaCoin','Operand','Opescoin','OracleChain','Orbitcoin','Orlycoin','OsmiumCoin','P7Coin','Pabyosi Coin (Special)','Paccoin','Pakcoin','Pandacoin','Pangea Poker','ParallelCoin','ParkByte','Particl','Pascal Coin','Pascal Lite','Patientory','PayCoin','PayCon','PayPeer','PeepCoin','Peercoin','Peerplays','PeopleCoin','Pepe Cash','PepeCoin','Pesetacoin','Pesobit','PetroDollar','Philosopher Stones','Phoenixcoin','Photon','PiCoin','PIECoin','Piggycoin','Pillar','PinkCoin','PinkDog','PipCoin','Pirate Blocks','PIVX','PizzaCoin','PlatinumBAR','PLNcoin','Pluton','PokeCoin','Polybius','PonziCoin','PopularCoin','Populous','PosEx','PostCoin','PoSW Coin','PotCoin','Powercoin','PRCoin','President Clinton','President Johnson','President Sanders','President Trump','Primalbase Token','Prime-XI','Primecoin','Primulon','Printerium','PrismChain','PRIZM','ProCurrency','Project Decorum','Project-X','Prototanium','Psilocybin','Pulse','Pura','PureVidz','Putin Classic','PutinCoin','PX','Qibuck Asset','Qora','Qtum','Quantum','Quantum Resistant Ledger','Quark','Quartz','Quatloo','QuazarCoin','QubitCoin','Quebecoin','Quotient','Qwark','RabbitCoin','Radium','RaiBlocks','Rare Pepe Party','Ratecoin','Rawcoin','Rcoin','RedCoin','ReddCoin','ReeCoin','Regacoin','Remicoin','Renos','Revenu','RevolverCoin','RHFCoin','Rialto','RichCoin','Ride My Car','Riecoin','Rimbit','Ripple','Ripto Bux','Rise','RonPaulCoin','RouletteToken','Round','RoyalCoin','RoyalCoin 2','Royalties','RSGPcoin','Rubies','RubleBit','Rubycoin','Rupaya','Rupee','RussiaCoin','Rustbits','Safe Exchange Coin','Safe Trade Coin','SafeCoin','Sakuracoin','SaluS','Santiment Network Token','Sativacoin','SatoshiMadness','Save and Gain','Scorecoin','SecretCoin','SecureCoin','Selfiecoin','Sequence','Sexcoin','SHACoin','Shadow Token','ShadowCash','Sharkcoin','ShellCoin','ShellPay','Shift','Shilling','Shorty','Siacoin','SIBCoin','Signatum','SingularDTV','SixEleven','Skeincoin','SkinCoin','Skycoin','Slevin','Slimcoin','Sling','SmartCash','SmartCoin','SmileyCoin','Smoke','SnakeEyes','Soarcoin','SocialCoin','SOILcoin','Sojourn','SolarCoin','Solarflarecoin','Solaris','SongCoin','SONM','SoonCoin','SoulCoin','Sovereign Hero','SpaceCoin','Spectrecoin','Speedcash','Sphere','Sphre AIR ','SportsCoin','Spots','SpreadCoin','Sprouts','SproutsExtreme','Stakecoin','Starta','Startcoin','Status','Stealthcoin','Steem','Steem Dollars','Stellar Lumens','Steps','Sterlingcoin','STEX','Storj','Storjcoin X','Stox','Stratis','Stress','StrongHands','Sumokoin','SunContract','SuperCoin','SuperNET','SuperTurboStake','SwagBucks','SwapToken','Swarm City','Swing','SydPak','Sync','Syndicate','Synereo','Synergy','SysCoin','T-coin','TaaS','TagCoin','TAGRcoin','TajCoin','Tao','Tattoocoin (Limited Edition)','Tattoocoin (Standard Edition)','TeamUp','TechShares','TEKcoin','Tellurion','TenX','TeraCoin','Terracoin','TerraNova','TeslaCoilCoin','TeslaCoin','Tether','The ChampCoin','The Cypherfunks','The Vegan Initiative','TheCreed','TheGCCcoin','Theresa May Coin','Tickets','Tigercoin','TileCoin','Timereum','Titcoin','TittieCoin','ToaCoin','TodayCoin','TokenCard','Tokes','Topaz Coin','Torcoin','TradecoinV2','TransferCoin','Triangles','TrickyCoin','Triggers','Tristar Coin','Trollcoin','TROPTIONS','Truckcoin','True Investment Coin','TrumpCoin','TrustPlus','TurboCoin','Tychocoin','Tyrocoin','Ubiq','UCoin','UFO Coin','UGAIN','Ultimate Secure Cash','UltraCoin','UnbreakableCoin','UNCoin','UniBURST','UniCoin','Unify','Unitus','Unity Ingot','Universal Currency','UniversalRoyalCoin','Universe','Unobtanium','Unrealcoin','UR','Uro','Useless Ethereum Token','UtaCoin','Valorbit','VapersCoin','Vault Coin','Vcash','Vector','VegasCoin','Veltor','Verge','VeriCoin','Veritaseum','VeriumReserve','Veros','Version','Vertcoin','Viacoin','Victoriouscoin','VIP Tokens','Virta Unique Coin','Virtacoin','Virtacoinplus','VirtualCoin','Visio','VOISE','Voxels','Voyacoin','VPNCoin','vSlice','Vsync','vTorrent','WA Space','Wagerr','WARP','Waves','Waves Community Token','WavesGo','WayGuide','WeAreSatoshi','WeTrust','Wexcoin','WhiteCoin','Wild Beast Block','Wings','Wink','WMCoin','WomenCoin','Woodcoin','WorldCoin','Wowcoin','Wowecoin','Wyvern','X-Coin','X2','Xaucoin','Xaurum','XCurrency','XDE II','Xenixcoin','Xiaomicoin','Xonecoin','XP','XtraBYtes','Yacoin','YashCoin','YbCoin','Yescoin','Yocoin','Yogold','Zayedcoin','Zcash','Zcashshare','ZcCoin','ZClassic','ZCoin','Zeitcoin','ZenCash','ZenGold','Zennies','Zero','Zetacoin','ZetaMicron','Zilbercoin','Zoin','Zonecoin','ZrCoin','ZSEcoin','Zurcoin'];var assetTuples={'Blakecoin':'blakecoin','SaluS':'salus','Hirocoin':'hirocoin','OperaCoin':'operacoin','Bolivarcoin':'bolivarcoin','Visio':'visio','Link Platform':'link-platform','Musicoin':'musicoin','UniCoin':'unicoin','Janus':'janus','Humaniq':'humaniq','Sync':'sync','Cannation':'cannation','ZetaMicron':'zetamicron','Bottlecaps':'bottlecaps','Paccoin':'paccoin','GAIA':'gaia','OCOW':'ocow','Creativecoin':'creativecoin','SixEleven':'sixeleven','SportsCoin':'sportscoin','Pangea Poker':'pangea-poker','Colossuscoin V2':'colossuscoin-v2','BigUp':'bigup','FIMKrypto':'fimkrypto','Tigercoin':'tigercoin','HTMLCOIN':'htmlcoin','Sprouts':'sprouts','DaxxCoin':'daxxcoin','Peercoin':'peercoin','UNCoin':'uncoin','Aces':'aces','Bitpark Coin':'bitpark-coin','Nexium':'nexium','NEO':'neo','GridCoin':'gridcoin','PipCoin':'pipcoin','Bitvolt':'bitvolt','BCAP':'bcap','UR':'ur','GeoCoin':'geocoin','GXShares':'gxshares','SIBCoin':'sibcoin','Luna Coin':'luna-coin','FujiCoin':'fujicoin','Alphabit':'alphabitcoinfund','Bitgem':'bitgem','CHNCoin':'chncoin','PX':'px','Komodo':'komodo','Stratis':'stratis','Triangles':'triangles','Sterlingcoin':'sterlingcoin','Flaxscript':'flaxscript','Shorty':'shorty','Tickets':'tickets','EncryptoTel':'encryptotel','BitConnect':'bitconnect','Creatio':'creatio','First Bitcoin Capital':'first-bitcoin-capital','Fantomcoin':'fantomcoin','CrevaCoin':'crevacoin','Bitland':'bitland','Vector':'vector','TransferCoin':'transfercoin','CorgiCoin':'corgicoin','G3N':'genstake','Solarflarecoin':'solarflarecoin','MarteXcoin':'martexcoin','SuperTurboStake':'superturbostake','Hexx':'hexx','Rcoin':'rcoin','Startcoin':'startcoin','ReeCoin':'reecoin','Chronobank':'chronobank','Boolberry':'boolberry','Animecoin':'animecoin','InsureX':'insurex','Steem':'steem','MetalCoin':'metalcoin','Coin2.1':'coin2-1','Putin Classic':'putin-classic','ICO':'ico','Royalties':'royalties','PIVX':'pivx','BitSend':'bitsend','Save and Gain':'save-and-gain','BitTokens':'bittokens','B3Coin':'b3coin','Ubiq':'ubiq','SatoshiMadness':'satoshimadness','CryptCoin':'cryptcoin','DigixDAO':'digixdao','LevoPlus':'levoplus','DNotes':'dnotes','Safe Exchange Coin':'safe-exchange-coin','Bitcoin':'bitcoin','Sling':'sling','BowsCoin':'bowscoin','FunFair':'funfair','Namecoin':'namecoin','Sativacoin':'sativacoin','Gas':'gas','Counterparty':'counterparty','Xenixcoin':'xenixcoin','KiloCoin':'kilocoin','district0x':'district0x','Tellurion':'tellurion','Eryllium':'eryllium','Remicoin':'remicoin','PetroDollar':'petrodollar','Blackstar':'blackstar','E4ROW':'ether-for-the-rest-of-the-world','LBRY Credits':'library-credit','UFO Coin':'ufo-coin','SuperNET':'supernet-unity','XP':'xp','CacheCoin':'cachecoin','Populous':'populous','Bitcoin Cash':'bitcoin-cash','microCoin':'microcoin','BlazeCoin':'blazecoin','PonziCoin':'ponzicoin','BTCtalkcoin':'btctalkcoin','Zurcoin':'zurcoin','BioBar':'biobar','Digital Bullion Gold':'digital-bullion-gold','Enigma':'enigma','IslaCoin':'islacoin','Ethereum':'ethereum','Ethereum Classic':'ethereum-classic','LAthaan':'lathaan','TokenCard':'tokencard','BatCoin':'batcoin','MIYUCoin':'miyucoin','E-Dinar Coin':'e-dinar-coin','CCMiner':'ccminer','Wowecoin':'wowecoin','ProCurrency':'procurrency','1337':'1337','KoreCoin':'korecoin','vTorrent':'vtorrent','Huncoin':'huncoin','TeamUp':'teamup','WARP':'warp','STEX':'stex','LandCoin':'landcoin','Pillar':'pillar','Dashs':'dashs','NobleCoin':'noblecoin','Spectrecoin':'spectrecoin','Valorbit':'valorbit','Franko':'franko','Litecoin':'litecoin','TeslaCoilCoin':'teslacoilcoin','DigiByte':'digibyte','Wyvern':'wyvern','BlackCoin':'blackcoin','Master Swiscoin':'master-swiscoin','Qora':'qora','BitAsean':'bitasean','Marijuanacoin':'marijuanacoin','RouletteToken':'roulettetoken','BitcoinDark':'bitcoindark','Stakecoin':'stakecoin-stcn','EOS':'eos','NoLimitCoin':'nolimitcoin','CBD Crystals':'cbd-crystals','Asch':'asch','Starta':'starta','Vsync':'vsync','Lunyr':'lunyr','Stellar Lumens':'stellar','UniversalRoyalCoin':'universalroyalcoin','AurumCoin':'aurumcoin','Monster Byte':'monster-byte','ParallelCoin':'parallelcoin','Wings':'wings','Altcoin':'altcoin-alt','ArcticCoin':'arcticcoin','I/O Coin':'iocoin','Torcoin':'torcoin-tor','FuckToken':'fucktoken','EB3 Coin':'eb3-coin','UtaCoin':'utacoin','Rubycoin':'rubycoin','CampusCoin':'campuscoin','Cryptonite':'cryptonite','Dashcoin':'dashcoin','BritCoin':'britcoin','Bancor':'bancor','Freicoin':'freicoin','Piggycoin':'piggycoin','GlobalBoost-Y':'globalboost-y','Augur':'augur','iExec RLC':'rlc','TaaS':'taas','Dobbscoin':'dobbscoin','NautilusCoin':'nautiluscoin','Asset Backed Coin':'asset-backed-coin','bitUSD':'bitusd','MonetaryUnit':'monetaryunit','BitBay':'bitbay','ZSEcoin':'zsecoin','BTCDragon':'btcdragon','Unobtanium':'unobtanium','Dash':'dash','GoldReserve':'goldreserve','Melon':'melon','CoEval':'coeval','Xiaomicoin':'xiaomicoin','Ultimate Secure Cash':'ultimate-secure-cash','MobileCash':'mobilecash','AquariusCoin':'aquariuscoin','Sakuracoin':'sakuracoin','Kobocoin':'kobocoin','LeviarCoin (Pre-Launch)':'leviarcoin','SkinCoin':'skincoin','CannabisCoin':'cannabiscoin','Storjcoin X':'storjcoin-x','GeyserCoin':'geysercoin','Skeincoin':'skeincoin','Megacoin':'megacoin','iBank':'ibank','Factom':'factom','President Trump':'president-trump','Acoin':'acoin','ICO OpenLedger':'ico-openledger','TROPTIONS':'troptions','HOdlcoin':'hodlcoin','PeopleCoin':'peoplecoin','bitSilver':'bitsilver','Useless Ethereum Token':'useless-ethereum-token','Mind Gene':'mind-gene','First Bitcoin':'first-bitcoin','UGAIN':'ugain','Digital Rupees':'digital-rupees','PiCoin':'picoin','The Cypherfunks':'the-cypherfunks','Bitcore':'bitcore','Sexcoin':'sexcoin','GameCredits':'gamecredits','Influxcoin':'influxcoin','Zcashshare':'zcashshare','ChanCoin':'chancoin','Stress':'stress','StrongHands':'stronghands','CoinDash':'coindash','Aricoin':'aricoin','Bitcurrency':'bitcurrency','The ChampCoin':'the-champcoin','MikeTheMug':'mikethemug','Grantcoin':'grantcoin','XDE II':'xde-ii','Project Decorum':'project-decorum','Cashcoin':'cashcoin','Machinecoin':'machinecoin','JIO Token':'jio-token','FundYourselfNow':'fundyourselfnow','Bitmark':'bitmark','Asiadigicoin':'asiadigicoin','Bolenum':'bolenum','Axiom':'axiom','BeaverCoin':'beavercoin','Environ':'environ','Argentum':'argentum','Atomic Coin':'atomic-coin','GPU Coin':'gpu-coin','Breakout':'breakout','I0Coin':'i0coin','Ardor':'ardor','Joincoin':'joincoin','DopeCoin':'dopecoin','NeosCoin':'neoscoin','BitQuark':'bitquark','VeriumReserve':'veriumreserve','Happycoin':'happycoin','Elysium':'elysium','Canada eCoin':'canada-ecoin','Gapcoin':'gapcoin','TodayCoin':'todaycoin','Eurocoin':'eurocoin','CoExistCoin':'coexistcoin','Bitstar':'bitstar','BTSR':'btsr','CyberCoin':'cybercoin','Alexium':'alexium','Bitzeny':'bitzeny','Mercury':'mercury','SafeCoin':'safecoin','RubleBit':'rublebit','Yescoin':'yescoin','CryptoWorldX Token':'cryptoworldx-token','TrumpCoin':'trumpcoin','Vcash':'vcash','Magi':'magi','Slevin':'slevin','MantraCoin':'mantracoin','Groestlcoin':'groestlcoin','OBITS':'obits','InsaneCoin':'insanecoin-insn','GoldUnionCoin':'goldunioncoin','Nyancoin':'nyancoin','ArtByte':'applebyte','Magnum':'magnum','Lex4All':'lex4all','Blocktix':'blocktix','PayPeer':'paypeer','Round':'round','Etheroll':'etheroll','Revenu':'revenu','Debitcoin':'debitcoin','Ergo':'ergo','Skycoin':'skycoin','Crown':'crown','GlobalToken':'globaltoken','Internet of Things':'internet-of-things','Catcoin':'catcoin','BlakeStar':'blakestar','NuBits':'nubits','EggCoin':'eggcoin','TrickyCoin':'trickycoin','MiloCoin':'milocoin','Octanox':'octanox','Evil Coin':'evil-coin','VOISE':'voise','Bankcoin':'bankcoin','IOTA':'iota','Fargocoin':'fargocoin','Incent':'incent','C-Bit':'c-bit','Kayi':'kayi','PepeCoin':'memetic','Bitz':'bitz','Novacoin':'novacoin','CoinonatX':'coinonatx','Ratecoin':'ratecoin','Anoncoin':'anoncoin','NVO':'nvo','PizzaCoin':'pizzacoin','PIECoin':'piecoin','Newbium':'newbium','Creditbit':'creditbit','Monaco':'monaco','bitBTC':'bitbtc','LTBcoin':'ltbcoin','Rise':'rise','MustangCoin':'mustangcoin','Nexus':'nexus','Mintcoin':'mintcoin','Quebecoin':'quebecoin','Quotient':'quotient','Project-X':'project-x','Dotcoin':'dotcoin','Etherx':'etherx','FlorinCoin':'florincoin','PayCoin':'paycoin2','FedoraShare':'fedorashare','Prime-XI':'prime-xi','Matchpool':'guppy','Elastic':'elastic','X-Coin':'x-coin','Legends Room':'legends-room','PRCoin':'prcoin','Slimcoin':'slimcoin','UCoin':'ucoin','SproutsExtreme':'sproutsextreme','Mavro':'mavro','Wowcoin':'wowcoin','AntiBitcoin':'antibitcoin','Breakout Stake':'breakout-stake','RaiBlocks':'raiblocks','ZrCoin':'zrcoin','bitEUR':'biteur','Bytecent':'bytecent','AudioCoin':'audiocoin','InfChain':'infchain','RoyalCoin':'royalcoin','Quantum Resistant Ledger':'quantum-resistant-ledger','DeepOnion':'deeponion','Virtacoin':'virtacoin','VegasCoin':'vegascoin','GBCGoldCoin':'gbcgoldcoin','Dinastycoin':'dinastycoin','Diamond':'diamond','EverGreenCoin':'evergreencoin','Renos':'renos','FiboCoins':'fibocoins','UniBURST':'uniburst','AmsterdamCoin':'amsterdamcoin','Golos':'golos','Ripto Bux':'ripto-bux','Crypto':'crypto','True Investment Coin':'true-investment-coin','Stox':'stox','Yocoin':'yocoin','bitCNY':'bitcny','Centra':'centra','Cashme':'cashme','Digital Credits':'digital-credits','Advanced Internet Blocks':'advanced-internet-blocks','Dentacoin':'dentacoin','Halloween Coin':'halloween-coin','DubaiCoin':'dubaicoin-dbix','Mineum':'mineum','GCoin':'gcoin','HyperStake':'hyperstake','Cryptojacks':'cryptojacks','LoMoCoin':'lomocoin','TajCoin':'tajcoin','HealthyWormCoin':'healthywormcoin','Falcoin':'falcoin','Ixcoin':'ixcoin','Aeternity (Pre-Launch)':'aeternity','AvatarCoin':'avatarcoin','LottoCoin':'lottocoin','Emerald Crypto':'emerald','TerraNova':'terranova','AmberCoin':'ambercoin','GulfCoin':'gulfcoin','Bongger':'bongger','Dubstep':'dubstep','GameUnits':'gameunits','Coimatic 2.0':'coimatic-2','OpenAnx':'openanx','Civic':'civic','Spots':'spots','NewYorkCoin':'newyorkcoin','Orbitcoin':'orbitcoin','iTicoin':'iticoin','QuazarCoin':'quazarcoin','Patientory':'patientory','International Diamond':'international-diamond','President Sanders':'president-sanders','XtraBYtes':'xtrabytes','Blitzcash':'blitzcash','Rare Pepe Party':'rare-pepe-party','Quatloo':'quatloo','YbCoin':'ybcoin','Carboncoin':'carboncoin','HitCoin':'hitcoin','Denarius':'denarius-dnr','EmberCoin':'embercoin','NodeCoin':'nodecoin','Adzcoin':'adzcoin','Omni':'omni','TileCoin':'tilecoin','BitBean':'bitbean','FlutterCoin':'fluttercoin','T-coin':'t-coin','SocialCoin':'socialcoin-socc','Guncoin':'guncoin','Vertcoin':'vertcoin','FirstCoin':'firstcoin','AdEx':'adex','ShadowCash':'shadowcash','Theresa May Coin':'theresa-may-coin','CasinoCoin':'casinocoin','Health Care Chain':'health-care-chain','FinCoin':'fincoin','RevolverCoin':'revolvercoin','Tattoocoin (Standard Edition)':'tattoocoin','Photon':'photon','SwagBucks':'swagbucks','Soarcoin':'soarcoin','FairCoin':'faircoin','WA Space':'wa-space','HEAT':'heat-ledger','GAY Money':'gaycoin','OmiseGo':'omisego','8Bit':'8bit','Birds':'birds','Coin(O)':'coin','Peerplays':'peerplays-ppy','SunContract':'suncontract','TeraCoin':'teracoin','42-coin':'42-coin','Casino':'casino','PrismChain':'prismchain','DigitalPrice':'digitalprice','VPNCoin':'vpncoin','Embers':'embers','Bitcoin Plus':'bitcoin-plus','Universe':'universe','TheCreed':'thecreed','Smoke':'smoke','BlueCoin':'bluecoin','SuperCoin':'supercoin','RHFCoin':'rhfcoin','Numeraire':'numeraire','Uro':'uro','Solaris':'solaris','Byteball':'byteball','Digitalcoin':'digitalcoin','Centurion':'centurion','Storj':'storj','Radium':'radium','Netko':'netko','Allion':'allion','CryptoForecast':'cryptoforecast','Fonziecoin':'fonziecoin','AsicCoin':'asiccoin','SolarCoin':'solarcoin','Voxels':'voxels','Pulse':'pulse','RabbitCoin':'rabbitcoin','GuccioneCoin':'guccionecoin','GoldBlocks':'goldblocks','OsmiumCoin':'osmiumcoin','e-Gulden':'e-gulden','DT Token':'dt-token','Topaz Coin':'topaz','EuropeCoin':'europecoin','MTMGaming':'mtmgaming','DeltaCredits':'deltacredits','BipCoin':'bipcoin','vSlice':'vslice','ReddCoin':'reddcoin','WMCoin':'wmcoin','Bit20':'bit20','Greencoin':'greencoin','Minereum':'minereum','Yogold':'yogold','Donationcoin':'donationcoin','Unitus':'unitus','BTCGold':'btcgold','Zero':'zero','Hyper':'hyper','Bytom':'bytom','Jin Coin':'jin-coin','WeAreSatoshi':'wearesatoshi','ExclusiveCoin':'exclusivecoin','KingN Coin':'kingn-coin','ImpulseCoin':'impulsecoin','Zilbercoin':'zilbercoin','ARbit':'arbit','GeertCoin':'geertcoin','ShellCoin':'shellcoin','Pascal Lite':'pascal-lite','Particl':'particl','Minex':'minex','OracleChain':'oraclechain','Infinitecoin':'infinitecoin','Kurrent':'kurrent','Gulden':'gulden','AdShares':'adshares','PinkDog':'pinkdog','Pakcoin':'pakcoin','TheGCCcoin':'thegcccoin','LanaCoin':'lanacoin','Pandacoin':'pandacoin-pnd','Shift':'shift','Version':'version','APX':'apx','WayGuide':'wayguide','PopularCoin':'popularcoin','Sequence':'sequence','Ethbits':'ethbits','Sphre AIR ':'sphre-air','MMXVI':'mmxvi','President Clinton':'president-clinton','The Vegan Initiative':'the-vegan-initiative','Halcyon':'halcyon','BitCentavo':'bitcentavo','Iconic':'iconic','RichCoin':'richcoin','LuckChain':'luckchain','KekCoin':'kekcoin','Veltor':'veltor','RedCoin':'redcoin','adToken':'adtoken','Universal Currency':'universal-currency','Auroracoin':'auroracoin','2GIVE':'2give','DPAY':'dpay','Espers':'espers','AllSafe':'allsafe','Neutron':'neutron','Dix Asset':'dix-asset','WavesGo':'wavesgo','Adelphoi':'adelphoi','Digital Money Bits':'digital-money-bits','DAO.Casino':'dao-casino','HiCoin':'hicoin','Cannacoin':'cannacoin','GoldPieces':'goldpieces','FrankyWillCoin':'frankywillcoin','KibiCoin':'kibicoin','Bitcoin Planet':'bitcoin-planet','OKCash':'okcash','Dollarcoin':'dollarcoin','Future Digital Currency':'future-digital-currency','Karbowanec':'karbowanec','BBQCoin':'bbqcoin','Hacker Gold':'hacker-gold','Pepe Cash':'pepe-cash','Lykke':'lykke','IrishCoin':'irishcoin','DAPPSTER':'dappster','Rupaya':'rupaya','Steem Dollars':'steem-dollars','Sojourn':'sojourn','Zoin':'zoin','Doubloon':'doubloon','IncaKoin':'incakoin','Bitcrystals':'bitcrystals','VapersCoin':'vaperscoin','Einsteinium':'einsteinium','BoostCoin':'boostcoin','Global Currency Reserve':'global-currency-reserve','VeriCoin':'vericoin','Evotion':'evotion','Triggers':'triggers','Cofound.it':'cofound-it','SHACoin':'shacoin','Pabyosi Coin (Special)':'pabyosi-coin-special','Sphere':'sphere','MonaCoin':'monacoin','RoyalCoin 2':'royalcoin-2','Myriad':'myriad','PlatinumBAR':'platinumbar','Nimiq':'nimiq','RSGPcoin':'rsgpcoin','Signatum':'signatum','GlobalCoin':'globalcoin','Bitcloud':'bitcloud','Primecoin':'primecoin','ChainCoin':'chaincoin','Veritaseum':'veritaseum','0x':'0x','Edgeless':'edgeless','Linx':'linx','Internet of People':'internet-of-people','Woodcoin':'woodcoin','AnarchistsPrime':'anarchistsprime','SoonCoin':'sooncoin','GanjaCoin':'ganjacoin','Honey':'honey','Litecred':'litecred','Tattoocoin (Limited Edition)':'tattoocoin-limited','Truckcoin':'truckcoin','TAGRcoin':'tagrcoin','Joulecoin':'joulecoin','LiteBitcoin':'litebitcoin','Capricoin':'capricoin','Pesetacoin':'pesetacoin','ZenCash':'zencash','High Voltage':'high-voltage','Argus':'argus','TenX':'tenx','MobileGo':'mobilego','CVCoin':'cvcoin','CRTCoin':'crtcoin','RonPaulCoin':'ronpaulcoin','Abncoin':'abncoin','Shadow Token':'shadow-token','Fuda Energy':'fuda-energy','Cabbage':'cabbage','Live Bela':'belacoin','Etheriya':'etheriya','Gambit':'gambit','Pascal Coin':'pascal-coin','Moin':'moin','Lisk':'lisk','Speedcash':'speedcash','Virta Unique Coin':'virta-unique-coin','Santiment Network Token':'santiment','Emercoin':'emercoin','Pura':'pura','ICOBID':'icobid','XCurrency':'xcurrency','TechShares':'techshares','Waves Community Token':'waves-community-token','PostCoin':'postcoin','BitcoinFast':'bitcoinfast','BitAlphaCoin':'bitalphacoin','Xaucoin':'xaucoin','Rialto':'rialto','Bitcoin Scrypt':'bitcoin-scrypt','Destiny':'destiny','Sharkcoin':'sharkcoin','Stealthcoin':'stealthcoin','Bytecoin':'bytecoin-bcn','Scorecoin':'scorecoin','BumbaCoin':'bumbacoin','Dreamcoin':'dreamcoin','NevaCoin':'nevacoin','EquiTrader':'equitrader','Avoncoin':'avoncoin','Global Business Revolution':'global-business-revolution','Coupecoin':'coupecoin','Metal':'metal','LiteDoge':'litedoge','BitShares':'bitshares','Riecoin':'riecoin','Wagerr':'wagerr','ChessCoin':'chesscoin','Coinonat':'coinonat','9COIN':'9coin','BurstOcean':'burstocean','Metaverse ETP':'metaverse','PLNcoin':'plncoin','Global Tour Coin':'global-tour-coin','CloakCoin':'cloakcoin','JetCoin':'jetcoin','PinkCoin':'pinkcoin','Compcoin':'compcoin','Dollar Online':'dollar-online','MojoCoin':'mojocoin','NuShares':'nushares','CryptoEscudo':'cryptoescudo','Unity Ingot':'unity-ingot','Trollcoin':'trollcoin','Darsek':'darsek','SysCoin':'syscoin','UnbreakableCoin':'unbreakablecoin','DeusCoin':'deuscoin','AgrolifeCoin':'agrolifecoin','Ripple':'ripple','EGO':'ego','Qtum':'qtum','KolschCoin':'kolschcoin','Bitok':'bitok','BlockPay':'blockpay','MaidSafeCoin':'maidsafecoin','Concoin':'concoin','MergeCoin':'mergecoin','DraftCoin':'draftcoin','Prototanium':'prototanium','MUSE':'bitshares-music','1CRedit':'1credit','PureVidz':'purevidz','CompuCoin':'compucoin','Cubits':'cubits','DIBCOIN':'dibcoin','Goldpay Coin':'goldpay-coin','CryptoPing':'cryptoping','Neptune Classic':'neptune-classic','Bata':'bata','Beatcoin':'beatcoin','NAV Coin':'nav-coin','PoSW Coin':'posw-coin','Zonecoin':'zonecoin','Philosopher Stones':'philosopher-stones','NetCoin':'netcoin','FlavorCoin':'flavorcoin','KashhCoin':'kashhcoin','Eternity':'eternity','FuturXe':'futurexe','808Coin':'808coin','MaxCoin':'maxcoin','Rubies':'rubies','FutCoin':'futcoin','Tether':'tether','SpaceCoin':'spacecoin','Bitswift':'bitswift','Artex Coin':'artex-coin','BillaryCoin':'billarycoin','BitBar':'bitbar','Binance Coin':'binance-coin','BlazerCoin':'blazercoin','Voyacoin':'voyacoin','ZCoin':'zcoin','SmileyCoin':'smileycoin','Unify':'unify','iDice':'idice','EDRCoin':'edrcoin','KushCoin':'kushcoin','ToaCoin':'toacoin','Clinton':'clinton','Tychocoin':'tychocoin','Gycoin':'gycoin','Money':'money','bitGold':'bitgold','DigitalDevelopersFund':'digital-developers-fund','DigitalNote':'digitalnote','Golem':'golem-network-tokens','ShellPay':'shellpay','Neuro':'neuro','SwapToken':'swaptoken','Impact':'impact','Synereo':'synereo','Crypto Bullion':'cryptogenic-bullion','Kittehcoin':'kittehcoin','Helleniccoin':'helleniccoin','FuzzBalls':'fuzzballs','MCAP':'mcap','Golos Gold':'golos-gold','ZClassic':'zclassic','Swarm City':'swarm-city','AMIS':'amis','Elcoin':'elcoin-el','Bitcedi':'bitcedi','Omicron':'omicron','Zetacoin':'zetacoin','SecureCoin':'securecoin','Wexcoin':'wexcoin','Viacoin':'viacoin','PRIZM':'prizm','GoldMaxCoin':'goldmaxcoin','SydPak':'sydpak','Malcoin':'malcoin','Powercoin':'powercoin','Dogecoin':'dogecoin','ClubCoin':'clubcoin','Polybius':'polybius','MazaCoin':'mazacoin','Ark':'ark','Status':'status','Quantum':'quantum','Hush':'hush','E-Currency Coin':'eccoin','TagCoin':'tagcoin','Condensate':'condensate','Dimecoin':'dimecoin','Pesobit':'pesobit','Vault Coin':'vault-coin','Metal Music Coin':'metal-music-coin','020LondonCoin':'o2olondoncoin','GoldCoin':'goldcoin','ELcoin':'elcoin','Good Karma':'good-karma','Darcrus':'darcrus','Gambleo':'gambleo','Deutsche eMark':'deutsche-emark','EarthCoin':'earthcoin','SmartCash':'smartcash','Cypher':'cypher','LeaCoin':'leacoin','Syndicate':'syndicate','EMoneyPower':'emoneypower','HarmonyCoin':'harmonycoin-hmc','Atmos':'atmos','MindCoin':'mindcoin','P7Coin':'p7coin','Mao Zedong':'mao-zedong','Elacoin':'elacoin','FUNCoin':'funcoin','Ecobit':'ecobit','Tao':'tao','BenjiRolls':'benjirolls','Victoriouscoin':'victoriouscoin','Siacoin':'siacoin','BnrtxCoin':'bnrtxcoin','LetItRide':'letitride','Nexxus':'nexxus','FirstBlood':'firstblood','LePen':'lepen','BetaCoin':'betacoin','Rawcoin':'rawcoin2','AsiaCoin':'asiacoin','Motocoin':'motocoin','Veros':'veros','Californium':'californium','Synergy':'synergy','WorldCoin':'worldcoin','Francs':'francs','President Johnson':'president-johnson','Safe Trade Coin':'safe-trade-coin','Cream':'cream','Crave':'crave','SpreadCoin':'spreadcoin','Footy Cash':'footy-cash','Bitcoin Unlimited (Futures)':'bitcoin-unlimited','YashCoin':'yashcoin','ION':'ion','Unrealcoin':'unrealcoin','LinkedCoin':'linkedcoin','VirtualCoin':'virtualcoin','Primulon':'primulon','WeTrust':'trust','Onix':'onix','WomenCoin':'women','Quark':'quark','OHM Wallet':'ohm-wallet','Virtacoinplus':'virtacoinplus','Psilocybin':'psilocybin','Cthulhu Offerings':'cthulhu-offerings','CryptoCarbon':'cryptocarbon','Operand':'operand','ZenGold':'zengold','Happy Creator Coin':'happy-creator-coin','Qibuck Asset':'qibuck-asset','Blocknet':'blocknet','Mothership':'mothership','Iconomi':'iconomi','Excelcoin':'excelcoin','BunnyCoin':'bunnycoin','Jinn':'jinn','Cycling Coin':'cycling-coin','Arcade Token':'arcade-token','PayCon':'paycon','Braincoin':'braincoin','TurboCoin':'turbocoin','TrustPlus':'trustplus','Primalbase Token':'primalbase','iCoin':'icoin','SnakeEyes':'snakeeyes','Tristar Coin':'tristar-coin','MoneyCoin':'moneycoin','HoboNickels':'hobonickels','BERNcash':'berncash','Karmacoin':'karmacoin','Zennies':'zennies','JobsCoin':'jobscoin','SecretCoin':'secretcoin','Devcoin':'devcoin','DECENT':'decent','Linda':'linda','Aeon':'aeon','Orlycoin':'orlycoin','Rimbit':'rimbit','Verge':'verge','Bitquence':'bitquence','ATC Coin':'atc-coin','Tyrocoin':'tyrocoin','Opescoin':'opescoin','Opal':'opal','UltraCoin':'ultracoin','CageCoin':'cagecoin','Qwark':'qwark','Mooncoin':'mooncoin','Electra':'electra','Pirate Blocks':'pirate-blocks','Firecoin':'firecoin','AxFunds':'axfunds','EcoCoin':'ecocoin','AppleCoin':'applecoin-apw','Curecoin':'curecoin','SONM':'sonm','BiosCrypto':'bios-crypto','SmartCoin':'smartcoin','SingularDTV':'singulardtv','Steps':'steps','NEM':'nem','Ammo Rewards':'ammo-rewards','Basic Attention Token':'basic-attention-token','HunterCoin':'huntercoin','PeepCoin':'peepcoin','IvugeoCoin':'ivugeocoin','Quartz':'quartz-qrz','InvisibleCoin':'invisiblecoin','Zayedcoin':'zayedcoin','DigiCube':'digicube','Waves':'waves','ZcCoin':'zccoin','QubitCoin':'qubitcoin','FoldingCoin':'foldingcoin','Sovereign Hero':'sovereign-hero','Ride My Car':'ride-my-car','X2':'x2','Comet':'comet','Independent Money System':'independent-money-system','23 Skidoo':'23-skidoo','Printerium':'printerium','Pluton':'pluton','CaliphCoin':'caliphcoin','Dynamic':'dynamic','PokeCoin':'pokecoin','Wild Beast Block':'wild-beast-block','Expanse':'expanse','BitcoinTX':'bitcointx','PotCoin':'potcoin','BriaCoin':'briacoin','Fazzcoin':'fazzcoin','Clams':'clams','Regacoin':'regacoin','LiteBar':'litebar','BestChain':'bestchain','Selfiecoin':'selfiecoin','300 Token':'300-token','Nxt':'nxt','TeslaCoin':'teslacoin','Golfcoin':'golfcoin',"Miners' Reward Token":'miners-reward-token','SoulCoin':'soulcoin','InvestFeed':'investfeed','Gold Pressed Latinum':'gold-pressed-latinum','Aidos Kuneen':'aidos-kuneen','OctoCoin':'octocoin','MarxCoin':'marxcoin','Bitradio':'bitradio','Mysterium':'mysterium','Moneta':'moneta2','Dent':'dent','TradecoinV2':'tradecoin-v2','LEOcoin':'leocoin','PutinCoin':'putincoin','Wink':'wink','Monero':'monero','Timereum':'timereum','Swing':'swing','Cheapcoin':'cheapcoin','Gnosis':'gnosis-gno','GameBet Coin':'gamebet-coin','FedoraCoin':'fedoracoin','BagCoin':'bagcoin','DAS':'das','Ethereum Movie Venture':'ethereum-movie-venture','Phoenixcoin':'phoenixcoin','RussiaCoin':'russiacoin','Zcash':'zcash','Antimatter':'antimatter','Xonecoin':'xonecoin','HempCoin':'hempcoin-hmp','Rustbits':'rustbits','Bitcoin 21':'bitcoin-21','IOU1':'iou1','BitCoal':'bitcoal','Titcoin':'titcoin','Monkey':'monkey','Burst':'burst','NEVERDIE':'neverdie','InPay':'inpay','DHG':'dhg','Fastcoin':'fastcoin','PosEx':'posex','Feathercoin':'feathercoin','WhiteCoin':'whitecoin','E-coin':'e-coin','Aragon':'aragon','FuelCoin':'fuelcoin','Sumokoin':'sumokoin','Tokes':'tokes','Elementrem':'elementrem','DynamicCoin':'dynamiccoin','Databits':'databits','eBoost':'eboostcoin','Lazaruscoin':'lazaruscoin','Energycoin':'energycoin','Shilling':'shilling','InflationCoin':'inflationcoin','Agoras Tokens':'agoras-tokens','Decred':'decred','BlockCAT':'blockcat','Marscoin':'marscoin','SOILcoin':'soilcoin','DarkLisk':'darklisk','SongCoin':'songcoin','HBCoin':'hbcoin','TittieCoin':'tittiecoin','VIP Tokens':'vip-tokens','Rupee':'rupee','Terracoin':'terracoin','Antilitecoin':'antilitecoin','GameLeagueCoin':'gameleaguecoin','AlpaCoin':'alpacoin','Lepaoquan':'lepaoquan','Chronos':'chronos','TEKcoin':'tekcoin','Digitalfund':'digitalfund','Flash':'flash','Yacoin':'yacoin','FireFlyCoin':'fireflycoin','ParkByte':'parkbyte','netBit':'netbit','Jewels':'jewels','Ebittree Coin':'ebittree-coin','Bitdeal':'bitdeal','Flycoin':'flycoin','MACRON':'macron','Xaurum':'xaurum','Zeitcoin':'zeitcoin','Circuits of Value':'circuits-of-value'};function log(message,status){if(status=="start"){console.log("%c "+message,'background: #fff; color: #269920');}else if(status=="wait"){console.log("%c "+message,'background: #fff; color: #FF9900');}else if(status=="success"){console.log("%c "+message,'background: #fff; color: #269920');}else if(status=="error"){console.log("%c "+message,'background: #fff; color: #db0202');}else if(!status){console.log("%c "+message,'background: #fff; color: #000');}};document.querySelector(".nav-toggle").addEventListener('click',function(){this.classList.toggle('is-active');document.querySelector(".nav-menu").classList.toggle("is-active");});