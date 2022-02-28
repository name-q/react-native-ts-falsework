import { Dimensions, Platform } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window'); // 屏幕宽高
const isAndroid = Platform.OS == 'android';
const isIOS = Platform.OS == 'ios';

export { mainColor, priceColor, screenWidth, screenHeight, isAndroid, isIOS };
