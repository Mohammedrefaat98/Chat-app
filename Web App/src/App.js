import { CssBaseline, ThemeProvider } from '@material-ui/core';
import './i18n';
import RTL from './components/RTL';
import SettingsDrawer from './components/SettingsDrawer';
import useSettings from './hooks/useSettings';
import { createCustomTheme } from './theme';
import Modal3 from './components/widgets/modals/SearchBarModal';
import ChatModal from './components/widgets/modals/ChatRoomModal';

const App = () => {
  const { settings } = useSettings();

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
