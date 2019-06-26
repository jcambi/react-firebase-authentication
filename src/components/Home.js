import React, { Component } from "react";
import fire from "../config/Fire";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const paperStyle = {
  padding: 60,
  margin: 50
};

const btnStyle = {
  margin: 10,
  marginTop: 50
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  logout = () => {
    fire.auth().signOut();
  };

  deleteUser = () => {
    fire
      .auth()
      .currentUser.delete()
      .then(() => {
        console.log("User deleted");
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    if (!this.state.open) {
      return (
        <div>
          <Paper style={paperStyle}>
            <Typography variant="h1" component="h3">
              Home Page
            </Typography>
            <Typography component="p" style={{ marginTop: 20 }}>
              Routes for Account Page, Password Update, Admin, etc. can be
              added.
            </Typography>
            <Button
              size="medium"
              onClick={this.logout}
              style={btnStyle}
              variant="contained"
              color="primary"
            >
              Log Out
            </Button>
            <Button
              size="medium"
              onClick={this.handleClickOpen}
              style={btnStyle}
              variant="contained"
              color="primary"
            >
              Delete Account
            </Button>
          </Paper>
        </div>
      );
    } else {
      return (
        <div>
          <Dialog
            open={this.state.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"Delete Account?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Deleting account results to an irreversible action.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={this.deleteUser} color="primary">
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }
}

export default Home;
