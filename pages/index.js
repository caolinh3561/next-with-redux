import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Page from "../components/Page";
import { wrapper } from "../store/store";
import { serverRenderClock, startClock } from "../store/tick/action";

const Index = (props) => {
  useEffect(() => {
    const timer = props.startClock();

    return () => {
      clearInterval(timer);
    };
  }, [props]);

  return <Page title="getStaticProps Page" linkTo="/other" />;
};

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(serverRenderClock());
});

const mapDispatchToProps = (dispatch) => {
  return {
    startClock: bindActionCreators(startClock, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Index);
