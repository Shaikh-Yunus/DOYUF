import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackHeader from '../../../components/BackHeader'
import GlobalStyles from '../../../shared/GlobalStyles'
import Constant from '../../../shared/Constant'

const ReturnPolicyScreen = () => {
  const handleSearchInputTouch = () => {
    setIsSearchTouched(true);
  };
  const DefaultView = () => {
    setIsSearchTouched(false);
  };
  const handleSearch = isSearching => {
    setSearchPress(isSearching);
  };
  return (
    <View style={GlobalStyles.container}>
      <BackHeader
        onSearch={handleSearch}
        onPressSearch={handleSearchInputTouch}
        defaultView={DefaultView}
        disable={true}
      />

      <ScrollView style={GlobalStyles.wrapper}>
        <Text style={{ fontFamily: Constant.fontFamily, fontSize: 24, color: '#000', fontWeight: '700' }}>Returns</Text>
        <View style={{ marginBottom: 20, }}>
          <Text style={styles.subheadings}>Non-delivery</Text>

          <Text style={styles.inlinetext}>
            As a responsible brand, we at Doyuf agree to provide refunds to the buyers who do not receive their selected product; received too late; or the product does not match the description as stated.
            Non- delivery- if the buyer does not receive the item, the brand will refund the buyer. However, the following situations are bound to happen:

            {'\n'}a) The buyer does not receive the product as the product was never shipped.
            {'\n'}b) The buyer did not receive the product because it was not sent to the address provided to Doyuf
            {'\n'}c) There is no proof that the product was shipped to the buyer.
            Not as described- if the buyer demonstrates that either of the below-written situations is true, then Doyuf will grant a refund;
            {'\n'}a) The item is not as described in the materials and is different from listing description or the images on the Platform.
            {'\n'}b) The item is different from what is displayed and described on the Platform in terms of colour, model, version, or size.
            {'\n'}c) The item has a different design or material.
            {'\n'}d) The item was described as authentic, but it is not.
            {'\n'}e) The brand sold the product without disclosing the broken or missing part.
            {'\n'}f) The quantity of items delivered is different from the order.
            Late delivery refers to product delivery beyond the time the seller agreed to deliver as per the schedule. If the buyer proves that the below-written conditions were met;
            {'\n'}a) The items were ordered for a specific occasion or event.
            {'\n'}b) The items are of no utility after the date
            {'\n'}c) The brand failed to ship the product according to their processing time or the date agreed as per the conversations.
          </Text>
        </View>


        <View style={{ marginBottom: 20, }}>
          <Text style={styles.subheadings}>Non-Offer Products</Text>
          <Text style={styles.inlinetext}>
            1. We have a return policy if the product you receive is damaged and you have informed us with 24 hours of delivery but with a video proof that is while opening the product, shoot a video of the same. You can email us at info@doyuf.com with the order number or can Whatsapp at + 971 _____
            {'\n'}2. We will pick up the products, and once we receive the products, we will dispatch the new ones.
          </Text>

        </View>


        <View style={{ marginBottom: 20, }}>
          <Text style={styles.subheadings}>Offer Products</Text>
          <Text style={styles.inlinetext}>
            1. There is no return policy on offer products. We replace only damaged products with the same design or availability.
            NOTE: We do not accept any exchange and returns on HANDMADE products, SALE products, customised products, and INTERNATIONAL orders.
            Exchange policy:
            {'\n'}We at Doyuf have an extensive exchange policy that helps our customers survive and build trust in each other. We have an exchange policy that works in favour of both parties and helps in the growth of the Doyuf Community.
          </Text>

        </View>

        <View style={{ marginBottom: 200, }}>
          <Text style={styles.subheadings}>DEFECTIVE AND DAMAGED ITEMS</Text>
          <Text style={styles.inlinetext}>
            All our products are checked diligently before packing. We also pack carefully so that the product is not damaged while in transit. However, if so is the fate, and in case of a very rare instance of items getting damaged in transit, please get in touch with us via email at info@doyuf.com or WhatsApp at +971 __________ within 24 hours of receiving the package. We will help you resolve any issues as quickly as possible by replacing the item. Once the defective or damaged item has been returned to us by post, we will dispatch the replacement.
            {'\n'}Refunds will be made only through the original mode of payment. It will take about 45 days for the refund transfer to be made. Returns are easy and as seamless as ordering the product. Contact Us to initiate the return. Then the brand will give you a call explaining the process once you have initiated the return. Doyuf bears the shipping charges for returning or refund of products. One of the important criteria for refund is that the product requires installation. The certified installation partner should install it to fulfil the refund or return policy.
          </Text>

        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  subheadings: {
    fontFamily: Constant.fontFamily,
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginTop: 10,
    marginBottom: 10
  },
  inlinetext: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500'
  }

})


export default ReturnPolicyScreen
