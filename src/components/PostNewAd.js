import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';


class PostNewAd extends React.Component {
    render () {
        return (
            <MuiThemeProvider>
            <div className="box-layout">
                <Paper className="post-new-ad-container" zDepth={3} >
                <SelectField
                    floatingLabelText="Category"
                    //value={this.state.value}
                    //onChange={this.handleChange}
                >
                <MenuItem value={1} primaryText="AutoMobiles" />
                <MenuItem value={2} primaryText="Music Instrument" />
                <MenuItem value={3} primaryText="Mobile & accessories" />
                <MenuItem value={4} primaryText="Toys" />
                <MenuItem value={5} primaryText="Videogames" />
                </SelectField>
                <br />
                <SelectField
                    floatingLabelText="Sub Category"
                    //value={this.state.value}
                    //onChange={this.handleChange}
                >
                <MenuItem value={1} primaryText="Cars" />
                <MenuItem value={2} primaryText="Bikes" />
                <MenuItem value={3} primaryText="Samsung Phone" />
                <MenuItem value={4} primaryText="Toys" />
                <MenuItem value={5} primaryText="Videogames" />
                </SelectField>
                <br />
                <TextField
                hintText="Enter title here..."
                floatingLabelText="Ad Title*"
                //onChange = {(event,newValue) => this.setState({username:newValue})}
              /><br/>

              <TextField
                floatingLabelText="Description*"
                hintText="Description"
                multiLine={true}
                rows={1}
                rowsMax={10}
                />

                <br />
                <SelectField
                    floatingLabelText="Days to run ad*"
                    //value={this.state.value}
                    //onChange={this.handleChange}
                >
                <MenuItem value={1} primaryText="one month" />
                <MenuItem value={2} primaryText="two month" />
                <MenuItem value={3} primaryText="three month" />
                <MenuItem value={4} primaryText="four month" />
                </SelectField>
                <br />
                <TextField
                hintText="Price*"
                floatingLabelText="Price"
                //onChange = {(event,newValue) => this.setState({username:newValue})}
                />
                <br/>
                <div>
                Price Negotiable
                <RadioButtonGroup name="Price Negotiable" defaultSelected="yes">
                <RadioButton
                    value="yes"
                    label="Yes"
                    //style={styles.radioButton}
                />
                <RadioButton
                    value="fixed"
                    label="Fixed Price"
                    //style={styles.radioButton}
                />
                </RadioButtonGroup>
                </div>

                <div>
                Home Delivery
                <RadioButtonGroup name="Home Delivery" >
                <RadioButton
                    value="yes"
                    label="Yes"
                    //style={styles.radioButton}
                />
                <RadioButton
                    value="no"
                    label="no"
                    //style={styles.radioButton}
                />
                </RadioButtonGroup>
                </div>

                <RaisedButton
                    className="image-input-button"
                        label="Add picture"
                        labelPosition="before"
                        //style={styles.button}
                        containerElement="label"
                    >
                    <input type="file"  className="image-input"/>
                </RaisedButton>
                <br/>
                <RaisedButton label="Submit Ad" primary={true}  />
                </Paper>
            </div>
            </MuiThemeProvider>
        );
    }
};

export default PostNewAd;