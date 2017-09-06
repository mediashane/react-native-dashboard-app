import React from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { Icon, CheckBox, Button } from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

class Maintanence extends React.Component {
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
        title: 'Maintanence',
      };
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#ffffff' }}>
        <CheckBox
          title='Oil'
          checked={true}
        />
        <CheckBox
          title='Electrical'
          checked={true}
        />
        <CheckBox
          title='Air Tanks'
          checked={true}
        />
        <Text style={styles.text}>Desired date and time:</Text>
        <View style={styles.container}>
          <Calendar
            style={[styles.calendar, { width: 300}]}
            current={'2017-05-16'}
            minDate={'2017-05-10'}
            markingType={'interactive'}
            theme={{
              calendarBackground: 'white',
              textSectionTitleColor: 'grey',
              dayTextColor: 'grey',
              todayTextColor: 'grey',
              selectedDayTextColor: 'grey',
              monthTextColor: 'grey',
              selectedDayBackgroundColor: '#333248',
              arrowColor: 'grey'
            }}
            hideArrows={false}
          />
        </View>
        <Button
          title='SUBMIT'
          backgroundColor='#5499ce'
         />
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
    height: 325,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    marginLeft: 10,
  },
});

export { Maintanence };
