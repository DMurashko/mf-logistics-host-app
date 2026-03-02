describe('host-app environment', () => {
  it('should have a valid test environment', () => {
    expect(document).toBeDefined();
    expect(document.createElement('div')).toBeDefined();
  });

  it('should have jsdom as the test environment', () => {
    expect(window).toBeDefined();
    expect(navigator).toBeDefined();
  });
});
