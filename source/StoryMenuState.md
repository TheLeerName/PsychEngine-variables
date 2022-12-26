## weekCompleted
* **Description =** putdeschere
* **Static**
* **Type =** [Map<String, Bool>](https://api.haxeflixel.com/Map.html)
* **Default value =** new Map<String, Bool>()

## scoreText
* **Description =** putdeschere
* **Type =** [FlxText](https://api.haxeflixel.com/flixel/text/FlxText.html)

## lastDifficultyName
* **Description =** putdeschere
* **Static**
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ''

## curDifficulty
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 1

## txtWeekTitle
* **Description =** putdeschere
* **Type =** [FlxText](https://api.haxeflixel.com/flixel/text/FlxText.html)

## bgSprite
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)

## curWeek
* **Description =** putdeschere
* **Static**
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## txtTracklist
* **Description =** putdeschere
* **Type =** [FlxText](https://api.haxeflixel.com/flixel/text/FlxText.html)

## grpWeekText
* **Description =** putdeschere
* **Type =** [FlxTypedGroup<MenuItem>](https://api.haxeflixel.com/flixel/group/FlxGroup/FlxTypedGroup.html)

## grpWeekCharacters
* **Description =** putdeschere
* **Type =** [FlxTypedGroup<MenuCharacter>](https://api.haxeflixel.com/flixel/group/FlxGroup/FlxTypedGroup.html)

## grpLocks
* **Description =** putdeschere
* **Type =** [FlxTypedGroup<FlxSprite>](https://api.haxeflixel.com/flixel/group/FlxGroup/FlxTypedGroup.html)

## difficultySelectors
* **Description =** putdeschere
* **Type =** [FlxGroup](https://api.haxeflixel.com/flixel/group/FlxGroup/FlxTypedGroup.html)

## sprDifficulty
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)

## leftArrow
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)

## rightArrow
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)

## loadedWeeks
* **Description =** putdeschere
* **Type =** [Array<WeekData>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## rankText
* **Description =** putdeschere
* **Type =** [FlxText](https://api.haxeflixel.com/flixel/text/FlxText.html)
* **Default value =** new FlxText(0, 10)

## ui_tex
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** tSparrowAtlas('campaign_menu_UI_assets')

## bgYellow
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)
* **Default value =** new FlxSprite(0, 56).makeGraphic(FlxG.width, 386, 0xFFF9CF51)

## blackBarThingie
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)
* **Default value =** new FlxSprite().makeGraphic(FlxG.width, 56, FlxColor.BLACK)

## num
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## isLocked
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** weekIsLocked(WeekData.weeksList[i])

## weekThing
* **Description =** putdeschere
* **Type =** [MenuItem](https://api.haxeflixel.com/MenuItem.html)
* **Default value =** new MenuItem(0, bgSprite.y + 396, WeekData.weeksList[i])

## charArray
* **Description =** putdeschere
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** loadedWeeks[0].weekCharacters

## tracksSprite
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)
* **Default value =** new FlxSprite(FlxG.width * 0.07, bgSprite.y + 425).loadGraphic(Paths.image('Menu_Tracks'))

## downP
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** .UI_DOWN_P

## selectedWeek
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## stopspamming
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## leWeek
* **Description =** putdeschere
* **Type =** [Array<Dynamic>](https://api.haxeflixel.com/Array.html)
* **Default value =** loadedWeeks[curWeek].songs

## diffic
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** .getDifficultyFilePath(curDifficulty)

## diff
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** CoolUtil.difficulties[curDifficulty]

## newImage
* **Description =** putdeschere
* **Type =** [FlxGraphic](https://api.haxeflixel.com/flixel/graphics/FlxGraphic.html)
* **Default value =** Paths.image('menudifficulties/' + Paths.formatToSongPath(diff))

## intendedScore
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## leWeek
* **Description =** putdeschere
* **Type =** [WeekData](https://api.haxeflixel.com/WeekData.html)
* **Default value =** loadedWeeks[curWeek]

## leName
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** leWeek.storyName

## bullShit
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## unlocked
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** !weekIsLocked(leWeek.fileName)

## assetName
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** leWeek.weekBackground

## diffStr
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** WeekData.getCurrentWeek().difficulties

## i
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** diffs.length - 1

## stringThing
* **Description =** putdeschere
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

