import { async, TestBed } from '@angular/core/testing';
import { FundamentalsOfAngularTestingModule } from './fundamentals-of-angular-testing.module';

describe('FundamentalsOfAngularTestingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FundamentalsOfAngularTestingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FundamentalsOfAngularTestingModule).toBeDefined();
  });
});
