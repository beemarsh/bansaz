import React, { Component } from "react";
import {
  Button,
  Tooltip,
  Tabs,
  Tab,
  withStyles,
  Box,
  Divider,
  Snackbar,
  IconButton,
  Dialog,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import {
  Close as Closeicon,
  ViewWeek as DefaultNotificationSnackIcon,
} from "@material-ui/icons";
const styles_button_bansaz = () => ({
  root: {
    background: "#131212",
    color: "#bbb9b9",
    padding: "10px 25px",
    textTransform: "none",
    "&$root:hover": {
      backgroundColor: "#222",
    },
  },
});
class Button_Bansaz_Black extends Component {
  render() {
    return (
      <Button
        onClick={this.props.onClickHandler}
        classes={{ root: this.props.classes.root }}
      >
        {this.props.icon}
        {this.props.content}
      </Button>
    );
  }
}
//Usage:: <ButtonBansazicon={<PersonIcon />} content="Edit Profile" onClickHandler={this.viewProfile}/>
const style_tooltip_bansaz = () => ({
  root: {
    background: "#e6e3e3",
    color: "#312f2f",
    padding: "10px 20px",
    fontSize: "0.9em",
  },
});
class ToolTip_Bansaz extends Component {
  render() {
    return (
      <Tooltip
        title={this.props.title}
        classes={{ tooltip: this.props.classes.root }}
      >
        <div style={{ maxWidth: "max-content" }}>{this.props.children}</div>
      </Tooltip>
    );
  }
}
// Usage ::<ToolTipBansaz title="Hello">...all stuffs </ToolTipBansaz>

// Side Ways bansaz
const style_sidewise_bansaz = () => ({
  root: {
    background: "#131313",
    borderRadius: 10,
  },
  selected: {
    background: "#1c1a1a",
  },
  wrapper: {
    flexDirection: "row",
    gap: "10px",
    justifyContent: "unset",
    textAlign: "left",
    color: "white",
    textTransform: "none",
  },
  scroller: {
    "& span": {
      background: "#15151500",
    },
    "& .MuiTabs-flexContainer": {
      gap: "10px",
    },
  },
});
class SideWiseDisplay_Bansaz extends Component {
  state = {
    value: 0,
  };
  handleChange = (e, value) => {
    this.setState({ value: value });
  };
  render() {
    return (
      <>
        <div className="bansaz_items_profile_title_ab">{this.props.title}</div>
        <Tabs
          orientation="vertical"
          value={this.state.value}
          classes={{ scroller: this.props.classes.scroller }}
          onChange={this.handleChange}
        >
          {/* Tab Names are Here */}
          {this.props.content.map((data, index) => {
            return (
              <Tab
                label={Object.getOwnPropertyNames(data)[0]}
                icon={data.icon}
                classes={{
                  wrapper: this.props.classes.wrapper,
                  root: this.props.classes.root,
                  selected: this.props.classes.selected,
                }}
                disableRipple
                key={index}
              />
            );
          })}
        </Tabs>
        {/* Tab Panels should be here */}
        {this.props.content.map((data, index) => {
          return (
            <TabPanel
              value={this.state.value}
              index={index}
              key={index}
              orientation="vertical"
            >
              {Object.values(data)[0]}
            </TabPanel>
          );
        })}
      </>
    );
  }
}
function TabPanel(props) {
  const { children, value, index, orientation, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
      style={{ position: "relative" }}
    >
      {orientation === "vertical" ? (
        <Divider
          orientation="vertical"
          style={{
            backgroundColor: "rgba(166, 152, 152, 0.41)",
            marginLeft: "10px",
            position: "absolute",
          }}
        />
      ) : (
        ""
      )}
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
// Usage of SideWise: <SideWiseBansaz title="About" content={this.__content_about} />

// content should be an array of objects like this::
//  [{ Sidetitle: <ComponenttoRenderWhenThistabActive />, icon: <IconSideTab /> },{Nexttitle : <ComponentForThisActive />,icon: <Icon />,}];
// *****

// DownWise Tab
const style_downWiseTab = () => ({
  root: {
    background: "#111010",
    borderRadius: "10px",
  },
  wrapper: {
    flexDirection: "row",
    textTransform: "none",
    textIndent: "5px",
  },
  scroller: {
    "& > span": {
      background: "#1c1a1a00",
      display: "none",
    },
  },
  flexContainer: {
    gap: "10px",
  },
  selected: {
    background: "#1c1a1a",
  },
});
class DownWiseTab extends Component {
  state = {
    value: 0,
  };
  handleChange = (e, value) => {
    this.setState({ value: value });
  };
  render() {
    return (
      <>
        <div className="bansaz_items_profile_title_ab">{this.props.title}</div>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          classes={{
            scroller: this.props.classes.scroller,
            flexContainer: this.props.classes.flexContainer,
          }}
        >
          {this.props.content.map((data, index) => {
            return (
              <Tab
                label={Object.getOwnPropertyNames(data)[0]}
                key={index}
                icon={Object.values(data)[1]}
                classes={{
                  root: this.props.classes.root,
                  wrapper: this.props.classes.wrapper,
                  selected: this.props.classes.selected,
                }}
                disableRipple
              />
            );
          })}
        </Tabs>
        {/* Tab Panels */}
        {this.props.content.map((data, index) => {
          return (
            <TabPanel value={this.state.value} index={index} key={index}>
              {/* Tab Descript */}
              {Object.values(data)[0]}
            </TabPanel>
          );
        })}
      </>
    );
  }
}

// Bansaz Notificationn Tab
const style_noti_tab = () => ({
  root: {
    "& .MuiPaper-root": {
      fontSize: "1.1em",
      padding: "12px",
      background: "#eeebeb",
      color: "black",
    },
    "& .MuiSnackbarContent-message": {
      display: "flex",
      gap: "10px",
    },
  },
});
class NotificationTab extends Component {
  handleClose = () => {
    this.props.close(false);
  };
  render() {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={this.props.open}
        autoHideDuration={3000}
        onClose={this.handleClose}
        message={
          <React.Fragment>
            {this.props.icon ? (
              this.props.icon
            ) : (
              <DefaultNotificationSnackIcon />
            )}
            {this.props.message}
          </React.Fragment>
        }
        classes={{ root: this.props.classes.root }}
        action={
          <IconButton onClick={this.handleClose}>
            <Closeicon />
          </IconButton>
        }
      />
    );
  }
}
// Usage :: <NotificationTabBansaz icon=<Something /> message="Notification" close={callback to close the state} open={this.state.open}/>

// user info input div button
const style_input = () => ({
  paper: {
    width: "100%",
    background: "#0f0f0f",
    minHeight: "200px",
    padding: "10px 30px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  root: {
    "& .MuiFormLabel-root": { color: "#c6c3c3" },
    "& .MuiInputBase-root": {
      background: "#151515",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      border: "0",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#888282",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
    "& .MuiInputBase-input": {
      color: "#c1b9b9",
    },
    "& .MuiFormHelperText-root": {
      color: "#c1b9b9",
    },
    "& .MuiFormLabel-root.Mui-error": {
      color: "#f44336",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#f44336",
    },
  },
  control_button_submit: {
    background: "#0c483aed",
    color: "#a69f9f",
    "&:hover": {
      background: "#052d23ed",
    },
  },
  control_button_cancel: {
    color: "#0c483aed",
  },
});
class InputAppear_Bansaz extends Component {
  state = {
    inputText: "",
  };
  render() {
    return (
      <Dialog
        onClose={() => this.props.handleClose(false)}
        open={this.props.open}
        classes={{ paper: this.props.classes.paper }}
      >
        <div className="add_input_field_dialog__comp">{this.props.title}</div>
        <TextField
          variant="outlined"
          label={this.props.subtitle}
          helperText={this.props.lowLabel}
          classes={{ root: this.props.classes.root }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {React.cloneElement(this.props.icon, {
                  style: { color: "#bfb7b7", fontSize: "1.8rem" },
                })}
              </InputAdornment>
            ),
          }}
          error={false}
          onChange={(e) => this.setState({ inputText: e.target.value })}
          onKeyUp={(e) => {
            e.keyCode === 13 ? this.props.onSubmit(this.state.inputText) : null;
          }}
        />
        <div className="control_input_add_input_field_dialog__comp">
          <Button
            classes={{ root: this.props.classes.control_button_cancel }}
            disableRipple
            onClick={() => this.props.handleClose(false)}
          >
            Cancel
          </Button>
          <Button
            classes={{ root: this.props.classes.control_button_submit }}
            disableRipple
            onClick={() => this.props.onSubmit(this.state.inputText)}
          >
            Submit
          </Button>
        </div>
      </Dialog>
    );
  }
}
// // USage::<InputAppear title="Something" subtitle="On label" lowLabel="More Info Below Box" icon={<IconOnInputBox />} onSubmit={this.handler} open={true}/>
// this.handler should accept a value that is input value of text box . It is excuted when user submits
// ***

// Letter Button
const style_letter_button = () => ({
  root: {
    color: "#76cccc",
    textTransform: "none",
  },
});
class ButtonLetter_Bansaz extends Component {
  render() {
    return (
      <Button
        onClick={this.props.clickHandler}
        disableRipple
        classes={{ root: this.props.classes.root }}
      >
        {this.props.icon}
        {this.props.content}
      </Button>
    );
  }
}
// usage:: <ButtonLetter content={`Add a new `} icon={<AddIcon /> clickHandler={this.handleAddAbout}/>
const ButtonBansaz = withStyles(styles_button_bansaz)(Button_Bansaz_Black);
const ToolTipBansaz = withStyles(style_tooltip_bansaz)(ToolTip_Bansaz);
const SideWiseBansaz = withStyles(style_sidewise_bansaz)(
  SideWiseDisplay_Bansaz
);
const DownWiseBansaz = withStyles(style_downWiseTab)(DownWiseTab);
const NotificationTabBansaz = withStyles(style_noti_tab)(NotificationTab);
const InputAppear = withStyles(style_input)(InputAppear_Bansaz);
const ButtonLetter = withStyles(style_letter_button)(ButtonLetter_Bansaz);
export {
  ButtonBansaz,
  ToolTipBansaz,
  SideWiseBansaz,
  DownWiseBansaz,
  NotificationTabBansaz,
  InputAppear,
  ButtonLetter,
};
