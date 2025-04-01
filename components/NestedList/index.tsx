'use client'
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

export default function NestedList(props: NestedListProps) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
       <List
        sx={{ width: '100%', maxWidth: 1800, marginBottom: 0, bgcolor: 'background.paper' }}
        component="nav"
        >
        <ListItemButton onClick={handleClick}>
            <ListItemText primary={props.title} />
            {open ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        <Collapse in={!open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={props.text !== undefined && props.text 
                            || props.textList !== undefined && 
                            <ul style={{ listStyleType: "circle" }}>{props.textList.map((str, index) => (
                              <li key={index}>{str}</li>
                            ))}
                          </ul>
                            || props.component !== undefined && props.component
                            || props.componentList !== undefined && props.componentList} />
            </ListItemButton>
            </List>
        </Collapse>
        </List>
    </div>
  );
}