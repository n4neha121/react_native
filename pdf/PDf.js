import React from 'react';
import {StyleSheet, Dimensions, View, Button} from 'react-native';
import Pdf from 'react-native-pdf';

export default class PDFExample extends React.Component {
  render() {
    const source = {
      uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
      cache: true,
    };
    //const source = require('./test.pdf');  // ios only
    //const source = {uri:'bundle-assets://test.pdf' };
    //const source = {uri:'file:///sdcard/test.pdf'};
    //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
    //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
    //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

    return (
      <View style={styles.container}>
        <Pdf
          source={source}
          trustAllCerts={false}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          enablePaging={true}
          enableAntialiasing={false}
          horizontal
          ref={pdf => {
            this.pdf = pdf;
          }}
          style={styles.pdf}
        />
        <View style={{position: 'absolute'}}>
          <Button title=" Next" onPress={() => this.pdf.setPage(8)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    //resizeMode: 'cover',
    height: Dimensions.get('window').height,
  },
});
/*import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Camera from './pdf/PDf'; //can also add it by only adding file name
function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Camera />
    </GestureHandlerRootView>
  );
}
export default App;
*/
