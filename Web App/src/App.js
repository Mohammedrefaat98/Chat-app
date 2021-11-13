import { useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import './i18n';
import RTL from './components/RTL';
import SettingsDrawer from './components/SettingsDrawer';
import { gtmConfig } from './config';
import useScrollReset from './hooks/useScrollReset';
import useSettings from './hooks/useSettings';
import gtm from './lib/gtm';
import { createCustomTheme } from './theme';
import Modal3 from './components/widgets/modals/Modal3';
import ChatModal from './components/widgets/modals/ChatModal';

const App = () => {
  const { settings } = useSettings();

  useScrollReset();

  useEffect(() => {
    gtm.initialize(gtmConfig);
  }, []);

  const theme = createCustomTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme
  });

  return (
    <ThemeProvider theme={theme}>
      <RTL direction={settings.direction}>
        <CssBaseline />
        <SettingsDrawer />
        <Modal3 />
        <ChatModal />
      </RTL>
    </ThemeProvider>
  );
};

export default App;
