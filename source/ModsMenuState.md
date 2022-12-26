## mods
* **Description =** putdeschere
* **Type =** [Array<ModMetadata>](https://api.haxeflixel.com/Array.html)
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

## noModsTxt
* **Description =** putdeschere
* **Type =** [FlxText](https://api.haxeflixel.com/flixel/text/FlxText.html)

## selector
* **Description =** putdeschere
* **Type =** [AttachedSprite](https://api.haxeflixel.com/AttachedSprite.html)

## descriptionTxt
* **Description =** putdeschere
* **Type =** [FlxText](https://api.haxeflixel.com/flixel/text/FlxText.html)

## needaReset
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)

## curSelected
* **Description =** putdeschere
* **Static**
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## defaultColor
* **Description =** putdeschere
* **Static**
* **Type =** [FlxColor](https://api.haxeflixel.com/flixel/util/FlxColor.html)
* **Default value =** 0xFF665AFF

## buttonDown
* **Description =** putdeschere
* **Type =** [FlxButton](https://api.haxeflixel.com/flixel/addons/ui/FlxButtonPlus.html)

## buttonTop
* **Description =** putdeschere
* **Type =** [FlxButton](https://api.haxeflixel.com/flixel/addons/ui/FlxButtonPlus.html)

## buttonDisableAll
* **Description =** putdeschere
* **Type =** [FlxButton](https://api.haxeflixel.com/flixel/addons/ui/FlxButtonPlus.html)

## buttonEnableAll
* **Description =** putdeschere
* **Type =** [FlxButton](https://api.haxeflixel.com/flixel/addons/ui/FlxButtonPlus.html)

## buttonUp
* **Description =** putdeschere
* **Type =** [FlxButton](https://api.haxeflixel.com/flixel/addons/ui/FlxButtonPlus.html)

## buttonToggle
* **Description =** putdeschere
* **Type =** [FlxButton](https://api.haxeflixel.com/flixel/addons/ui/FlxButtonPlus.html)

## buttonsArray
* **Description =** putdeschere
* **Type =** [Array<FlxButton>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## installButton
* **Description =** putdeschere
* **Type =** [FlxButton](https://api.haxeflixel.com/flixel/addons/ui/FlxButtonPlus.html)

## removeButton
* **Description =** putdeschere
* **Type =** [FlxButton](https://api.haxeflixel.com/flixel/addons/ui/FlxButtonPlus.html)

## modsList
* **Description =** putdeschere
* **Type =** [Array<Dynamic>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## visibleWhenNoMods
* **Description =** putdeschere
* **Type =** [Array<FlxBasic>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## visibleWhenHasMods
* **Description =** putdeschere
* **Type =** [Array<FlxBasic>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## path
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** 'modsList.txt'

## startX
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** 1120

## startX
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** 1100

## icon
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** Selected].icon

## alphabet
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** Selected].alphabet

## i
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## len
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** modsList.length

## scale
* **Description =** putdeschere
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** Math.min(840 / newMod.alphabet.width, 1)

## loadedIcon
* **Description =** putdeschere
* **Type =** [BitmapData](https://api.haxeflixel.com/openfl/display/BitmapData.html)
* **Default value =** null

## iconToUse
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** Paths.mods(values[0] + '/pack.png')

## newPos
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** curSelected + change

## lastMod
* **Description =** putdeschere
* **Type =** [ModMetadata](https://api.haxeflixel.com/ModMetadata.html)
* **Default value =** mods[curSelected]

## canExit
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## newColor
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** mods[curSelected].color

## antiY
* **Description =** putdeschere
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** flipY ? (selector.height - 1) : 0

## fullPath
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** null

## uncompressingFile
* **Description =** putdeschere
* **Type =** [Bytes](https://api.haxeflixel.com/Bytes.html)
* **Default value =** new Uncompress().run(File.getBytes(rawZip))

