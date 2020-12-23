export interface Hook {
  before(instance): any;
  override(): any;
  after(instance): any;
}
