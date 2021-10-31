import { Box, Paper } from '@material-ui/core';
import Modal4 from './Modal4';
import { MessageList } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';

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
      }}
    >
      <Paper
        elevation={12}
        sx={{
          height: 'fit',
          width: '100%',
          mx: 0,
          p: 2,
        }}
      >
        <MessageList
          className="message-list"
          lockable
          toBottomHeight="100%"
          dataSource={[
            {
              position: 'right',
              type: 'text',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
              date: new Date(),
              titleColor: 'white',
            },
            {
              position: 'left',
              type: 'text',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
              date: new Date(),
            },
          ]}
        />
      </Paper>
    </Box>
  </Box>
);

export default ChatLayout;
