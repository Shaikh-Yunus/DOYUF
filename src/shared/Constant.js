import { Dimensions } from "react-native"
const Constant = {
    APP_NAME: 'Doyuf',
    // BASE_URL:'http://qp.flymingotech.in/quarterpillars_backend/public/api/v1/',
    // BASE_IMAGE_URL:'http://qp.flymingotech.in/quarterpillars_backend/public/',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    colors: {
        primaryColor: '#c89858',
        bodyBg: '#FFFFFF',
        inputBgColor: '#F5FFFA',
        textColor: '#000000',
        whiteColor: '#FFFFFF',
    },
    fontFamily: 'Avenir Next LT Pro',
    AvenirBold: 'AvenirNextLTPro-Bold',
    // fontFamily: 'AvenirNextLTPro-BoldCn',
    // fontFamily: 'Octicons',
    borderRadius: 10,
    padding: 18,
    margin: 18,
}
export default Constant