import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Card, CardItem, Text, Grid, Col } from 'native-base';

import Styles from './CardComponent.styles'

const CardComponent = ({ onPress, title, image, children, expanded }) => {

  const renderExpandedCard = () => (
    <View style={Styles.containerExpandedCard}>
      <View style={Styles.imageContainerExpanded}>
        <Image 
          style={Styles.imageExpanded}
          source={{uri: image}}
        />
      </View>
      <View style={Styles.bodyContainerExpanded}>
        {children}
      </View>
    </View>
  )

  const renderShortCard = () => (
    <Grid>
      <Col size={60} style={Styles.container}>
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>{title}</Text>
        </View>
        <View style={Styles.bodyContainer}>
          {children}
        </View>
      </Col>
      <Col size={40} style={Styles.container}>
        <View style={Styles.imageContainer}>
          <Image 
            style={Styles.image}
            source={{uri: image}}
          />
        </View>
      </Col>
    </Grid>
  )

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={onPress ? 0.5 : 1}>
      <Card style={expanded ? Styles.cardExpanded : Styles.card}>
        <CardItem>
          {
            expanded
            ? renderExpandedCard()
            : renderShortCard()
          }
        </CardItem>
      </Card>
    </TouchableOpacity>
  )
}

export default CardComponent
