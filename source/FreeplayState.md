## songs
* **Description =** putdeschere
* **Type =** [Array<SongMetadata>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## selector
* **Description =** putdeschere
* **Type =** [FlxText](https://api.haxeflixel.com/flixel/text/FlxText.html)

## curSelected
* **Description =** putdeschere
* **Static**
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## curDifficulty
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** -1

## lastDifficultyName
* **Description =** putdeschere
* **Static**
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ''

## scoreBG
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)

## scoreText
* **Description =** putdeschere
* **Type =** [FlxText](https://api.haxeflixel.com/flixel/text/FlxText.html)

## diffText
* **Description =** putdeschere
* **Type =** [FlxText](https://api.haxeflixel.com/flixel/text/FlxText.html)

## lerpScore
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## lerpRating
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## intendedScore
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## intendedRating
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## grpSongs
* **Description =** putdeschere
* **Type =** [FlxTypedGroup<Alphabet>](https://api.haxeflixel.com/flixel/group/FlxGroup/FlxTypedGroup.html)

## curPlaying
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## iconArray
* **Description =** putdeschere
* **Type =** [Array<HealthIcon>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## bg
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)

## intendedColor
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)

## colorTween
* **Description =** putdeschere
* **Type =** [FlxTween](https://api.haxeflixel.com/flixel/tweens/FlxTween.html)

## leWeek
* **Description =** putdeschere
* **Type =** [WeekData](https://api.haxeflixel.com/WeekData.html)
* **Default value =** WeekData.weeksLoaded.get(WeekData.weeksList[i])

## leSongs
* **Description =** putdeschere
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## leChars
* **Description =** putdeschere
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## initSonglist
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** .coolTextFile(Paths.txt('freeplaySonglist'))

## maxWidth
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)

## icon
* **Description =** putdeschere
* **Type =** [HealthIcon](https://api.haxeflixel.com/HealthIcon.html)
* **Default value =** new HealthIcon(songs[i].songCharacter)

## swag
* **Description =** putdeschere
* **Type =** [Alphabet](https://api.haxeflixel.com/Alphabet.html)
* **Default value =** new Alphabet(1, 0, "swag")

## texFel
* **Description =** putdeschere
* **Type =** [TextField](https://api.haxeflixel.com/flash/text/TextField.html)
* **Default value =** new TextField()

## leText
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** "Press SPACE to listen to the Song / Press CTRL to open the Gameplay Changers Menu / Press RESET to Reset your Score and Accuracy."

## size
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** 16

## leText
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** "Press CTRL to open the Gameplay Changers Menu / Press RESET to Reset your Score and Accuracy."

## size
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** 18

## text
* **Description =** putdeschere
* **Type =** [FlxText](https://api.haxeflixel.com/flixel/text/FlxText.html)
* **Default value =** new FlxText(textBG.x, textBG.y + 4, FlxG.width, leText, size)

## num
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## vocals
* **Description =** putdeschere
* **Static**
* **Type =** [FlxSound](https://api.haxeflixel.com/flixel/system/FlxSound.html)
* **Default value =** null

## holdTime
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## ratingSplit
* **Description =** putdeschere
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** Std.string(Highscore.floorDecimal(lerpRating * 100, 2)).split('.')

## upP
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** .UI_UP_P

## downP
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** .UI_DOWN_P

## accepted
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** .ACCEPT

## space
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** s.justPressed.SPACE

## ctrl
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** s.justPressed.CONTROL

## shiftMult
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 1

## checkNewHold
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** Math.floor((holdTime - 0.5) * 10)

## poop
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** Highscore.formatSong(songs[curSelected].songName.toLowerCase(), curDifficulty)

## songLowercase
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** Paths.formatToSongPath(songs[curSelected].songName)

## poop
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** Highscore.formatSong(songLowercase, curDifficulty)

## newColor
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** songs[curSelected].color

## bullShit
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## diffStr
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** WeekData.getCurrentWeek().difficulties

## i
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** diffs.length - 1

