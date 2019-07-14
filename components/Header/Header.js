import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from 'next/link';
import Settings from './Settings';
import logo from '../../static/images/logo.svg';
import useStyles from './header-style';

function Header(props) {
  const classes = useStyles();
  const { onToggleDark, onToggleDir } = props;
  return (
    <AppBar position="relative" className={classes.header}>
      <Container fixed>
        <div className={classes.headerContent}>
          <nav className={classes.navMenu}>
            <div className={classes.logo}>
              <Link prefetch href="/">
                <a>
                  <img src={logo} alt="logo" />
                </a>
              </Link>
            </div>
            <Link prefetch href="/">
              <Button>
                Feature
              </Button>
            </Link>
            <Link prefetch href="/">
              <Button>
                Testimonial
              </Button>
            </Link>
            <Link prefetch href="/">
              <Button>
                Pricing
              </Button>
            </Link>
            <Link prefetch href="/">
              <Button>
                Blog
              </Button>
            </Link>
            <Link prefetch href="/">
              <Button>
                Contact
              </Button>
            </Link>
          </nav>
          <nav className={classes.userMenu}>
            <Button>Login</Button>
            <Button variant="contained" color="primary">Register</Button>
            <span className={classes.vDivider} />
            <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
          </nav>
        </div>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Header;
