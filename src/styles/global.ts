import {Dimensions, Platform, StyleSheet} from 'react-native';
import {appColors} from '../constants/appColors';
import {fontFamilys} from '../constants/fontFamlily';

export const global = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.backgroundColor,
  },

  sections: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  inner: {
    paddingHorizontal: 16,
  },

  row: {
    flexDirection: 'row',
    //alignItems: 'center',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    // marginBottom: 8
  },

  rowCenter: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  swiperTitle: {
    color: appColors.text1,
    fontFamily: fontFamilys.bold,
    fontSize: 18,
    textTransform: 'uppercase',
    lineHeight: 27.28,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },

  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.55)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12.16,
    elevation: 5,
  },

  swiperDescription: {
    color: appColors.text,
    fontSize: 12,
    fontFamily: fontFamilys.semiBold,
    lineHeight: 16.37,
  },

  buttonIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#F3F3F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },

  buttonIconIcon: {
    color: appColors.title,
  },

  buttonIconTitle: {
    color: appColors.text,
    fontFamily: fontFamilys.medium,
    fontSize: 12,
    marginTop: 8,
    lineHeight: 19.1,
    textAlign: 'center',
    flex: 0,
  },

  dotComponent: {
    backgroundColor: '#EA4A4A',
    height: 7,
    width: 7,
    position: 'absolute',
    top: 6,
    right: 6,
    borderRadius: 3,
  },

  bigTitle: {
    fontFamily: fontFamilys.bold,
    color: appColors.blue6,
    fontSize: 20,
    lineHeight: 18,
  },

  seemore: {
    fontSize: 12,
    color: appColors.blue4,
    fontFamily: fontFamilys.regular,
    lineHeight: 19.1,
  },

  tabbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  tabsContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  buttonTab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 32,
    borderRadius: 44,
    marginRight: 8,
  },

  buttonTabSelec: {
    borderBottomColor: appColors.title,
    borderBottomWidth: 2,
  },

  buttonTabText: {
    color: appColors.text,
    fontFamily: fontFamilys.medium,
    fontSize: 12,
    lineHeight: 19.1,
  },

  card: {
    backgroundColor: appColors.white,
    borderRadius: 12,
    padding: 12,
  },

  cardTitleContainer: {
    paddingBottom: 8,
    borderBottomColor: '#F3F5F6',
    borderBottomWidth: 1,
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //alignItems: 'center',
  },

  cardTitle: {
    fontSize: 12,
    color: appColors.description,
    fontFamily: fontFamilys.medium,
    lineHeight: 20,
  },

  cardBodyTitleContainer: {
    backgroundColor: '#F4F9FF',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 20,
  },

  cardBodyTitle: {
    textTransform: 'uppercase',
    color: appColors.primary,
    fontFamily: fontFamilys.medium,
    fontSize: 12,
    lineHeight: 16.37,
    marginBottom: 8,
  },

  cardBodyDescription: {
    textTransform: 'none',
    color: appColors.text,
    fontFamily: fontFamilys.medium,
    fontSize: 14,
    lineHeight: 19.1,
  },

  errorText: {
    fontFamily: fontFamilys.regular,
    fontSize: 12,
    color: appColors.error,
    lineHeight: 16.37,
  },

  processing: {
    backgroundColor: '#bdbdbd',
    height: 8,
    width: '100%',
    borderRadius: 50,
  },

  timelineContainer: {
    backgroundColor: '#fff',
  },

  timelineTitle: {
    color: appColors.title,
    fontSize: 14,
    fontFamily: fontFamilys.semiBold,
    lineHeight: 19.1,
  },

  timelineWrap: {
    padding: 16,
    borderLeftColor: appColors.gray4,
    borderLeftWidth: 1,
    borderStyle: Platform.OS === 'android' ? 'dashed' : 'solid',
  },

  timelineBody: {
    backgroundColor: '#EFF7FF',
    borderRadius: 12,
  },

  desc: {
    fontFamily: fontFamilys.regular,
    fontSize: 12,
    lineHeight: 16,
    color: appColors.gray1,
  },

  text: {
    fontFamily: fontFamilys.regular,
    color: appColors.text,
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
    lineHeight: 20,
  },

  headerTitleStyle: {
    fontFamily: fontFamilys.bold,
    color: '#1B2154',
    lineHeight: 38.19,
    fontSize: 20,
  },

  listItem: {
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  listItemIcon: {
    fontSize: 20,
    color: appColors.description,
    marginRight: 10,
  },

  listItemText: {
    fontFamily: fontFamilys.semiBold,
    color: appColors.text,
    flex: 1,
    fontSize: 16,
  },

  imgMenuItem: {
    width: 40,
    height: 40,
  },

  tag: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },

  labelInput: {
    fontFamily: fontFamilys.medium,
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 6,
    color: appColors.text,
  },
  input: {
    color: appColors.text,
    fontFamily: fontFamilys.regular,
    fontSize: 14,
    paddingVertical: 5,
    borderRadius: 8,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    marginBottom: 16,
  },

  avatarContact: {
    backgroundColor: appColors.gray7,
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 40,
    borderRadius: 20,
    height: 40,
    resizeMode: 'contain',
    backgroundColor: appColors.backgroundColor,
  },

  avatarText: {
    fontFamily: fontFamilys.semiBold,
    fontSize: 16,
    color: appColors.gray,
    lineHeight: 16,
  },

  attachmentImageContainer: {
    margin: 10,
  },

  attachmentImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    backgroundColor: appColors.gray2,
  },
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    borderColor: appColors.gray3,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },

  modalContent: {
    padding: 16,
    borderRadius: 12,
    width: Dimensions.get('window').width - 32,
    backgroundColor: appColors.white,
  },

  percentContent: {
    borderRadius: 10,
    height: 10,
    backgroundColor: '#b2ebf2',
  },

  dotColor: {
    width: 8,
    height: 8,
  },

  titleModal: {
    position: 'absolute',
    textAlign: 'center',
    zIndex: -1,
    width: '100%',
    flex: 1,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  buttonTag: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: appColors.primary,
    marginRight: 8,
  },

  buttonSelectDate: {
    flexDirection: 'row',
    flex: 1,

    alignItems: 'center',
    marginTop: 2,
  },

  dividerStyle: {
    height: 1,
    backgroundColor: appColors.gray6,
    flex: 1,
  },

  cardProduct: {
    width: (Dimensions.get('window').width - 44) / 2,
  },
});
