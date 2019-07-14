import { makeStyles } from '@material-ui/core/styles';
import flag from '../../static/images/flag-logo.png';

const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ar"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zh"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="en"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="de"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="id"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="pt"]': {
    backgroundPosition: '0 -79px'
  },
};

const headerStyles = makeStyles(theme => ({
  header: {
    color: theme.palette.text.primary,
    background: theme.palette.background.paper,
    boxShadow: 'none'
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      alignItems: 'center',
      padding: theme.spacing(2),
      display: 'flex'
    }
  },
  logo: {
    height: 48,
    '& a': {
      textDecoration: 'none',
      display: 'block'
    },
    '& img': {
      minWidth: '100%',
      height: 48
    }
  },
  navMenu: {
    '& > *': {
      margin: `0 ${theme.spacing()}px`,
    }
  },
  userMenu: {
    '& > button': {
      margin: `0 ${theme.spacing()}px`,
    }
  },
  langMenu: {
    '& i': {
      ...flagIcon
    }
  },
  vDivider: {
    margin: `0 ${theme.spacing()}px`,
    borderLeft: `1px solid ${theme.palette.divider}`,
    height: '100%',
    minHeight: theme.spacing(6)
  },
  active: {},
  icon: {},
  setting: {
    '& $icon': {
      transition: 'all 0.3s ease'
    },
    '& $active': {
      transform: 'rotate(30deg)'
    }
  }
}));

export default headerStyles;
