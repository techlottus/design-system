import * as React from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import Icon from '../Icon/index';
import classNames from 'classnames';

interface IDropdownProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  position?: 'auto-start'
  | 'auto'
  | 'auto-end'
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left-end'
  | 'left'
  | 'left-start';
}

interface IDropdownState {
  isOpen: boolean;
}

class Dropdown extends React.Component<IDropdownProps, IDropdownState> {
  static defaultProps: IDropdownProps = {
    position: 'bottom-start',
    title: 'GDL',
  };

  state = {
    isOpen: false,
  };

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClose);
  }

  handleOpen = (e) => {
    this.setState({
      isOpen: !this.state.isOpen,
    }, () => {
      document.addEventListener('click', this.handleClose);
    });
  }

  handleClose = (e) => {
    e.stopPropagation();
    if (this.dropdownMenu && !this.dropdownMenu.contains(e.target)) {
      this.setState({
        isOpen: false,
      }, () => {
        document.removeEventListener('click', this.handleClose);
      });
    }
  }
  dropdownMenu: HTMLDivElement;

  marginPosition = (currentPosition: string) => {
    let contentStyle: string;
    switch (currentPosition) {
      case 'top-start':
      case 'top':
      case 'top-end':
        contentStyle = 'mb-2';
        break;
      case 'right-start':
      case 'right':
      case 'right-end':
        contentStyle = 'ml-2';
        break;
      case 'bottom-end':
      case 'bottom':
      case 'bottom-start':
        contentStyle = 'mt-2';
        break;
      case 'left-end':
      case 'left':
      case 'left-start':
        contentStyle = 'mr-2';
        break;
      default:
        contentStyle = 'mb-2';
        break;
    }
    return contentStyle;
  }

  render() {
    const {children, title, position, className} = this.props;
    const { isOpen } = this.state;
    const btnClasses = classNames(
      'flex justify-between items-center outline-none py-1 px-3 w-full',
      'font-bold font-montserrat',
      'hover:bg-surface-800 focus:outline-none focus:shadow-secondary-200 focus:bg-surface-800'
    );

    const dropdownContainer = classNames(
      className,
      'w-full rounded bg-surface-500 text-white',
    );

    const dropdownBody = classNames(
      this.marginPosition(position),
      'bg-white z-9999 mt-2 shadow-md',
      'text-surface-500',
    );

    return(
      <div ref={(element) => this.dropdownMenu = element} className={dropdownContainer}>
        <Manager>
          <Reference>
            {({ ref }) => (
              <button
                ref={ref}
                onClick={this.handleOpen}
                className={btnClasses}
              >
                {title}
                <Icon
                  size={16}
                  gap={6}
                  icon='icon-arrow-down'
                  className='mx-4' />
              </button>
            )}
          </Reference>
          {
            isOpen && (
              <Popper placement={position}>
                {({ ref, style: stylePopper, placement }) => (
                  <div ref={ref} data-placement={placement} style={stylePopper}
                    className={dropdownBody}>
                    {children}
                  </div>
                )}
              </Popper>
            )
          }
        </Manager>
      </div>
    );
  }
}

export default Dropdown;
