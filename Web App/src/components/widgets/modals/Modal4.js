import { formatDistanceToNowStrict, subDays, subHours, subMinutes } from 'date-fns';
import {
  Avatar,
  Box,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
  Button
} from '@material-ui/core';
import StatusIndicator from '../../StatusIndicator';
import FirstAidKitIcon from '../../../icons/FirstAidKit';

const now = new Date();

const contacts = [
  {
    id: '5e8891ab188cd2855e6029b7',
    avatar: '/static/mock-images/avatars/avatar-alcides_antonio.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Alcides Antonio',
    username: 'alcides.antonio'
  },
  {
    id: '5e887a62195cc5aef7e8ca5d',
    avatar: '/static/mock-images/avatars/avatar-marcus_finn.png',
    isActive: false,
    lastActivity: subHours(now, 2).getTime(),
    name: 'Marcus Finn',
    username: 'marcus.finn'
  },
  {
    id: '5e887ac47eed253091be10cb',
    avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
    isActive: false,
    lastActivity: subMinutes(now, 15).getTime(),
    name: 'Carson Darrin',
    username: 'carson.darrin'
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Fran Perez',
    username: 'fran.perez'
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Jie Yan Song',
    username: 'jie.yan.song'
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
    isActive: false,
    lastActivity: subDays(now, 2).getTime(),
    name: 'Miron Vitold',
    username: 'miron.vitold'
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    avatar: '/static/mock-images/avatars/avatar-penjani_inyene.png',
    isActive: false,
    lastActivity: subHours(now, 6).getTime(),
    name: 'Penjani Inyene',
    username: 'penjani.inyene'
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    avatar: '/static/mock-images/avatars/avatar-omar_darobe.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Omar Darobe',
    username: 'omar.darobe'
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',
    avatar: '/static/mock-images/avatars/avatar-siegbert_gottfried.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Siegbert Gottfried',
    username: 'siegbert.gottfried'
  },
  {
    id: '5e8877da9a65442b11551975',
    avatar: '/static/mock-images/avatars/avatar-iulia_albu.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Iulia Albu',
    username: 'iulia.albu'
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    avatar: '/static/mock-images/avatars/avatar-nasimiyu_danai.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Nasimiyu Danai',
    username: 'nasimiyu.danai'
  },
];

const Modal4 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      display: 'flex',
      flexDirection: 'column',
      p: 3,
    }}
  >
    <Paper
      elevation={12}
      sx={{
        height: 'fit',
        minWidth: '25vw',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          height: '10vh'
        }}
      >
        <Typography
          color="textPrimary"
          variant="h6"
          sx={{
            zIndex: 2,
            position: 'sticky',
            p: 2,
          }}
        >
          Contacts
        </Typography>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: 'rgba(0,0,0,0)',
          px: 2,
          height: 'fit',
          width: '100%',
          display: 'flex-inline',
        }}
      >
        <List
          disablePadding
          sx={{
            pr: 2,
            overflow: 'auto',
            '::-webkit-scrollbar': {
              width: '5px',
            },
            '::-webkit-scrollbar-thumb': {
              boxShadow: 'inset -6px 0 3px 3px rgba(66,66,66,50)',
              borderRadius: '20px'
            },
            maxHeight: '58vh'
          }}
        >
          {contacts.length <= 0 ? (
            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                minHeight: '58vh',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FirstAidKitIcon fontSize="large" />
              <Typography sx={{ py: 2, textAlign: 'center' }} variant="h6">
                You have no patients yet.
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'center', color: '#6b778c' }}>
                Invite your first patient and start working with him!
              </Typography>
              <Button
                color="primary"
                size="large"
                sx={{ my: 2 }}
                variant="contained"
              >
                Invite a patient
              </Button>
            </Paper>
          ) : contacts.map((contact) => (
            <ListItem
              disableGutters
              key={contact.id}
            >
              <ListItemAvatar>
                <Avatar src={contact.avatar} />
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={(
                  <Link
                    color="textPrimary"
                    display="block"
                    noWrap
                    underline="none"
                    variant="subtitle2"
                  >
                    {contact.name}
                  </Link>
                )}
              />
              {contact.isActive
                ? (
                  <StatusIndicator
                    size="small"
                    status="online"
                  />
                )
                : (
                  <Typography
                    color="textSecondary"
                    noWrap
                    variant="caption"
                  >
                    {formatDistanceToNowStrict(contact.lastActivity)}
                    {' '}
                    ago
                  </Typography>
                )}
            </ListItem>
          ))}
        </List>
      </Paper>
    </Paper>
  </Box>
);

export default Modal4;
