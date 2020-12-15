export interface Hook {
  before(): any;
  override(): any;
  after(): any;
}
