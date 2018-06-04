import { CovalentModule } from './covalent.module';

describe('CovalentModule', () => {
  let covalentModule: CovalentModule;

  beforeEach(() => {
    covalentModule = new CovalentModule();
  });

  it('should create an instance', () => {
    expect(covalentModule).toBeTruthy();
  });
});
