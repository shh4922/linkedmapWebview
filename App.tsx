import React from 'react';
import {SafeAreaView, StyleSheet, Dimensions, useColorScheme} from 'react-native';
import WebView from 'react-native-webview';
import {Colors} from "react-native/Libraries/NewAppScreen";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <SafeAreaView style={styles.container}>
        <WebView
            style={styles.webview}
            originWhitelist={['*']}
            source={{ uri: 'http://192.168.0.10:5173/' }}
            onLoad={() => console.log('WebView loaded successfully')}
            javaScriptEnabled={true}  // JavaScript 활성화
            domStorageEnabled={true}  // DOM Storage 활성화
            onLoadStart={() => console.log('WebView loading started')}
            onLoadEnd={() => console.log('WebView loading finished')}
            onError={() => console.error('WebView failed to load')}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});

export default App;
