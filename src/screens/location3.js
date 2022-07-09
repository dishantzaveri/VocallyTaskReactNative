import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from "react-native";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";
import { URL, token } from "../utils/link";
import SearchBar from "react-native-dynamic-search-bar";
import { mapStyleAubergine, mapStyleBlack, mapStyleSilver, mapStyleRetro} from "../components/MapColours";
export default function Location3({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 19.0760,
    longitude: 72.8777,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  const mumbaiRegion = {
    latitude: 19.0760,
    longitude: 72.8777,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const getProjects = async () => {
    setLoading(true);
    try {
      const result = await fetch(URL + '/create_project/', {
        method: 'GET',
        headers: { 'Authorization': 'Token ' + token },
      });
      const json = await result.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.log(error);
      // Alert.alert(error);
    } finally {
      setLoading(false);
    }
  }
  const goToTokyo = () => {
    //complete this animation in 3 seconds
    mapRef.current.animateToRegion(tokyoRegion, 3 * 1000);
  };
  const selectLocation = () => {
    setVisible(true);
    // navigation.navigate('AddProject')
  };

  useEffect(() => {
    // console.log(BASE_URL);
    getProjects();
  }, []);


  return (
    <View style={styles.container}>
      {/* <SearchBar/> */}
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 19.0760,
          longitude: 72.8777,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={(region) => setRegion(region)}
        customMapStyle={mapStyleRetro}
      >
        <Marker coordinate={mumbaiRegion} title="Mumbai" onPress={() => navigation.navigate('Details')} />
        {data.map((item, index) => (
          <Marker key={index} title={item.name} coordinate={{
            latitude: item.latitude,
            longitude: item.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
            onPress={() => navigation.navigate('Details', { id: item.id, loc: item.location_name, desc: item.description, name: item.name })}
          />
        ))}
        {visible ? <Marker coordinate={region} onPress={() => navigation.navigate("AddProject", { loc: region })} pinColor="green" title="New Project" /> : <></>}
      </MapView>
      <View style={{ position: 'absolute', top: 10, width: '100%' }}>
        {/* <TextInput
      style={{
        borderRadius: 10,
        margin: 10,
        color: '#000',
        borderColor: '#666',
        backgroundColor: '#FFF',
        borderWidth: 1,
        height: 45,
        paddingHorizontal: 10,
        fontSize: 18,
      }}
      placeholder={'Search'}
      placeholderTextColor={'#666'}
    /> */}
        <SearchBar
          placeholder="Search here"
          onPress={() => alert("onPress")}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => selectLocation()}><Text style={{ color: 'white', fontSize: 18 }}>Add A Project</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => getProjects()}><Text style={{ color: 'white', fontSize: 16 }}>Refresh</Text></TouchableOpacity>
      </View>
      {/* <Text style={styles.text}>Current latitude{region.latitude}</Text>
      <Text style={styles.text}>Current longitude{region.longitude}</Text> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 20,
    backgroundColor: "lightblue",
  },
  button: {
    width: 150,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#0065ff',
    borderRadius: 7,
  }
});