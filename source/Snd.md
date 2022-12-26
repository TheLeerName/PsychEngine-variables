## PLAYING 
* **Description =** putdeschere
* **Static**
* **Type =** [ hxd.Stack<Snd>](https://api.haxeflixel.com/ hxd.Stack.html)
* **Default value =** new hxd.Stack()

## name
* **Description =** putdeschere
* **Type =** [ String](https://api.haxeflixel.com/ String.html)

## pan
* **Description =** putdeschere
* **Type =** [ Float= 0.0](https://api.haxeflixel.com/ Float= 0.0.html)

## volume(default,set) 
* **Description =** putdeschere
* **Type =** [ Float](https://api.haxeflixel.com/ Float.html)
* **Default value =** 1.0

## curPlay 
* **Description =** putdeschere
* **Type =** [ Null<Channel>](https://api.haxeflixel.com/ Null.html)
* **Default value =** null

## bus= otherBus
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/faxe/Faxe.html)

##  isDebug
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)

## sound 
* **Description =** putdeschere
* **Type =** [ Sound= null](https://api.haxeflixel.com/ Sound= null.html)

## onEnd
* **Description =** putdeschere
* **Type =** [ Null<Void->Void>= null](https://api.haxeflixel.com/ Null.html)

## otherBus
* **Description =** putdeschere
* **Static**
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** us()

## sfxBus
* **Description =** putdeschere
* **Static**
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** us()

## musicBus
* **Description =** putdeschere
* **Static**
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** us()

## v1 
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/ Int.html)
* **Default value =** 0

## v2 
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/ Int.html)
* **Default value =** 0

## v0p 
* **Description =** putdeschere
* **Type =** [ cpp.Pointer<Int>](https://api.haxeflixel.com/ cpp.Pointer.html)
* **Default value =** Cpp.addr(v0)

## v1p 
* **Description =** putdeschere
* **Type =** [ cpp.Pointer<Int>](https://api.haxeflixel.com/ cpp.Pointer.html)
* **Default value =** Cpp.addr(v1)

## v2p 
* **Description =** putdeschere
* **Type =** [ cpp.Pointer<Int>](https://api.haxeflixel.com/ cpp.Pointer.html)
* **Default value =** Cpp.addr(v2)

## str
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)

## res
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** em.getSoundRAM( v0p, v1p, v2p )

## res
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** Memory_GetStats( v0p, v1p, false )

## t
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** ume(0, fadeDuration)

## t
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** e(this, TVVVolume, v, easing, milliseconds)

## t
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** e(this, TVVPan, v, easing, milliseconds)

## snd 
* **Description =** putdeschere
* **Type =** [ cpp.RawPointer<faxe.Faxe.FmodSound>](https://api.haxeflixel.com/ cpp.RawPointer.html)
* **Default value =** cast  null

## sndR 
* **Description =** putdeschere
* **Type =** [  cpp.RawPointer<cpp.RawPointer<faxe.Faxe.FmodSound>>](https://api.haxeflixel.com/  cpp.RawPointer.html)
* **Default value =** cpp.RawPointer.addressOf(snd)

## fss 
* **Description =** putdeschere
* **Type =** [ FmodStudioSystemRef](https://api.haxeflixel.com/ FmodStudioSystemRef.html)
* **Default value =** faxe.FaxeRef.getStudioSystem()

## ev
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** vent( path)

## t1
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** er.stamp()

## fsys
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** getStudioSystem()

## fbank 
* **Description =** putdeschere
* **Type =** [ cpp.RawPointer < FmodStudioBank >](https://api.haxeflixel.com/ cpp.RawPointer .html)
* **Default value =** null

## result
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** dBankFile( cpp.ConstCharStar.fromString( filename ), FmodStudioLoadBank.FMOD_STUDIO_LOAD_BANK_NONBLOCKING, cpp.RawPointer.addressOf(fbank))

