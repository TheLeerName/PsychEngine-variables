## downScroll
* **Description =** If true, notes go Down instead of Up, simple enough.
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## middleScroll
* **Description =** If true, your notes get centered.
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## opponentStrums
* **Description =** If false, opponent notes get hidden.
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## showFPS
* **Description =** If false, hides FPS Counter.
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## flashing
* **Description =** Enter false if you're sensitive to flashing lights!
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## globalAntialiasing
* **Description =** If false, disables anti-aliasing, increases performance\nat the cost of sharper visuals.
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## noteSplashes
* **Description =** If false, hitting "Sick!" notes won't show particles.
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## lowQuality
* **Description =** If true, disables some background details, decreases loading times and improves performance.
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## shaders
* **Description =** If false, disables shaders. It's used for some visual effects, and also CPU intensive for weaker PCs.
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## framerate
* **Description =** Pretty self explanatory, isn't it?
* **Static**
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** 60

## cursing
* **Description =** Not used variable
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## violence
* **Description =** Not used variable
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## camZooms
* **Description =** If false, the camera won't zoom in on a beat hit.
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## hideHud
* **Description =** If true, hides most HUD elements.
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## noteOffset
* **Description =** Note offset in milliseconds
* **Static**
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## arrowHSV
* **Description =** Array of HSV of notes
* **Static**
* **Type =** [Array<Array<Int>>](https://api.haxeflixel.com/Array.html)
* **Default value =** [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]

## ghostTapping
* **Description =** If true, you won't get misses from pressing keys\nwhile there are no notes able to be hit.
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## timeBarType
* **Description =** What should the Time Bar display?
* **Static**
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** 'Time Left'

## scoreZoom
* **Description =** If false, disables the Score text zooming\neverytime you hit a note.
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## noReset
* **Description =** If true, pressing Reset won't do anything.
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## healthBarAlpha
* **Description =** How much transparent should the health bar and icons be.
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 1

## controllerMode
* **Description =** Enter true if you want to play with a controller instead of using your Keyboard.
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## hitsoundVolume
* **Description =** Funny notes does "Tick!" when you hit them.
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## pauseMusic
* **Description =** What song do you prefer for the Pause Screen?
* **Static**
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** 'Tea Time'

## checkForUpdates
* **Description =** On Release builds, turn this on to check for updates when you start the game.
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## comboStacking
* **Description =** If false, Ratings and Combo won't stack, saving on System Memory and making them easier to read
* **Static**
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)

## gameplaySettings
* **Description =** Map for gameplay settings in freeplay
* **Static**
* **Type =** [Map<String, Dynamic>](https://api.haxeflixel.com/Map.html)
* **Default value =** ['scrollspeed' => 1.0,'scrolltype' => 'multiplicative', 'songspeed' => 1.0,'healthgain' => 1.0,'healthloss' => 1.0,'instakill' => false,'practice' => false,'botplay' => false,'opponentplay' => false]

## comboOffset
* **Description =** Array for combo offsets
* **Static**
* **Type =** [Array<Int>](https://api.haxeflixel.com/Array.html)
* **Default value =** [0, 0, 0, 0]

## ratingOffset
* **Description =** Changes how late/early you have to hit for a "Sick!" Higher values mean you have to hit later.
* **Static**
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## sickWindow
* **Description =** Changes the amount of time you have for hitting a "Sick!" in milliseconds.
* **Static**
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** 45

## goodWindow
* **Description =** Changes the amount of time you have for hitting a "Good" in milliseconds.
* **Static**
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** 90

## badWindow
* **Description =** Changes the amount of time you have for hitting a "Bad" in milliseconds.
* **Static**
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** 135

## safeFrames
* **Description =** Changes how many frames you have for hitting a note earlier or late.
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 10

## keyBinds
* **Description =** Map of keybinds: name_keybind:String => array_keys:Array<FlxKey>
* **Static**
* **Type =** [Map<String, Array<FlxKey>>](https://api.haxeflixel.com/Map.html)
* **Default value =** ['note_left'=> [A, LEFT],'note_down'=> [S, DOWN],'note_up'=> [W, UP],'note_right'=> [D, RIGHT],'ui_left'=> [A, LEFT],'ui_down'=> [S, DOWN],'ui_up'=> [W, UP],'ui_right'=> [D, RIGHT],'accept'=> [SPACE, ENTER],'back'=> [BACKSPACE, ESCAPE],'pause'=> [ENTER, ESCAPE],'reset'=> [R, NONE],'volume_mute'=> [ZERO, NONE],'volume_up'=> [NUMPADPLUS, PLUS],'volume_down'=> [NUMPADMINUS, MINUS],'debug_1'=> [SEVEN, NONE],'debug_2'=> [EIGHT, NONE]]

## defaultKeys
* **Description =** Map of defaultkeybinds: name_keybind:String => array_keys:Array<FlxKey>
* **Static**
* **Type =** [Map<String, Array<FlxKey>>](https://api.haxeflixel.com/Map.html)
* **Default value =** null

