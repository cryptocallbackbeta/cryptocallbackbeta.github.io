import time
import threading
import os
import sys
from time import localtime, strftime, time
from string import Template
import json
from distutils.dir_util import copy_tree
import shutil
from css_html_js_minify import process_single_html_file, process_single_js_file, process_single_css_file, html_minify, js_minify, css_minify
from colorama import init
from termcolor import colored
from scripts.createAssetArray import createAssetArray
from scripts.createAssetsDropdownOptions import createAssetsDropdownOptions
from scripts.createDummyData import createDummyData

init()
red = "\033[31m"
green = "\033[32m"
yellow = "\033[33m"
blue = "\033[36m"
reset = "\033[37m"

def start(functName):
    print("\t" + functName + yellow + " Initiated" + reset)
def end(indent):
    print(indent + "\tComplete")




state = 1
pageNames = []
postNames = []

def runBuild():
    global state
    if state == 1:
        state = 0
        print(yellow + "build() Initiated" + reset)
        t1 = time()
        build()
        t2 = time()
        print(green + "\tBuild Complete " + blue + strftime("(%H:%M:%S)", localtime()) + reset + " Time: " + str(round((t2-t1)*1000)/1000) + "s")
    elif state == 0:
        state = 1
    else:
        state = 1

    
# speedBuild = True
speedBuild = False


def build():
    print("\tBuilding...")
    deleteOldBuild() #Complete
    updateAssets() #Completed
    getPageNames() #Completed
    getPostNames() #Completed
    compileJS() #Completed
    compileCSS() #Completed
    copyImages() #Completed
    compilePages() #Completed
    createIndex("alerts")
    # compileBlog()
    buildCNAME() #Completed


def delFolderContents(path):
    print("\t\tDeleting files in: " + path)
    for the_file in os.listdir(path):
        file_path = os.path.join(path, the_file)
        try:
            if os.path.isfile(file_path):
                os.remove(file_path)
            print("\t\t\t" + the_file)
        except Exception as e:
            print(red + "\t\t\tDelete Unsuccessful" + reset)
            print(red + "\t\t\t" + e + reset)
def deleteOldBuild():
    if not speedBuild:
        start("deleteOldBuild()")
        delFolderContents("../assets/")
        delFolderContents("../assets/css/")
        delFolderContents("../assets/icons/")
        delFolderContents("../assets/img/")
        delFolderContents("../assets/js/")
        delFolderContents("../blog/")
        delFolderContents("../")
        end("\t")
def updateAssets():
    if not speedBuild:
        start("updateAssets()")
        location = "/../../assets/"
        createAssetArray(location)
        # 1028 on last update
        createAssetsDropdownOptions(location)
        # createDummyData(location)
        end("\t")
def getPageNames():
    global pageNames
    pageNames = []
    start("getPageNames()")
    pagesDir = os.fsencode("C:/Users/Hanz/Desktop/Repos/cryptocallbackbeta.github.io/build/pages")
    print("\t\tPage Names:")
    if not os.listdir(pagesDir):
        print(red + "\t\t\tNo posts exist" + reset)
    else:
        for file in os.listdir(pagesDir):
            filename = os.fsdecode(file)
            fname = filename.split(".")[0]
            if filename.endswith(".html"): 
                pageNames.append(fname)
                print("\t\t\t"+fname)
    end("\t")
def getPostNames():
    global postNames
    start("getPostNames()")
    postsDir = os.fsencode("C:/Users/Hanz/Desktop/Repos/cryptocallbackbeta.github.io/build/posts")
    print("\t\tPost Names:")
    if not os.listdir(postsDir):
        print(red + "\t\t\tNo posts exist" + reset)
    else:
        for file in os.listdir(postsDir):
            filename = os.fsdecode(file)
            fname = filename.split("_")[0]
            if filename.endswith(".html"): 
                postNames.append(fname)
                print("\t\t\t"+fname)
    end("\t")
def compilePages():
    start("compilePages()")
    globalSettings = {}
    with open('settings/global.json') as global_settings:  
        globalSettings.update( json.load(global_settings, strict=False) )
    print("\t\tPages Compiled:")
    for page in pageNames:
        content = ""
        replacements =  {"#assetDropdownOptions": open('../assets/asset-dropdown-options.json', 'r').read()}
        pageSettings = globalSettings
        with open('settings/page/' + page + '_settings.json') as page_settings:  
            pageSettings.update( json.load(page_settings) )
        header = open( 'header.html' ).read()
        body = open( 'pages/' + page + '.html', encoding='utf8' ).read()
        footer = open( 'footer.html' ).read()
        content = header + body + footer
        for src, target in replacements.items():
            content = content.replace(src, target)
        result = Template(content).substitute(pageSettings)
        html = html_minify(result)
        # html = result
        with open("../" + page + ".html", 'w') as outfile:
            outfile.write(html)
            print("\t\t\t" + page + ".html")
    end("\t")
def createIndex(homepage):
    start("createIndex()")
    print("\t\tCreating Index Page...")
    shutil.copy2("../" + homepage + ".html", "../index.html")
    end("\t")
def compileJS():
    start("compileJS()")
    js = ""
    print("\t\tCompiling JS Files...")
    assets = open( 'assets/js/assets.js' ).read()
    toast = open( 'assets/js/toast.js' ).read()
    main = open( 'assets/js/main.js' ).read()
    alertForm = js_minify( open( 'assets/js/alertForm.js' ).read() )
    delete = js_minify( open( 'assets/js/delete.js' ).read() )
    js = js_minify( toast + assets + main)
    with open("../assets/js/main.js", 'w') as outfile:
        outfile.write(js)
    with open("../assets/js/alertForm.js", 'w') as outfile:
        outfile.write(alertForm)
    with open("../assets/js/delete.js", 'w') as outfile:
        outfile.write(delete)
    end("\t")
def compileCSS():
    start("compileCSS()")
    css = ""
    print("\t\tCompiling CSS Files...")
    bulma = open( 'assets/css/bulma.css' ).read()
    style = open( 'assets/css/style.css' ).read()
    theme = open( 'assets/css/theme.css' ).read()
    toast = open( 'assets/css/toast.css' ).read()
    if not speedBuild:
        css = css_minify(bulma + style + theme + toast, comments=False)
    if speedBuild:
        css = bulma + style + theme + toast
    with open("../assets/css/style.css", 'w') as outfile:
        outfile.write(css)
    end("\t")
def copyImages():
    copy_tree("assets/img","../assets/img")
    copy_tree("assets/icons","../assets/icons")
def buildCNAME():
    start("buildCNAME()")
    cnameSettings = {}
    with open('settings/global.json') as global_settings:  
        cnameSettings.update( json.load(global_settings) )
    filein = open( 'CNAME' )
    src = Template( filein.read() )
    result = src.substitute(cnameSettings)
    with open("../CNAME", 'w') as outfile:
        outfile.write(result)
    end("\t")


