import { mount } from '@vue/test-utils'
import { Smile } from '../src/icons'

describe('Using lucide icon components', () => {
  it('should render an component', () => {
    const wrapper = mount(Smile)
    expect(wrapper).toMatchSnapshot();
  });

  it('should adjust the size, stroke color and stroke width', () => {
    const wrapper = mount(Smile, {
      propsData: {
        size: 48,
        stroke: 'red',
        strokeWidth: 4
      }
    })

    expect(wrapper).toMatchSnapshot();
  });


  it('should add a class to the element', () => {
    const wrapper = mount(Smile, {
      attrs: {
        class: "my-icon"
      }
    })

    expect(wrapper).toMatchSnapshot();
    expect(String(wrapper.classes())).toBe(String(['lucide-icon','lucide','lucide-smile', 'my-icon']))
  });

  it('should add a style attribute to the element', () => {
    const wrapper = mount(Smile, {
      attrs: {
        style: 'position: absolute',
      }
    })

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.attributes('style')).toContain('position: absolute')
  });

  it('should call the onClick event', () => {
    const onClick = jest.fn()
    const wrapper = mount(Smile, {
      listeners: {
        click: onClick
      }
    })

    wrapper.trigger('click')
    expect(onClick).toHaveBeenCalled()
  });
});
