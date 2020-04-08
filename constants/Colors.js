import { Platform } from 'react-native';
const tintColor = '#5e5d5d';

export default {
  tintColor,
  tabIconDefault: '#9a9a9a',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
  mainColor: Platform.OS =='ios' ? '#add9ff' : '#c0ffad'
};
