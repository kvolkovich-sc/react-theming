import React, { Component, PropTypes } from 'react';
import './ThemeProvider.less';
import '@webcomponents/shadycss/apply-shim.min';
import css from '@webcomponents/shadycss/custom-style-interface.min';
import ReactDOM from 'react-dom';

const propTypes = {
  theme: PropTypes.object
};
const defaultProps = {
  theme: {}
};

export default
class ThemeProvider extends Component {
  componentDidMount() {
    this.updateTheme(this.props.theme);
  }

  componentWillReceiveProps(nextProps) {
    this.updateTheme(nextProps.theme);
  }

  updateTheme(theme) {
    let style = Object.keys(theme).reduce((accum, key) => {
      let propertyName = `--${key}`;
      let propertyValue = theme[key];

      return Object.assign({}, accum, { [propertyName]: propertyValue });
    }, {});

    window.ShadyCSS.styleDocument(style);
    window.ShadyCSS.styleSubtree(ReactDOM.findDOMNode(this.ref), style);
  }

  render() {
    return (
      <div className="theme-provider" ref={ref => (this.ref = ref)}>
        {this.props.children}
      </div>
    );
  }
}

ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;
