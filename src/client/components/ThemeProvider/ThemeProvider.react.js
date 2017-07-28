import React, { Component, PropTypes } from 'react';
import './ThemeProvider.less';

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
    Object.keys(theme).forEach((key, i) => {
      let propertyName = `--${key}`;
      let propertyValue = theme[key];

      this.ref.style.setProperty(propertyName, propertyValue);
    });
  }

  render() {
    return (
      <div ref={ref => (this.ref = ref)}>
        {this.props.children}
      </div>
    );
  }
}

ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;
