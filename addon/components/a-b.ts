import Component from '@glimmer/component';

export default class ABComponent extends Component {
  get a(): number {
    return 123;
  }
}
