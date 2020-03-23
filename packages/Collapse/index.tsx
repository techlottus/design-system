import * as React from 'react';
import classNames from 'classnames';
import { IProps } from '../common/props';
import Icon from '../Icon/index';

export interface ICollapse extends IProps {
  children?: React.ReactNode;
  title?: string;
  iconOpened?: string;
  iconClosed?: string;
  isOpen?: boolean;
}

export interface ICollapseState {
  isOpen?: boolean;
}

class Collapse extends React.PureComponent<ICollapse, ICollapseState> {
  static defaultProps: ICollapse = {
    iconOpened: 'icon-minus',
    iconClosed: 'icon-plus',
    isOpen: false,
  };

  public state = {
    isOpen: false,
  };

  // Handler function for toggle
  onToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  // Handler element for create toggable icon
  handlerElement = () => (
    <button className='flex' onClick={this.onToggle}>
      { this.state.isOpen
        ? <Icon className='text-secondary-500' size={24} icon='icon-minus' />
        : <Icon className='text-secondary-500' size={24} icon='icon-plus' /> }
    </button>
  )

  componentDidMount() {
    if (this.props.isOpen) {
      this.setState({
        isOpen: this.props.isOpen,
      });
    }
  }

  public render() {
    const { children, title, className } = this.props;
    const classes = classNames(
      'bg-white shadow-box px-4 py-7 rounded',
      className
    );

    return (
      <div className={classes}>
        <div className='flex items-center'>
          <div className='flex-1 text-base font-bold font-montserrat text-surface-700'>{title}</div>
          <div className='text-right'>
            {this.handlerElement()}
          </div>
        </div>
        {this.state.isOpen && <div className='pt-6 text-surface-700'>
          {children}
        </div>}
      </div>
    );
  }
}

export default Collapse;
