# Pro Fiber app

Ionic framework ( http://ionicframework.com )

Install Ionic
```
npm install -g cordova ionic
```

Install 
```
bower install && npm install &&
ionic platform add android && ionic platform add ios
```


Run in browser
```
ionic serve
```



## Android Build

Before build Android make sure that AndroidManifest.xml contains:
```
android:windowSoftInputMode="adjustPan"
```

###Release build:
Build:
```
cordova build --release android
```

```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore profiler-android-release-key.keystore ./platforms/android/build/outputs/apk/android-release-unsigned.apk profilerkey
```
> alias: profilerkey

> pass: profilerpass


```
zipalign -v 4 ./platforms/android/build/outputs/apk/android-release-unsigned.apk '../Profiber Hair Profiler.apk'
```
or
```
~/android-sdk-macosx2/build-tools/22.0.1/zipalign -v 4 ./platforms/android/build/outputs/apk/android-release-unsigned.apk '../ProfiberHairProfiler.apk'
```

Full command:
```
cordova build --release android &&
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore profiler-android-release-key.keystore ./platforms/android/build/outputs/apk/android-release-unsigned.apk profilerkey &&
~/android-sdk-macosx2/build-tools/22.0.1/zipalign -v 4 ./platforms/android/build/outputs/apk/android-release-unsigned.apk ../ProfiberHairProfiler.apk
```
