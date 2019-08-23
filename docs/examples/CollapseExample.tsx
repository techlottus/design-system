import * as React from 'react';
import Collapse from '../../packages/Collapse';
import Icon from '../../packages/Icon';

export interface ICollapseExampleState {
  isOpen?: boolean;
}

class CollapseExample extends React.PureComponent<{}, ICollapseExampleState> {
  public state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  public render() {
    return (
      <>
        <Collapse title='Cuánto tiempo dura?' isOpen={this.state.isOpen} icon={{
          opened: <button className='flex' onClick={this.toggleCollapse}>
            <Icon size={24} icon='icon-minus' />
          </button>,
          closed: <button className='flex' onClick={this.toggleCollapse}>
            <Icon size={24} icon='icon-plus' />
          </button>,
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nostrum eum officiis,
          nihil adipisci deserunt perspiciatis officia sed quos sapiente recusandae distinctio
          maxime architecto nesciunt amet repudiandae iure praesentium minus?
        </Collapse>
      </>
    );
  }
}

export default CollapseExample;
