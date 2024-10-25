import React, { useEffect } from 'react';
import { useIntl, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { ContentCard } from '../../Components/Layout/Layout.jsx';
import RouteActions from '../../Actions/RouteActions.js';
import LoginActions from '../../Actions/LoginActions';

const LoggedOut = () => {
  const intl = useIntl();

  useEffect(() => {
    // Simulate componentDidMount
    LoginActions.logout();

    // Set hiosId if it exists in sessionStorage
    if (sessionStorage.getItem("hiosId")) {
      LoginActions.setHiosId("0");
    }
  }, []);

  const handleBtnClick = () => {
    RouteActions.requestRouteChange('/login');
  };

  return (
    <div className="account-logged-out">
      <ContentCard>
        <div className="logged-out">
          <div className="row">
            <div className="col-xs-12 col-am-6 col-sm-push-2 col-md-8 col-md-push-2">
              <h1><FormattedMessage id="logged-out-header" /></h1>
              <p className="sub-title"><FormattedMessage id="logged-out-paragraph" /></p>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-sm-push-3 col-md-4 col-md-push-4">
                  <button onClick={handleBtnClick} className="btn btn-primary btn-block btn-cta">
                    <FormattedMessage id="logged-out-button" />
                  </button>
                </div>
              </div>
              <p className="logged-out-link">
                <FormattedHTMLMessage id="logged-out-link" />
              </p>
            </div>
          </div>
        </div>
      </ContentCard>
    </div>
  );
};

export default LoggedOut;
