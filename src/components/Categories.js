import React from 'react'

//MATERIAL _UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';

 const Categories = () =>(
      
      <MuiThemeProvider>
        <Paper style={{width:400}}>
            
            <MenuItem 
            primaryText="HOME APPLIANCES"
            leftIcon={<RemoveRedEye />}
            rightIcon={<ArrowDropRight />}
            menuItems={[
                <MenuItem primaryText="UTINSEL" />,
                <MenuItem primaryText="DRYER" />,
                <MenuItem primaryText="WASHING MACHINE" />,
                
            ]}
            />

            <Divider/>
            <MenuItem 
            primaryText="SPORTS"
            leftIcon={<ContentLink/>}
            rightIcon={<ArrowDropRight />}
            menuItems={[
                <MenuItem primaryText="GROUND" />,
                <MenuItem primaryText="BALL" />,
                <MenuItem primaryText="CRICKET KIT" />,
                <MenuItem primaryText="SPORT CLOTHES" />,
            ]}
            />
            <Divider/>
             <MenuItem 
            primaryText="HOME APPLIANCES"
            leftIcon={<RemoveRedEye />}
            rightIcon={<ArrowDropRight />}
            menuItems={[
                <MenuItem primaryText="UTINSEL" />,
                <MenuItem primaryText="DRYER" />,
                <MenuItem primaryText="WASHING MACHINE" />,
                
            ]}
            />
            
            <Divider/>
            <MenuItem 
            primaryText="SPORTS"
            leftIcon={<ContentLink/>}
            rightIcon={<ArrowDropRight />}
            menuItems={[
                <MenuItem primaryText="GROUND" />,
                <MenuItem primaryText="BALL" />,
                <MenuItem primaryText="CRICKET KIT" />,
                <MenuItem primaryText="SPORT CLOTHES" />,
            ]}
            />
        </Paper>
      </MuiThemeProvider>
    
  )
export default Categories;