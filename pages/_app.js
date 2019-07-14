import React from 'react';
import App, { Container } from 'next/app';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import Head from 'next/head';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fade from '@material-ui/core/Fade';
import Loading from 'react-loading-bar';
import { appWithTranslation } from '../i18n';
import defaultTheme from '../components/defaultTheme';
import '../node_modules/react-loading-bar/dist/index.css';

let themeType = 'light';
if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

class MyApp extends App {
  state = {
    loading: true,
    documentLoaded: false,
    theme: {
      direction: 'ltr',
      palette: {
        primary: {
          ...defaultTheme.palette.primary
        },
        secondary: {
          ...defaultTheme.palette.secondary
        },
        type: themeType
      }
    }
  }

  componentDidMount() {
    // Fade effect on page
    this.setState({ documentLoaded: true });

    // Remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      preloader.remove();
    }

    // Remove loading bar
    setTimeout(() => { this.setState({ loading: false }); }, 1000);

    // Refresh JSS in SSR
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  toggleDarkTheme = () => {
    const { theme } = this.state;
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('luxiTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    this.setState({
      theme: {
        direction: theme.direction,
        palette: {
          type: newPaletteType,
          primary: theme.palette.primary,
          secondary: theme.palette.secondary,
        }
      }
    });
  }

  toggleDirection = dir => {
    const { theme } = this.state;
    document.dir = dir;
    this.setState({
      theme: {
        direction: dir,
        palette: {
          ...theme.palette
        }
      }
    });
  }

  render() {
    const { theme, documentLoaded, loading } = this.state;
    const muiTheme = createMuiTheme(theme);

    const { Component, pageProps } = this.props; // eslint-disable-line
    const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
    return (
      <Container>
        <Head>
          <title>Luxi Theme - React Next Material UI</title>
        </Head>
        <StylesProvider jss={jss}>
          <MuiThemeProvider theme={muiTheme}>
            <CssBaseline />
            <Loading
              show={loading}
              color="#2196f3"
              showSpinner={false}
            />
            <Fade in={documentLoaded} timeout={600}>
              <div id="main-wrap">
                <Component
                  {...pageProps}
                  onToggleDark={this.toggleDarkTheme}
                  onToggleDir={this.toggleDirection}
                />
              </div>
            </Fade>
          </MuiThemeProvider>
        </StylesProvider>
      </Container>
    );
  }
}

export default appWithTranslation(MyApp);
