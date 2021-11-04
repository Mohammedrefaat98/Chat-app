import { Box, Paper, Typography, TextField } from '@material-ui/core';
import Modal4 from './Modal4';
import { MessageList } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import PaperclipIcon from '../../../icons/Paperclip';
import NoteIcon from '../../../icons/Note';
import CircularPlusIcon from '../../../icons/CircularPlus';
import PaperPlaneIcon from '../../../icons/PaperPlan';

const ChatLayout = () => (
  <Box
    sx={{
      flexDirection: 'row',
      display: 'flex',
    }}
  >
    <Modal4 />
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        p: 3,
        width: '100%',
        flexDirection: 'column'
      }}
    >
      <Paper
        elevation={12}
        sx={{
          height: '68vh',
          width: '100%',
          flexDirection: 'column'
        }}
      >
        <Paper
          elevation={0}
          sx={{
            height: '10vh',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Typography
            color="textPrimary"
            variant="h6"
            sx={{
              position: 'sticky',
              p: 2,
            }}
          >
            User Name
          </Typography>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            height: '48vh',
            width: '98%',
            p: 2,
            overflow: 'auto',
            '::-webkit-scrollbar': {
              width: '5px',
            },
            '::-webkit-scrollbar-thumb': {
              boxShadow: 'inset -6px 0 3px 3px rgba(66,66,66,50)',
              borderRadius: '20px'
            },
          }}
        >
          <MessageList
            className="message-list"
            lockable
            dataSource={[
              {
                position: 'right',
                type: 'text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                date: new Date(),
              },
              {
                position: 'left',
                type: 'text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                date: new Date(),
              }
            ]}
          />
        </Paper>
        <Paper
          elevation={0}
          sx={{
            height: '10vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <PaperclipIcon fontSize="medium" sx={{ mr: 1 }} />
          <CircularPlusIcon fontSize="large" sx={{ mr: 1 }} />
          <NoteIcon fontSize="small" />
          <TextField
            sx={{
              width: '70%',
              mx: 2
            }}
            placeholder="Type message..."
          />
          <PaperPlaneIcon fontSize="medium" />
        </Paper>
      </Paper>
    </Box>
  </Box>
);

export default ChatLayout;
