import { TestBed, inject } from "@angular/core/testing";

import { TestService } from "./test.service";

describe("TestService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [TestService]
    })
  );

  it("should be created", () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });
  it("should have add function", inject(
    [TestService],
    (service: TestService) => {
      expect(service.add).toBeTruthy;
    }
  ));

  it("should add corectly", inject([TestService], (service: TestService) => {
    expect(service.add(2, 3)).toEqual(5);
  }));
});
