import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
const Countries = [
  {code: 'US', country: 'United States'},
  {code: 'CA', country: 'Canada'},
  {code: 'GB', country: 'United Kingdom'},
  {code: 'AU', country: 'Australia'},
  {code: 'FR', country: 'France'},
  {code: 'IN', country: 'India'},
  {code: 'C', country: 'China'},
  {code: 'JP', country: 'Japan'},
  {code: 'As', country: 'Austria'},
  {code: 'P', country: 'Pakistan'},
  {code: 'RS', country: 'Russia'},
  {code: 'UE', country: 'UAE'},
  {code: 'KO', country: 'Korea'},
  {code: 'AF', country: 'Afghanistan'},
  {code: 'IT', country: 'Italy'},
  {code: 'TW', country: 'Taiwan'},
  {code: 'TK', country: 'Turkey'},
  {code: 'TH', country: 'Thailand'},
  {code: 'CH', country: 'Chicago'},
  {code: 'IR', country: 'Iraq'},
];
const Dropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState('Select Country'); //for country selection
  const [isClicked, setIsClicked] = useState(false); //if clicked then show
  const [data, setdata] = useState(Countries); //all the countries data
  const searchRef = useRef(); //using useRef will help to search box clear after selection
  const onSearch = txt => {
    if (txt !== '') {
      let tempData = data.filter(item => {
        return item.country.toLowerCase().indexOf(txt.toLowerCase()) > -1; //condition has passed where data will be filtered according to lowercase and index of
      }); //country data
      setdata(tempData); //if space will not be present then the tempdata will be added in setdata and if space will be present then all the countries data will be present in setdata
    } else {
      setdata(Countries);
    }
  };
  return (
    <View style={styles.Container}>
      <Text style={styles.heading}> Drop down </Text>
      <TouchableOpacity
        style={styles.DropdownSelector}
        onPress={() => {
          setIsClicked(!isClicked); //its a function when icon it is not clicked then it will  not show any country data when its clicked it will show country data
        }}>
        <Text style={styles.selected}>{selectedCountry}</Text>
        {isClicked ? (
          <Image
            source={require('./assets/dropdown.png')}
            style={styles.icon2}
          />
        ) : (
          <Image source={require('./assets/dropup.png')} style={styles.icon1} />
        )}
      </TouchableOpacity>
      {isClicked ? (
        <View style={styles.dropdownArea}>
          <TextInput
            ref={searchRef}
            placeholder="Search"
            style={styles.SearchInput}
            placeholderTextColor="gray"
            onChangeText={txt => {
              onSearch(txt);
            }}
            color="gray"
          />
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => {
                    setSelectedCountry(item.country);
                    onSearch('');
                    setIsClicked(false);
                    searchRef.current.clear();
                  }}>
                  <Text style={styles.Countrytext}>{item.country} </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    Flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  heading: {
    fontSize: 30,
    fontWeight: '500',
    MarginTop: 10,
    alignSelf: 'center',
    color: '#000',
  },
  DropdownSelector: {
    width: '90%',
    height: 50,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'gray',
    alignSelf: 'center',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingleft: 55,
    paddingRight: 15,
    right: 10,
  },
  icon1: {
    height: 22,
    width: 22,
    paddingleft: 10,
  },
  icon2: {
    height: 35,
    width: 40,
    paddingleft: 10,
  },
  dropdownArea: {
    height: 300,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  SearchInput: {
    width: '90%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    fontSize: 20,
    paddingLeft: 15,
  },
  countryItem: {
    width: '85%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Countrytext: {
    fontSize: 22,
    color: 'gray',
    fontWeight: '300',
  },
  selected: {
    fontSize: 20,
    fontWeight: '400',
    color: 'gray',
    alignSelf: 'center',
    paddingLeft: 10,
  },
});
export default Dropdown;
