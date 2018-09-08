import ReactDOM from 'react-dom';
import { Component } from 'react';
import { func, node, oneOfType, string } from 'prop-types';

export class Portal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.portal = document.getElementById(this.props.portalId);
  }

  componentDidMount() {
    this.portal.appendChild(this.el);
  }

  componentWillUnmount() {
    this.portal.removeChild(this.el);
  }

  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, this.el);
  }
}

Portal.propTypes = {
  children: oneOfType([node, func]).isRequired,
  portalId: string.isRequired
};

export default Portal;
