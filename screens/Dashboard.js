import React from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';

const size = 200;
const width = 15;
const cropDegree = 90;
const textOffset = width;
const textWidth = size - (textOffset*2);
const textHeight = size*(1 - cropDegree/360) - (textOffset*2);

class Dashboard extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0,
      },
        headerLeft: ( <Icon
          name="menu"
          iconStyle={{marginLeft: 15, marginBottom: 5, color: 'grey'}}
          size={30}
          onPress={() => navigate('DrawerOpen')}
        />
      ),
      title: 'Dashboard',
      };
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <AnimatedGaugeProgress
            size={200}
            width={15}
            fill={12}
            rotation={90}
            cropDegree={180}
            tintColor="#0200a5"
            backgroundColor="#b0c4de"
            strokeCap="square" >
            {(fill) => (
            <View style={styles.textView}>
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 25 }}>
                <Text style={styles.text}>Motor RPM</Text>
                <Text style={[styles.text, { color: '#0200a5' }]}>1200</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 20, marginLeft: 5 }}>
                  <Text>0</Text>
                </View>
                <View style={{ marginTop: 20, marginRight: 5 }}>
                  <Text>8000</Text>
                </View>
              </View>
            </View>
          )}
          </AnimatedGaugeProgress>
          <AnimatedGaugeProgress
            size={200}
            width={15}
            fill={75}
            rotation={90}
            cropDegree={180}
            tintColor="#0065a5"
            backgroundColor="#b0c4de"
            strokeCap="square" >
            {(fill) => (
            <View style={styles.textView}>
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 25 }}>
                <Text style={styles.text}>Amperes</Text>
                <Text style={[styles.text, { color: '#0065a5' }]}>120</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 20, marginLeft: 5 }}>
                  <Text>0</Text>
                </View>
                <View style={{ marginTop: 20, marginRight: 5 }}>
                  <Text>150</Text>
                </View>
              </View>
            </View>
          )}
          </AnimatedGaugeProgress>
          <AnimatedGaugeProgress
            size={200}
            width={15}
            fill={25}
            rotation={90}
            cropDegree={180}
            tintColor="#00a58c"
            backgroundColor="#b0c4de"
            strokeCap="square" >
            {(fill) => (
            <View style={styles.textView}>
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 25 }}>
                <Text style={styles.text}>Total Hours</Text>
                <Text style={[styles.text, { color: '#00a58c' }]}>50</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 20, marginLeft: 5 }}>
                  <Text>1</Text>
                </View>
                <View style={{ marginTop: 20, marginRight: 5 }}>
                  <Text>210</Text>
                </View>
              </View>
            </View>
          )}
          </AnimatedGaugeProgress>
          <AnimatedGaugeProgress
            size={200}
            width={15}
            fill={95}
            rotation={90}
            cropDegree={180}
            tintColor="#00a523"
            backgroundColor="#b0c4de"
            strokeCap="square" >
            {(fill) => (
            <View style={styles.textView}>
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 25 }}>
                <Text style={styles.text}>Volts</Text>
                <Text style={[styles.text, { color: '#00a523' }]}>290</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 20, marginLeft: 5 }}>
                  <Text>0</Text>
                </View>
                <View style={{ marginTop: 20, marginRight: 5 }}>
                  <Text>300</Text>
                </View>
              </View>
            </View>
          )}
          </AnimatedGaugeProgress>
          <AnimatedGaugeProgress
            size={200}
            width={15}
            fill={40}
            rotation={90}
            cropDegree={180}
            tintColor="#7ba500"
            backgroundColor="#b0c4de"
            strokeCap="square" >
            {(fill) => (
            <View style={styles.textView}>
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 25 }}>
                <Text style={styles.text}>Cycles</Text>
                <Text style={[styles.text, { color: '#7ba500' }]}>55</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 20, marginLeft: 5 }}>
                  <Text>50</Text>
                </View>
                <View style={{ marginTop: 20, marginRight: 5 }}>
                  <Text>70</Text>
                </View>
              </View>
            </View>
          )}
          </AnimatedGaugeProgress>
          <AnimatedGaugeProgress
            size={200}
            width={15}
            fill={20}
            rotation={90}
            cropDegree={180}
            tintColor="#a52900"
            backgroundColor="#b0c4de"
            strokeCap="square" >
            {(fill) => (
            <View style={styles.textView}>
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 25 }}>
                <Text style={styles.text}>Temperature</Text>
                <Text style={[styles.text, { color: '#a52900' }]}>130</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 20, marginLeft: 5 }}>
                  <Text>100</Text>
                </View>
                <View style={{ marginTop: 20, marginRight: 5 }}>
                  <Text>250</Text>
                </View>
              </View>
            </View>
          )}
          </AnimatedGaugeProgress>
          <AnimatedGaugeProgress
            size={200}
            width={15}
            fill={80}
            rotation={90}
            cropDegree={180}
            tintColor="#6e00a5"
            backgroundColor="#b0c4de"
            strokeCap="square" >
            {(fill) => (
            <View style={styles.textView}>
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 25 }}>
                <Text style={styles.text}>Oil Pressure</Text>
                <Text style={[styles.text, { color: '#6e00a5' }]}>60</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 20, marginLeft: 5 }}>
                  <Text>0</Text>
                </View>
                <View style={{ marginTop: 20, marginRight: 5 }}>
                  <Text>80</Text>
                </View>
              </View>
            </View>
          )}
          </AnimatedGaugeProgress>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  textView: {
  position: 'absolute',
  top: textOffset,
  left: textOffset,
  width: textWidth,
  height: textHeight,
  //alignItems: 'center',
  //justifyContent: 'center',
},
text: {
  fontSize: 20,
},
});

export { Dashboard };
