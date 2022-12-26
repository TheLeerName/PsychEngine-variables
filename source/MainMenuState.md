## psychEngineVersion
* **Description =** putdeschere
* **Static**
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** '0.6.2'

## curSelected
* **Description =** putdeschere
* **Static**
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## menuItems
* **Description =** putdeschere
* **Type =** [FlxTypedGroup<FlxSprite>](https://api.haxeflixel.com/flixel/group/FlxGroup/FlxTypedGroup.html)

## camGame
* **Description =** putdeschere
* **Type =** [FlxCamera](https://api.haxeflixel.com/flixel/FlxCamera.html)

## camAchievement
* **Description =** putdeschere
* **Type =** [FlxCamera](https://api.haxeflixel.com/flixel/FlxCamera.html)

## optionShit
* **Description =** putdeschere
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** ['story_mode','freeplay',#if MODS_ALLOWED 'mods', #if ACHIEVEMENTS_ALLOWED 'awards', 'credits',#if !switch 'donate', 'options']

## magenta
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)

## camFollow
* **Description =** putdeschere
* **Type =** [FlxObject](https://api.haxeflixel.com/flixel/FlxObject.html)

## camFollowPos
* **Description =** putdeschere
* **Type =** [FlxObject](https://api.haxeflixel.com/flixel/FlxObject.html)

## debugKeys
* **Description =** putdeschere
* **Type =** [Array<FlxKey>](https://api.haxeflixel.com/Array.html)

## yScroll
* **Description =** putdeschere
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** Math.max(0.25 - (0.05 * (optionShit.length - 4)), 0.1)

## bg
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)
* **Default value =** new FlxSprite(-80).loadGraphic(Paths.image('menuBG'))

## scale
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Float.html)
* **Default value =** 1

## menuItem
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)
* **Default value =** new FlxSprite(0, (i * 140)  + offset)

## scr
* **Description =** putdeschere
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** (optionShit.length - 4) * 0.135

## versionShit
* **Description =** putdeschere
* **Type =** [FlxText](https://api.haxeflixel.com/flixel/text/FlxText.html)
* **Default value =** new FlxText(12, FlxG.height - 44, 0, "Psych Engine v" + psychEngineVersion, 12)

## versionShit
* **Description =** putdeschere
* **Type =** [FlxText](https://api.haxeflixel.com/flixel/text/FlxText.html)
* **Default value =** new FlxText(12, FlxG.height - 24, 0, "Friday Night Funkin' v" + Application.current.meta.get('version'), 12)

## leDate
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** ()

## add
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

