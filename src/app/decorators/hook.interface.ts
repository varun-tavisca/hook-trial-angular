export interface Hook {
  before(instance): any;
  after(instance): any;
}
