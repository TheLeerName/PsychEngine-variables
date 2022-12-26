## regex
* **Description =** putdeschere
* **Type =** [EReg](https://api.haxeflixel.com/EReg.html)
* **Default value =** new EReg("[ \t]*((\r\n)|\r|\n)[ \t]*", "g")

## csvData
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** gUtil.imageToCSV(Paths.file('data/' + songName + '/' + songName + '_section' + section + '.png'))

## lines
* **Description =** putdeschere
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** regex.split(csvData)

## rows
* **Description =** putdeschere
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** lines.filter(function(line) return line != "")

## heightInTiles
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** gth

## widthInTiles
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)

## row
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## dopeArray
* **Description =** putdeschere
* **Type =** [Array<Int>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## columns
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** g.split(",")

## pushedInColumn
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## curTile
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** eInt(columnString)

