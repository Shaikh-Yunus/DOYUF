import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BackHeader from '../../../components/BackHeader';
import GlobalStyles from '../../../shared/GlobalStyles';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <BackHeader disable={false} />
      <View style={GlobalStyles.wrapper}>
        <Text style={styles.heading}>About</Text>
        <Text style={styles.paragraph}>
          Doyuf is an e-commerce platform that aims to provide a seamless
          shopping experience for customers. We offer a wide range of products
          from various categories, including electronics, fashion, home decor,
          and more. With our user-friendly interface and secure payment options,
          you can easily browse and purchase your favorite items. We strive to
          deliver high-quality products and excellent customer service. Shop
          with Doyuf and enjoy a convenient and enjoyable shopping journey!
          Doyuf is an e-commerce platform that aims to provide a seamless
          shopping experience for customers. We offer a wide range of products
          from various categories, including electronics, fashion, home decor,
          and more. With our user-friendly interface and secure payment options,
          you can easily browse and purchase your favorite items. We strive to
          deliver high-quality products and excellent customer service. Shop
          with Doyuf and enjoy a convenient and enjoyable shopping journey!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },
});

export default AboutScreen;
