import * as React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, Linking,TouchableOpacity, FlatList, AsyncStorage, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Hyperlink from 'react-native-hyperlink';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';


function Feed() {
  let Image1 = { uri: 'https://bloomscape.com/wp-content/uploads/2021/01/Hilton-Carter_1900x1068-1024x576.jpg?ver=381773' };
    let Image2 = { uri: 'https://bloomscape.com/wp-content/uploads/2020/11/bloomscape_jacks-classicote4-1280x1536.jpg?ver=337896' };
    let Image3 = { uri: 'https://bloomscape.com/wp-content/uploads/2021/01/bloomscape-pruning-scissors-wide3-landscape-1024x791.jpg?ver=378762' };
    let Image4 = { uri: 'https://bloomscape.com/wp-content/uploads/2020/09/bloomscape_spicy-collection_cilantro-1280x1536.jpg?ver=298411' };
    let Image5 = { uri: 'https://bloomscape.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-09-at-10.38.42-AM.png?ver=310542' };
    let Image6 = { uri: 'https://bloomscape.com/wp-content/uploads/2020/09/bloomscape_plantperson_savory-collection-1280x1536.jpg?ver=298394' };
    let Image7 = { uri: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_blog_propagate-trailing-plants-10-1024x1024.jpg?ver=267764' };
    let Image8 = { uri: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_product_watering-can_small-3-1259x1536.jpg?ver=265535' };
    let Image9 = { uri: 'https://bloomscape.com/wp-content/uploads/2020/09/bloomscape_pruning-scissors_1-1-1280x1536.jpg?ver=302479' };
    let Image10 = { uri: 'https://bloomscape.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-23-at-10.41.54-AM.png?ver=233302' };
    let Image11 = { uri: 'https://bloomscape.com/wp-content/uploads/2020/01/201910_Bloomscape_K__0138-jungle-1024x683.jpg?ver=112035' };
    let Image12 = { uri: 'https://bloomscape.com/wp-content/uploads/2020/05/bloomscape_indoor-outdoor_4-1024x682.jpg?ver=217611' };

  return (
<ScrollView>
        <View style={styles.container}>
        
          <Image source={Image1} style={{ height: 200, width: 'auto', margin: 5 }} />
          <Text style={styles.subtitle}>PLANT CARE</Text>
          <Hyperlink linkDefault linkStyle={{ color: '#9BC397', fontSize: 17 }}
            linkText={url => url === 'https://bloomscape.com/green-living/how-plantfluencer-hilton-carter-made-plant-styling-a-job/' ? 'The Plant Care Chronicles: For Hilton Carter, Plant Styling Is A Career' : url}
          >
            <Text style={styles.text}>https://bloomscape.com/green-living/how-plantfluencer-hilton-carter-made-plant-styling-a-job/</Text>
          </Hyperlink>
          <Text style={styles.description}>Many think that houseplants are immune to common garden pests and diseases like fungus gnats, mites, powdery mildew, and black spot. But these diseases can spread among indoor plants just as easily, especially if you’re regularly adding new botanicals into your space.</Text>
          <Text style={styles.button} onPress={() => Linking.openURL('https://bloomscape.com/green-living/how-plantfluencer-hilton-carter-made-plant-styling-a-job/')}>READ MORE</Text>


          <Image source={Image2} style={{ height: 200, width: 'auto', margin: 5 }} />
          <Text style={styles.subtitle}>GREEN LIVING</Text>
          <Hyperlink linkDefault linkStyle={{ color: '#9BC397', fontSize: 17 }}
            linkText={url => url === 'https://bloomscape.com/plant-care/6-indoor-gardening-supplies-for-healthy-plants/' ? '7 Indoor Gardening Supplies To Keep Plants Lush & Healthy' : url}
          >
            <Text style={styles.text}>https://bloomscape.com/plant-care/6-indoor-gardening-supplies-for-healthy-plants/</Text>
          </Hyperlink>
          <Text style={styles.description}>Welcome to The Plant Care Chronicles — a monthly series dedicated to breaking down individual indoor plant care routines and exploring plant care as a form of self-care.</Text>
          <Text style={styles.button} onPress={() => Linking.openURL('https://bloomscape.com/plant-care/6-indoor-gardening-supplies-for-healthy-plants/')}>READ MORE</Text>

          <Image source={Image3} style={{ height: 200, width: 'auto', margin: 5 }} />
          <Text style={styles.subtitle}>GREEN LIVING</Text>
          <Hyperlink linkDefault linkStyle={{ color: '#9BC397', fontSize: 17 }}
            linkText={url => url === 'https://bloomscape.com/plant-care/new-japanese-gardening-tools/' ? 'Our New Japanese Gardening Tools Were Made for Plant & Design Lovers' : url}
          >
            <Text style={styles.text}>https://bloomscape.com/plant-care/new-japanese-gardening-tools/</Text>
          </Hyperlink>
          <Text style={styles.description}>For true plant lovers, gardening isn’t just a hobby — it’s an art form. From planting, pruning, and watering to arranging and styling both indoor and outdoor plants, gardening requires intuition, mindfulness, and keen attention to detail.</Text>
          <Text style={styles.button} onPress={() => Linking.openURL('https://bloomscape.com/plant-care/new-japanese-gardening-tools/')}>READ MORE</Text>

          <Image source={Image4} style={{ height: 200, width: 'auto', margin: 5 }} />
          <Text style={styles.subtitle}>PLANT CARE</Text>
          <Hyperlink linkDefault linkStyle={{ color: '#9BC397', fontSize: 17 }}
            linkText={url => url === 'https://bloomscape.com/plant-care/how-to-remove-pests-from-your-indoor-herb-garden/' ? 'How to Remove Pests from your Indoor Herb Garden' : url}
          >
            <Text style={styles.text}>https://bloomscape.com/plant-care/how-to-remove-pests-from-your-indoor-herb-garden/</Text>
          </Hyperlink>
          <Text style={styles.description}>You’re not the only one who enjoys eating herbs and vegetables – Aphids, spider mites, and whiteflies are all pests that can take residence on your indoor herbs. When herbs are outdoors, the essential oils and strong flavors we love in our herbs typically keep bugs to a minimum — but when you have pests indoors (and they have fewer options), they’re far less picky.</Text>
          <Text style={styles.button} onPress={() => Linking.openURL('https://bloomscape.com/plant-care/how-to-remove-pests-from-your-indoor-herb-garden/')}>READ MORE</Text>

          <Image source={Image5} style={{ height: 200, width: 'auto', margin: 5 }} />
          <Text style={styles.subtitle}>GREEN LIVING</Text>
          <Hyperlink linkDefault linkStyle={{ color: '#9BC397', fontSize: 17 }}
            linkText={url => url === 'https://bloomscape.com/green-living/the-modern-reinvention-of-houseplant-care-by-engineer-darryl-cheng/' ? 'The Modern Reinvention of Houseplant Care by Engineer Darryl Cheng' : url}
          >
            <Text style={styles.text}>https://bloomscape.com/green-living/the-modern-reinvention-of-houseplant-care-by-engineer-darryl-cheng/</Text>
          </Hyperlink>
          <Text style={styles.description}>Welcome to The Plant Care Chronicles — a monthly series dedicated to breaking down individual indoor plant care routines and exploring plant care as a form of self-care.</Text>
          <Text style={styles.button} onPress={() => Linking.openURL('https://bloomscape.com/green-living/the-modern-reinvention-of-houseplant-care-by-engineer-darryl-cheng/')}>READ MORE</Text>

          <Image source={Image6} style={{ height: 200, width: 'auto', margin: 5 }} />
          <Text style={styles.subtitle}>PLANT CARE</Text>
          <Hyperlink linkDefault linkStyle={{ color: '#9BC397', fontSize: 17 }}
            linkText={url => url === 'https://bloomscape.com/plant-care/how-grow-lights-take-your-indoor-herb-garden-to-the-next-level/' ? 'How Grow Lights Take Your Indoor Herb Garden to the Next Level' : url}
          >
            <Text style={styles.text}>https://bloomscape.com/plant-care/how-grow-lights-take-your-indoor-herb-garden-to-the-next-level/</Text>
          </Hyperlink>
          <Text style={styles.description}>When you become a plant parent, you stock up on the essentials: a watering can, pruning snips, a hand trowel, and perhaps a mister or extra potting soil. But a little-known accessory can actually extend the life of your plants tenfold and help them thrive indoors, especially if you just invested in one of our light-loving edible garden plants. </Text>
          <Text style={styles.button} onPress={() => Linking.openURL('https://bloomscape.com/plant-care/how-grow-lights-take-your-indoor-herb-garden-to-the-next-level/')}>READ MORE</Text>

          <Image source={Image7} style={{ height: 200, width: 'auto', margin: 5 }} />
          <Text style={styles.subtitle}>PLANT CARE</Text>
          <Hyperlink linkDefault linkStyle={{ color: '#9BC397', fontSize: 17 }}
            linkText={url => url === 'https://bloomscape.com/plant-care/how-to-propagate-trailing-plants/' ? 'How to Propagate Trailing Plants' : url}
          >
            <Text style={styles.text}>https://bloomscape.com/plant-care/how-to-propagate-trailing-plants/</Text>
          </Hyperlink>
          <Text style={styles.description}>So you’ve decided to up your plant parenting game and want to try propagating—welcome, you’ve come to the right place. Propagation is a great way to increase your plant collection or share plants with friends. It’s also a great way to learn about individual plant species and conduct your own planty science experiments.</Text>
          <Text style={styles.button} onPress={() => Linking.openURL('https://bloomscape.com/plant-care/how-to-propagate-trailing-plants/')}>READ MORE</Text>

          <Image source={Image8} style={{ height: 200, width: 'auto', margin: 5 }} />
          <Text style={styles.subtitle}>PLANT CARE</Text>
          <Hyperlink linkDefault linkStyle={{ color: '#9BC397', fontSize: 17 }}
            linkText={url => url === 'https://bloomscape.com/plant-care/5-telltale-signs-of-overwatered-plants-according-to-plant-mom/' ? '5 Telltale Signs of Overwatered Plants, According to Plant Mom' : url}
          >
            <Text style={styles.text}>https://bloomscape.com/plant-care/5-telltale-signs-of-overwatered-plants-according-to-plant-mom/</Text>
          </Hyperlink>
          <Text style={styles.description}>In addition to purifying the air and breathing new life into our homes, plants tap into our innate desire to nurture. As living, breathing organisms, indoor plants of all sizes require our attention, care, and water to survive. </Text>
          <Text style={styles.button} onPress={() => Linking.openURL('https://bloomscape.com/plant-care/5-telltale-signs-of-overwatered-plants-according-to-plant-mom/')}>READ MORE</Text>

          <Image source={Image9} style={{ height: 200, width: 'auto', margin: 5 }} />
          <Text style={styles.subtitle}>PLANT CARE</Text>
          <Hyperlink linkDefault linkStyle={{ color: '#9BC397', fontSize: 17 }}
            linkText={url => url === 'https://bloomscape.com/plant-care/indoor-plant-care-tools/' ? 'Plant Parent Starter Pack: 5 Tools Your Houseplants Need to Thrive' : url}
          >
            <Text style={styles.text}>https://bloomscape.com/plant-care/indoor-plant-care-tools/</Text>
          </Hyperlink>
          <Text style={styles.description}>You may think you become a plant parent when you hang your new Philodendron or find the perfect corner for a temperamental Fiddle Leaf Fig. But as any seasoned owner can attest, aesthetics are just the beginning.</Text>
          <Text style={styles.button} onPress={() => Linking.openURL('https://bloomscape.com/plant-care/indoor-plant-care-tools/')}>READ MORE</Text>

          <Image source={Image10} style={{ height: 200, width: 'auto', margin: 5 }} />
          <Text style={styles.subtitle}>GREEN LIVING</Text>
          <Hyperlink linkDefault linkStyle={{ color: '#9BC397', fontSize: 17 }}
            linkText={url => url === 'https://bloomscape.com/plant-care/the-plant-care-chronicles-zenia-olivares/' ? 'The Plant Care Chronicles: How Plants Taught Artist Zenia Olivares About Embracing Uncertainty' : url}
          >
            <Text style={styles.text}>https://bloomscape.com/plant-care/the-plant-care-chronicles-zenia-olivares/</Text>
          </Hyperlink>
          <Text style={styles.description}>Welcome to The Plant Care Chronicles — a monthly series dedicated to breaking down individual plant care routines and exploring plant care as a form of self-care. We truly believe in the healing powers of plants, and want to shed a light on their many mental, physical, and spiritual health benefits. This month, we had the pleasure of speaking with artist, photographer, and design lover Zenia Olivares!</Text>
          <Text style={styles.button} onPress={() => Linking.openURL('https://bloomscape.com/plant-care/the-plant-care-chronicles-zenia-olivares/')}>READ MORE</Text>

          <Image source={Image11} style={{ height: 200, width: 'auto', margin: 5 }} />
          <Text style={styles.subtitle}>PLANT CARE</Text>
          <Hyperlink linkDefault linkStyle={{ color: '#9BC397', fontSize: 17 }}
            linkText={url => url === 'https://bloomscape.com/plant-care/10-tropical-plants-that-will-make-every-day-feel-like-a-staycation/' ? '10 Tropical Plants That Will Make Every Day Feel Like a Staycation' : url}
          >
            <Text style={styles.text}>https://bloomscape.com/plant-care/10-tropical-plants-that-will-make-every-day-feel-like-a-staycation/</Text>
          </Hyperlink>
          <Text style={styles.description}>As we spend summer 2020 at or close to home, we’re looking for small ways to spark joy and lift our spirits day-in and day-out. While some have turned to baking banana bread and slugging whipped dalgona coffee each morning, we prefer to invest in fresh greenery. In addition to cleaning the air and aiding WFH productivity, indoor plants are natural mood-boosters and can even help reduce stress.</Text>
          <Text style={styles.button} onPress={() => Linking.openURL('https://bloomscape.com/plant-care/10-tropical-plants-that-will-make-every-day-feel-like-a-staycation/')}>READ MORE</Text>

          <Image source={Image12} style={{ height: 200, width: 'auto', margin: 5 }} />
          <Text style={styles.subtitle}>GREEN LIVING</Text>
          <Hyperlink linkDefault linkStyle={{ color: '#9BC397', fontSize: 17 }}
            linkText={url => url === 'https://bloomscape.com/plant-care/moving-your-indoor-plants-outside-for-the-summer/' ? 'What to Consider Before Moving your Indoor Plants Outside for the Summer' : url}
          >
            <Text style={styles.text}>https://bloomscape.com/plant-care/moving-your-indoor-plants-outside-for-the-summer/</Text>
          </Hyperlink>
          <Text style={styles.description}>You aren’t the only one who loves the balmy temps and sunny days of summer weather–your plants do, too! Plant Mom answers all your questions about moving your indoor plants outside during the summer months.</Text>
          <Text style={styles.button} onPress={() => Linking.openURL('https://bloomscape.com/plant-care/moving-your-indoor-plants-outside-for-the-summer/')}>READ MORE</Text>

        </View>
      </ScrollView>
  );
}

function Gallery(){
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
    await Sharing.shareAsync(selectedImage.localUri);
  }

  if (selectedImage !== null) {
    return (
      <View style={styles.containerPic}>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.buttonPic}>
        <Text style={styles.buttonTextPic}>Add a photo</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.buttonPic}>
          <Text style={styles.buttonTextPic}>Share</Text>
        </TouchableOpacity>
        <Image source={{ uri: selectedImage.localUri }} style={styles.picture} />

      </View>
    );
  }

  return (
    <View style={styles.containerPic}>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.buttonPic}>
        <Text style={styles.buttonTextPic}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  let state = {
    list: [],
    text: ''
  };
    const [text, setText] = React.useState('');

    
  
  let addReminder = () => {
    let note = text.trim().length > 0;
  
    if (note) {
      this.setState(
        change => {
          let { list, text } = change;
          return {
            list: list.concat({ key: list.length, text: text }),
            text: ""
          };
        },
        () => list.save(this.state.list)
      );
    }
  };
  
  let deleteReminder = i => {
    setState = (
      change => {
        let list = change.list.slice();
        list.splice(i, 1);
        return { list: list };
      },
      () => list.save(state.list)
    );
  };
  
  let componentDidMount =()=> {
    list.all(list => setState ({ list: list || [] }));
  }
  
  return (
    <View style={styles.containerReminder}>
        <FlatList
          style={styles.list}
          data={state.list}
          renderItem={({ item, index }) =>
            <View>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <TouchableOpacity style={styles.reminderButton}
                  onPress={() => deleteReminder(index)}>
                  <Text style={styles.deleteReminderText}> delete </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.breakLine}>{"\n"}</Text>
            </View>}
        />
        <TextInput style={styles.textInput} 
      onChangeText={text => setText(text)}
      onSubmitEditing={()=>addReminder} value={text}  placeholder="Write your remnider here..." />
      </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#ffffff',
        activeBackgroundColor:'#9BC397'
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Reminders',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={Gallery}
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="image" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10
  },
  text: {
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize:10,
    textAlign:'justify',
    color: '#9BC397',
    paddingLeft:5,
    fontWeight:'bold'

  },
  description: {
    fontSize: 12,
    margin: 10,
    textAlign: 'justify',
  },
  button: {
    fontSize:10,
    color: 'white',
    backgroundColor:'#9BC397',
    textAlign:'center',
    width: 80,
    left:255,
    padding:3,
    borderRadius:5,
    marginBottom:15,
    marginTop:0
  },
  containerPic: {
    marginTop:50
  },
  buttonPic: {
    backgroundColor: '#9BC397',
    bottom:0,
    padding: 8,
    borderRadius: 8,
    margin:5,
    width:200,
    alignSelf:'center'
  },
  buttonTextPic: {
    fontSize:12,
    color: '#fff',
    textAlign:'center'
  },
  picture: {
    height: 400,
    resizeMode: 'contain',
    borderRadius:10,
    padding:50
  },
  containerReminder: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor:'white'
  },
  list: {
    width: "95%",
    alignSelf: 'center'
  },
  listItem: {
    fontSize: 15,
    alignSelf:'center'
  },
  listItemCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight:10,
    paddingBottom:25,
    paddingTop:25,
    backgroundColor:'#F5F5F5',
    borderRadius:10
  },
  textInput: {
    height: 40,
    paddingLeft: 10,
    height:50,
    width: 300,
    backgroundColor: '#F5F5F5',
    marginBottom: 50,
    borderRadius: 10,
    alignSelf:'center'
  },
  reminderButton: {
    backgroundColor: '#9BC397',
    fontSize: 10,
    padding:8,
    borderRadius:10,
    width:75,
  },
  deleteReminderText:{
    color:'white',
    textAlign:'center'
  },
  breakLine:{
    fontSize:5
  }
});
