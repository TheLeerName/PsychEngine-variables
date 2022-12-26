## curOption
* **Description =** putdeschere
* **Type =** [GameplayOption](https://api.haxeflixel.com/GameplayOption.html)
* **Default value =** null

## curSelected
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## optionsArray
* **Description =** putdeschere
* **Type =** [Array<Dynamic>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## grpOptions
* **Description =** putdeschere
* **Type =** [FlxTypedGroup<Alphabet>](https://api.haxeflixel.com/flixel/group/FlxGroup/FlxTypedGroup.html)

## checkboxGroup
* **Description =** putdeschere
* **Type =** [FlxTypedGroup<CheckboxThingie>](https://api.haxeflixel.com/flixel/group/FlxGroup/FlxTypedGroup.html)

## grpTexts
* **Description =** putdeschere
* **Type =** [FlxTypedGroup<AttachedText>](https://api.haxeflixel.com/flixel/group/FlxGroup/FlxTypedGroup.html)

## option
* **Description =** putdeschere
* **Type =** [GameplayOption](https://api.haxeflixel.com/GameplayOption.html)
* **Default value =** new GameplayOption('Scroll Speed', 'scrollspeed', 'float', 1)

## option
* **Description =** putdeschere
* **Type =** [GameplayOption](https://api.haxeflixel.com/GameplayOption.html)
* **Default value =** new GameplayOption('Playback Rate', 'songspeed', 'float', 1)

## option
* **Description =** putdeschere
* **Type =** [GameplayOption](https://api.haxeflixel.com/GameplayOption.html)
* **Default value =** new GameplayOption('Health Gain Multiplier', 'healthgain', 'float', 1)

## option
* **Description =** putdeschere
* **Type =** [GameplayOption](https://api.haxeflixel.com/GameplayOption.html)
* **Default value =** new GameplayOption('Health Loss Multiplier', 'healthloss', 'float', 1)

## option
* **Description =** putdeschere
* **Type =** [GameplayOption](https://api.haxeflixel.com/GameplayOption.html)
* **Default value =** new GameplayOption('Instakill on Miss', 'instakill', 'bool', false)

## option
* **Description =** putdeschere
* **Type =** [GameplayOption](https://api.haxeflixel.com/GameplayOption.html)
* **Default value =** new GameplayOption('Practice Mode', 'practice', 'bool', false)

## option
* **Description =** putdeschere
* **Type =** [GameplayOption](https://api.haxeflixel.com/GameplayOption.html)
* **Default value =** new GameplayOption('Botplay', 'botplay', 'bool', false)

## bg
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)
* **Default value =** new FlxSprite().makeGraphic(FlxG.width, FlxG.height, FlxColor.BLACK)

## checkbox
* **Description =** putdeschere
* **Type =** [CheckboxThingie](https://api.haxeflixel.com/CheckboxThingie.html)
* **Default value =** new CheckboxThingie(optionText.x - 105, optionText.y, optionsArray[i].getValue() == true)

## valueText
* **Description =** putdeschere
* **Type =** [AttachedText](https://api.haxeflixel.com/AttachedText.html)
* **Default value =** new AttachedText(Std.string(optionsArray[i].getValue()), optionText.width, -72, true, 0.8)

## holdTime
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## holdValue
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## val
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** option.getValue()

## def
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** option.defaultValue

## bullShit
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

