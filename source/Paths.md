## SOUND_EXT
* **Description =** putdeschere
* **Static**
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** "mp3" #else "ogg" inline public static var VIDEO_EXT = "mp4"

## ignoreModFolders
* **Description =** putdeschere
* **Static**
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** ['characters','custom_events','custom_notetypes','data','songs','music','sounds','shaders','videos','images','stages','weeks','fonts','scripts','achievements']

## voices
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** und('songs', songKey)

## inst
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** und('songs', songKey)

## xmlExists
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## txtExists
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## path
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** hars.split(path.replace(' ', '-')).join("-")

## newGraphic
* **Description =** putdeschere
* **Type =** [FlxGraphic](https://api.haxeflixel.com/flixel/graphics/FlxGraphic.html)
* **Default value =** FlxGraphic.fromBitmapData(newBitmap, false, modKey)

## path
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** 'modsList.txt'

## path
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** ds(folder + '/pack.json')

## global
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** Reflect.getProperty(stuff, "runsGlobally")

## modsFolder
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** mods()

