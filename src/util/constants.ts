export const themeColors = {
  baseTextColor: '#000',
  bodyBackground: '#fafcff',
  borderColor: '#d5d5d5',
  cardBackgroundColor: '#fff',
  commonBoxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  headerBackgroundColor: '#fff',
  headerTextColor: '#000',
  linkColor: '#00ce9f',
  primaryButtonColor: '#fff',
  primaryColor: '#00ebb5',
  primaryColorLighter: '#17c79f',
  secondaryTextColor: '#666',
  tertiaryTextColor: '#333',
};

export const themeDimensions = {
  commonBorderRadius: '5px',
  commonTextSize: '16px',
  headerHeight: '60px',
  horizontalPadding: '15px',
  verticalPadding: '15px',
};

export const themeBreakPoints = {
  lg: '992px',
  md: '768px',
  sm: '480px',
  xl: '1024px',
  xs: '320px',
  xxl: '1280px',
  xxxl: '1366px',
};

export const modalStyle = {
  content: {
    backgroundColor: '#fff',
    borderColor: '#E7EFEE',
    borderRadius: 0,
    borderWidth: 2,
    bottom: 'auto',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '0',
    left: 'auto',
    overflow: 'hidden',
    padding: 0,
    position: 'relative',
    right: 'auto',
    top: 'auto',
    width: 352,
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    zIndex: '99999',
  },
};

export const KYBER_COMMISSION_ADDRESS =
  process.env.REACT_APP_KYBER_COMMISSION_ADDRESS || '0x0730fD7D15fA9a40a6C7B2bbb4B8CE9ee6E6d08B';
