import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Card, CardItem, Body, Text, Right, Grid, Col } from 'native-base';

import Styles from './CardComponent.styles'

const CardComponent = ({ onPress, title, image, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={Styles.card}>
        <CardItem style={{borderStyle: 'dotted'}}>
          
            <Grid>
              <Col size={70} style={Styles.container}>
                <View style={Styles.titleContainer}>
                  <Text style={Styles.title}>{title}</Text>
                </View>
                <View style={Styles.bodyContainer}>
                  <Text style={Styles.body}>{children}</Text>
                </View>
              </Col>
              <Col size={30} style={Styles.container}>
                <View style={Styles.imageContainer}>
                  <Image 
                    source={{uri: image}}
                  />
                </View>
              </Col>
            </Grid>
            
          
        </CardItem>
      </Card>
    </TouchableOpacity>
  )
}

export default CardComponent
