import React, {Component} from 'react';
import { intlShape, injectIntl, FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import {ContentCard } from '../../Components/Layout/Layout.jsx'; 
import RouteActions from '../../Actions/RouteActions.js';
import LoginActions from '../../Actions/LoginActions';



class LoggedOut extends Component { 

  constructor(props) {

super (props);

this.binds = {

handleBtnClick: () => {

RouteActions.requestRouteChange('/login')}}

if (sessionStorage.getItem("hiosId")) {

LoginActions.setHiosId("0");

}
}
 componentDidMount () {

LoginActions.logout();
 }

componentWillMount() {
}

render() {

return (

<div className="account-logged-out">

<ContentCard>

<div className="logged-out">

<div className="row">

<div className="col-xs-12 col-am-6 col-sm-push-2 col-md-8 col-md-push-2"> <h1><FormattedMessage id="logged-out-header" /></h1>

<p className="sub-title"><FormattedMessage id="logged-out-paragraph" /></p>

<div className="row">

<div className="col-xs-12 col-sm-6 col-sm-push-3 col-md-4 col-md-push-4">

<button onclick={this.binds.handleBtnClick} className="btn btn-primary, btn-block btn-cta">

<FormattedMessage id={'logged-out-button'} />

</button>
</div>

</div>

<p className="logged-out-link">

<FormattedHTMLMessage id="logged-out-link" /></p>

</div>

</div>

</div>

</ContentCard>

</div>

)

}

}

Loggedout.propTypes = {

intl: intlShape.isRequired };

LoggedOut.defaultProps = {};

export default injectIntl (LoggedOut);