import { Box, CssBaseline, ThemeProvider } from '@material-ui/core';
import './i18n';
import RTL from './components/RTL';
import SettingsDrawer from './components/SettingsDrawer';
import useSettings from './hooks/useSettings';
import { createCustomTheme } from './theme';
import SearchBar from './components/widgets/modals/SearchBarModal';
import ContactList from './components/widgets/modals/ContactListModal';
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
        <SearchBar />
        <Box
          sx={{
            flexDirection: 'row',
            display: 'flex',
          }}
        >
          <ContactList />
          <ChatModal />
        </Box>
      </RTL>
    </ThemeProvider>
  );
};

export default App;
