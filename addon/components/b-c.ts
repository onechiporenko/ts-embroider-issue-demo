import Component from '@glimmer/component';
import { ensureSafeComponent } from '@embroider/util';
import ABComponent from 'some-addon/components/a-b';

export default class BCComponent extends Component {
  get comp() {
    return ensureSafeComponent(ABComponent, this);
  }
}
