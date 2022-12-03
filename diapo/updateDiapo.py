"""
Python script to add path to paths.js
JSON Pattern :

{
    nbDiapo(string): {
        endOfDay: false,
        endOfGame: false,
        futureRoute: null,
        money: -100,
        culture: 0,
        fun: 1,
        pictures: 0,
        objects: str
        pages: [
            {
                pathToImg: str, <- exposé
                text: str
                prop: null
            },
            (...),
            {
                pathToImg: str, <- choix à faire
                text: str,
                prop: {
                    "A": {
                        propText: str,
                        toDiapo: str, <- number
                        requireObject: null,
                        requireMoney: int
                    },
                    "B": {
                        propText: str,
                        toDiapo: str,
                        ...
                    },
                    "C": null
                    "D": null <- JUSQU'À D MAXIMUM
                }
            }
        ]
    },
    (...)
}
"""
#! Run this script in ExpoUSA/

import os
import sys
import json

HEADER = "//! double-quote only!! Objects should be in 'assets/img/objects/{object_name}.png'\n"
VAR_NAME = "var diapo = "

class Print():
    """It's a bunch of strings that can be used to change the color of text in the terminal"""
    black = "\033[30m"
    red = "\033[31m"
    green = "\033[32m"
    yellow = "\033[33m"
    blue = "\033[34m"
    purple = "\033[35m"
    cyan = "\033[36m"
    white = "\033[37m"
    bold = ""#"\033[1m"
    underline = "\033[2;40m"
    end = "\033[0m"
    clear = "\033[K"

    def previous(lines: int=1) -> str:
        """
        It moves the cursor up by the number of lines specified
        
        :param lines: The number of lines to go up, defaults to 1
        :return: The previous line.
        """
        return "\033[F" * lines

    def move(cols: int) -> str:
        """
        It moves the cursor to the specified column
        
        :param cols: The number of columns to move the cursor
        :return: a string that contains the escape sequence for moving the cursor to the specified column.
        """
        return f"\033[{cols}G"

def open_file():
    if os.path.exists("paths.js"):
        with open("paths.js", "r") as f:
            file = ""
            string_opened = False
            for char in f.read()[len(HEADER) + len(VAR_NAME):][:-1]:
                if char == "\"":
                    string_opened = not string_opened
                if char == "\n" or char == " " and not string_opened:
                    continue
                file += char

            if file != "{}":
                return json.loads(file)
            else:
                return {}
    else:
        return {}

def save(json_var, HEADER=HEADER, VAR_NAME=VAR_NAME):
    with open("paths.js", "w", encoding="utf8") as f:
        f.write(HEADER)
        f.write(VAR_NAME + json.dumps(json_var, ensure_ascii=False, indent=4) + ";")

def get_linked_nbs(diapo):
    linked_nbs = set()
    linked_nbs_with_refs = {}
    for nb_path, content in diapo.items():
        if content["futureRoute"] != None:
            linked_nbs.add(content["futureRoute"])

        for page in content["pages"]:
            if page["prop"] is not None:
                for prop_letter, prop_info in page["prop"].items():
                    if prop_info is not None:
                        linked_nbs.add(prop_info["toDiapo"])
                        linked_nbs_with_refs[f"{nb_path}:{prop_letter}"] = prop_info["toDiapo"]
    return list(linked_nbs), linked_nbs_with_refs

def get_isolated_nbs(diapo, linked_nbs):
    isolated_nbs = []
    for nb_path in diapo.keys():
        if nb_path not in linked_nbs and nb_path != "1":
            isolated_nbs.append(nb_path)
    return isolated_nbs

def get_unexisting_refs(diapo, linked_nbs_with_refs):
    unexisting_refs = []
    nbs_paths = list(diapo.keys())
    for ref, linked_nb in linked_nbs_with_refs.items():
        if linked_nb not in nbs_paths:
            unexisting_refs.append(f"{ref}->{linked_nb}")
    return unexisting_refs

def get_objects_problems(diapo):
    objects = [obj["object"] for obj in diapo.values() if obj["object"] is not None]
    objects_used = []
    objects_used_with_refs = []
    for number, content in diapo.items():
        for page in content["pages"]:
            if page["prop"] is not None:
                for letter, infos in page["prop"].items():
                    if infos is not None:
                        if infos["requireObject"] is not None:
                            objects_used.append(infos["requireObject"])
                            objects_used_with_refs.append((infos["requireObject"], f"{number}:{letter}"))
    
    isolated_objects = []
    for obj in objects:
        if obj not in objects_used:
            isolated_objects.append(obj)
    
    blocking_objects = []
    for obj_used, ref in objects_used_with_refs:
        if obj_used not in objects:
            blocking_objects.append(f"{ref}->{obj_used}")

    return isolated_objects, blocking_objects

def new_path(diapo):
    if diapo:
        return str(max([int(nb) for nb in diapo.keys()]) + 1)
    else:
        return "1"

def get_int(phrase, default=0, error=False):
    while True:
        try:
            if not error:
                value = input(f"{phrase}")
            else:
                value = input(f"{Print.previous()}{Print.clear}{Print.bold}{Print.red}[INCORECT VALUE]{Print.end} {phrase}")

            if value == "":
                return default
            else:
                return int(value)
        except ValueError:
            error = True
            continue

def create_path(diapo, nb):
    print(f"\n{'-'*20}{Print.bold}Creating {Print.purple}path {nb}{Print.end}{Print.bold}...{Print.end}{'-'*20}\n")

    end_of_day = bool(input(f"{Print.bold}End of day? {Print.blue}(no){Print.end}{Print.bold} (y/n) : {Print.end}").lower() == "y")
    if end_of_day:
        end_of_game = False
        future_route = input(f"{Print.bold}Future route {Print.blue}(number){Print.end}{Print.bold} : {Print.end}")
        if future_route == "":
            future_route = None
    else:
        end_of_game = bool(input(f"{Print.bold}End of game? {Print.blue}(no){Print.end}{Print.bold} (y/n): {Print.end}").lower() == "y")
        future_route = None
    print()
    money = get_int(f"{Print.bold}Money {Print.blue}(0){Print.end}{Print.bold} : {Print.end}")
    culture = get_int(f"{Print.bold}Culture {Print.blue}(0){Print.end}{Print.bold} : {Print.end}")
    fun = get_int(f"{Print.bold}Fun {Print.blue}(0){Print.end}{Print.bold} : {Print.end}")
    pictures = get_int(f"{Print.bold}Pictures {Print.blue}(0){Print.end}{Print.bold} : {Print.end}")
    object = input(f"{Print.bold}Object : {Print.end}")
    if object == "":
        object = None
    pages = []
    print(f"\n{'-'*20}{Print.bold}Adding {Print.purple}pages{Print.end}{Print.bold}...{Print.end}{'-'*20}")
    while True:

        path_of_img_diapo = input(f"\n{Print.bold}Path of diapo image : {Print.end}")
        if path_of_img_diapo == "":
            path_of_img_diapo = None
        text_of_diapo = input(f"{Print.bold}Text of diapo : {Print.end}")

        if end_of_day or end_of_game:
            pages.append({"pathToImg": path_of_img_diapo, "text": text_of_diapo, "prop": None})
            continue_to_page = bool(input(f"{Print.bold}Add another {Print.purple}page{Print.end}{Print.bold}? {Print.blue}(no){Print.end}{Print.bold} (y/n) : {Print.end}").lower() == "y")
            if not continue_to_page: # When it's finished
                break
        else:
            finish = bool(input(f"{Print.bold}Finish with {Print.purple}props{Print.end}{Print.bold}? {Print.blue}(no){Print.end}{Print.bold} (y/n) : {Print.end}").lower() == "y")
            if finish:
                print()
                prop = {}
                letters = ["A", "B", "C", "D"]
                for letter in letters:
                    if letter == "A":
                        print(f"{Print.bold}Adding {Print.purple}prop A{Print.end}{Print.bold}...{Print.end}")
                        add_prop = True
                    else:
                        add_prop = bool(input(f"{Print.bold}Add {Print.purple}prop {letter}{Print.end}{Print.bold}? {Print.blue}(no){Print.end}{Print.bold} (y/n) : {Print.end}").lower() == "y")
                    if add_prop:
                        prop_text = input(f"{Print.bold}Prop Text : {Print.end}")
                        to_diapo = str(get_int(f"{Print.bold}To diapo? {Print.blue}(number){Print.end}{Print.bold} : {Print.end}"))
                        require_object = input(f"{Print.bold}Require object : {Print.end}")
                        if require_object == "":
                            require_object = None
                        require_money = get_int(f"{Print.bold}Require money? {Print.blue}(0){Print.end}{Print.bold} : {Print.end}")
                        print()
                        prop[letter] = {"propText": prop_text, "toDiapo": to_diapo, "requireObject": require_object, "requireMoney": require_money}
                    else:
                        prop[letter] = None
            else:
                prop = None
            pages.append({"pathToImg": path_of_img_diapo, "text": text_of_diapo, "prop": prop})
            if finish:
                break
    
    diapo[nb] = {"endOfDay": end_of_day, "endOfGame": end_of_game, "futureRoute": future_route, "money": money, "culture": culture, "fun": fun, "pictures": pictures, "object": object, "pages": pages}
    print(f"\n{'-'*20}{Print.bold}Finished {Print.purple}path {nb}{Print.end}{Print.bold}!{Print.end}{'-'*20}\n")

global diapo
diapo = open_file()
first = True
while True:
    linked_nbs, linked_nbs_with_refs = get_linked_nbs(diapo)

    isolated_nbs = get_isolated_nbs(diapo, linked_nbs)
    print(f"{Print.cyan}{Print.bold}Isolated nbs = {Print.end}{Print.red}{Print.bold}{isolated_nbs}{Print.end}")

    unexisting_refs = get_unexisting_refs(diapo, linked_nbs_with_refs)
    print(f"{Print.cyan}{Print.bold}Unexisting refs = {Print.end}{Print.red}{Print.bold}{unexisting_refs}{Print.end}")

    isolated_objects, blocking_objects = get_objects_problems(diapo)
    print(f"{Print.cyan}{Print.bold}Isolated objs = {Print.end}{Print.red}{Print.bold}{isolated_objects}{Print.end}")
    print(f"{Print.cyan}{Print.bold}Blocking objs = {Print.end}{Print.red}{Print.bold}{blocking_objects}{Print.end}")

    nb = new_path(diapo)
    if first:
        rep = input(f"{Print.bold}You're on the point to create {Print.purple}path {nb}{Print.end}{Print.bold}... Continue? {Print.blue}(yes){Print.end}{Print.bold} (y/n) : {Print.end}")
        if rep.lower() == "n":
            sys.exit()
    else:
        rep = input(f"{Print.bold}Continue with {Print.purple}path {nb}{Print.end}{Print.bold}? {Print.blue}(yes){Print.end}{Print.bold} (y/n) : {Print.end}")
        if rep.lower() == "n":
            sys.exit()
    first = False

    create_path(diapo, nb)
    save(diapo)
