## character
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)

## hasConfirmAnimation
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## DEFAULT_CHARACTER
* **Description =** putdeschere
* **Static**
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** 'bf'

## dontPlayAnim
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## rawJson
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)

## path
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** Paths.modFolders(characterPath)

## path
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** Paths.getPreloadPath(characterPath)

## charFile
* **Description =** putdeschere
* **Type =** [MenuCharacterFile](https://api.haxeflixel.com/MenuCharacterFile.html)
* **Default value =** cast Json.parse(rawJson)

## confirmAnim
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** charFile.confirm_anim

