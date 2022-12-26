## options
* **Description =** putdeschere
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## grpOptions
* **Description =** putdeschere
* **Type =** [FlxTypedGroup<Alphabet>](https://api.haxeflixel.com/flixel/group/FlxGroup/FlxTypedGroup.html)

## curSelected
* **Description =** putdeschere
* **Static**
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## achievementArray
* **Description =** putdeschere
* **Type =** [Array<AttachedAchievement>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## achievementIndex
* **Description =** putdeschere
* **Type =** [Array<Int>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## descText
* **Description =** putdeschere
* **Type =** [FlxText](https://api.haxeflixel.com/flixel/text/FlxText.html)

## menuBG
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)
* **Default value =** new FlxSprite().loadGraphic(Paths.image('menuBGBlue'))

## optionText
* **Description =** putdeschere
* **Type =** [Alphabet](https://api.haxeflixel.com/Alphabet.html)
* **Default value =** new Alphabet(280, 300, Achievements.isAchievementUnlocked(achieveName) ? Achievements.achievementsStuff[achievementIndex[i]][0] : '?', false)

## icon
* **Description =** putdeschere
* **Type =** [AttachedAchievement](https://api.haxeflixel.com/AttachedAchievement.html)
* **Default value =** new AttachedAchievement(optionText.x - 105, optionText.y, achieveName)

## bullShit
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

