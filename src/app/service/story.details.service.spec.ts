import { TestBed } from '@angular/core/testing';

import { StoryDetailsService } from './story.details.service';

describe('StoryDetailsService', () => {
  let service: StoryDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
