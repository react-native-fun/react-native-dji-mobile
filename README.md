
# react-native-dji

## Getting started

`$ npm install react-native-dji --save`

### Mostly automatic installation

`$ react-native link react-native-dji`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-dji` and add `ReactNativeDji.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libReactNativeDji.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.ReactNativeDjiPackage;` to the imports at the top of the file
  - Add `new ReactNativeDjiPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-dji'
  	project(':react-native-dji').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-dji/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-dji')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `ReactNativeDji.sln` in `node_modules/react-native-dji/windows/ReactNativeDji.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using React.Native.Dji.ReactNativeDji;` to the usings at the top of the file
  - Add `new ReactNativeDjiPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import ReactNativeDji from 'react-native-dji';

// TODO: What to do with the module?
ReactNativeDji;
```
  