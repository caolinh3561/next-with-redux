import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Page from "../components/Page";
import { wrapper } from "../store/store";
import { serverRenderClock, startClock } from "../store/tick/action";

const Other = (props) => {
  useEffect(() => {
    const timer = props.startClock();

    return () => {
      clearInterval(timer);
    };
  }, [props]);

  return <Page title="getServerSideProps Page" linkTo="/" />;
};

export const getServerSideProps = wrapper.getServerSideProps((store) => () => {
  store.dispatch(serverRenderClock(true));
});

const mapDispatchToProps = (dispatch) => {
  return {
    startClock: bindActionCreators(startClock, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Other);
