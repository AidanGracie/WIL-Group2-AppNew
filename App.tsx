import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useRef } from 'react';
import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, TextInput, Image, View, ScrollView, SafeAreaView, Animated } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="ViewDetails" component={ViewDetails} />
        <Stack.Screen name="SixWeekCourses" component={SixWeekCourses} />
        <Stack.Screen name="ContactPage" component={ContactPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreen({ navigation }: { navigation: any }) {

  console.log("App starting up");
  return (
    
    <View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
    </View>
      <SafeAreaView>
        <ScrollView>
        
    <View style = {styles.centerPic}>
        <Image style = {styles.pictureStyle} source={require('C:/Users/lab_services_student/Documents/WIL/WIL App new/WilApp/assets/Screenshot 2024-10-23 200448.png')}/>
      </View>
          <View style={styles.mainPicture}></View>
          <Text style={styles.welcomeText}>Empowering The Nation</Text>
          <Text style={styles.welcomeText}>By Precious Radebe</Text>
          <Text style={styles.welcomeText}>Empowering The Nation is an initiative run by Precious
                                           Radebe to provide skills training for domestic workers and
                                           gardeners. The training she provides upskills domestic
                                           workers and gardeners by making them more marketable
                                           when seeking employment and enables them to be paid
                                           at a higher rate because of these additional skills. They
                                           can also be entrepreneurs and setup their own small
                                           business upskilling these newly obtained skills.</Text>
          
          <FadeInView>
            <Text style = {styles.errorMessage}>              
            </Text>
           
            <View style={styles.buttonContainer}>
            <Button 
              title="6 Month Courses"
              color= "black"
              onPress={() => {
                navigation.navigate('ViewDetails'), {  
              }}
            }
            />
            </View>
            <View style={styles.buttonContainer}>
            <Button 
              title="6 Week Courses"
              color= "black"
              onPress={() => {
                navigation.navigate('SixWeekCourses'), {  
              }}
            }
            />
            </View>
            
           
          </FadeInView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function ViewDetails({ navigation }: { navigation: any }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <SafeAreaView>
      <ScrollView>
      <View style = {styles.centerPic}>
        <Image style = {styles.pictureStyle} source={require('C:/Users/lab_services_student/Documents/WIL/WIL App new/WilApp/assets/Screenshot 2024-10-23 200448.png')}/>
      </View>
          <View style={styles.mainPicture}></View>
          <Text style={styles.welcomeText}>Empowering The Nation</Text>
          <Text style={styles.courseHeading}>6 Month Courses</Text>
          <Text style={styles.textColour}>First Aid</Text>
          <Text style={styles.welcomeText}>Fees - R1500
                                           Purpose - To provide first aid awareness and basic life support
                                           Content - Wounds and bleeding • Burns and fractures • Emergency scene management • Cardio-Pulmonary Resuscitation(CPR)</Text>
                                           <View style = {styles.centerPic}>
        <Image style = {styles.pictureStyle} source={require('C:/Users/lab_services_student/Documents/WIL/WIL App new/WilApp/assets/First Aid.jpeg')}/>
      </View>
          <Text style={styles.textColour}>Sewing</Text>
          <Text style={styles.welcomeText}>Fees- R1500
                                           Purpose - To provide alterations and new garment tailoring services
                                           Content: • Types of stitches • Threading a sewing machine • Sewing buttons, zips, hems and seams • Alterations • Designing and sewing new garments </Text>
                                           <View style = {styles.centerPic}>
        <Image style = {styles.pictureStyle} source={require('C:/Users/lab_services_student/Documents/WIL/WIL App new/WilApp/assets/Sewing.jpeg')}/>
      </View>
          <Text style={styles.textColour}>Landscaping</Text>
          <Text style={styles.welcomeText}>Fees - R1500
                                           Purpose - To provide landscaping services for new and established gardens •
                                           Indigenous and exotic plants and trees • Fixed structures (fountains, statues, benches, tables, built-in braai) • Balancing of plants and trees in a garden • Aesthetics of plant shapes and colours • Garden layout </Text>
                                           <View style = {styles.centerPic}>
        <Image style = {styles.pictureStyle} source={require('C:/Users/lab_services_student/Documents/WIL/WIL App new/WilApp/assets/Landscaping.jpg')}/>
      </View>
          <Text style={styles.textColour}>Life Skills</Text>
          <Text style={styles.welcomeText}>Fees - R1500
                                           Purpose - To provide skills to navigate basic life necessities Content: • Opening a bank account • Basic labour law (know your rights) • Basic reading and writing literacy • Basic numeric literacy </Text>
                                           <View style = {styles.centerPic}>
        <Image style = {styles.pictureStyle} source={require('C:/Users/lab_services_student/Documents/WIL/WIL App new/WilApp/assets/Life Skills.jpeg')}/>
      </View>
         <View style={styles.buttonContainer}>
            <Button 
              title="6 Week Courses"
              color= "black"
              onPress={() => {
                navigation.navigate('SixWeekCourses'), {  
              }}
            }
            />
            </View>
            <View style={styles.buttonContainer}>
            <Button 
              title="Contact Us"
              color= "black"
              onPress={() => {
                navigation.navigate('ContactPage'), {  
              }}
            }
            />
            </View>
            <View style={styles.buttonContainer}>
            <Button 
              title="Home"
              color= "black"
              onPress={() => {
                navigation.navigate('Home'), {  
              }}
            }
            />
            </View>
          </ScrollView>
          </SafeAreaView>
    </View>
  );
}

function SixWeekCourses({ navigation }: { navigation: any }) {

  return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
  <SafeAreaView>
  <ScrollView>
  <View style = {styles.centerPic}>
    <Image style = {styles.pictureStyle} source={require('C:/Users/lab_services_student/Documents/WIL/WIL App new/WilApp/assets/Screenshot 2024-10-23 200448.png')}/>
  </View>
      <View style={styles.mainPicture}></View>
      <Text style={styles.welcomeText}>Empowering The Nation</Text>
      <Text style={styles.courseHeading}>6 Week Courses</Text>
      <Text style={styles.textColour}>Child Minding</Text>
      <Text style={styles.welcomeText}>Fees - R750
                                       Purpose - To provide basic child and baby care Content: • birth to six-month old baby needs • seven-month to one year old needs • Toddler needs • Educational toys </Text>
                                             <View style = {styles.centerPic}>
        <Image style = {styles.pictureStyle} source={require('C:/Users/lab_services_student/Documents/WIL/WIL App new/WilApp/assets/Child Minding.jpeg')}/>
      </View>
      <Text style={styles.textColour}>Cooking</Text>
      <Text style={styles.welcomeText}>Fees - R750
                                       Purpose - To prepare and cook nutritious family meals Content: • Nutritional requirements for a healthy body • Types of protein, carbohydrates and vegetables • Planning meals • Preparation and cooking of meals </Text>
                                       <View style = {styles.centerPic}>
        <Image style = {styles.pictureStyle} source={require('C:/Users/lab_services_student/Documents/WIL/WIL App new/WilApp/assets/Cooking.jpeg')}/>
      </View>
      <Text style={styles.textColour}>Garden Maintenance</Text>
      <Text style={styles.welcomeText}>Fees - R750
                                       Purpose - To provide basic knowledge of watering, pruning and planting in a domestic garden. Content: • Water restrictions and the watering requirements of indigenous and exotic plants • Pruning and propagation of plants • Planting techniques for different plant types </Text>
                                             <View style = {styles.centerPic}>
        <Image style = {styles.pictureStyle} source={require('C:/Users/lab_services_student/Documents/WIL/WIL App new/WilApp/assets/Garden Maintenance.jpeg')}/>
      </View>
     <View style={styles.buttonContainer}>
        <Button 
          title="6 Month Courses"
          color= "black"
          onPress={() => {
            navigation.navigate('ViewDetails'), {  
          }}
        }
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button 
          title="Contact Us"
          color= "black"
          onPress={() => {
            navigation.navigate('ContactPage'), {  
          }}
        }
        />
        </View>
            <View style={styles.buttonContainer}>
            <Button 
              title="Home"
              color= "black"
              onPress={() => {
                navigation.navigate('Home'), {  
              }}
            }
            />
            </View>
      </ScrollView>
      </SafeAreaView>
</View>
);
}

function ContactPage({ navigation }: { navigation: any }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <SafeAreaView>
      <ScrollView>
      <View style = {styles.centerPic}>
        <Image style = {styles.pictureStyle} source={require('C:/Users/lab_services_student/Documents/WIL/WIL App new/WilApp/assets/Screenshot 2024-10-23 200448.png')}/>
      </View>
          <View style={styles.mainPicture}></View>
          <Text style={styles.welcomeText}>Empowering The Nation</Text>
          <Text style={styles.courseHeading}>Contact Us</Text>
          <Text style={styles.textColour}>Contact Number</Text>
          <Text style={styles.welcomeText}>123-456-789-0</Text>
          <Text style={styles.textColour}>E-Mail</Text>
          <Text style={styles.welcomeText}>www.empoweringthenation.com</Text>
          
         
         <View style={styles.buttonContainer}>
            <Button 
              title="6 Month Courses"
              color= "black"
              onPress={() => {
                navigation.navigate('ViewDetails'), {  
              }}
            }
            />
            </View>
            <View style={styles.buttonContainer}>
            <Button 
              title="6 Week Courses"
              color= "black"
              onPress={() => {
                navigation.navigate('SixWeekCourses'), {  
              }}
            }
            />
            </View>            
            <View style={styles.buttonContainer}>
            <Button 
              title="Home"
              color= "black"
              onPress={() => {
                navigation.navigate('Home'), {  
              }}
            }
            />
            </View>
          </ScrollView>
          </SafeAreaView>
    </View>
  );
}

   






const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 40,
    paddingBottom: 25, 
    color: 'black',
    fontSize: 28,
    textAlign: 'center',
  },
  mainPicture: {
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  ImageSize: {
    width: 350,
    height: 350,
  },
  InputFlex: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-evenly',
  },
  InputBox: {
    color: 'black',
    borderColor: 'gray',
    marginBottom: 20,
    borderWidth: 1,
    padding: 5,
    width: 200,
  },
  HeadingText: {
    color: 'black',
    fontWeight: 'bold',
  }, 
  pictureStyle: {
    width: 250, 
    height: 250,
    paddingTop: 50,
    paddingBottom: 30,  
   }, 
   centerPic: {
    alignItems: 'center'
   },
   errorMessage: {
    color: 'red', 
    fontWeight: 'bold', 
    fontSize: 20, 
    textAlign: 'center',
   }, 
   buttonContainer: {
    width: 200,    
    height: 60,   
    justifyContent: 'center',
    alignSelf: 'center',  
    marginVertical: 20,   
  },
  textColour: {
    color: 'black',
    fontSize: 38, 
    textAlign: 'center',
    paddingTop: 40,
    fontWeight: 'bold',
  },
  courseHeading: {
    fontSize: 58, 
    textAlign: 'center',
    paddingTop: 40,
    fontWeight: 'bold',
  }
});

type FadeInViewProps = {
  children: ReactNode;
  style?: ViewStyle;
};

const FadeInView = ({ children, style }: FadeInViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
};