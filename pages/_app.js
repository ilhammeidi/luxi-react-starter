import React from 'react';
import App, { Container } from 'next/app';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import Head from 'next/head';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { appWithTranslation } from '../i18n';

let themeType = 'light';
if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('muiTheme') || 'light';
}

class MyApp extends App {
  state = {
    theme: {
      palette: {
        primary: {
          main: '#91d655',
        },
        type: themeType
      }
    }
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    // document.getElementById('loading_coy').remove();
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  toggleDarkTheme = () => {
    const { theme } = this.state;
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('muiTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    this.setState({
      theme: {
        palette: {
          type: newPaletteType
        }
      }
    });
  }

  render() {
    const { theme } = this.state;
    const muiTheme = createMuiTheme(theme);

    const { Component, pageProps } = this.props; // eslint-disable-line
    const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
    return (
      <Container>
        <Head>
          <title>My pagexxxx</title>
        </Head>
        <StylesProvider jss={jss}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <MuiThemeProvider theme={muiTheme}>
            <CssBaseline />
            <Component {...pageProps} onToggleDark={this.toggleDarkTheme} />
          </MuiThemeProvider>
        </StylesProvider>
      </Container>
    );
  }
}

export default appWithTranslation(MyApp);
