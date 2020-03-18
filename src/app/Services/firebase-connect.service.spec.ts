import { TestBed } from '@angular/core/testing';

import { FirebaseConnectService } from './firebase-connect.service';

describe('FirebaseConnectService', () => {
  let service: FirebaseConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
