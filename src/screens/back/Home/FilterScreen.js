import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../../../shared/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
const FilterScreen = () => {
  const navigation = useNavigation();
  const topics = [
    'CATEGORIES',
    'BRANDS',
    'GENDER',
    'PRICERANGE',
    'BYSTOCK',
    'BYDISCOUNT',
  ];
  const dataMap = {
    CATEGORIES: [
      'All',
      'Shoes',
      'Accessories',
      'Underwear',
      'Bags',
      'Clothing',
      'Bracelet',
      'Messenger Bags',
      'Luggage and Travel',
      'Jewelry',
      'Rings',
      'Clutch Bags',
      'Handbags',
      'Shoulder Bags',
      'Sunglasses For Women',
      'Sunglasses For Men',
      'Watches For Women',
      'Watches',
      'Watches For Men',
      'Unisex Sunglasses',
      'Tote Bags',
      'Crossbody Bags',
      'Evening Bags',
    ],
    BRANDS: [
      'All',
      'Coach',
      'Geographical Norway',
      'Woolrich',
      'Gucci',
      'Laura Biagiotti',
      'Calvin Klein',
      'Carrera',
      'Fontana 2.0',
      'Fila',
      'Champion',
      'Carrera Jeans',
      'Vans',
      'Swarovski',
      'Pinko',
      'LumberJack',
      'CR7 Cristiano Ronaldo',
      'Armani Jeans',
      'Hackett',
      'Borbonese',
      'Karl Lagerfeld',
      'Tory Burch',
      'Lamborghini',
      'Pepe Jeans',
    ],
    GENDER: ['All', 'Men', 'Women'],
    PRICERANGE: [
      'AED 0 - AED 100',
      'AED 100 - AED 200',
      'AED 200 - AED 300',
      'AED 300 - AED 400',
      'AED 400 - AED 500',
      'AED 500 - AED 600',
    ],
    BYSTOCK: ['All', 'In Stock', 'Out Of Stock'],
    BYDISCOUNT: [
      'All',
      '10%- 20%',
      '20%- 30%',
      '30%- 40%',
      '40%- 50%',
      '50%- above',
    ],
    // Add mappings for other topics if needed
  };
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [selectedData, setSelectedData] = useState(dataMap[topics[0]]);
  const [searchText, setSearchText] = useState('');

  const handleTopicClick = topic => {
    setSelectedTopic(topic);
    setSelectedData(dataMap[topic]);
  };
  const handleSearch = text => {
    setSearchText(text);
    const filteredData = dataMap[selectedTopic].filter(item =>
      item.toLowerCase().includes(text.toLowerCase()),
    );
    setSelectedData(filteredData);
  };
  const goback = () => {
    navigation.goBack();
  };
  return (
    <View style={GlobalStyles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Pressable onPress={goback}>
          <AntDesign name="left" size={20} color="black" />
        </Pressable>
        <Text style={{color: 'black'}}>Refine</Text>
        <Text style={{color: 'grey'}}>Clear</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.sidebar}>
          <View style={styles.topicContainer}>
            {topics.map(topic => (
              <TouchableOpacity
                key={topic}
                style={[
                  styles.topicButton,
                  selectedTopic === topic && styles.selectedTopicButton,
                ]}
                onPress={() => handleTopicClick(topic)}>
                <Text
                  style={[
                    styles.topicText,
                    selectedTopic === topic && styles.selectedTopicText,
                  ]}>
                  {topic}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {selectedTopic && (
          <View style={styles.content}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchText}
              onChangeText={handleSearch}
            />
            <ScrollView style={{flex: 1}}>
              {selectedData?.map(item => (
                <Text style={styles.contentText} key={item}>
                  {item}
                </Text>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    flex: 1,
    backgroundColor: 'white',
    borderRightWidth: 0.5,
    borderRightColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  topicContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'flex-start',
  },
  topicButton: {
    marginBottom: 10,
    marginRight: 10,
    paddingVertical: 2,
    // paddingHorizontal: 15,
    borderRadius: 5,
    // backgroundColor: '#e9e9e9',
  },
  selectedTopicButton: {
    backgroundColor: '#d2d2d2',
    width: '100%',
  },
  topicText: {
    fontSize: 11,
    color: 'black',
    paddingLeft: 5,
  },
  selectedTopicText: {
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  searchInput: {
    // alignSelf:'center',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 35,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    backgroundColor: 'lightgrey',
  },
  content: {
    flex: 3,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  contentText: {
    fontSize: 14,
    color: 'grey',
    paddingVertical: 5,
    // paddingHorizontal: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
    marginHorizontal: 10,
  },
});

export default FilterScreen;
