import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';

export const drawerMenuItems = [
    <ListItem button divider>
        <ListItemIcon>
            <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Therapists" />
    </ListItem>,
    <ListItem button>
        <ListItemIcon>
            <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Companies" />
    </ListItem>,
    <ListItem button>
        <ListItemIcon>
            <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Clients" />
    </ListItem>,
    <ListItem button>
        <ListItemIcon>
            <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Sessions" />
    </ListItem>
];
